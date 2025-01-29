# Override HTTP Method Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d420d0fd-122a-491f-bd3e-2e5c0049e34f"/>
</head>

With the Override HTTP Method policy, you can change the HTTP method provided by the initial consumer with a specified value.

## Timing

| On Request | On Response| 
|---|---|
|X||

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`method`|yes| HTTP method sent to the backend API.|HTTP method|GET|

## Example

``` json
”overide-http” : {
  "method": "GET"
}
```