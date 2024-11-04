// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Movers extends APIResource {
  /**
   * Retrieve top gainers and losers in the market.
   */
  retrieve(
    query?: MoverRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MoverRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<MoverRetrieveResponse>;
  retrieve(
    query: MoverRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MoverRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/market/movers', { query, ...options });
  }
}

export interface MoverRetrieveResponse {
  movers?: Array<MoverRetrieveResponse.Mover>;

  /**
   * gainers or losers
   */
  type?: string;
}

export namespace MoverRetrieveResponse {
  export interface Mover {
    change?: number;

    companyName?: string;

    percentChange?: number;

    price?: number;

    symbol?: string;

    volume?: number;
  }
}

export interface MoverRetrieveParams {
  /**
   * Number of records to retrieve.
   */
  limit?: number;

  /**
   * Type of movers to retrieve ('gainers' or 'losers').
   */
  type?: 'gainers' | 'losers';
}

export declare namespace Movers {
  export {
    type MoverRetrieveResponse as MoverRetrieveResponse,
    type MoverRetrieveParams as MoverRetrieveParams,
  };
}
