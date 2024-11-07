// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Correlations extends APIResource {
  /**
   * Retrieve correlation data between different stocks or assets.
   */
  list(
    query: CorrelationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CorrelationListResponse> {
    return this._client.get('/correlations', { query, ...options });
  }
}

export interface CorrelationListResponse {
  correlationMatrix?: Array<Array<number>>;

  symbols?: Array<string>;
}

export interface CorrelationListParams {
  /**
   * Comma-separated list of stock symbols.
   */
  symbols: string;

  /**
   * End date for the correlation data.
   */
  endDate?: string;

  /**
   * Data interval (e.g., '1d', '1wk').
   */
  interval?: '1d' | '1wk' | '1mo';

  /**
   * Start date for the correlation data.
   */
  startDate?: string;
}

export declare namespace Correlations {
  export {
    type CorrelationListResponse as CorrelationListResponse,
    type CorrelationListParams as CorrelationListParams,
  };
}
