// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as NewsAPI from './news';
import { News, NewsListParams, NewsListResponse } from './news';
import * as ScreenerAPI from './screener';
import {
  Screener,
  ScreenerGetParams,
  ScreenerGetResponse,
  ScreenerPostParams,
  ScreenerPostResponse,
} from './screener';

export class Stocks extends APIResource {
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);

  /**
   * Retrieve the current price for a stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/stocks/price/${symbol}`, options);
  }
}

export type StockRetrieveResponse = unknown;

Stocks.Screener = Screener;
Stocks.News = News;

export declare namespace Stocks {
  export { type StockRetrieveResponse as StockRetrieveResponse };

  export {
    Screener as Screener,
    type ScreenerGetResponse as ScreenerGetResponse,
    type ScreenerPostResponse as ScreenerPostResponse,
    type ScreenerGetParams as ScreenerGetParams,
    type ScreenerPostParams as ScreenerPostParams,
  };

  export { News as News, type NewsListResponse as NewsListResponse, type NewsListParams as NewsListParams };
}
