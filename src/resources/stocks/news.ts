// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class News extends APIResource {
  /**
   * Retrieve the latest financial news.
   */
  list(query?: NewsListParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  list(
    query: NewsListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/news', { query, ...options });
  }
}

export type NewsListResponse = unknown;

export interface NewsListParams {
  /**
   * Date to filter news articles.
   */
  date?: string;

  /**
   * Comma-separated list of stock symbols to filter news.
   */
  symbols?: string;
}

export declare namespace News {
  export { type NewsListResponse as NewsListResponse, type NewsListParams as NewsListParams };
}
