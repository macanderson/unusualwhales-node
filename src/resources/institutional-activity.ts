// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class InstitutionalActivity extends APIResource {
  /**
   * Retrieve data on institutional trading activity.
   */
  retrieve(
    query?: InstitutionalActivityRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstitutionalActivityRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<InstitutionalActivityRetrieveResponse>;
  retrieve(
    query: InstitutionalActivityRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstitutionalActivityRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/institutional/activity', { query, ...options });
  }
}

export interface InstitutionalActivityRetrieveResponse {
  data?: Array<InstitutionalActivityRetrieveResponse.Data>;
}

export namespace InstitutionalActivityRetrieveResponse {
  export interface Data {
    change?: number;

    date?: string;

    institution?: string;

    shares?: number;

    symbol?: string;

    value?: number;
  }
}

export interface InstitutionalActivityRetrieveParams {
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

export declare namespace InstitutionalActivity {
  export {
    type InstitutionalActivityRetrieveResponse as InstitutionalActivityRetrieveResponse,
    type InstitutionalActivityRetrieveParams as InstitutionalActivityRetrieveParams,
  };
}
