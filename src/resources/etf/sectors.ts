// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Sectors extends APIResource {
  /**
   * Retrieve data for ETFs categorized by sectors.
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
    return this._client.get('/etf/sectors', { query, ...options });
  }

  /**
   * Retrieve a list of available sectors for ETFs.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SectorListResponse> {
    return this._client.get('/etf/sectors/list', options);
  }
}

export interface SectorRetrieveResponse {
  etfs?: Array<SectorRetrieveResponse.Etf>;

  sector?: string;
}

export namespace SectorRetrieveResponse {
  export interface Etf {
    dividendYield?: number;

    etfName?: string;

    etfSymbol?: string;

    expenseRatio?: number;

    inceptionDate?: string;

    netAssets?: number;
  }
}

export interface SectorListResponse {
  sectors?: Array<string>;
}

export interface SectorRetrieveParams {
  /**
   * Date to filter sector ETF data.
   */
  date?: string;

  /**
   * Sector to filter ETFs.
   */
  sector?: string;
}

export declare namespace Sectors {
  export {
    type SectorRetrieveResponse as SectorRetrieveResponse,
    type SectorListResponse as SectorListResponse,
    type SectorRetrieveParams as SectorRetrieveParams,
  };
}
