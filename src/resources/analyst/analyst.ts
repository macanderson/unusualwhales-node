// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RatingsAPI from './ratings';
import { RatingRetrieveParams, RatingRetrieveResponse, Ratings } from './ratings';
import * as UpgradesDowngradesAPI from './upgrades-downgrades';
import {
  UpgradesDowngradeListParams,
  UpgradesDowngradeListResponse,
  UpgradesDowngrades,
} from './upgrades-downgrades';

export class Analyst extends APIResource {
  ratings: RatingsAPI.Ratings = new RatingsAPI.Ratings(this._client);
  upgradesDowngrades: UpgradesDowngradesAPI.UpgradesDowngrades = new UpgradesDowngradesAPI.UpgradesDowngrades(
    this._client,
  );
}

Analyst.Ratings = Ratings;
Analyst.UpgradesDowngrades = UpgradesDowngrades;

export declare namespace Analyst {
  export {
    Ratings as Ratings,
    type RatingRetrieveResponse as RatingRetrieveResponse,
    type RatingRetrieveParams as RatingRetrieveParams,
  };

  export {
    UpgradesDowngrades as UpgradesDowngrades,
    type UpgradesDowngradeListResponse as UpgradesDowngradeListResponse,
    type UpgradesDowngradeListParams as UpgradesDowngradeListParams,
  };
}
