// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HoldingsAPI from './holdings';
import { HoldingListParams, HoldingListResponse, Holdings } from './holdings';
import * as SectorsAPI from './sectors';
import { SectorListResponse, SectorRetrieveParams, SectorRetrieveResponse, Sectors } from './sectors';
import * as TideAPI from './tide';
import { Tide, TideRetrieveParams, TideRetrieveResponse } from './tide';

export class Etf extends APIResource {
  holdings: HoldingsAPI.Holdings = new HoldingsAPI.Holdings(this._client);
  tide: TideAPI.Tide = new TideAPI.Tide(this._client);
  sectors: SectorsAPI.Sectors = new SectorsAPI.Sectors(this._client);

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
Etf.Tide = Tide;
Etf.Sectors = Sectors;

export declare namespace Etf {
  export { type EtfListResponse as EtfListResponse };

  export {
    Holdings as Holdings,
    type HoldingListResponse as HoldingListResponse,
    type HoldingListParams as HoldingListParams,
  };

  export {
    Tide as Tide,
    type TideRetrieveResponse as TideRetrieveResponse,
    type TideRetrieveParams as TideRetrieveParams,
  };

  export {
    Sectors as Sectors,
    type SectorRetrieveResponse as SectorRetrieveResponse,
    type SectorListResponse as SectorListResponse,
    type SectorRetrieveParams as SectorRetrieveParams,
  };
}
