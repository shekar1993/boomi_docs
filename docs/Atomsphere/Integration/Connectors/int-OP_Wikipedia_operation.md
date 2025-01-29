# OP Wikipedia - Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-85061d94-32c1-4f9a-b410-b10470cd7a0e"/>
</head>

OP Wikipedia — Partner operations can be used to search for and extract information from Wikipedia articles as well as report on the current version of the connector. Both the search and extract operations accept an input of text, JSON or XML data.

## Search operation

The Search operation uses a query string to search for relevant Wikipedia pages. The output of this operation is a JSON array of results that include the title, the URL for the page, a snippet of the article and a timestamp of its last updated date. You can configure this operation using the following parameters:

-	**Follow Redirects:** A string specifying how redirects are handled.
-	**Grouped Results:** A boolean value indicating whether to group the results by the title or not.
-	**Empty If No Results:** A boolean value indicating whether to return an empty result if no results are found.
-	**Input Type:** A value indicating what format the input is expected to be in.
-	**Search Path:** If the Input Type is JSON or XML then you will need to specify which path the input data is located.
-	**Remove HTML Tags:** A boolean indicating whether the HTML tags should be removed.
-	**Max Results:** An optional integer defining the maximum number of items returned by each request.
-	**Advanced Settings:** If this parameter is set to true then you will be able to set query parameters and request headers.

## Extract operation

The Extract operation uses a URL to extract the contents of a Wikipedia article. You can configure this operation using the following parameters:

-	**Follow Redirects:** A string specifying how redirects are handled.
-	**Empty If No Results:** A boolean value indicating whether to return an empty result if no results are found.
-	**Input Type:** A value indicating what format the input is expected to be in.
-	**Search Path:** If the Input Type is JSON or XML then you will need to specify which path the input data is located.
-	**Remove HTML Tags:** A boolean indicating whether the HTML tags should be removed.
-	**Max Results:** An optional integer defining the maximum number of items returned by each request.
-	**Advanced Settings:** If this parameter is set to true then you will be able to set query parameters and request headers.

## Version operation

Outputs the version of the build to ensure there are no mismatches between what Boomi says is being used and what is being used.
