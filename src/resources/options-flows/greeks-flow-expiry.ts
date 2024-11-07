// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class GreeksFlowExpiry extends APIResource {
  /**
   * Retrieve options Greek flow data aggregated by expiration date.
   */
  retrieve(
    query?: GreeksFlowExpiryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreeksFlowExpiryRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<GreeksFlowExpiryRetrieveResponse>;
  retrieve(
    query: GreeksFlowExpiryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreeksFlowExpiryRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/options/greekflow/expiry', { query, ...options });
  }
}

export interface GreeksFlowExpiryRetrieveResponse {
  expirationDate?: string;

  symbol?: string;

  totalDelta?: number;

  totalGamma?: number;

  totalPremium?: number;

  totalRho?: number;

  totalTheta?: number;

  totalVega?: number;
}

export interface GreeksFlowExpiryRetrieveParams {
  /**
   * Date to filter the Greek flow data.
   */
  date?: string;

  /**
   * Option expiration date.
   */
  expiration?: string;

  /**
   * Stock symbol to filter the Greek flow data.
   */
  symbol?: string;
}

export declare namespace GreeksFlowExpiry {
  export {
    type GreeksFlowExpiryRetrieveResponse as GreeksFlowExpiryRetrieveResponse,
    type GreeksFlowExpiryRetrieveParams as GreeksFlowExpiryRetrieveParams,
  };
}
