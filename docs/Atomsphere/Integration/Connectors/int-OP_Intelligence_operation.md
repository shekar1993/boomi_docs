# OP Intelligence - Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1fd1583d-9da3-4b13-b424-8b905c6a73e5"/>
</head>

OP Intelligence — Partner operations provide powerful capabilities for text processing and conversational AI. They can generate embeddings for input text—producing vector representations useful for tasks like similarity search and semantic analysis—and support dynamic chat interactions by handling input within a conversation flow. Additionally, these operations can generate responses based on user input, system prompts, and specified settings. The connector also offers a reporting feature to check the current version, ensuring users have up-to-date information.

## Embeddings operation

The Embeddings operation generates vector representations (embeddings) for input text, capturing semantic meaning for applications like similarity search, clustering, and classification. The output is a JSON object containing the embedding vector, along with metadata like input token usage. You can configure this operation using the following parameters:

-	**Follow Redirects:** A string specifying how redirects are handled.
-	**Input Type:** A value indicating what format the input is expected to be in.
-	**Model:** An optional string that overrides the default	LLM model defined in the connection.
-	**Advanced Settings:** If this parameter is set to true then you will be able to set query parameters and request headers.

## Chat operation

The Chat operation allows you to engage in conversational AI by sending user input within a dialogue context. This operation processes messages using system prompts and user-defined settings, generating dynamic responses based on input. The output includes the generated response content, any metadata related to the conversation flow, and tracked properties like input and output tokens. You can configure this operation using the following parameters:

-	**Follow Redirects:** A string specifying how redirects are handled.
-	**Input Type:** A value indicating what format the input is expected to be in.
-	**Model:** An optional string that overrides the default LLM model defined in the connection.
-	**Temperature:** An optional string that controls how “creative” or “random” the answers from a model can be. A low temperature, like 0.2, makes the model safer, and more predictable words. A high temperature, like 0.8, makes the model take more risks and pick fewer common words, leading to more surprising or creative answers. (Mandatory for some models)
-	**Protect System Prompt?:** Protects the system prompts within the process.
-	**System Prompt:** An optional string that provides the model with specific instructions or context before it starts generating text.
-	**User Prompt Tips:** An optional string that guides the AI on how to communicate with you effectively, such as preferred tone, response style.
-	**Reply Type:** A string that defines the format of the response (Text, JSON, Tools).
-	**Reply Schema:** A string that defines the JSON schema that the reply should comply with. It should contain `title` and `description` in the specification for the model to understand better how to build that expected format. The title will be used as the tool/function name, while the description will be the tool/function description object (Only visible when the reply type is JSON).
-	**Tool Choice:** A string that determines which specific tool or capability the model uses to fulfil a request.
-	**Advanced Settings:** If this parameter is set to true then you will be able to set query parameters and request headers.

## Version

Outputs the version of the build to ensure there are no mismatches between what Boomi says is being used and what is being used.

