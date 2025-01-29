# OP WebSearch - Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-02f34430-6807-4001-a43f-8978971f7533"/>
</head>

OP WebSearch — Partner operations can be used to search for information using a search engine as well as report on the current version of the connector. The search operation accepts an input of text, JSON or XML data.

## Search operation

The Search operation uses a query string to search for relevant articles. The output of this operation is a JSON array of results that include the title, the URL for the page and a snippet of the article. You can configure this operation using the following parameters:

-	**Follow Redirects:** A string specifying how redirects are handled
-	**Grouped Results:** A boolean value indicating whether to group the results by the title or not
-	**Empty If No Results:** A boolean value indicating whether to return an empty result if no results are found
-	**Input Type:** A value indicating what format the input is expected to be in 
-	**Search Path:** If the Input Type is JSON or XML, then you will need to specify which path the input data is located
-	**Remove HTML Tags:** A boolean indicating whether the HTML tags should be removed
-	**Max Results:** An optional integer defining the maximum number of items returned by each request
-	**Language:** An optional string specifying the language of the search results
-	**County:** An optional string specifying the country to narrow down the search results geographically
-	**Site:** An optional string specifying a particular website or domain to search within
-	**Engine:** An optional string specifying the search engine to use for processing the query (Required for Google's API)
-	**Advanced Settings:** If this parameter is set to true, then you will be able to set query parameters and request headers

## Extract operation

The Extract operation uses a URL to return a JSON object containing the title, URL and contents of the article the URL links to. You can configure this operation using the following parameters:

-	**Follow Redirects:** A string specifying how redirects are handled
-	**Empty If No Results:** A boolean value indicating whether to return an empty result if no results are found
-	**Input Type:** A value indicating what format the input is expected to be in 
-	**Search Path:** If the Input Type is JSON or XML, then you will need to specify which path the input data is located
-	**Remove HTML Tags:** A boolean indicating whether the HTML tags should be removed
-	**Max Results:** An optional integer defining the maximum number of items returned by each request
-	**Engine:** An optional string specifying the search engine to use for processing the query (Required for Google's API)
-	**Advanced Settings:** If this parameter is set to true, then you will be able to set query parameters and request headers

## Version operation

Outputs the version of the build to ensure there are no mismatches between what Boomi says is being used and what is being used.
