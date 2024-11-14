// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HoldingsAPI from './holdings';
import { HoldingListParams, HoldingListResponse, Holdings } from './holdings';

export class Etf extends APIResource {
  holdings: HoldingsAPI.Holdings = new HoldingsAPI.Holdings(this._client);
}

Etf.Holdings = Holdings;

export declare namespace Etf {
  export {
    Holdings as Holdings,
    type HoldingListResponse as HoldingListResponse,
    type HoldingListParams as HoldingListParams,
  };
}
