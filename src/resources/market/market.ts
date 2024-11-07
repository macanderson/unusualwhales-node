// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IndicesAPI from './indices';
import { IndexListResponse, Indices } from './indices';
import * as MoversAPI from './movers';
import { MoverListParams, MoverListResponse, Movers } from './movers';
import * as NewsAPI from './news';
import { News, NewsListParams, NewsListResponse } from './news';
import * as OverviewAPI from './overview';
import { Overview, OverviewRetrieveResponse } from './overview';
import * as SectorsAPI from './sectors';
import { SectorListParams, SectorListResponse, Sectors } from './sectors';

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

  export { Indices as Indices, type IndexListResponse as IndexListResponse };

  export {
    Movers as Movers,
    type MoverListResponse as MoverListResponse,
    type MoverListParams as MoverListParams,
  };

  export {
    Sectors as Sectors,
    type SectorListResponse as SectorListResponse,
    type SectorListParams as SectorListParams,
  };

  export { News as News, type NewsListResponse as NewsListResponse, type NewsListParams as NewsListParams };
}
