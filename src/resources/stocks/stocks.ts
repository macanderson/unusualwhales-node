// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
import * as PriceAPI from './price';
import { Price, PriceRetrieveResponse } from './price';
import * as QuoteAPI from './quote';
import { Quote, QuoteRetrieveResponse } from './quote';
import * as ScreenerAPI from './screener';
import { Screener, ScreenerListParams, ScreenerListResponse } from './screener';

export class Stocks extends APIResource {
  company: CompanyAPI.Company = new CompanyAPI.Company(this._client);
  dividends: DividendsAPI.Dividends = new DividendsAPI.Dividends(this._client);
  earnings: EarningsAPI.Earnings = new EarningsAPI.Earnings(this._client);
  financials: FinancialsAPI.Financials = new FinancialsAPI.Financials(this._client);
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);
  price: PriceAPI.Price = new PriceAPI.Price(this._client);
  quote: QuoteAPI.Quote = new QuoteAPI.Quote(this._client);
  screener: ScreenerAPI.Screener = new ScreenerAPI.Screener(this._client);
}

Stocks.Company = Company;
Stocks.Dividends = Dividends;
Stocks.Earnings = Earnings;
Stocks.Financials = Financials;
Stocks.Historical = Historical;
Stocks.Price = Price;
Stocks.Quote = Quote;
Stocks.Screener = Screener;

export declare namespace Stocks {
  export { Company as Company, type CompanyRetrieveResponse as CompanyRetrieveResponse };

  export {
    Dividends as Dividends,
    type DividendRetrieveResponse as DividendRetrieveResponse,
    type DividendRetrieveParams as DividendRetrieveParams,
  };

  export { Earnings as Earnings, type EarningRetrieveResponse as EarningRetrieveResponse };

  export {
    Financials as Financials,
    type FinancialRetrieveResponse as FinancialRetrieveResponse,
    type FinancialRetrieveParams as FinancialRetrieveParams,
  };

  export {
    Historical as Historical,
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };

  export { Price as Price, type PriceRetrieveResponse as PriceRetrieveResponse };

  export { Quote as Quote, type QuoteRetrieveResponse as QuoteRetrieveResponse };

  export {
    Screener as Screener,
    type ScreenerListResponse as ScreenerListResponse,
    type ScreenerListParams as ScreenerListParams,
  };
}
