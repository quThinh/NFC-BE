import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payment, User } from '../../database/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { encrypt, convertToObject, getOffset, getArrayPaginationBuildTotal } from '../../shared/Utils';
import { SiweMessage, generateNonce } from 'siwe';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
const Web3 = require("web3");

var tokenMap = new Map();
var limitRequestLoginMap = new Map();
var _web3 = new Web3();
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,

    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,

  ) { }

  isValidToken(token: string) {
    return tokenMap.get(encrypt(token)) == '1';
  }

  setValidToken(token: string) {
    tokenMap.set(encrypt(token), '1');
  }

  deleteValidToken(token: string) {
    tokenMap.delete(encrypt(token));
  }

  async getUserByWallet(address: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { wallet: address } });
  }


  async getReceipt(payer, paginationOptions?: IPaginationOptions) {
    let offset = getOffset(paginationOptions);
    let limit = Number(paginationOptions.limit);
    let queryBuilder = this.paymentRepository
      .createQueryBuilder("payment")
      .select("*")
      .orderBy("payment.created_at", "DESC")
      .limit(limit)
      .offset(offset);

    let queryCount = this.paymentRepository
      .createQueryBuilder("payment")
      .select("Count (1) as Total")
      .orderBy("payment.created_at", "DESC");

    queryBuilder.andWhere(`payment.payer LIKE "${payer}"`);
    queryCount.andWhere(`payment.payer LIKE "${payer}"`);
    let rounds = await queryBuilder.execute();
    let roundsCountList = await queryCount.execute();
    const { items, meta } = getArrayPaginationBuildTotal<Payment>(
      rounds,
      roundsCountList,
      paginationOptions
    );
    return {
      result: items,
      pagination: meta,
    };
  }


  async getNonce(address: string) {
    const nonce = generateNonce();
    return nonce;
  }

}
