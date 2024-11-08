// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Expiry extends APIResource {
  /**
   * Retrieve options Greek flow data aggregated by expiration date.
   */
  retrieve(
    query?: ExpiryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpiryRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ExpiryRetrieveResponse>;
  retrieve(
    query: ExpiryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpiryRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/options/greekflow/expiry', { query, ...options });
  }
}

export interface ExpiryRetrieveResponse {
  expirationDate?: string;

  symbol?: string;

  totalDelta?: number;

  totalGamma?: number;

  totalPremium?: number;

  totalRho?: number;

  totalTheta?: number;

  totalVega?: number;
}

export interface ExpiryRetrieveParams {
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

export declare namespace Expiry {
  export {
    type ExpiryRetrieveResponse as ExpiryRetrieveResponse,
    type ExpiryRetrieveParams as ExpiryRetrieveParams,
  };
}
