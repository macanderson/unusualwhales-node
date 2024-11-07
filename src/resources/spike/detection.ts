// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Detection extends APIResource {
  /**
   * Retrieve data on detected spikes in trading activity.
   */
  list(query?: DetectionListParams, options?: Core.RequestOptions): Core.APIPromise<DetectionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DetectionListResponse>;
  list(
    query: DetectionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DetectionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/spike/detection', { query, ...options });
  }
}

export interface DetectionListResponse {
  spikes?: Array<DetectionListResponse.Spike>;
}

export namespace DetectionListResponse {
  export interface Spike {
    priceSpike?: number;

    symbol?: string;

    timestamp?: string;

    volumeSpike?: number;
  }
}

export interface DetectionListParams {
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
    type DetectionListResponse as DetectionListResponse,
    type DetectionListParams as DetectionListParams,
  };
}
