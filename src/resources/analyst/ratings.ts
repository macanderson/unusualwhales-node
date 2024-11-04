// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Ratings extends APIResource {
  /**
   * Retrieve analyst ratings and recommendations for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: RatingRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RatingRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<RatingRetrieveResponse>;
  retrieve(
    symbol: string,
    query: RatingRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RatingRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/analyst/ratings/${symbol}`, { query, ...options });
  }
}

export interface RatingRetrieveResponse {
  ratings?: Array<RatingRetrieveResponse.Rating>;

  symbol?: string;
}

export namespace RatingRetrieveResponse {
  export interface Rating {
    /**
     * The action taken (e.g., Initiated, Upgraded, Downgraded).
     */
    action?: string;

    analyst?: string;

    date?: string;

    /**
     * The price target set by the analyst.
     */
    priceTarget?: number;

    /**
     * Analyst's rating (e.g., Buy, Hold, Sell).
     */
    rating?: string;
  }
}

export interface RatingRetrieveParams {
  /**
   * End date for filtering analyst ratings.
   */
  endDate?: string;

  /**
   * Start date for filtering analyst ratings.
   */
  startDate?: string;
}

export declare namespace Ratings {
  export {
    type RatingRetrieveResponse as RatingRetrieveResponse,
    type RatingRetrieveParams as RatingRetrieveParams,
  };
}
