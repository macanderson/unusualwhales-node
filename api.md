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

## OptionsFlows

Types:

- <code><a href="./src/resources/options/options-flows.ts">OptionsFlowRetrieveResponse</a></code>
- <code><a href="./src/resources/options/options-flows.ts">OptionsFlowListResponse</a></code>

Methods:

- <code title="get /options/flow/{symbol}">client.options.optionsFlows.<a href="./src/resources/options/options-flows.ts">retrieve</a>(symbol, { ...params }) -> OptionsFlowRetrieveResponse</code>
- <code title="get /options/flow">client.options.optionsFlows.<a href="./src/resources/options/options-flows.ts">list</a>({ ...params }) -> OptionsFlowListResponse</code>
