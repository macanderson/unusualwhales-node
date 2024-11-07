// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as StocksAPI from './stocks';
import { StockRetrieveParams, StockRetrieveResponse, Stocks } from './stocks';

export class Seasonality extends APIResource {
  stocks: StocksAPI.Stocks = new StocksAPI.Stocks(this._client);
}

Seasonality.Stocks = Stocks;

export declare namespace Seasonality {
  export {
    Stocks as Stocks,
    type StockRetrieveResponse as StockRetrieveResponse,
    type StockRetrieveParams as StockRetrieveParams,
  };
}
