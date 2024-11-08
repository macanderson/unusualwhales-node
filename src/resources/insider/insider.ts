// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TradesAPI from './trades';
import { TradeRetrieveParams, TradeRetrieveResponse, Trades } from './trades';

export class Insider extends APIResource {
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
}

Insider.Trades = Trades;

export declare namespace Insider {
  export {
    Trades as Trades,
    type TradeRetrieveResponse as TradeRetrieveResponse,
    type TradeRetrieveParams as TradeRetrieveParams,
  };
}
