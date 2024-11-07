// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Overview extends APIResource {
  /**
   * Retrieve an overview of the current market status.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<OverviewRetrieveResponse> {
    return this._client.get('/market/overview', options);
  }
}

export interface OverviewRetrieveResponse {
  indices?: Array<OverviewRetrieveResponse.Index>;

  /**
   * Current market status (e.g., Open, Closed).
   */
  marketStatus?: string;

  timestamp?: string;
}

export namespace OverviewRetrieveResponse {
  export interface Index {
    change?: number;

    name?: string;

    percentChange?: number;

    price?: number;

    symbol?: string;
  }
}

export declare namespace Overview {
  export { type OverviewRetrieveResponse as OverviewRetrieveResponse };
}
