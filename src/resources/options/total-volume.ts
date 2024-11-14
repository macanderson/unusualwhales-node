// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class TotalVolume extends APIResource {
  /**
   * Retrieve total options volume for all symbols or a specific symbol.
   */
  list(
    query?: TotalVolumeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalVolumeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TotalVolumeListResponse>;
  list(
    query: TotalVolumeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalVolumeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/options/total_volume', { query, ...options });
  }
}

export interface TotalVolumeListResponse {
  date?: string;

  symbols?: Array<TotalVolumeListResponse.Symbol>;

  totalVolume?: number;
}

export namespace TotalVolumeListResponse {
  export interface Symbol {
    symbol?: string;

    volume?: number;
  }
}

export interface TotalVolumeListParams {
  /**
   * Date to filter total options volume.
   */
  date?: string;

  /**
   * Stock symbol to filter total options volume.
   */
  symbol?: string;
}

export declare namespace TotalVolume {
  export {
    type TotalVolumeListResponse as TotalVolumeListResponse,
    type TotalVolumeListParams as TotalVolumeListParams,
  };
}
