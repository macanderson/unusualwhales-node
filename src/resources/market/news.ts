// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class News extends APIResource {
  /**
   * Retrieve the latest news affecting the overall market.
   */
  list(query?: NewsListParams, options?: Core.RequestOptions): Core.APIPromise<NewsListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<NewsListResponse>;
  list(
    query: NewsListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NewsListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/market/news', { query, ...options });
  }
}

export interface NewsListResponse {
  articles?: Array<NewsListResponse.Article>;
}

export namespace NewsListResponse {
  export interface Article {
    publishedAt?: string;

    source?: string;

    title?: string;

    url?: string;
  }
}

export interface NewsListParams {
  /**
   * Date to filter news articles.
   */
  date?: string;
}

export declare namespace News {
  export { type NewsListResponse as NewsListResponse, type NewsListParams as NewsListParams };
}