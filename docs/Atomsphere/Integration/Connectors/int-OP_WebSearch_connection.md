# OP WebSearch - Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f5100f7b-e7f0-479a-b85f-36b5c2863cdc"/>
</head>

The OP WebSearch — Partner connector requires a few fields to establish and manage a connection to one of the many APIs. Below are the required and optional fields you can configure.

## Connection tab

-	**Provider:** The search engine provider for the WebSearch. Available options include:

  -	DuckDuckGo (Default, Free, SEARCH only)
  -	Google (SEARCH only)
  -	Bing (SEARCH only)
  -	Serp (SEARCH only)
  -	Tavily (BOTH)
  -	ScrapingBee (BOTH)
  -	Firecrawl (EXTRACT only)

-	**API Key:** (Required for specific providers) Enter the API key to connect to the chosen search provider. The API key is required for the following providers:

  -	Google
  -	Bing
  -	Serp
  -	Tavily
  -	ScrapingBee
  -	Firecrawl

-	**Connection Timeout:** The maximum wait time, in milliseconds, to establish a connection to the search provider. A value less than or equal to zero means that the process will wait indefinitely. The default is -1.
-	**Read Timeout:** The maximum wait time, in milliseconds, to retrieve all data from the search provider. A value less than or equal to zero means the process will wait indefinitely. The default is -1.
-	**Enable Connection Pooling:** If selected, connection pooling is enabled, allowing connections to be reused for future requests. Connection pooling may improve performance by utilizing resources more efficiently. The default is false.
-	**Max Simultaneous Requests:** The maximum number of simultaneous requests allowed in the connection at any time. The default is 20. If connection pooling is enabled and this value is not set or is -1 or 0, the default of 20 is used.
-	**Idle Timeout (seconds):** The maximum amount of time, in seconds, that a connection can remain idle before being closed. The default is 30. This setting is applicable only if connection pooling is enabled.

