// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ActivityAPI from './activity';
import { Activity, ActivityRetrieveParams, ActivityRetrieveResponse } from './activity';
import * as TradesAPI from './trades';
import { TradeListParams, TradeListResponse, Trades } from './trades';

export class Institutions extends APIResource {
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);

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
Institutions.Activity = Activity;

export declare namespace Institutions {
  export { type InstitutionListResponse as InstitutionListResponse };

  export {
    Trades as Trades,
    type TradeListResponse as TradeListResponse,
    type TradeListParams as TradeListParams,
  };

  export {
    Activity as Activity,
    type ActivityRetrieveResponse as ActivityRetrieveResponse,
    type ActivityRetrieveParams as ActivityRetrieveParams,
  };
}
