// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DetectionAPI from './detection';
import { Detection, DetectionListParams, DetectionListResponse } from './detection';

export class Spike extends APIResource {
  detection: DetectionAPI.Detection = new DetectionAPI.Detection(this._client);
}

Spike.Detection = Detection;

export declare namespace Spike {
  export {
    Detection as Detection,
    type DetectionListResponse as DetectionListResponse,
    type DetectionListParams as DetectionListParams,
  };
}
