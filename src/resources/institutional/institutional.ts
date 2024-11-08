// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ActivityAPI from './activity';
import { Activity, ActivityRetrieveParams, ActivityRetrieveResponse } from './activity';

export class Institutional extends APIResource {
  activity: ActivityAPI.Activity = new ActivityAPI.Activity(this._client);
}

Institutional.Activity = Activity;

export declare namespace Institutional {
  export {
    Activity as Activity,
    type ActivityRetrieveResponse as ActivityRetrieveResponse,
    type ActivityRetrieveParams as ActivityRetrieveParams,
  };
}
