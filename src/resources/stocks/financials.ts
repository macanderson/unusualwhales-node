// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Financials extends APIResource {
  /**
   * Retrieve financial statements for a specific stock symbol.
   */
  retrieve(
    symbol: string,
    query: FinancialRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FinancialRetrieveResponse> {
    return this._client.get(`/stocks/financials/${symbol}`, { query, ...options });
  }
}

export interface FinancialRetrieveResponse {
  period?: string;

  statements?: Array<Record<string, unknown>>;

  statementType?: string;

  symbol?: string;
}

export interface FinancialRetrieveParams {
  /**
   * Type of financial statement ('income', 'balance', 'cashflow').
   */
  statementType: 'income' | 'balance' | 'cashflow';

  /**
   * Period type ('annual', 'quarterly').
   */
  period?: 'annual' | 'quarterly';
}

export declare namespace Financials {
  export {
    type FinancialRetrieveResponse as FinancialRetrieveResponse,
    type FinancialRetrieveParams as FinancialRetrieveParams,
  };
}
