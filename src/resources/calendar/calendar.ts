// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EconomicAPI from './economic';
import { Economic, EconomicRetrieveParams, EconomicRetrieveResponse } from './economic';
import * as FdaAPI from './fda';
import { Fda, FdaRetrieveParams, FdaRetrieveResponse } from './fda';

export class Calendar extends APIResource {
  economic: EconomicAPI.Economic = new EconomicAPI.Economic(this._client);
  fda: FdaAPI.Fda = new FdaAPI.Fda(this._client);
}

Calendar.Economic = Economic;
Calendar.Fda = Fda;

export declare namespace Calendar {
  export {
    Economic as Economic,
    type EconomicRetrieveResponse as EconomicRetrieveResponse,
    type EconomicRetrieveParams as EconomicRetrieveParams,
  };

  export {
    Fda as Fda,
    type FdaRetrieveResponse as FdaRetrieveResponse,
    type FdaRetrieveParams as FdaRetrieveParams,
  };
}
