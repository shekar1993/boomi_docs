# JSON to XML Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-948d1782-9897-4ba8-9662-4604e6bff963"/>
</head>

 Transform JSON content to XML content.

 ## Timing

|On Request Content| On Response Content|
|---|---|
|X|X|

## Configuration

| Property  |Required   |Description     | Type | Default|
|---|---|---|---|---|
|`scope`|yes|The execution scope (`request` or `response`).|string| `REQUEST`|
|`rootElement`|yes|Root element name that’s enclose content.|string|`root`|

## Example

Actual JSON response:

```json
{
    "details": {
        "book": [
            {
                "category": "fiction",
                "author": "Herman Melville"
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien"
            }
        ]
    }
}
```

Policy configuration:

``` json
"json-xml": {
    "scope": "RESPONSE",
    "rootElement": "library"
}
```

XML Transformed output:

```xml
<library>
    <details>
        <book>
            <category>fiction</category>
            <author>Herman Melville</author>
        </book>
        <book>
            <category>fiction</category>
            <author>J. R. R. Tolkien</author>
        </book>
    </details>
</library>
```

## Errors

|Code|Description|
|---|---|
|`500`|The transformation cannot be executed properly|

:::note

To limit the processing time, a default max depth of a nested object is 1000.

:::
