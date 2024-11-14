// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChainAPI from './chain';
import { Chain, ChainRetrieveParams, ChainRetrieveResponse } from './chain';
import * as ContractAPI from './contract';
import { Contract, ContractRetrieveResponse } from './contract';
import * as ExpirationsAPI from './expirations';
import { ExpirationRetrieveResponse, Expirations } from './expirations';
import * as FlowAPI from './flow';
import { Flow, FlowListParams, FlowListResponse } from './flow';
import * as FlowSymbolAPI from './flow-symbol';
import { FlowSymbol, FlowSymbolRetrieveParams, FlowSymbolRetrieveResponse } from './flow-symbol';
import * as GreeksAPI from './greeks';
import { GreekRetrieveParams, GreekRetrieveResponse, Greeks } from './greeks';
import * as HistoricalAPI from './historical';
import { Historical, HistoricalRetrieveParams, HistoricalRetrieveResponse } from './historical';
import * as ListContractsAPI from './list-contracts';
import { ListContractListParams, ListContractListResponse, ListContracts } from './list-contracts';
import * as OiChangeAPI from './oi-change';
import { OiChange, OiChangeRetrieveParams, OiChangeRetrieveResponse } from './oi-change';
import * as TotalVolumeAPI from './total-volume';
import { TotalVolume, TotalVolumeRetrieveParams, TotalVolumeRetrieveResponse } from './total-volume';
import * as GreekflowAPI from './greekflow/greekflow';
import { Greekflow, GreekflowRetrieveParams, GreekflowRetrieveResponse } from './greekflow/greekflow';

export class Options extends APIResource {
  chain: ChainAPI.Chain = new ChainAPI.Chain(this._client);
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  listContracts: ListContractsAPI.ListContracts = new ListContractsAPI.ListContracts(this._client);
  expirations: ExpirationsAPI.Expirations = new ExpirationsAPI.Expirations(this._client);
  flow: FlowAPI.Flow = new FlowAPI.Flow(this._client);
  flowSymbol: FlowSymbolAPI.FlowSymbol = new FlowSymbolAPI.FlowSymbol(this._client);
  greekflow: GreekflowAPI.Greekflow = new GreekflowAPI.Greekflow(this._client);
  greeks: GreeksAPI.Greeks = new GreeksAPI.Greeks(this._client);
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);
  oiChange: OiChangeAPI.OiChange = new OiChangeAPI.OiChange(this._client);
  totalVolume: TotalVolumeAPI.TotalVolume = new TotalVolumeAPI.TotalVolume(this._client);
}

Options.Chain = Chain;
Options.Contract = Contract;
Options.ListContracts = ListContracts;
Options.Expirations = Expirations;
Options.Flow = Flow;
Options.FlowSymbol = FlowSymbol;
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
    ListContracts as ListContracts,
    type ListContractListResponse as ListContractListResponse,
    type ListContractListParams as ListContractListParams,
  };

  export { Expirations as Expirations, type ExpirationRetrieveResponse as ExpirationRetrieveResponse };

  export { Flow as Flow, type FlowListResponse as FlowListResponse, type FlowListParams as FlowListParams };

  export {
    FlowSymbol as FlowSymbol,
    type FlowSymbolRetrieveResponse as FlowSymbolRetrieveResponse,
    type FlowSymbolRetrieveParams as FlowSymbolRetrieveParams,
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
    type TotalVolumeRetrieveResponse as TotalVolumeRetrieveResponse,
    type TotalVolumeRetrieveParams as TotalVolumeRetrieveParams,
  };
}
