// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Fda extends APIResource {
  /**
   * Retrieve upcoming FDA approval dates and drug event data.
   */
  list(query?: FdaListParams, options?: Core.RequestOptions): Core.APIPromise<FdaListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FdaListResponse>;
  list(
    query: FdaListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FdaListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/calendar/fda', { query, ...options });
  }
}

export interface FdaListResponse {
  events?: Array<FdaListResponse.Event>;
}

export namespace FdaListResponse {
  export interface Event {
    date?: string;

    drugName?: string;

    event?: string;

    status?: string;

    symbol?: string;
  }
}

export interface FdaListParams {
  /**
   * End date for the FDA calendar data.
   */
  endDate?: string;

  /**
   * Start date for the FDA calendar data.
   */
  startDate?: string;

  /**
   * Stock symbol to filter FDA events.
   */
  symbol?: string;
}

export declare namespace Fda {
  export { type FdaListResponse as FdaListResponse, type FdaListParams as FdaListParams };
}
