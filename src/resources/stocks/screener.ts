// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Screener extends APIResource {
  /**
   * Retrieve stocks that meet specified screening criteria sent in the request body.
   */
  create(body: ScreenerCreateParams, options?: Core.RequestOptions): Core.APIPromise<ScreenerCreateResponse> {
    return this._client.post('/stocks/screener', { body, ...options });
  }

  /**
   * Retrieve stocks that meet specified screening criteria.
   */
  list(query?: ScreenerListParams, options?: Core.RequestOptions): Core.APIPromise<ScreenerListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ScreenerListResponse>;
  list(
    query: ScreenerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScreenerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/stocks/screener', { query, ...options });
  }
}

export interface ScreenerCreateResponse {
  data?: Array<ScreenerCreateResponse.Data>;
}

export namespace ScreenerCreateResponse {
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

export interface ScreenerListResponse {
  data?: Array<ScreenerListResponse.Data>;
}

export namespace ScreenerListResponse {
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

export interface ScreenerCreateParams {
  criteria?: Array<ScreenerCreateParams.Criterion>;
}

export namespace ScreenerCreateParams {
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

export interface ScreenerListParams {
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

export declare namespace Screener {
  export {
    type ScreenerCreateResponse as ScreenerCreateResponse,
    type ScreenerListResponse as ScreenerListResponse,
    type ScreenerCreateParams as ScreenerCreateParams,
    type ScreenerListParams as ScreenerListParams,
  };
}
