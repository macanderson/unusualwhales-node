// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class FlowBySymbol extends APIResource {
  /**
   * Retrieve options flow data for a specific symbol.
   */
  retrieve(
    symbol: string,
    query?: FlowBySymbolRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowBySymbolRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<FlowBySymbolRetrieveResponse>;
  retrieve(
    symbol: string,
    query: FlowBySymbolRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlowBySymbolRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/flow/${symbol}`, { query, ...options });
  }
}

export interface FlowBySymbolRetrieveResponse {
  data?: Array<FlowBySymbolRetrieveResponse.Data>;
}

export namespace FlowBySymbolRetrieveResponse {
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

export interface FlowBySymbolRetrieveParams {
  /**
   * Date to filter the options flow data.
   */
  date?: string;
}

export declare namespace FlowBySymbol {
  export {
    type FlowBySymbolRetrieveResponse as FlowBySymbolRetrieveResponse,
    type FlowBySymbolRetrieveParams as FlowBySymbolRetrieveParams,
  };
}
