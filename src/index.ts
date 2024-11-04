// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Congress } from './resources/congress/congress';
import { Darkpool } from './resources/darkpool/darkpool';
import { Etf, EtfListResponse } from './resources/etf/etf';
import { InstitutionListResponse, Institutions } from './resources/institutions/institutions';
import { Options } from './resources/options/options';
import { StockRetrieveResponse, Stocks } from './resources/stocks/stocks';

export interface ClientOptions {
  /**
   * Authorization header API Key
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
   * @param {string | undefined} [opts.apiKey=process.env['API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['UNUSUALWHALES_BASE_URL'] ?? https://api.unusualwhales.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('UNUSUALWHALES_BASE_URL'),
    apiKey = Core.readEnv('API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.UnusualwhalesError(
        "The API_KEY environment variable is missing or empty; either provide it, or instantiate the Unusualwhales client with an apiKey option, like new Unusualwhales({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.unusualwhales.com`,
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

  stocks: API.Stocks = new API.Stocks(this);
  congress: API.Congress = new API.Congress(this);
  institutions: API.Institutions = new API.Institutions(this);
  darkpool: API.Darkpool = new API.Darkpool(this);
  etf: API.Etf = new API.Etf(this);
  options: API.Options = new API.Options(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
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
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Unusualwhales.Stocks = Stocks;
Unusualwhales.Congress = Congress;
Unusualwhales.Institutions = Institutions;
Unusualwhales.Darkpool = Darkpool;
Unusualwhales.Etf = Etf;
Unusualwhales.Options = Options;

export declare namespace Unusualwhales {
  export type RequestOptions = Core.RequestOptions;

  export { Stocks as Stocks, type StockRetrieveResponse as StockRetrieveResponse };

  export { Congress as Congress };

  export { Institutions as Institutions, type InstitutionListResponse as InstitutionListResponse };

  export { Darkpool as Darkpool };

  export { Etf as Etf, type EtfListResponse as EtfListResponse };

  export { Options as Options };
}

export default Unusualwhales;
