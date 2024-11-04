// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ChainAPI from './chain';
import { Chain, ChainRetrieveParams, ChainRetrieveResponse } from './chain';
import * as ExpirationsAPI from './expirations';
import { ExpirationRetrieveResponse, Expirations } from './expirations';
import * as GreeksAPI from './greeks';
import { GreekRetrieveParams, GreekRetrieveResponse, Greeks } from './greeks';
import * as HistoricalAPI from './historical';
import { Historical, HistoricalRetrieveParams, HistoricalRetrieveResponse } from './historical';

export class OptionsFlows extends APIResource {
  chain: ChainAPI.Chain = new ChainAPI.Chain(this._client);
  expirations: ExpirationsAPI.Expirations = new ExpirationsAPI.Expirations(this._client);
  greeks: GreeksAPI.Greeks = new GreeksAPI.Greeks(this._client);
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);

  /**
   * Retrieve options flow data for a specific symbol.
   */
  retrieve(
    symbol: string,
    query?: OptionsFlowRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OptionsFlowRetrieveResponse>;
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<OptionsFlowRetrieveResponse>;
  retrieve(
    symbol: string,
    query: OptionsFlowRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OptionsFlowRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(symbol, {}, query);
    }
    return this._client.get(`/options/flow/${symbol}`, { query, ...options });
  }

  /**
   * Retrieve options flow data.
   */
  list(
    query?: OptionsFlowListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OptionsFlowListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OptionsFlowListResponse>;
  list(
    query: OptionsFlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OptionsFlowListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/options/flow', { query, ...options });
  }
}

export interface OptionsFlowRetrieveResponse {
  data?: Array<OptionsFlowRetrieveResponse.Data>;
}

export namespace OptionsFlowRetrieveResponse {
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

export interface OptionsFlowListResponse {
  data?: Array<OptionsFlowListResponse.Data>;
}

export namespace OptionsFlowListResponse {
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

export interface OptionsFlowRetrieveParams {
  /**
   * Date to filter the options flow data.
   */
  date?: string;
}

export interface OptionsFlowListParams {
  /**
   * Date to filter the options flow data.
   */
  date?: string;

  /**
   * Stock symbol to filter the options flow data.
   */
  symbol?: string;
}

OptionsFlows.Chain = Chain;
OptionsFlows.Expirations = Expirations;
OptionsFlows.Greeks = Greeks;
OptionsFlows.Historical = Historical;

export declare namespace OptionsFlows {
  export {
    type OptionsFlowRetrieveResponse as OptionsFlowRetrieveResponse,
    type OptionsFlowListResponse as OptionsFlowListResponse,
    type OptionsFlowRetrieveParams as OptionsFlowRetrieveParams,
    type OptionsFlowListParams as OptionsFlowListParams,
  };

  export {
    Chain as Chain,
    type ChainRetrieveResponse as ChainRetrieveResponse,
    type ChainRetrieveParams as ChainRetrieveParams,
  };

  export { Expirations as Expirations, type ExpirationRetrieveResponse as ExpirationRetrieveResponse };

  export {
    Greeks as Greeks,
    type GreekRetrieveResponse as GreekRetrieveResponse,
    type GreekRetrieveParams as GreekRetrieveParams,
  };

  export {
    Historical as Historical,
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };
}
