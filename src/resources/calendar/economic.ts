// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Economic extends APIResource {
  /**
   * Retrieve upcoming economic events and data releases.
   */
  list(query?: EconomicListParams, options?: Core.RequestOptions): Core.APIPromise<EconomicListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EconomicListResponse>;
  list(
    query: EconomicListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EconomicListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/calendar/economic', { query, ...options });
  }
}

export interface EconomicListResponse {
  events?: Array<EconomicListResponse.Event>;
}

export namespace EconomicListResponse {
  export interface Event {
    actual?: string;

    country?: string;

    dateTime?: string;

    event?: string;

    forecast?: string;

    previous?: string;
  }
}

export interface EconomicListParams {
  /**
   * Country to filter events.
   */
  country?: string;

  /**
   * End date for the economic calendar data.
   */
  endDate?: string;

  /**
   * Start date for the economic calendar data.
   */
  startDate?: string;
}

export declare namespace Economic {
  export { type EconomicListResponse as EconomicListResponse, type EconomicListParams as EconomicListParams };
}
