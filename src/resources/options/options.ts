// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OptionsFlowsAPI from './options-flows';
import {
  OptionsFlowListParams,
  OptionsFlowListResponse,
  OptionsFlowRetrieveParams,
  OptionsFlowRetrieveResponse,
  OptionsFlows,
} from './options-flows';

export class Options extends APIResource {
  optionsFlows: OptionsFlowsAPI.OptionsFlows = new OptionsFlowsAPI.OptionsFlows(this._client);
}

Options.OptionsFlows = OptionsFlows;

export declare namespace Options {
  export {
    OptionsFlows as OptionsFlows,
    type OptionsFlowRetrieveResponse as OptionsFlowRetrieveResponse,
    type OptionsFlowListResponse as OptionsFlowListResponse,
    type OptionsFlowRetrieveParams as OptionsFlowRetrieveParams,
    type OptionsFlowListParams as OptionsFlowListParams,
  };
}
