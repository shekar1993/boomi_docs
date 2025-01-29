# Groovy Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6bfe1611-d6cc-4ab5-bb18-16d6916dfbec"/>
</head>

You can use the Groovy policy to run Groovy scripts at any stage of request processing through the Gateway.

## Timing

|On Request| On Response| On Request Content | On Response Content| 
|---|---|---|---|
|X|X|X|X|

## Usage
Some variables are automatically bound to the Groovy script to allow users to use them and define the policy behavior.

Groovy script variables:

|Name|Description|
|---|---|
|`request`|Inbound HTTP request.|
|`response`|Outbound HTTP response.|
|`context`|`PolicyContext` used to access external components such as services and resources.
|`result`|Groovy script result. Request or response processing can be interrupted by setting the result state to `FAILURE`. By default, it will throw a `500 - internal server error`, but you can override this behavior with the following properties: - `code`: An HTTP status code - `error`: The error message.|

### Request properties
You can access the following properties in `RequestContentScript` and `RequestScript`:

  :::note
  `content` is not available in `RequestScript`.
  :::

|Property|Description|Type|
|---|---|---|
|`id`|Identifier|string|
|`transactionId`|Transaction identifier|string|
|`uri`|URL|string|
|`path`|Path|string|
|`pathInfo`|Path info|string|
|`params`|Query parameters|key/value|
|`pathParams`|Path parameters|key/value|
|`contextPath`|Context path|string|
|`headers`|Headers|key/value|
|`method`|HTTP method|string|
|`scheme`|HTTP scheme|string|
|`version`|HTTP version|string|
|`timestamp`|Timestamp|long|
|`remoteAddress`|Remote address|string|
|`localAddress`|Local address|string|
|`content`|Body content|string|

### Response properties
You can access the following properties in `ResponseContentScript` and `ResponseScript`:

  :::note
  `content` is not available in `ResponseScript`.
  :::

|Property|Description|Type|
|---|---|---|
|`content`|Body content|string|
|`headers`|Headers|key/value|
|`status`|Status of the HTTP response|integer|

### Context properties
You can access the following properties in `RequestScript`, `RequestContentScript`,`ResponseScript`, `ResponseContentScript`:

|Property|Description|Type|
|---|---|---|
|`context-path`|Context-path|string|
|`resolved-path`|The path defined in policies|string|
|`application`|The authenticated application performing the incoming HTTP request|string|
|`api`|Called API|string|
|`user-id`|The user identifier of incoming HTTP request: - The subscription id for api-key based plan - Remote IP for keyless based plan|string|
|`plan`|Plan used to manage incoming HTTP request|string|
|`api-key`|The api-key used (in case of an api-key based plan)|string|

### Result properties

|Property|Description|Type|
|---|---|---|
|`state`|State of policy result|`State[SUCCESS,FAILURE]`|
|`code`|HTTP status code|Status code|
|`error`|Error message|string|





## Example 1
The following example Groovy script is executed during the `OnRequestContent` phase to filter JSON input based on the value provided in the request query parameter.

API input JSON:

```json

{
  "StudentDatabase": {
    "student": [
      {
        "name": "Alice Johnson",
        "age": 20,
        "major": "Computer-Science",
        "student_id": "S123456"
      },
      {
        "name": "Bob Smith",
        "age": 22,
        "major": "Literature",
        "student_id": "S654321"
      },
      {
        "name": "Charlie Brown",
        "age": 21,
        "major": "Computer-Science",
        "student_id": "S789012"
      }
    ]
  }
}
```

Groovy script:

```
import groovy.json.JsonSlurper
import groovy.json.JsonOutput
// Parse the JSON string
def jsonSlurper = new JsonSlurper()
def jsonObject = jsonSlurper.parseText(request.content)
def resultJson
if (request.parameters().toSingleValueMap().isEmpty()) {
    // Return error message of Major is not provided
    result.state = State.FAILURE;
    result.code = 404
    result.error = 'Student details not found. Please provide major value to get student details'
} else {
    // Find students with the given major
    def studentsWithMajor = jsonObject.StudentDatabase.student.findAll { it.major == request.parameters['major'][0] }
    // Convert the result back to JSON string if found
    resultJson = studentsWithMajor ? JsonOutput.toJson(studentsWithMajor) : "No students found for the specified major"
    return resultJson
}
```

Query param value: `?major=Computer-Science`

Expected output:

``` json
[
    {
        "name": "Alice Johnson",
        "age": 20,
        "major": "Computer-Science",
        "student_id": "S123456"
    },
    {
        "name": "Charlie Brown",
        "age": 21,
        "major": "Computer-Science",
        "student_id": "S789012"
    }
]
```
## Example 2
The following Groovy script example is executed during the `OnResponseContent` phase to add additional values to the response.

API output JSON:

``` json

{
  "Library": {
    "book": [
      {
        "category": "fiction",
        "author": "Jane Austen",
        "title": "Pride and Prejudice",
        "isbn": "978-0-123456-47-2",
        "price": 12.99
      }
    ]
  }
}

```

Groovy script:

```
import groovy.json.JsonSlurper
import groovy.json.JsonOutput
def jsonObject = new JsonSlurper().parseText(response.content)
def newBook = [
    category: "non-fiction",
    author: "Yuval Noah Harari",
    title: "Sapiens: A Brief History of Humankind",
    isbn: "978-0062316097",
    price: 14.99
]
//Adding new book details to book array
jsonObject.Library.book << newBook
//Removing isbn element
jsonObject.Library.book[0].remove('isbn')
jsonObject.Library.book[1].remove('isbn')
//getting current contentType header
response.headers.'Old-Content-Type' = response.headers['Content-Type'][0]
//Updating contentType header
response.headers.'Content-Type' = 'text/json'
//Adding new header,getting value from context
response.headers.'Api-id' = context.getAttribute('api')
def updatedJsonString = JsonOutput.toJson(jsonObject)
return updatedJsonString
```

Expected output:

``` json
{
    "Library": {
        "book": [
            {
                "category": "fiction",
                "author": "Jane Austen",
                "title": "Pride and Prejudice",
                "price": 12.99
            },
            {
                "category": "non-fiction",
                "author": "Yuval Noah Harari",
                "title": "Sapiens: A Brief History of Humankind",
                "price": 14.99
            }
        ]
    }
}
```

## Sandbox

Groovy policy comes with a native sandbox feature allowing to safely run Groovy scripts. The sandbox is based on a predefined list of allowed methods, fields, constructors, and annotations.

The complete allow list can be found [here](api-groovy_policy_allow_list). This list should be enough for almost all possible use cases. If you have specific needs which are not allowed by the built-in allow list, you can extend the list adding the Gateway container property `com.boomi.container.apigateway.policy.groovy.whitelist.classes`. Only list of classes allowed with comma separator.

Example:
`com.boomi.container.apigateway.policy.groovy.whitelist.classes=java.time.LocalTime,java.time.Duration,java.time.OffsetDateTime`