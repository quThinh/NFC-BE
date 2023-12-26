import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import * as CryptoJS from 'crypto-js';
import { SelectQueryBuilder } from 'typeorm';
const NodeCache = require("node-cache");
const nodeCache = new NodeCache({stdTTL: 2, checkperiod: 2});
export function nowInMillis(): number {
  return Date.now();
}

async function web3Cache(key, func) {
  let value = nodeCache.get(key);
  if (value == undefined) {
      // handle miss!
      value = await func;
      nodeCache.set(key, value);
      return value;
  }
  return value;
}

export async function getBlockNumber(chainId, web3) {
  return web3Cache(`${chainId}: getBlockNumber`, web3.eth.getBlockNumber())
}

// Alias for nowInMillis
export function now(): number {
  return nowInMillis();
}

export function nowInSeconds(): number {
  return (nowInMillis() / 1000) | 0;
}

export function addHttps(url: string) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = 'https://' + url;
  }
  return url;
}

export function checkIPaginationOptions(options: IPaginationOptions): boolean {
  if (options.limit == 0 || options.page == 0) {
    return false;
  }
  return true;
}

export function encrypt(data: string) {
  return CryptoJS.MD5(data).toString();
}

export function convertToString(value: any) {
  return (typeof value === 'string') ? value : '';
}

export function convertToObject(value: any) {
  return (typeof value === 'object') ? value : {};
}

export function existValueInEnum(type: any, value: any): boolean {
  return (
    Object.keys(type)
      .filter((k) => isNaN(Number(k)))
      .filter((k) => type[k] === value).length > 0
  );
}

export function getOffset(paginationOptions: IPaginationOptions) {
  let offset = 0;
  if (paginationOptions.page && paginationOptions.limit) {
    if (paginationOptions.page > 0) {
      offset =
        (Number(paginationOptions.page) - 1) * Number(paginationOptions.limit);
    }
  }
  return offset;
}

export function snakeToCamel(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((val) => snakeToCamel(val));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = key.replace(/_([a-z])/g, (m, p1) => p1.toUpperCase());
      result[newKey] = snakeToCamel(obj[key]);
      return result;
    }, {});
  }
  return obj;
}

export function getArrayPaginationBuildTotal<T>(
  totalItems: any[],
  totalData: any[],
  options: any
): Pagination<T> {
  const { limit, page } = options;

  const selectedItems = totalItems;
  let totalRecord = 0;
  if (totalData.length > 0) {
    totalRecord = totalData[0].Total;
  }
  const pagination = {
    totalItems: Number(totalRecord),
    itemCount: Number(totalRecord),
    itemsPerPage: Number(limit),
    totalPages: Math.ceil(Number(totalRecord) / limit),
    currentPage: Number(page),
  };

  return new Pagination(selectedItems, pagination, null);
}