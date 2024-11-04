// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Sectors extends APIResource {
  /**
   * Retrieve performance data for market sectors.
   */
  retrieve(
    query?: SectorRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SectorRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<SectorRetrieveResponse>;
  retrieve(
    query: SectorRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SectorRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/market/sectors', { query, ...options });
  }
}

export interface SectorRetrieveResponse {
  sectors?: Array<SectorRetrieveResponse.Sector>;

  timeFrame?: string;
}

export namespace SectorRetrieveResponse {
  export interface Sector {
    change?: number;

    percentChange?: number;

    sector?: string;
  }
}

export interface SectorRetrieveParams {
  /**
   * Time frame for sector performance (e.g., 'daily', 'weekly').
   */
  timeFrame?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export declare namespace Sectors {
  export {
    type SectorRetrieveResponse as SectorRetrieveResponse,
    type SectorRetrieveParams as SectorRetrieveParams,
  };
}
