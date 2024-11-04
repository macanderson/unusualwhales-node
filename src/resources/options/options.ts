// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChainAPI from './chain';
import { Chain, ChainRetrieveParams, ChainRetrieveResponse } from './chain';
import * as ContractAPI from './contract';
import { Contract, ContractRetrieveResponse } from './contract';
import * as ContractsAPI from './contracts';
import { ContractListParams, ContractListResponse, Contracts } from './contracts';
import * as ExpirationsAPI from './expirations';
import { ExpirationRetrieveResponse, Expirations } from './expirations';
import * as GreeksAPI from './greeks';
import { GreekRetrieveParams, GreekRetrieveResponse, Greeks } from './greeks';
import * as HistoricalAPI from './historical';
import { Historical, HistoricalRetrieveParams, HistoricalRetrieveResponse } from './historical';

export class Options extends APIResource {
  chain: ChainAPI.Chain = new ChainAPI.Chain(this._client);
  expirations: ExpirationsAPI.Expirations = new ExpirationsAPI.Expirations(this._client);
  greeks: GreeksAPI.Greeks = new GreeksAPI.Greeks(this._client);
  historical: HistoricalAPI.Historical = new HistoricalAPI.Historical(this._client);
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

Options.Chain = Chain;
Options.Expirations = Expirations;
Options.Greeks = Greeks;
Options.Historical = Historical;
Options.Contract = Contract;
Options.Contracts = Contracts;

export declare namespace Options {
  export {
    Chain as Chain,
    type ChainRetrieveResponse as ChainRetrieveResponse,
    type ChainRetrieveParams as ChainRetrieveParams,
  };

  export { Expirations as Expirations, type ExpirationRetrieveResponse as ExpirationRetrieveResponse };

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

  export { Contract as Contract, type ContractRetrieveResponse as ContractRetrieveResponse };

  export {
    Contracts as Contracts,
    type ContractListResponse as ContractListResponse,
    type ContractListParams as ContractListParams,
  };
}
