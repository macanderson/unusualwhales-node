// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Members extends APIResource {
  /**
   * Retrieve a list of Congress members who have reported trades.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<MemberListResponse> {
    return this._client.get('/congress/members', options);
  }
}

export interface MemberListResponse {
  members?: Array<string>;
}

export declare namespace Members {
  export { type MemberListResponse as MemberListResponse };
}
