// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Economic extends APIResource {
  /**
   * Retrieve upcoming economic events and data releases.
   */
  retrieve(
    query?: EconomicRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EconomicRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<EconomicRetrieveResponse>;
  retrieve(
    query: EconomicRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EconomicRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/calendar/economic', { query, ...options });
  }
}

export interface EconomicRetrieveResponse {
  events?: Array<EconomicRetrieveResponse.Event>;
}

export namespace EconomicRetrieveResponse {
  export interface Event {
    actual?: string;

    country?: string;

    dateTime?: string;

    event?: string;

    forecast?: string;

    previous?: string;
  }
}

export interface EconomicRetrieveParams {
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
  export {
    type EconomicRetrieveResponse as EconomicRetrieveResponse,
    type EconomicRetrieveParams as EconomicRetrieveParams,
  };
}
