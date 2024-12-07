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
import { SectorListParams, SectorListResponse, Sectors } from './sectors';

export class Market extends APIResource {
  indices: IndicesAPI.Indices = new IndicesAPI.Indices(this._client);
  movers: MoversAPI.Movers = new MoversAPI.Movers(this._client);
  news: NewsAPI.News = new NewsAPI.News(this._client);
  overview: OverviewAPI.Overview = new OverviewAPI.Overview(this._client);
  sectors: SectorsAPI.Sectors = new SectorsAPI.Sectors(this._client);
}

Market.Indices = Indices;
Market.Movers = Movers;
Market.News = News;
Market.Overview = Overview;
Market.Sectors = Sectors;

export declare namespace Market {
  export { Indices as Indices, type IndexRetrieveResponse as IndexRetrieveResponse };

  export {
    Movers as Movers,
    type MoverRetrieveResponse as MoverRetrieveResponse,
    type MoverRetrieveParams as MoverRetrieveParams,
  };

  export {
    News as News,
    type NewsRetrieveResponse as NewsRetrieveResponse,
    type NewsRetrieveParams as NewsRetrieveParams,
  };

  export { Overview as Overview, type OverviewRetrieveResponse as OverviewRetrieveResponse };

  export {
    Sectors as Sectors,
    type SectorListResponse as SectorListResponse,
    type SectorListParams as SectorListParams,
  };
}
