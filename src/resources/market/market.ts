// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IndicesAPI from './indices';
import { IndexRetrieveResponse, Indices } from './indices';
import * as MoversAPI from './movers';
import { MoverRetrieveParams, MoverRetrieveResponse, Movers } from './movers';
import * as NewsAPI from './news';
import { News, NewsRetrieveParams, NewsRetrieveResponse } from './news';
import * as OverviewAPI from './overview';
import { Overview, OverviewRetrieveResponse } from './overview';
import * as SectorsAPI from './sectors';
import { SectorRetrieveParams, SectorRetrieveResponse, Sectors } from './sectors';

export class Market extends APIResource {
  overview: OverviewAPI.Overview = new OverviewAPI.Overview(this._client);
  indices: IndicesAPI.Indices = new IndicesAPI.Indices(this._client);
  movers: MoversAPI.Movers = new MoversAPI.Movers(this._client);
  sectors: SectorsAPI.Sectors = new SectorsAPI.Sectors(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);
}

Market.Overview = Overview;
Market.Indices = Indices;
Market.Movers = Movers;
Market.Sectors = Sectors;
Market.News = News;

export declare namespace Market {
  export { Overview as Overview, type OverviewRetrieveResponse as OverviewRetrieveResponse };

  export { Indices as Indices, type IndexRetrieveResponse as IndexRetrieveResponse };

  export {
    Movers as Movers,
    type MoverRetrieveResponse as MoverRetrieveResponse,
    type MoverRetrieveParams as MoverRetrieveParams,
  };

  export {
    Sectors as Sectors,
    type SectorRetrieveResponse as SectorRetrieveResponse,
    type SectorRetrieveParams as SectorRetrieveParams,
  };

  export {
    News as News,
    type NewsRetrieveResponse as NewsRetrieveResponse,
    type NewsRetrieveParams as NewsRetrieveParams,
  };
}
