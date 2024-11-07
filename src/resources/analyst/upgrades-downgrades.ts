// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class UpgradesDowngrades extends APIResource {
  /**
   * Retrieve recent analyst upgrades and downgrades across all stocks.
   */
  list(
    query?: UpgradesDowngradeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpgradesDowngradeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UpgradesDowngradeListResponse>;
  list(
    query: UpgradesDowngradeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpgradesDowngradeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/analyst/upgrades_downgrades', { query, ...options });
  }
}

export interface UpgradesDowngradeListResponse {
  upgradesDowngrades?: Array<UpgradesDowngradeListResponse.UpgradesDowngrade>;
}

export namespace UpgradesDowngradeListResponse {
  export interface UpgradesDowngrade {
    /**
     * The action taken (e.g., Initiated, Upgraded, Downgraded).
     */
    action?: string;

    analyst?: string;

    date?: string;

    /**
     * The price target set by the analyst.
     */
    priceTarget?: number;

    /**
     * Analyst's rating (e.g., Buy, Hold, Sell).
     */
    rating?: string;
  }
}

export interface UpgradesDowngradeListParams {
  /**
   * Date to filter upgrades and downgrades.
   */
  date?: string;
}

export declare namespace UpgradesDowngrades {
  export {
    type UpgradesDowngradeListResponse as UpgradesDowngradeListResponse,
    type UpgradesDowngradeListParams as UpgradesDowngradeListParams,
  };
}
