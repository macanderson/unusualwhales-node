// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MembersAPI from './members';
import { MemberListResponse, Members } from './members';
import * as TradesAPI from './trades';
import { TradeListParams, TradeListResponse, Trades } from './trades';

export class Congress extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
}

Congress.Members = Members;
Congress.Trades = Trades;

export declare namespace Congress {
  export { Members as Members, type MemberListResponse as MemberListResponse };

  export {
    Trades as Trades,
    type TradeListResponse as TradeListResponse,
    type TradeListParams as TradeListParams,
  };
}
