// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Fda extends APIResource {
  /**
   * Retrieve upcoming FDA approval dates and drug event data.
   */
  retrieve(query?: FdaRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<FdaRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<FdaRetrieveResponse>;
  retrieve(
    query: FdaRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FdaRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/calendar/fda', { query, ...options });
  }
}

export interface FdaRetrieveResponse {
  events?: Array<FdaRetrieveResponse.Event>;
}

export namespace FdaRetrieveResponse {
  export interface Event {
    date?: string;

    drugName?: string;

    event?: string;

    status?: string;

    symbol?: string;
  }
}

export interface FdaRetrieveParams {
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
  export { type FdaRetrieveResponse as FdaRetrieveResponse, type FdaRetrieveParams as FdaRetrieveParams };
}
