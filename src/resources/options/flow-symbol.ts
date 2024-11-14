// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class FlowSymbol extends APIResource {
  /**
   * Retrieve options flow data for a specific symbol.
   */
  retrieve(
    symbol: string,
    query?: FlowSymbolRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowSymbolRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<FlowSymbolRetrieveResponse>;
  retrieve(
    symbol: string,
    query: FlowSymbolRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowSymbolRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/flow/${symbol}`, { query, ...options });
  }
}

export interface FlowSymbolRetrieveResponse {
  data?: Array<FlowSymbolRetrieveResponse.Data>;
}

export namespace FlowSymbolRetrieveResponse {
  export interface Data {
    expirationDate?: string;

    openInterest?: number;

    optionType?: 'CALL' | 'PUT';

    premium?: number;

    strikePrice?: number;

    symbol?: string;

    timestamp?: string;

    volume?: number;
  }
}

export interface FlowSymbolRetrieveParams {
  /**
   * Date to filter the options flow data.
   */
  date?: string;
}

export declare namespace FlowSymbol {
  export {
    type FlowSymbolRetrieveResponse as FlowSymbolRetrieveResponse,
    type FlowSymbolRetrieveParams as FlowSymbolRetrieveParams,
  };
}
