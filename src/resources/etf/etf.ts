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
  sectors: SectorsAPI.Sectors = new SectorsAPI.Sectors(this._client);
  tide: TideAPI.Tide = new TideAPI.Tide(this._client);
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

Etf.Sectors = Sectors;
Etf.Tide = Tide;
Etf.Holdings = Holdings;

export declare namespace Etf {
  export { type EtfListResponse as EtfListResponse };

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

  export {
    Holdings as Holdings,
    type HoldingListResponse as HoldingListResponse,
    type HoldingListParams as HoldingListParams,
  };
}
