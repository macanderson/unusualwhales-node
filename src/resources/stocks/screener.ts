// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Screener extends APIResource {
  /**
   * Retrieve stocks that meet specified screening criteria sent in the request body.
   */
  list(body: ScreenerListParams, options?: Core.RequestOptions): Core.APIPromise<ScreenerListResponse> {
    return this._client.post('/stocks/screener', { body, ...options });
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

export interface ScreenerListParams {
  criteria?: Array<ScreenerListParams.Criterion>;
}

export namespace ScreenerListParams {
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
  export { type ScreenerListResponse as ScreenerListResponse, type ScreenerListParams as ScreenerListParams };
}
