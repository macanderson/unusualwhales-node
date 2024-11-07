// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Earnings extends APIResource {
  /**
   * Retrieve earnings history and estimates for a specific stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<EarningRetrieveResponse> {
    return this._client.get(`/stocks/earnings/${symbol}`, options);
  }
}

export interface EarningRetrieveResponse {
  earnings?: Array<EarningRetrieveResponse.Earning>;

  symbol?: string;
}

export namespace EarningRetrieveResponse {
  export interface Earning {
    estimatedEPS?: number;

    fiscalDateEnding?: string;

    reportedEPS?: number;

    surprise?: number;

    surprisePercentage?: number;
  }
}

export declare namespace Earnings {
  export { type EarningRetrieveResponse as EarningRetrieveResponse };
}
