// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ContractsAPI from './contracts';
import { ContractListParams, ContractListResponse, Contracts } from './contracts';

export class Options extends APIResource {
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
}

Options.Contracts = Contracts;

export declare namespace Options {
  export {
    Contracts as Contracts,
    type ContractListResponse as ContractListResponse,
    type ContractListParams as ContractListParams,
  };
}
