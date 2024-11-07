// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Sectors extends APIResource {
  /**
   * Retrieve performance data for market sectors.
   */
  list(query?: SectorListParams, options?: Core.RequestOptions): Core.APIPromise<SectorListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SectorListResponse>;
  list(
    query: SectorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SectorListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/market/sectors', { query, ...options });
  }
}

export interface SectorListResponse {
  sectors?: Array<SectorListResponse.Sector>;

  timeFrame?: string;
}

export namespace SectorListResponse {
  export interface Sector {
    change?: number;

    percentChange?: number;

    sector?: string;
  }
}

export interface SectorListParams {
  /**
   * Time frame for sector performance (e.g., 'daily', 'weekly').
   */
  timeFrame?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export declare namespace Sectors {
  export { type SectorListResponse as SectorListResponse, type SectorListParams as SectorListParams };
}
