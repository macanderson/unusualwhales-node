// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChainAPI from './chain';
import { Chain, ChainRetrieveParams, ChainRetrieveResponse } from './chain';
import * as ContractAPI from './contract';
import { Contract, ContractRetrieveResponse } from './contract';
import * as ExpirationsAPI from './expirations';
import { ExpirationRetrieveResponse, Expirations } from './expirations';
import * as FlowAPI from './flow';
import { Flow, FlowListParams, FlowListResponse, FlowRetrieveParams, FlowRetrieveResponse } from './flow';
import * as GreeksAPI from './greeks';
import { GreekRetrieveParams, GreekRetrieveResponse, Greeks } from './greeks';
import * as HistoricalAPI from './historical';
import { Historical, HistoricalRetrieveParams, HistoricalRetrieveResponse } from './historical';
import * as OiChangeAPI from './oi-change';
import { OiChange, OiChangeRetrieveParams, OiChangeRetrieveResponse } from './oi-change';
import * as OptionChainsAPI from './option-chains';
import { OptionChainListParams, OptionChainListResponse, OptionChains } from './option-chains';
import * as TotalVolumeAPI from './total-volume';
import { TotalVolume, TotalVolumeListParams, TotalVolumeListResponse } from './total-volume';
import * as GreekflowAPI from './greekflow/greekflow';
import { Greekflow, GreekflowRetrieveParams, GreekflowRetrieveResponse } from './greekflow/greekflow';

export class Options extends APIResource {
  chain: ChainAPI.Chain = new ChainAPI.Chain(this._client);
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  optionChains: OptionChainsAPI.OptionChains = new OptionChainsAPI.OptionChains(this._client);
  expirations: ExpirationsAPI.Expirations = new ExpirationsAPI.Expirations(this._client);
  flow: FlowAPI.Flow = new FlowAPI.Flow(this._client);
  greekflow: GreekflowAPI.Greekflow = new GreekflowAPI.Greekflow(this._client);
  greeks: GreeksAPI.Greeks = new GreeksAPI.Greeks(this._client);
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);
  oiChange: OiChangeAPI.OiChange = new OiChangeAPI.OiChange(this._client);
  totalVolume: TotalVolumeAPI.TotalVolume = new TotalVolumeAPI.TotalVolume(this._client);
}

Options.Chain = Chain;
Options.Contract = Contract;
Options.OptionChains = OptionChains;
Options.Expirations = Expirations;
Options.Flow = Flow;
Options.Greekflow = Greekflow;
Options.Greeks = Greeks;
Options.Historical = Historical;
Options.OiChange = OiChange;
Options.TotalVolume = TotalVolume;

export declare namespace Options {
  export {
    Chain as Chain,
    type ChainRetrieveResponse as ChainRetrieveResponse,
    type ChainRetrieveParams as ChainRetrieveParams,
  };

  export { Contract as Contract, type ContractRetrieveResponse as ContractRetrieveResponse };

  export {
    OptionChains as OptionChains,
    type OptionChainListResponse as OptionChainListResponse,
    type OptionChainListParams as OptionChainListParams,
  };

  export { Expirations as Expirations, type ExpirationRetrieveResponse as ExpirationRetrieveResponse };

  export {
    Flow as Flow,
    type FlowRetrieveResponse as FlowRetrieveResponse,
    type FlowListResponse as FlowListResponse,
    type FlowRetrieveParams as FlowRetrieveParams,
    type FlowListParams as FlowListParams,
  };

  export {
    Greekflow as Greekflow,
    type GreekflowRetrieveResponse as GreekflowRetrieveResponse,
    type GreekflowRetrieveParams as GreekflowRetrieveParams,
  };

  export {
    Greeks as Greeks,
    type GreekRetrieveResponse as GreekRetrieveResponse,
    type GreekRetrieveParams as GreekRetrieveParams,
  };

  export {
    Historical as Historical,
    type HistoricalRetrieveResponse as HistoricalRetrieveResponse,
    type HistoricalRetrieveParams as HistoricalRetrieveParams,
  };

  export {
    OiChange as OiChange,
    type OiChangeRetrieveResponse as OiChangeRetrieveResponse,
    type OiChangeRetrieveParams as OiChangeRetrieveParams,
  };

  export {
    TotalVolume as TotalVolume,
    type TotalVolumeListResponse as TotalVolumeListResponse,
    type TotalVolumeListParams as TotalVolumeListParams,
  };
}
