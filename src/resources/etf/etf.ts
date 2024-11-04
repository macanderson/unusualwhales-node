// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HoldingsAPI from './holdings';
import { HoldingListParams, HoldingListResponse, Holdings } from './holdings';

export class Etf extends APIResource {
  holdings: HoldingsAPI.Holdings = new HoldingsAPI.Holdings(this._client);

  /**
   * Retrieve a list of ETFs available.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<EtfListResponse> {
    return this._client.get('/etf/list', options);
  }
}

export interface EtfListResponse {
  etfs?: Array<string>;
}

Etf.Holdings = Holdings;

export declare namespace Etf {
  export { type EtfListResponse as EtfListResponse };

  export {
    Holdings as Holdings,
    type HoldingListResponse as HoldingListResponse,
    type HoldingListParams as HoldingListParams,
  };
}
