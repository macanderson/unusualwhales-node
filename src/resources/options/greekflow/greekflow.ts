// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ExpiryAPI from './expiry';
import { Expiry, ExpiryRetrieveParams, ExpiryRetrieveResponse } from './expiry';

export class Greekflow extends APIResource {
  expiry: ExpiryAPI.Expiry = new ExpiryAPI.Expiry(this._client);

  /**
   * Retrieve options flow data with Greek calculations.
   */
  retrieve(
    query?: GreekflowRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreekflowRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<GreekflowRetrieveResponse>;
  retrieve(
    query: GreekflowRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreekflowRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/options/greekflow', { query, ...options });
  }
}

export interface GreekflowRetrieveResponse {
  data?: Array<GreekflowRetrieveResponse.Data>;
}

export namespace GreekflowRetrieveResponse {
  export interface Data {
    delta?: number;

    expirationDate?: string;

    gamma?: number;

    optionType?: 'CALL' | 'PUT';

    premium?: number;

    rho?: number;

    strikePrice?: number;

    symbol?: string;

    theta?: number;

    timestamp?: string;

    vega?: number;
  }
}

export interface GreekflowRetrieveParams {
  /**
   * Date to filter the Greek flow data.
   */
  date?: string;

  /**
   * Maximum delta value.
   */
  maxDelta?: number;

  /**
   * Minimum delta value.
   */
  minDelta?: number;

  /**
   * Stock symbol to filter the Greek flow data.
   */
  symbol?: string;
}

Greekflow.Expiry = Expiry;

export declare namespace Greekflow {
  export {
    type GreekflowRetrieveResponse as GreekflowRetrieveResponse,
    type GreekflowRetrieveParams as GreekflowRetrieveParams,
  };

  export {
    Expiry as Expiry,
    type ExpiryRetrieveResponse as ExpiryRetrieveResponse,
    type ExpiryRetrieveParams as ExpiryRetrieveParams,
  };
}
