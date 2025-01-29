# XML Validation Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6a1b4e53-5b5d-4d07-81d4-cbf958a98973"/>
</head>

The `xml-validation` policy validates XML using an XSD schema. This policy uses `javax.xml`. A `400 BAD REQUEST` error is received with a custom error message body when validation fails.

## Timing


| On Request Content | On Response Content |
|---|---|
|  X |   |

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
| `errorMessage` | no|Custom error message in XML format. Spel is allowed. | string| validation/internal|
|`xsdSchema`|yes|XSD schema |string ||

## Errors

HTTP Response Code

| Code | Message|
|---|---|
|`400` | Applies to invalid payload, invalid XSD schema, invalid error message XML format.
