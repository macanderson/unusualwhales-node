// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionsAPI from './transactions';
import {
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveParams,
  TransactionRetrieveResponse,
  Transactions,
} from './transactions';

export class Darkpool extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
}

Darkpool.Transactions = Transactions;

export declare namespace Darkpool {
  export {
    Transactions as Transactions,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionListParams as TransactionListParams,
  };
}
