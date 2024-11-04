// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Screener extends APIResource {
  /**
   * Retrieve stocks that meet specified screening criteria.
   */
  get(query?: ScreenerGetParams, options?: Core.RequestOptions): Core.APIPromise<ScreenerGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<ScreenerGetResponse>;
  get(
    query: ScreenerGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScreenerGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return this._client.get('/stocks/screener', { query, ...options });
  }

  /**
   * Retrieve stocks that meet specified screening criteria sent in the request body.
   */
  post(body: ScreenerPostParams, options?: Core.RequestOptions): Core.APIPromise<ScreenerPostResponse> {
    return this._client.post('/stocks/screener', { body, ...options });
  }
}

export interface ScreenerGetResponse {
  data?: Array<ScreenerGetResponse.Data>;
}

export namespace ScreenerGetResponse {
  export interface Data {
    companyName?: string;

    industry?: string;

    marketCap?: number;

    price?: number;

    sector?: string;

    symbol?: string;

    volume?: number;
  }
}

export interface ScreenerPostResponse {
  data?: Array<ScreenerPostResponse.Data>;
}

export namespace ScreenerPostResponse {
  export interface Data {
    companyName?: string;

    industry?: string;

    marketCap?: number;

    price?: number;

    sector?: string;

    symbol?: string;

    volume?: number;
  }
}

export interface ScreenerGetParams {
  /**
   * Industry to filter stocks.
   */
  industry?: string;

  /**
   * Maximum market capitalization.
   */
  marketCapMax?: number;

  /**
   * Minimum market capitalization.
   */
  marketCapMin?: number;

  /**
   * Maximum stock price.
   */
  priceMax?: number;

  /**
   * Minimum stock price.
   */
  priceMin?: number;

  /**
   * Sector to filter stocks.
   */
  sector?: string;

  /**
   * Maximum trading volume.
   */
  volumeMax?: number;

  /**
   * Minimum trading volume.
   */
  volumeMin?: number;
}

export interface ScreenerPostParams {
  criteria?: Array<ScreenerPostParams.Criterion>;
}

export namespace ScreenerPostParams {
  export interface Criterion {
    /**
     * The field to apply the criterion on.
     */
    field?: string;

    /**
     * The comparison operator.
     */
    operator?: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin';

    /**
     * The value to compare the field against.
     */
    value?: string;
  }
}

export declare namespace Screener {
  export {
    type ScreenerGetResponse as ScreenerGetResponse,
    type ScreenerPostResponse as ScreenerPostResponse,
    type ScreenerGetParams as ScreenerGetParams,
    type ScreenerPostParams as ScreenerPostParams,
  };
}
