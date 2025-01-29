# Traffic Shadowing Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3e49233d-578d-4788-ac6c-c3105d59a632"/>
</head>

Traffic shadowing allows you to asynchronously copy API traffic to another service. Requests are duplicated and sent to the target URL. The request can be enriched with additional headers.

  :::note
  If the Traffic Shadowing policy is applied to an API, it takes precedence and the max retry attempts configured in execution settings are ignored. 
  :::

## Timing

|On Request| On Response| On Request Content | On Response Content| 
|---|---|---|---|
|X||||

## Configuration

| Property  |Required   |Description     | Default | Example|
|---|---|---|---|---|
|`target`| yes| The shadow endpoint URL.|||
|`headers`|no|A list of HTTP headers.|||

## Example

```
{
  "traffic-shadowing": {
    "target": "http://boomitest.com/shadowApi",
    "headers": [
        {
            "name": "X-Boomi-Request-Id",
            "value": "{#request.id}"
        }
    ]
  }
}
```

