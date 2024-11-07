// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MembersAPI from './members';
import { MemberListResponse, Members } from './members';
import * as TradesAPI from './trades';
import { TradeListParams, TradeListResponse, Trades } from './trades';

export class Congress extends APIResource {
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
}

Congress.Trades = Trades;
Congress.Members = Members;

export declare namespace Congress {
  export {
    Trades as Trades,
    type TradeListResponse as TradeListResponse,
    type TradeListParams as TradeListParams,
  };

  export { Members as Members, type MemberListResponse as MemberListResponse };
}
