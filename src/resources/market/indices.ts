// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Indices extends APIResource {
  /**
   * Retrieve data on major market indices.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<IndexListResponse> {
    return this._client.get('/market/indices', options);
  }
}

export interface IndexListResponse {
  indices?: Array<IndexListResponse.Index>;
}

export namespace IndexListResponse {
  export interface Index {
    change?: number;

    name?: string;

    percentChange?: number;

    price?: number;

    symbol?: string;
  }
}

export declare namespace Indices {
  export { type IndexListResponse as IndexListResponse };
}
