# Expression Language Basic Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-081a1b01-9f92-458b-bbb8-411ed62bb76f"/>
</head>

## Syntax

**Expressions**

Expressions are enclosed in curly braces `{}` and begin with the `#` symbol. Both dot notation and bracket notation are supported for accessing the properties of an object.

Example: `{#context.attributes['user'].email}`

    :::note
    
    Dot notation will not work with special characters:

    `{#request.headers.my-header}` will result in an error.

    Bracket notation should be used for property names that include a space or a hyphen, or start with a number:

    `{#request.headers['my-header']}`

**Lists**

- Expressions can be used to assign lists, for example, `{({'admin', 'writer'})}`

- The outer enclosing brackets start and end the EL expression.

- The parentheses indicates an object is being instantiated.

- The list comprises the inner brackets and enclosed values, for example, `{'admin', 'writer'}`.

## Object Properties

EL allows you to reference certain values injected into the EL context as object properties. 
- `{#endpoints}`: Contains information about the Gateway API's respective endpoints.
- `{#request}`: Contains information about the current API request.
- `{#response}`: Contains information about the current API response.

## Attributes

The `attributes` object property contains attributes that are automatically created by the APIM Gateway during an API transaction or added during the execution phase through the [Assign Attributes policy](/docs/Atomsphere/API%20Management/Topics/api-assign_attributes_policy.md).

- `{#context.attributes}`: Contains attributes associated with Proxy APIs. 

## Operators

EL supports various operators, such as arithmetic, logical, comparison, and ternary operators. Examples of commonly used operators include:

- Arithmetic operators: `+`, `-`, `*`, `/`
- Logical operators: `&&` (logical and), `||` (logical or), `!` (logical not)
- Comparison operators: `==`, `!=`, `<`, `<=`, `>`, `>=`
- Ternary operators: `condition ? expression1 : expression2`

## Functions

EL provides a variety of built-in functions to manipulate and transform data in expressions. Examples of commonly used functions include:
- String functions: `length()`, `substring()`, `replace()`
- `#jsonPath`: Evaluates a `jsonPath` on a specified object. This function invokes `JsonPathUtils.evaluate(…​)`, which delegates to the [Jayway JsonPath library](https://github.com/json-path/JsonPath). The best way to learn jsonPath syntax is by using the [online evaluator](https://jsonpath.com/). 
- `#xpath`: To evaluate an `xpath` on some provided object. For more information regarding XML and XPath, see [XML Support - Dealing with XML Payloads](https://docs.spring.io/spring-integration/docs/5.5.11/reference/html/xml.html).

**jsonPath example**

As an example of how `jsonPath` can be used with EL, if you have a JSON payload in the request body that contains the following data:

``` json
{
  "store": {
    "book": [
      {
        "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      {
        "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ]
  }
}
```

To extract the value of the `price` property for the book with `title` "The Lord of the Rings," you can use the following expression:

``` json
{#jsonPath(#request.content, "$.store.book[?(@.title=='The Lord of the Rings')].price")}
```
