// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class News extends APIResource {
  /**
   * Retrieve the latest news affecting the overall market.
   */
  retrieve(query?: NewsRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<NewsRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<NewsRetrieveResponse>;
  retrieve(
    query: NewsRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NewsRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/market/news', { query, ...options });
  }
}

export interface NewsRetrieveResponse {
  articles?: Array<NewsRetrieveResponse.Article>;
}

export namespace NewsRetrieveResponse {
  export interface Article {
    publishedAt?: string;

    source?: string;

    title?: string;

    url?: string;
  }
}

export interface NewsRetrieveParams {
  /**
   * Date to filter news articles.
   */
  date?: string;
}

export declare namespace News {
  export { type NewsRetrieveResponse as NewsRetrieveResponse, type NewsRetrieveParams as NewsRetrieveParams };
}
