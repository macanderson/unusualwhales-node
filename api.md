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

# Calendar

## Economic

Types:

- <code><a href="./src/resources/calendar/economic.ts">EconomicListResponse</a></code>

Methods:

- <code title="get /calendar/economic">client.calendar.economic.<a href="./src/resources/calendar/economic.ts">list</a>({ ...params }) -> EconomicListResponse</code>

## Fda

Types:

- <code><a href="./src/resources/calendar/fda.ts">FdaListResponse</a></code>

Methods:

- <code title="get /calendar/fda">client.calendar.fda.<a href="./src/resources/calendar/fda.ts">list</a>({ ...params }) -> FdaListResponse</code>

# Congress

## Members

Types:

- <code><a href="./src/resources/congress/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /congress/members">client.congress.members.<a href="./src/resources/congress/members.ts">list</a>() -> MemberListResponse</code>

## Trades

Types:

- <code><a href="./src/resources/congress/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /congress/trades">client.congress.trades.<a href="./src/resources/congress/trades.ts">list</a>({ ...params }) -> TradeListResponse</code>

# Correlations

Types:

- <code><a href="./src/resources/correlations.ts">CorrelationListResponse</a></code>

Methods:

- <code title="get /correlations">client.correlations.<a href="./src/resources/correlations.ts">list</a>({ ...params }) -> CorrelationListResponse</code>

# Darkpool

## Transactions

Types:

- <code><a href="./src/resources/darkpool/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/darkpool/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /darkpool/transactions/{symbol}">client.darkpool.transactions.<a href="./src/resources/darkpool/transactions.ts">retrieve</a>(symbol, { ...params }) -> TransactionRetrieveResponse</code>
- <code title="get /darkpool/transactions">client.darkpool.transactions.<a href="./src/resources/darkpool/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Etfs

Types:

- <code><a href="./src/resources/etfs/etfs.ts">EtfListResponse</a></code>

Methods:

- <code title="get /etf/list">client.etfs.<a href="./src/resources/etfs/etfs.ts">list</a>() -> EtfListResponse</code>

## Sectors

Types:

- <code><a href="./src/resources/etfs/sectors.ts">SectorRetrieveResponse</a></code>
- <code><a href="./src/resources/etfs/sectors.ts">SectorListResponse</a></code>

Methods:

- <code title="get /etf/sectors">client.etfs.sectors.<a href="./src/resources/etfs/sectors.ts">retrieve</a>({ ...params }) -> SectorRetrieveResponse</code>
- <code title="get /etf/sectors/list">client.etfs.sectors.<a href="./src/resources/etfs/sectors.ts">list</a>() -> SectorListResponse</code>

## Tide

Types:

- <code><a href="./src/resources/etfs/tide.ts">TideRetrieveResponse</a></code>

Methods:

- <code title="get /etf/tide">client.etfs.tide.<a href="./src/resources/etfs/tide.ts">retrieve</a>({ ...params }) -> TideRetrieveResponse</code>

## Holdings

Types:

- <code><a href="./src/resources/etfs/holdings.ts">HoldingListResponse</a></code>

Methods:

- <code title="get /etf/holdings">client.etfs.holdings.<a href="./src/resources/etfs/holdings.ts">list</a>({ ...params }) -> HoldingListResponse</code>

# Insider

## Trades

Types:

- <code><a href="./src/resources/insider/trades.ts">TradeRetrieveResponse</a></code>

Methods:

- <code title="get /insider/trades">client.insider.trades.<a href="./src/resources/insider/trades.ts">retrieve</a>({ ...params }) -> TradeRetrieveResponse</code>

# Institutional

## Activity

Types:

- <code><a href="./src/resources/institutional/activity.ts">ActivityRetrieveResponse</a></code>

Methods:

- <code title="get /institutional/activity">client.institutional.activity.<a href="./src/resources/institutional/activity.ts">retrieve</a>({ ...params }) -> ActivityRetrieveResponse</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions/institutions.ts">InstitutionListResponse</a></code>

Methods:

- <code title="get /institutions/list">client.institutions.<a href="./src/resources/institutions/institutions.ts">list</a>() -> InstitutionListResponse</code>

## Trades

Types:

- <code><a href="./src/resources/institutions/trades.ts">TradeRetrieveResponse</a></code>

Methods:

- <code title="get /institutions/trades">client.institutions.trades.<a href="./src/resources/institutions/trades.ts">retrieve</a>({ ...params }) -> TradeRetrieveResponse</code>

# Market

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

## News

Types:

- <code><a href="./src/resources/market/news.ts">NewsRetrieveResponse</a></code>

Methods:

- <code title="get /market/news">client.market.news.<a href="./src/resources/market/news.ts">retrieve</a>({ ...params }) -> NewsRetrieveResponse</code>

## Overview

Types:

- <code><a href="./src/resources/market/overview.ts">OverviewRetrieveResponse</a></code>

Methods:

- <code title="get /market/overview">client.market.overview.<a href="./src/resources/market/overview.ts">retrieve</a>() -> OverviewRetrieveResponse</code>

## Sectors

Types:

- <code><a href="./src/resources/market/sectors.ts">SectorRetrieveResponse</a></code>

Methods:

- <code title="get /market/sectors">client.market.sectors.<a href="./src/resources/market/sectors.ts">retrieve</a>({ ...params }) -> SectorRetrieveResponse</code>

# FinancialNews

Types:

- <code><a href="./src/resources/financial-news.ts">FinancialNewRetrieveResponse</a></code>

Methods:

- <code title="get /news">client.financialNews.<a href="./src/resources/financial-news.ts">retrieve</a>({ ...params }) -> FinancialNewRetrieveResponse</code>

# Options

## Chain

Types:

- <code><a href="./src/resources/options/chain.ts">ChainRetrieveResponse</a></code>

Methods:

- <code title="get /options/chain/{symbol}">client.options.chain.<a href="./src/resources/options/chain.ts">retrieve</a>(symbol, { ...params }) -> ChainRetrieveResponse</code>

## Contract

Types:

- <code><a href="./src/resources/options/contract.ts">ContractRetrieveResponse</a></code>

Methods:

- <code title="get /options/contract/{optionSymbol}">client.options.contract.<a href="./src/resources/options/contract.ts">retrieve</a>(optionSymbol) -> ContractRetrieveResponse</code>

## OptionChains

Types:

- <code><a href="./src/resources/options/option-chains.ts">OptionChainListResponse</a></code>

Methods:

- <code title="get /options/contracts">client.options.optionChains.<a href="./src/resources/options/option-chains.ts">list</a>({ ...params }) -> OptionChainListResponse</code>

## Expirations

Types:

- <code><a href="./src/resources/options/expirations.ts">ExpirationRetrieveResponse</a></code>

Methods:

- <code title="get /options/expirations/{symbol}">client.options.expirations.<a href="./src/resources/options/expirations.ts">retrieve</a>(symbol) -> ExpirationRetrieveResponse</code>

## Flow

Types:

- <code><a href="./src/resources/options/flow.ts">FlowRetrieveResponse</a></code>
- <code><a href="./src/resources/options/flow.ts">FlowListResponse</a></code>

Methods:

- <code title="get /options/flow/{symbol}">client.options.flow.<a href="./src/resources/options/flow.ts">retrieve</a>(symbol, { ...params }) -> FlowRetrieveResponse</code>
- <code title="get /options/flow">client.options.flow.<a href="./src/resources/options/flow.ts">list</a>({ ...params }) -> FlowListResponse</code>

## Greekflow

Types:

- <code><a href="./src/resources/options/greekflow/greekflow.ts">GreekflowRetrieveResponse</a></code>

Methods:

- <code title="get /options/greekflow">client.options.greekflow.<a href="./src/resources/options/greekflow/greekflow.ts">retrieve</a>({ ...params }) -> GreekflowRetrieveResponse</code>

### Expiry

Types:

- <code><a href="./src/resources/options/greekflow/expiry.ts">ExpiryRetrieveResponse</a></code>

Methods:

- <code title="get /options/greekflow/expiry">client.options.greekflow.expiry.<a href="./src/resources/options/greekflow/expiry.ts">retrieve</a>({ ...params }) -> ExpiryRetrieveResponse</code>

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

## OiChange

Types:

- <code><a href="./src/resources/options/oi-change.ts">OiChangeRetrieveResponse</a></code>

Methods:

- <code title="get /options/oi_change/{symbol}">client.options.oiChange.<a href="./src/resources/options/oi-change.ts">retrieve</a>(symbol, { ...params }) -> OiChangeRetrieveResponse</code>

## TotalVolume

Types:

- <code><a href="./src/resources/options/total-volume.ts">TotalVolumeListResponse</a></code>

Methods:

- <code title="get /options/total_volume">client.options.totalVolume.<a href="./src/resources/options/total-volume.ts">list</a>({ ...params }) -> TotalVolumeListResponse</code>

# Seasonality

## Stocks

Types:

- <code><a href="./src/resources/seasonality/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /seasonality/stocks/{symbol}">client.seasonality.stocks.<a href="./src/resources/seasonality/stocks.ts">retrieve</a>(symbol, { ...params }) -> StockRetrieveResponse</code>

# Spike

## Detection

Types:

- <code><a href="./src/resources/spike/detection.ts">DetectionRetrieveResponse</a></code>

Methods:

- <code title="get /spike/detection">client.spike.detection.<a href="./src/resources/spike/detection.ts">retrieve</a>({ ...params }) -> DetectionRetrieveResponse</code>

# Stocks

## Company

Types:

- <code><a href="./src/resources/stocks/company.ts">CompanyRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/company/{symbol}">client.stocks.company.<a href="./src/resources/stocks/company.ts">retrieve</a>(symbol) -> CompanyRetrieveResponse</code>

## Dividends

Types:

- <code><a href="./src/resources/stocks/dividends.ts">DividendRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/dividends/{symbol}">client.stocks.dividends.<a href="./src/resources/stocks/dividends.ts">retrieve</a>(symbol, { ...params }) -> DividendRetrieveResponse</code>

## Earnings

Types:

- <code><a href="./src/resources/stocks/earnings.ts">EarningRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/earnings/{symbol}">client.stocks.earnings.<a href="./src/resources/stocks/earnings.ts">retrieve</a>(symbol) -> EarningRetrieveResponse</code>

## Financials

Types:

- <code><a href="./src/resources/stocks/financials.ts">FinancialRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/financials/{symbol}">client.stocks.financials.<a href="./src/resources/stocks/financials.ts">retrieve</a>(symbol, { ...params }) -> FinancialRetrieveResponse</code>

## Historical

Types:

- <code><a href="./src/resources/stocks/historical.ts">HistoricalRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/historical/{symbol}">client.stocks.historical.<a href="./src/resources/stocks/historical.ts">retrieve</a>(symbol, { ...params }) -> HistoricalRetrieveResponse</code>

## Price

Types:

- <code><a href="./src/resources/stocks/price.ts">PriceRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/price/{symbol}">client.stocks.price.<a href="./src/resources/stocks/price.ts">retrieve</a>(symbol) -> PriceRetrieveResponse</code>

## Quote

Types:

- <code><a href="./src/resources/stocks/quote.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/quote/{symbol}">client.stocks.quote.<a href="./src/resources/stocks/quote.ts">retrieve</a>(symbol) -> QuoteRetrieveResponse</code>

## Screener

Types:

- <code><a href="./src/resources/stocks/screener.ts">ScreenerCreateResponse</a></code>
- <code><a href="./src/resources/stocks/screener.ts">ScreenerListResponse</a></code>

Methods:

- <code title="post /stocks/screener">client.stocks.screener.<a href="./src/resources/stocks/screener.ts">create</a>({ ...params }) -> ScreenerCreateResponse</code>
- <code title="get /stocks/screener">client.stocks.screener.<a href="./src/resources/stocks/screener.ts">list</a>({ ...params }) -> ScreenerListResponse</code>
