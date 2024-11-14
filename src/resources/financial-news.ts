// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class FinancialNews extends APIResource {
  /**
   * Retrieve the latest financial news.
   */
  retrieve(
    query?: FinancialNewRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FinancialNewRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<FinancialNewRetrieveResponse>;
  retrieve(
    query: FinancialNewRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FinancialNewRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/news', { query, ...options });
  }
}

export interface FinancialNewRetrieveResponse {
  articles?: Array<FinancialNewRetrieveResponse.Article>;
}

export namespace FinancialNewRetrieveResponse {
  export interface Article {
    publishedAt?: string;

    source?: string;

    title?: string;

    url?: string;
  }
}

export interface FinancialNewRetrieveParams {
  /**
   * Comma-separated list of stock symbols to filter news.
   */
  symbols?: string;
}

export declare namespace FinancialNews {
  export {
    type FinancialNewRetrieveResponse as FinancialNewRetrieveResponse,
    type FinancialNewRetrieveParams as FinancialNewRetrieveParams,
  };
}
