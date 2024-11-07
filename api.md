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

## News

Types:

- <code><a href="./src/resources/stocks/news.ts">NewsListResponse</a></code>

Methods:

- <code title="get /news">client.stocks.news.<a href="./src/resources/stocks/news.ts">list</a>({ ...params }) -> NewsListResponse</code>

## Quote

Types:

- <code><a href="./src/resources/stocks/quote.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/quote/{symbol}">client.stocks.quote.<a href="./src/resources/stocks/quote.ts">retrieve</a>(symbol) -> QuoteRetrieveResponse</code>

## Historical

Types:

- <code><a href="./src/resources/stocks/historical.ts">HistoricalRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/historical/{symbol}">client.stocks.historical.<a href="./src/resources/stocks/historical.ts">retrieve</a>(symbol, { ...params }) -> HistoricalRetrieveResponse</code>

## Company

Types:

- <code><a href="./src/resources/stocks/company.ts">CompanyRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/company/{symbol}">client.stocks.company.<a href="./src/resources/stocks/company.ts">retrieve</a>(symbol) -> CompanyRetrieveResponse</code>

## Financials

Types:

- <code><a href="./src/resources/stocks/financials.ts">FinancialRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/financials/{symbol}">client.stocks.financials.<a href="./src/resources/stocks/financials.ts">retrieve</a>(symbol, { ...params }) -> FinancialRetrieveResponse</code>

## Earnings

Types:

- <code><a href="./src/resources/stocks/earnings.ts">EarningRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/earnings/{symbol}">client.stocks.earnings.<a href="./src/resources/stocks/earnings.ts">retrieve</a>(symbol) -> EarningRetrieveResponse</code>

## Dividends

Types:

- <code><a href="./src/resources/stocks/dividends.ts">DividendRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/dividends/{symbol}">client.stocks.dividends.<a href="./src/resources/stocks/dividends.ts">retrieve</a>(symbol, { ...params }) -> DividendRetrieveResponse</code>

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

## Activity

Types:

- <code><a href="./src/resources/institutions/activity.ts">ActivityRetrieveResponse</a></code>

Methods:

- <code title="get /institutional/activity">client.institutions.activity.<a href="./src/resources/institutions/activity.ts">retrieve</a>({ ...params }) -> ActivityRetrieveResponse</code>

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

## Tide

Types:

- <code><a href="./src/resources/etf/tide.ts">TideRetrieveResponse</a></code>

Methods:

- <code title="get /etf/tide">client.etf.tide.<a href="./src/resources/etf/tide.ts">retrieve</a>({ ...params }) -> TideRetrieveResponse</code>

## Sectors

Types:

- <code><a href="./src/resources/etf/sectors.ts">SectorRetrieveResponse</a></code>
- <code><a href="./src/resources/etf/sectors.ts">SectorListResponse</a></code>

Methods:

- <code title="get /etf/sectors">client.etf.sectors.<a href="./src/resources/etf/sectors.ts">retrieve</a>({ ...params }) -> SectorRetrieveResponse</code>
- <code title="get /etf/sectors/list">client.etf.sectors.<a href="./src/resources/etf/sectors.ts">list</a>() -> SectorListResponse</code>

# OptionsFlows

Types:

- <code><a href="./src/resources/options-flows/options-flows.ts">OptionsFlowRetrieveResponse</a></code>
- <code><a href="./src/resources/options-flows/options-flows.ts">OptionsFlowListResponse</a></code>

Methods:

- <code title="get /options/flow/{symbol}">client.optionsFlows.<a href="./src/resources/options-flows/options-flows.ts">retrieve</a>(symbol, { ...params }) -> OptionsFlowRetrieveResponse</code>
- <code title="get /options/flow">client.optionsFlows.<a href="./src/resources/options-flows/options-flows.ts">list</a>({ ...params }) -> OptionsFlowListResponse</code>

## Chain

Types:

- <code><a href="./src/resources/options-flows/chain.ts">ChainRetrieveResponse</a></code>

Methods:

- <code title="get /options/chain/{symbol}">client.optionsFlows.chain.<a href="./src/resources/options-flows/chain.ts">retrieve</a>(symbol, { ...params }) -> ChainRetrieveResponse</code>

## Expirations

Types:

- <code><a href="./src/resources/options-flows/expirations.ts">ExpirationRetrieveResponse</a></code>

Methods:

- <code title="get /options/expirations/{symbol}">client.optionsFlows.expirations.<a href="./src/resources/options-flows/expirations.ts">retrieve</a>(symbol) -> ExpirationRetrieveResponse</code>

## Greeks

Types:

- <code><a href="./src/resources/options-flows/greeks.ts">GreekRetrieveResponse</a></code>

Methods:

- <code title="get /options/greeks/{symbol}">client.optionsFlows.greeks.<a href="./src/resources/options-flows/greeks.ts">retrieve</a>(symbol, { ...params }) -> GreekRetrieveResponse</code>

## Historical

Types:

- <code><a href="./src/resources/options-flows/historical.ts">HistoricalRetrieveResponse</a></code>

Methods:

- <code title="get /options/historical/{symbol}">client.optionsFlows.historical.<a href="./src/resources/options-flows/historical.ts">retrieve</a>(symbol, { ...params }) -> HistoricalRetrieveResponse</code>

## GreeksFlow

Types:

- <code><a href="./src/resources/options-flows/greeks-flow.ts">GreeksFlowRetrieveResponse</a></code>

Methods:

- <code title="get /options/greekflow">client.optionsFlows.greeksFlow.<a href="./src/resources/options-flows/greeks-flow.ts">retrieve</a>({ ...params }) -> GreeksFlowRetrieveResponse</code>

## GreeksFlowExpiry

Types:

- <code><a href="./src/resources/options-flows/greeks-flow-expiry.ts">GreeksFlowExpiryRetrieveResponse</a></code>

Methods:

- <code title="get /options/greekflow/expiry">client.optionsFlows.greeksFlowExpiry.<a href="./src/resources/options-flows/greeks-flow-expiry.ts">retrieve</a>({ ...params }) -> GreeksFlowExpiryRetrieveResponse</code>

## OiChange

Types:

- <code><a href="./src/resources/options-flows/oi-change.ts">OiChangeRetrieveResponse</a></code>

Methods:

- <code title="get /options/oi_change/{symbol}">client.optionsFlows.oiChange.<a href="./src/resources/options-flows/oi-change.ts">retrieve</a>(symbol, { ...params }) -> OiChangeRetrieveResponse</code>

## TotalVolume

Types:

- <code><a href="./src/resources/options-flows/total-volume.ts">TotalVolumeRetrieveResponse</a></code>

Methods:

- <code title="get /options/total_volume">client.optionsFlows.totalVolume.<a href="./src/resources/options-flows/total-volume.ts">retrieve</a>({ ...params }) -> TotalVolumeRetrieveResponse</code>

## Contract

Types:

- <code><a href="./src/resources/options-flows/contract.ts">ContractRetrieveResponse</a></code>

Methods:

- <code title="get /options/contract/{optionSymbol}">client.optionsFlows.contract.<a href="./src/resources/options-flows/contract.ts">retrieve</a>(optionSymbol) -> ContractRetrieveResponse</code>

## Contracts

Types:

- <code><a href="./src/resources/options-flows/contracts.ts">ContractListResponse</a></code>

Methods:

- <code title="get /options/contracts">client.optionsFlows.contracts.<a href="./src/resources/options-flows/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>

# Seasonality

## Stocks

Types:

- <code><a href="./src/resources/seasonality/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /seasonality/stocks/{symbol}">client.seasonality.stocks.<a href="./src/resources/seasonality/stocks.ts">retrieve</a>(symbol, { ...params }) -> StockRetrieveResponse</code>

# InsiderTrades

Types:

- <code><a href="./src/resources/insider-trades.ts">InsiderTradeListResponse</a></code>

Methods:

- <code title="get /insider/trades">client.insiderTrades.<a href="./src/resources/insider-trades.ts">list</a>({ ...params }) -> InsiderTradeListResponse</code>

# Spike

## Detection

Types:

- <code><a href="./src/resources/spike/detection.ts">DetectionListResponse</a></code>

Methods:

- <code title="get /spike/detection">client.spike.detection.<a href="./src/resources/spike/detection.ts">list</a>({ ...params }) -> DetectionListResponse</code>

# Calendar

## Economic

Types:

- <code><a href="./src/resources/calendar/economic.ts">EconomicRetrieveResponse</a></code>

Methods:

- <code title="get /calendar/economic">client.calendar.economic.<a href="./src/resources/calendar/economic.ts">retrieve</a>({ ...params }) -> EconomicRetrieveResponse</code>

## Fda

Types:

- <code><a href="./src/resources/calendar/fda.ts">FdaRetrieveResponse</a></code>

Methods:

- <code title="get /calendar/fda">client.calendar.fda.<a href="./src/resources/calendar/fda.ts">retrieve</a>({ ...params }) -> FdaRetrieveResponse</code>

# Correlations

Types:

- <code><a href="./src/resources/correlations.ts">CorrelationListResponse</a></code>

Methods:

- <code title="get /correlations">client.correlations.<a href="./src/resources/correlations.ts">list</a>({ ...params }) -> CorrelationListResponse</code>

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

- <code><a href="./src/resources/market/indices.ts">IndexListResponse</a></code>

Methods:

- <code title="get /market/indices">client.market.indices.<a href="./src/resources/market/indices.ts">list</a>() -> IndexListResponse</code>

## Movers

Types:

- <code><a href="./src/resources/market/movers.ts">MoverListResponse</a></code>

Methods:

- <code title="get /market/movers">client.market.movers.<a href="./src/resources/market/movers.ts">list</a>({ ...params }) -> MoverListResponse</code>

## Sectors

Types:

- <code><a href="./src/resources/market/sectors.ts">SectorListResponse</a></code>

Methods:

- <code title="get /market/sectors">client.market.sectors.<a href="./src/resources/market/sectors.ts">list</a>({ ...params }) -> SectorListResponse</code>

## News

Types:

- <code><a href="./src/resources/market/news.ts">NewsListResponse</a></code>

Methods:

- <code title="get /market/news">client.market.news.<a href="./src/resources/market/news.ts">list</a>({ ...params }) -> NewsListResponse</code>
