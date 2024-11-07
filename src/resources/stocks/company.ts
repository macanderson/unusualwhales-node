// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Company extends APIResource {
  /**
   * Retrieve detailed company information for a specific stock symbol.
   */
  retrieve(symbol: string, options?: Core.RequestOptions): Core.APIPromise<CompanyRetrieveResponse> {
    return this._client.get(`/stocks/company/${symbol}`, options);
  }
}

export interface CompanyRetrieveResponse {
  address?: string;

  ceo?: string;

  companyName?: string;

  description?: string;

  employees?: number;

  industry?: string;

  sector?: string;

  symbol?: string;

  website?: string;
}

export declare namespace Company {
  export { type CompanyRetrieveResponse as CompanyRetrieveResponse };
}
