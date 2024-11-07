# Stocks

Types:

- <code><a href="./src/resources/stocks/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/price/{symbol}">client.stocks.<a href="./src/resources/stocks/stocks.ts">retrieve</a>(symbol) -> unknown</code>

## Screener

Types:

- <code><a href="./src/resources/stocks/screener.ts">ScreenerGetResponse</a></code>
- <code><a href="./src/resources/stocks/screener.ts">ScreenerPostResponse</a></code>

Methods:

- <code title="get /stocks/screener">client.stocks.screener.<a href="./src/resources/stocks/screener.ts">get</a>({ ...params }) -> unknown</code>
- <code title="post /stocks/screener">client.stocks.screener.<a href="./src/resources/stocks/screener.ts">post</a>({ ...params }) -> unknown</code>

## News

Types:

- <code><a href="./src/resources/stocks/news.ts">NewsListResponse</a></code>

Methods:

- <code title="get /news">client.stocks.news.<a href="./src/resources/stocks/news.ts">list</a>({ ...params }) -> unknown</code>

# Congress

## Trades

Types:

- <code><a href="./src/resources/congress/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /congress/trades">client.congress.trades.<a href="./src/resources/congress/trades.ts">list</a>({ ...params }) -> unknown</code>

## Members

Types:

- <code><a href="./src/resources/congress/members.ts">MemberListResponse</a></code>

Methods:

- <code title="get /congress/members">client.congress.members.<a href="./src/resources/congress/members.ts">list</a>() -> unknown</code>

# Institutions

Types:

- <code><a href="./src/resources/institutions/institutions.ts">InstitutionListResponse</a></code>

Methods:

- <code title="get /institutions/list">client.institutions.<a href="./src/resources/institutions/institutions.ts">list</a>() -> unknown</code>

## Trades

Types:

- <code><a href="./src/resources/institutions/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /institutions/trades">client.institutions.trades.<a href="./src/resources/institutions/trades.ts">list</a>({ ...params }) -> unknown</code>

# Darkpool

## Transactions

Types:

- <code><a href="./src/resources/darkpool/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/darkpool/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /darkpool/transactions/{symbol}">client.darkpool.transactions.<a href="./src/resources/darkpool/transactions.ts">retrieve</a>(symbol, { ...params }) -> unknown</code>
- <code title="get /darkpool/transactions">client.darkpool.transactions.<a href="./src/resources/darkpool/transactions.ts">list</a>({ ...params }) -> unknown</code>

# Etf

Types:

- <code><a href="./src/resources/etf/etf.ts">EtfListResponse</a></code>

Methods:

- <code title="get /etf/list">client.etf.<a href="./src/resources/etf/etf.ts">list</a>() -> unknown</code>

## Holdings

Types:

- <code><a href="./src/resources/etf/holdings.ts">HoldingListResponse</a></code>

Methods:

- <code title="get /etf/holdings">client.etf.holdings.<a href="./src/resources/etf/holdings.ts">list</a>({ ...params }) -> unknown</code>

# OptionsFlows

Types:

- <code><a href="./src/resources/options-flows/options-flows.ts">OptionsFlowRetrieveResponse</a></code>
- <code><a href="./src/resources/options-flows/options-flows.ts">OptionsFlowListResponse</a></code>

Methods:

- <code title="get /options/flow/{symbol}">client.optionsFlows.<a href="./src/resources/options-flows/options-flows.ts">retrieve</a>(symbol, { ...params }) -> unknown</code>
- <code title="get /options/flow">client.optionsFlows.<a href="./src/resources/options-flows/options-flows.ts">list</a>({ ...params }) -> unknown</code>

## Chain

Types:

- <code><a href="./src/resources/options-flows/chain.ts">ChainRetrieveResponse</a></code>

Methods:

- <code title="get /options/chain/{symbol}">client.optionsFlows.chain.<a href="./src/resources/options-flows/chain.ts">retrieve</a>(symbol, { ...params }) -> unknown</code>

## Expirations

Types:

- <code><a href="./src/resources/options-flows/expirations.ts">ExpirationRetrieveResponse</a></code>

Methods:

- <code title="get /options/expirations/{symbol}">client.optionsFlows.expirations.<a href="./src/resources/options-flows/expirations.ts">retrieve</a>(symbol) -> unknown</code>

## Greeks

Types:

- <code><a href="./src/resources/options-flows/greeks.ts">GreekRetrieveResponse</a></code>

Methods:

- <code title="get /options/greeks/{symbol}">client.optionsFlows.greeks.<a href="./src/resources/options-flows/greeks.ts">retrieve</a>(symbol, { ...params }) -> unknown</code>

## Historical

Types:

- <code><a href="./src/resources/options-flows/historical.ts">HistoricalRetrieveResponse</a></code>

Methods:

- <code title="get /options/historical/{symbol}">client.optionsFlows.historical.<a href="./src/resources/options-flows/historical.ts">retrieve</a>(symbol, { ...params }) -> unknown</code>

# Seasonality

## Stocks

Types:

- <code><a href="./src/resources/seasonality/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /seasonality/stocks/{symbol}">client.seasonality.stocks.<a href="./src/resources/seasonality/stocks.ts">retrieve</a>(symbol, { ...params }) -> unknown</code>
