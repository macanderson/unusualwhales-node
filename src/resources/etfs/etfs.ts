// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HoldingsAPI from './holdings';
import { HoldingListParams, HoldingListResponse, Holdings } from './holdings';
import * as SectorsAPI from './sectors';
import { SectorListResponse, SectorRetrieveParams, SectorRetrieveResponse, Sectors } from './sectors';
import * as TideAPI from './tide';
import { Tide, TideRetrieveParams, TideRetrieveResponse } from './tide';

export class Etfs extends APIResource {
  holdings: HoldingsAPI.Holdings = new HoldingsAPI.Holdings(this._client);
  sectors: SectorsAPI.Sectors = new SectorsAPI.Sectors(this._client);
  tide: TideAPI.Tide = new TideAPI.Tide(this._client);

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

Etfs.Holdings = Holdings;
Etfs.Sectors = Sectors;
Etfs.Tide = Tide;

export declare namespace Etfs {
  export { type EtfListResponse as EtfListResponse };

  export {
    Holdings as Holdings,
    type HoldingListResponse as HoldingListResponse,
    type HoldingListParams as HoldingListParams,
  };

  export {
    Sectors as Sectors,
    type SectorRetrieveResponse as SectorRetrieveResponse,
    type SectorListResponse as SectorListResponse,
    type SectorRetrieveParams as SectorRetrieveParams,
  };

  export {
    Tide as Tide,
    type TideRetrieveResponse as TideRetrieveResponse,
    type TideRetrieveParams as TideRetrieveParams,
  };
}
