// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Holdings extends APIResource {
  /**
   * Retrieve holdings data for ETFs.
   */
  list(query: HoldingListParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/etf/holdings', { query, ...options });
  }
}

export type HoldingListResponse = unknown;

export interface HoldingListParams {
  /**
   * ETF symbol to retrieve holdings for.
   */
  etf: string;

  /**
   * Date to filter ETF holdings.
   */
  date?: string;
}

export declare namespace Holdings {
  export { type HoldingListResponse as HoldingListResponse, type HoldingListParams as HoldingListParams };
}
