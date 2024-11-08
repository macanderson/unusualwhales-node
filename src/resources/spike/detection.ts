// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Detection extends APIResource {
  /**
   * Retrieve data on detected spikes in trading activity.
   */
  retrieve(
    query?: DetectionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetectionRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<DetectionRetrieveResponse>;
  retrieve(
    query: DetectionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetectionRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/spike/detection', { query, ...options });
  }
}

export interface DetectionRetrieveResponse {
  spikes?: Array<DetectionRetrieveResponse.Spike>;
}

export namespace DetectionRetrieveResponse {
  export interface Spike {
    priceSpike?: number;

    symbol?: string;

    timestamp?: string;

    volumeSpike?: number;
  }
}

export interface DetectionRetrieveParams {
  /**
   * Date to filter spike data.
   */
  date?: string;

  /**
   * Stock symbol to filter spike data.
   */
  symbol?: string;

  /**
   * Threshold for spike detection.
   */
  threshold?: number;
}

export declare namespace Detection {
  export {
    type DetectionRetrieveResponse as DetectionRetrieveResponse,
    type DetectionRetrieveParams as DetectionRetrieveParams,
  };
}
