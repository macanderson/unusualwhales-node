// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Activity extends APIResource {
  /**
   * Retrieve data on institutional trading activity.
   */
  retrieve(
    query?: ActivityRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActivityRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ActivityRetrieveResponse>;
  retrieve(
    query: ActivityRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActivityRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/institutional/activity', { query, ...options });
  }
}

export interface ActivityRetrieveResponse {
  data?: Array<ActivityRetrieveResponse.Data>;
}

export namespace ActivityRetrieveResponse {
  export interface Data {
    change?: number;

    date?: string;

    institution?: string;

    shares?: number;

    symbol?: string;

    value?: number;
  }
}

export interface ActivityRetrieveParams {
  /**
   * Date to filter institutional activity.
   */
  date?: string;

  /**
   * Name of the institution.
   */
  institution?: string;

  /**
   * Stock symbol to filter institutional activity.
   */
  symbol?: string;
}

export declare namespace Activity {
  export {
    type ActivityRetrieveResponse as ActivityRetrieveResponse,
    type ActivityRetrieveParams as ActivityRetrieveParams,
  };
}
