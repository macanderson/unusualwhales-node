# OptionsFlows

Types:

- <code><a href="./src/resources/options-flows.ts">OptionsFlowRetrieveResponse</a></code>
- <code><a href="./src/resources/options-flows.ts">OptionsFlowListResponse</a></code>

Methods:

- <code title="get /options/flow/{symbol}">client.optionsFlows.<a href="./src/resources/options-flows.ts">retrieve</a>(symbol, { ...params }) -> OptionsFlowRetrieveResponse</code>
- <code title="get /options/flow">client.optionsFlows.<a href="./src/resources/options-flows.ts">list</a>({ ...params }) -> OptionsFlowListResponse</code>

# Stocks

Types:

- <code><a href="./src/resources/stocks/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/price/{symbol}">client.stocks.<a href="./src/resources/stocks/stocks.ts">retrieve</a>(symbol) -> StockRetrieveResponse</code>

## Screener

Types:

- <code><a href="./src/resources/stocks/screener.ts">ScreenerGetResponse</a></code>
- <code><a href="./src/resources/stocks/screener.ts">ScreenerPostResponse</a></code>

Methods:

- <code title="get /stocks/screener">client.stocks.screener.<a href="./src/resources/stocks/screener.ts">get</a>({ ...params }) -> ScreenerGetResponse</code>
- <code title="post /stocks/screener">client.stocks.screener.<a href="./src/resources/stocks/screener.ts">post</a>({ ...params }) -> ScreenerPostResponse</code>

# News

Types:

- <code><a href="./src/resources/news.ts">NewsListResponse</a></code>

Methods:

- <code title="get /news">client.news.<a href="./src/resources/news.ts">list</a>({ ...params }) -> NewsListResponse</code>

# Congress

## Trades

Types:

- <code><a href="./src/resources/congress/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /congress/trades">client.congress.trades.<a href="./src/resources/congress/trades.ts">list</a>({ ...params }) -> TradeListResponse</code>

## Members

Types:

- <code><a href="./src/resources/congress/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /congress/members">client.congress.members.<a href="./src/resources/congress/members.ts">list</a>() -> MemberListResponse</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions/institutions.ts">InstitutionListResponse</a></code>

Methods:

- <code title="get /institutions/list">client.institutions.<a href="./src/resources/institutions/institutions.ts">list</a>() -> InstitutionListResponse</code>

## Trades

Types:

- <code><a href="./src/resources/institutions/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /institutions/trades">client.institutions.trades.<a href="./src/resources/institutions/trades.ts">list</a>({ ...params }) -> TradeListResponse</code>

# Darkpool

## Transactions

Types:

- <code><a href="./src/resources/darkpool/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/darkpool/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /darkpool/transactions/{symbol}">client.darkpool.transactions.<a href="./src/resources/darkpool/transactions.ts">retrieve</a>(symbol, { ...params }) -> TransactionRetrieveResponse</code>
- <code title="get /darkpool/transactions">client.darkpool.transactions.<a href="./src/resources/darkpool/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Etf

Types:

- <code><a href="./src/resources/etf/etf.ts">EtfListResponse</a></code>

Methods:

- <code title="get /etf/list">client.etf.<a href="./src/resources/etf/etf.ts">list</a>() -> EtfListResponse</code>

## Holdings

Types:

- <code><a href="./src/resources/etf/holdings.ts">HoldingListResponse</a></code>

Methods:

- <code title="get /etf/holdings">client.etf.holdings.<a href="./src/resources/etf/holdings.ts">list</a>({ ...params }) -> HoldingListResponse</code>

# Options

## Chain

Types:

- <code><a href="./src/resources/options/chain.ts">ChainRetrieveResponse</a></code>

Methods:

- <code title="get /options/chain/{symbol}">client.options.chain.<a href="./src/resources/options/chain.ts">retrieve</a>(symbol, { ...params }) -> ChainRetrieveResponse</code>

## Expirations

Types:

- <code><a href="./src/resources/options/expirations.ts">ExpirationRetrieveResponse</a></code>

Methods:

- <code title="get /options/expirations/{symbol}">client.options.expirations.<a href="./src/resources/options/expirations.ts">retrieve</a>(symbol) -> ExpirationRetrieveResponse</code>

## Greeks

Types:

- <code><a href="./src/resources/options/greeks.ts">GreekRetrieveResponse</a></code>

Methods:

- <code title="get /options/greeks/{symbol}">client.options.greeks.<a href="./src/resources/options/greeks.ts">retrieve</a>(symbol, { ...params }) -> GreekRetrieveResponse</code>

## Historical

Types:

- <code><a href="./src/resources/options/historical.ts">HistoricalRetrieveResponse</a></code>

Methods:

- <code title="get /options/historical/{symbol}">client.options.historical.<a href="./src/resources/options/historical.ts">retrieve</a>(symbol, { ...params }) -> HistoricalRetrieveResponse</code>

## Contract

Types:

- <code><a href="./src/resources/options/contract.ts">ContractRetrieveResponse</a></code>

Methods:

- <code title="get /options/contract/{optionSymbol}">client.options.contract.<a href="./src/resources/options/contract.ts">retrieve</a>(optionSymbol) -> ContractRetrieveResponse</code>

## Contracts

Types:

- <code><a href="./src/resources/options/contracts.ts">ContractListResponse</a></code>

Methods:

- <code title="get /options/contracts">client.options.contracts.<a href="./src/resources/options/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>

# Seasonality

## Stocks

Types:

- <code><a href="./src/resources/seasonality/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /seasonality/stocks/{symbol}">client.seasonality.stocks.<a href="./src/resources/seasonality/stocks.ts">retrieve</a>(symbol, { ...params }) -> StockRetrieveResponse</code>

# Analyst

## Ratings

Types:

- <code><a href="./src/resources/analyst/ratings.ts">RatingRetrieveResponse</a></code>

Methods:

- <code title="get /analyst/ratings/{symbol}">client.analyst.ratings.<a href="./src/resources/analyst/ratings.ts">retrieve</a>(symbol, { ...params }) -> RatingRetrieveResponse</code>

## UpgradesDowngrades

Types:

- <code><a href="./src/resources/analyst/upgrades-downgrades.ts">UpgradesDowngradeListResponse</a></code>

Methods:

- <code title="get /analyst/upgrades_downgrades">client.analyst.upgradesDowngrades.<a href="./src/resources/analyst/upgrades-downgrades.ts">list</a>({ ...params }) -> UpgradesDowngradeListResponse</code>

# Market

## Overview

Types:

- <code><a href="./src/resources/market/overview.ts">OverviewRetrieveResponse</a></code>

Methods:

- <code title="get /market/overview">client.market.overview.<a href="./src/resources/market/overview.ts">retrieve</a>() -> OverviewRetrieveResponse</code>

## Indices

Types:

- <code><a href="./src/resources/market/indices.ts">IndexRetrieveResponse</a></code>

Methods:

- <code title="get /market/indices">client.market.indices.<a href="./src/resources/market/indices.ts">retrieve</a>() -> IndexRetrieveResponse</code>

## Movers

Types:

- <code><a href="./src/resources/market/movers.ts">MoverRetrieveResponse</a></code>

Methods:

- <code title="get /market/movers">client.market.movers.<a href="./src/resources/market/movers.ts">retrieve</a>({ ...params }) -> MoverRetrieveResponse</code>

## Sectors

Types:

- <code><a href="./src/resources/market/sectors.ts">SectorRetrieveResponse</a></code>

Methods:

- <code title="get /market/sectors">client.market.sectors.<a href="./src/resources/market/sectors.ts">retrieve</a>({ ...params }) -> SectorRetrieveResponse</code>

## News

Types:

- <code><a href="./src/resources/market/news.ts">NewsRetrieveResponse</a></code>

Methods:

- <code title="get /market/news">client.market.news.<a href="./src/resources/market/news.ts">retrieve</a>({ ...params }) -> NewsRetrieveResponse</code>
