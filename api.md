# OptionsFlows

Types:

- <code><a href="./src/resources/options-flows.ts">OptionsFlowRetrieveResponse</a></code>
- <code><a href="./src/resources/options-flows.ts">OptionsFlowListResponse</a></code>

Methods:

- <code title="get /options/flow/{symbol}">client.optionsFlows.<a href="./src/resources/options-flows.ts">retrieve</a>(symbol, { ...params }) -> OptionsFlowRetrieveResponse</code>
- <code title="get /options/flow">client.optionsFlows.<a href="./src/resources/options-flows.ts">list</a>({ ...params }) -> OptionsFlowListResponse</code>

# Stocks

Types:

- <code><a href="./src/resources/stocks.ts">StockRetrieveResponse</a></code>

Methods:

- <code title="get /stocks/price/{symbol}">client.stocks.<a href="./src/resources/stocks.ts">retrieve</a>(symbol) -> StockRetrieveResponse</code>

# News

Types:

- <code><a href="./src/resources/news.ts">NewsListResponse</a></code>

Methods:

- <code title="get /news">client.news.<a href="./src/resources/news.ts">list</a>({ ...params }) -> NewsListResponse</code>
