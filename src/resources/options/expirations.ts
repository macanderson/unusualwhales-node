// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Expirations extends APIResource {
  /**
   * Retrieve available option expiration dates for a specific stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<ExpirationRetrieveResponse> {
    return this._client.get(`/options/expirations/${symbol}`, options);
  }
}

export interface ExpirationRetrieveResponse {
  expirations?: Array<string>;

  symbol?: string;
}

export declare namespace Expirations {
  export { type ExpirationRetrieveResponse as ExpirationRetrieveResponse };
}
