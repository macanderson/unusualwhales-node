// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class TotalVolume extends APIResource {
  /**
   * Retrieve total options volume for all symbols or a specific symbol.
   */
  retrieve(
    query?: TotalVolumeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalVolumeRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<TotalVolumeRetrieveResponse>;
  retrieve(
    query: TotalVolumeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalVolumeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/options/total_volume', { query, ...options });
  }
}

export interface TotalVolumeRetrieveResponse {
  date?: string;

  symbols?: Array<TotalVolumeRetrieveResponse.Symbol>;

  totalVolume?: number;
}

export namespace TotalVolumeRetrieveResponse {
  export interface Symbol {
    symbol?: string;

    volume?: number;
  }
}

export interface TotalVolumeRetrieveParams {
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
    type TotalVolumeRetrieveResponse as TotalVolumeRetrieveResponse,
    type TotalVolumeRetrieveParams as TotalVolumeRetrieveParams,
  };
}
