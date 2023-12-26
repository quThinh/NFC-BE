import { Controller, Post, Body, HttpStatus, UseGuards, Req, Res, Get, Headers, Query, UseInterceptors, UploadedFile, DefaultValuePipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { EmptyObject } from '../../shared/response/emptyObject.dto';
import { BaseResponse } from 'src/shared/response/baseResponse.dto';
const Web3 = require("web3");

@Controller('user')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    _web3 = new Web3();
    @Get('/receipt')
    @ApiQuery({
      name: "limit",
      required: false,
      type: Number,
    })
    @ApiQuery({
      name: "page",
      required: false,
      type: Number,
    })
    @ApiQuery({
      name: "payer",
      required: false,
      type: String,
    })
    @ApiOperation({
        tags: ['auth'],
        operationId: 'get receipt',
        summary: 'get receipt',
        description: 'get receipt',
    })
    @ApiResponse({
      status: HttpStatus.OK,
      description: "Successfull",
      type: BaseResponse,
    })
    async getReceipt(
      @Query("limit", new DefaultValuePipe(10)) limit: number,
      @Query("page", new DefaultValuePipe(1)) page: number,
      @Query("payer") payer: string,
      @Req() request: any
    ): Promise<any | EmptyObject> {
      const rounds = await this.authService.getReceipt(
        payer,
        { page, limit }
      );
  
      return rounds;
    }
}
