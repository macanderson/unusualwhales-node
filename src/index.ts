// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { CorrelationListParams, CorrelationListResponse, Correlations } from './resources/correlations';
import {
  FinancialNewRetrieveParams,
  FinancialNewRetrieveResponse,
  FinancialNews,
} from './resources/financial-news';
import { Analyst } from './resources/analyst/analyst';
import { Calendar } from './resources/calendar/calendar';
import { Congress } from './resources/congress/congress';
import { Darkpool } from './resources/darkpool/darkpool';
import { EtfListResponse, Etfs } from './resources/etfs/etfs';
import { Insider } from './resources/insider/insider';
import { Institutional } from './resources/institutional/institutional';
import { InstitutionListResponse, Institutions } from './resources/institutions/institutions';
import { Market } from './resources/market/market';
import { Options } from './resources/options/options';
import { Seasonality } from './resources/seasonality/seasonality';
import { Spike } from './resources/spike/spike';
import { Stocks } from './resources/stocks/stocks';

export interface ClientOptions {
  /**
   * API key used for authentication in the UnusualWhales API
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['UNUSUALWHALES_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Unusualwhales API.
 */
export class Unusualwhales extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Unusualwhales API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['API_KEY_AUTH'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['UNUSUALWHALES_BASE_URL'] ?? https://api.unusualwhales.com/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('UNUSUALWHALES_BASE_URL'),
    apiKey = Core.readEnv('API_KEY_AUTH'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.UnusualwhalesError(
        "The API_KEY_AUTH environment variable is missing or empty; either provide it, or instantiate the Unusualwhales client with an apiKey option, like new Unusualwhales({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.unusualwhales.com/api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  analyst: API.Analyst = new API.Analyst(this);
  calendar: API.Calendar = new API.Calendar(this);
  congress: API.Congress = new API.Congress(this);
  correlations: API.Correlations = new API.Correlations(this);
  darkpool: API.Darkpool = new API.Darkpool(this);
  etfs: API.Etfs = new API.Etfs(this);
  insider: API.Insider = new API.Insider(this);
  institutional: API.Institutional = new API.Institutional(this);
  institutions: API.Institutions = new API.Institutions(this);
  market: API.Market = new API.Market(this);
  financialNews: API.FinancialNews = new API.FinancialNews(this);
  options: API.Options = new API.Options(this);
  seasonality: API.Seasonality = new API.Seasonality(this);
  spike: API.Spike = new API.Spike(this);
  stocks: API.Stocks = new API.Stocks(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      Accept: '-application/json -text',
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: this.apiKey };
  }

  static Unusualwhales = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static UnusualwhalesError = Errors.UnusualwhalesError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Unusualwhales.Analyst = Analyst;
Unusualwhales.Calendar = Calendar;
Unusualwhales.Congress = Congress;
Unusualwhales.Correlations = Correlations;
Unusualwhales.Darkpool = Darkpool;
Unusualwhales.Etfs = Etfs;
Unusualwhales.Insider = Insider;
Unusualwhales.Institutional = Institutional;
Unusualwhales.Institutions = Institutions;
Unusualwhales.Market = Market;
Unusualwhales.FinancialNews = FinancialNews;
Unusualwhales.Options = Options;
Unusualwhales.Seasonality = Seasonality;
Unusualwhales.Spike = Spike;
Unusualwhales.Stocks = Stocks;
export declare namespace Unusualwhales {
  export type RequestOptions = Core.RequestOptions;

  export { Analyst as Analyst };

  export { Calendar as Calendar };

  export { Congress as Congress };

  export {
    Correlations as Correlations,
    type CorrelationListResponse as CorrelationListResponse,
    type CorrelationListParams as CorrelationListParams,
  };

  export { Darkpool as Darkpool };

  export { Etfs as Etfs, type EtfListResponse as EtfListResponse };

  export { Insider as Insider };

  export { Institutional as Institutional };

  export { Institutions as Institutions, type InstitutionListResponse as InstitutionListResponse };

  export { Market as Market };

  export {
    FinancialNews as FinancialNews,
    type FinancialNewRetrieveResponse as FinancialNewRetrieveResponse,
    type FinancialNewRetrieveParams as FinancialNewRetrieveParams,
  };

  export { Options as Options };

  export { Seasonality as Seasonality };

  export { Spike as Spike };

  export { Stocks as Stocks };
}

export { toFile, fileFromPath } from 'unusualwhales/uploads';
export {
  UnusualwhalesError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from 'unusualwhales/error';

export default Unusualwhales;
