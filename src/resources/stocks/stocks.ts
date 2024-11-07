// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CompanyAPI from './company';
import { Company, CompanyRetrieveResponse } from './company';
import * as DividendsAPI from './dividends';
import { DividendRetrieveParams, DividendRetrieveResponse, Dividends } from './dividends';
import * as EarningsAPI from './earnings';
import { EarningRetrieveResponse, Earnings } from './earnings';
import * as FinancialsAPI from './financials';
import { FinancialRetrieveParams, FinancialRetrieveResponse, Financials } from './financials';
import * as HistoricalAPI from './historical';
import { Historical, HistoricalRetrieveParams, HistoricalRetrieveResponse } from './historical';
import * as NewsAPI from './news';
import { News, NewsListParams, NewsListResponse } from './news';
import * as QuoteAPI from './quote';
import { Quote, QuoteRetrieveResponse } from './quote';
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
  quote: QuoteAPI.Quote = new QuoteAPI.Quote(this._client);
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);
  company: CompanyAPI.Company = new CompanyAPI.Company(this._client);
  financials: FinancialsAPI.Financials = new FinancialsAPI.Financials(this._client);
  earnings: EarningsAPI.Earnings = new EarningsAPI.Earnings(this._client);
  dividends: DividendsAPI.Dividends = new DividendsAPI.Dividends(this._client);

  /**
   * Retrieve the current price for a stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<StockRetrieveResponse> {
    return this._client.get(`/stocks/price/${symbol}`, options);
  }
}

export interface StockRetrieveResponse {
  price?: number;

  symbol?: string;

  timestamp?: string;
}

Stocks.Screener = Screener;
Stocks.News = News;
Stocks.Quote = Quote;
Stocks.Historical = Historical;
Stocks.Company = Company;
Stocks.Financials = Financials;
Stocks.Earnings = Earnings;
Stocks.Dividends = Dividends;

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

  export { Quote as Quote, type QuoteRetrieveResponse as QuoteRetrieveResponse };

  export {
    Historical as Historical,
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };

  export { Company as Company, type CompanyRetrieveResponse as CompanyRetrieveResponse };

  export {
    Financials as Financials,
    type FinancialRetrieveResponse as FinancialRetrieveResponse,
    type FinancialRetrieveParams as FinancialRetrieveParams,
  };

  export { Earnings as Earnings, type EarningRetrieveResponse as EarningRetrieveResponse };

  export {
    Dividends as Dividends,
    type DividendRetrieveResponse as DividendRetrieveResponse,
    type DividendRetrieveParams as DividendRetrieveParams,
  };
}
