// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Movers extends APIResource {
  /**
   * Retrieve top gainers and losers in the market.
   */
  list(query?: MoverListParams, options?: Core.RequestOptions): Core.APIPromise<MoverListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MoverListResponse>;
  list(
    query: MoverListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MoverListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/market/movers', { query, ...options });
  }
}

export interface MoverListResponse {
  movers?: Array<MoverListResponse.Mover>;

  /**
   * gainers or losers
   */
  type?: string;
}

export namespace MoverListResponse {
  export interface Mover {
    change?: number;

    companyName?: string;

    percentChange?: number;

    price?: number;

    symbol?: string;

    volume?: number;
  }
}

export interface MoverListParams {
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
  export { type MoverListResponse as MoverListResponse, type MoverListParams as MoverListParams };
}
