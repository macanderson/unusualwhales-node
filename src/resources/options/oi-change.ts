// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class OiChange extends APIResource {
  /**
   * Retrieve open interest change data for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query?: OiChangeRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OiChangeRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<OiChangeRetrieveResponse>;
  retrieve(
    symbol: string,
    query: OiChangeRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OiChangeRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/oi_change/${symbol}`, { query, ...options });
  }
}

export interface OiChangeRetrieveResponse {
  data?: Array<OiChangeRetrieveResponse.Data>;

  symbol?: string;
}

export namespace OiChangeRetrieveResponse {
  export interface Data {
    date?: string;

    expirationDate?: string;

    oiChange?: number;

    optionType?: 'CALL' | 'PUT';

    strikePrice?: number;
  }
}

export interface OiChangeRetrieveParams {
  /**
   * Date to filter the OI change data.
   */
  date?: string;
}

export declare namespace OiChange {
  export {
    type OiChangeRetrieveResponse as OiChangeRetrieveResponse,
    type OiChangeRetrieveParams as OiChangeRetrieveParams,
  };
}
