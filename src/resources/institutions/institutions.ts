// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TradesAPI from './trades';
import { TradeListParams, TradeListResponse, Trades } from './trades';

export class Institutions extends APIResource {
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);

  /**
   * Retrieve a list of institutions that have reported trades.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<InstitutionListResponse> {
    return this._client.get('/institutions/list', options);
  }
}

export interface InstitutionListResponse {
  institutions?: Array<string>;
}

Institutions.Trades = Trades;

export declare namespace Institutions {
  export { type InstitutionListResponse as InstitutionListResponse };

  export {
    Trades as Trades,
    type TradeListResponse as TradeListResponse,
    type TradeListParams as TradeListParams,
  };
}
