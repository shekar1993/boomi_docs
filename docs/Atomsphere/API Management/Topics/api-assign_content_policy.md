# Assign Content Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3d89cbcc-5317-42e6-bf7d-b0e2fff6aa0a"/>
</head>

The `assign-content` policy changes or transforms the content of the request/response body or message.

This policy is compatible with the [Freemarker](https://freemarker.apache.org/) template engine, which allows you to apply complex transformations, such as transforming from XML to JSON and JSON to XML.

By default, you can access multiple objects from the template context — request and response bodies, dictionaries, context attributes, and more.

| On Request | On Response|  On Request Content | On Response Content |
|---|---|---|---|
|   |   |X|X|

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`scope`|yes|The execution scope of the policy.|scope|REQUEST|
|`body`|yes|The data to push as request or response body content.|string||



```
 "policy-assign-content": {
    "scope":"REQUEST",
    "body":"Put your content here"
}
```

## Examples

Example of Request body built from header:

``` json
"configuration": {
   "scope": "REQUEST",
   "body": "Request body built from header 'requestHeader' and content: ${request.headers['requestHeader'][0]}"
}
```
**Policy example to transform response from JSON to XML**

Incoming response body content:

``` json
{
  "id": 4,
  "first_name": "Fiona",
  "last_name": "Noirel",
  "email": "fnoirel@example.edu",
  "gender": "Male"
}
```

configuration scope: RESPONSE

configuration body:

``` xml
<#assign body = response.content?eval>
<?xml version='1.0' encoding='UTF-8'?>
<dataset>
    <record>
        <id>${body.id}</id>
        <first_name>${body.first_name}</first_name>
        <last_name>${body.last_name}</last_name>
        <email>${body.email}</email>
        <gender>${body.gender}</gender>
    </record>
</dataset>
```

Expected output:

``` xml
<?xml version='1.0' encoding='UTF-8'?>
<dataset>
    <record>
        <id>4</id>
        <first_name>Fiona</first_name>
        <last_name>Noirel</last_name>
        <email>fnoirel@example.edu</email>
        <gender>Male</gender>
    </record>
</dataset>
```

## Errors

HTTP status code

|Code|Message|
|---|---|
|`500`|The body content cannot be transformed|


