import PartnerSupport from './_PartnerSupport.md'

# OP Intelligence - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-50397220-7cf0-4c11-b553-b6fb4909cdf9"/>
</head>

<PartnerSupport />

The OP Intelligence — Partner Connector offers robust integration with various LLMs (Large Language Models), providing text embedding, chat completions, and model management functionalities. This connector facilitates seamless integration with a range of LLMs, allowing users to access a wealth of information effortlessly.

:::note

The documentation for this connector is provided by a partner.

:::

## Connector configuration

To configure the connector, set up the following two components:

- OP Intelligence connection: The connection contains all connection settings.
- OP Intelligence operation: Represents an action used to interact with the provider.

## Prerequisites

The connector requires the following:

- Access to an LLM Provider
- Atom running with Java 11

## Tracked Properties

This connector has the following tracked properties that you can set or reference in various step parameters:

-	**Request ID:** The unique identifier for each request made through the connector.

-	**Input Tokens:** The request sent to the LLM API, containing the text or data for processing.

-	**Output Tokens:** The response received from the LLM API, which includes the output text or data.

-	**Finish Reason:** The reason why the request was completed, such as `completed`, `stopped`, or `error`.

-	**Tool Call ID:** A unique identifier for each call made to a specific tool or function within the connector.
	
-	**Tool Call Name:** The name of the tool or function that was executed during the request.
	
-	**Response Fingerprint:** A hash or unique identifier generated based on the output tokens, useful for comparing responses.
	
-	**Reasoning:** An explanation or summary of the logic that led to generating the output tokens.
