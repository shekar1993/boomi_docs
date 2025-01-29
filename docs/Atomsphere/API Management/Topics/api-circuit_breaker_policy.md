# Circuit Breaker Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-dcaa00a9-a5a0-48f2-a030-ed5e34b7730d"/>
</head>

With the Circuit Breaker policy, you can define failure thresholds. When the threshold is met, you can redirect or fail with a `503 Service Unavailable` error.

  :::note
  If the Circuit Breaker policy is applied to an API, it takes precedence and the max retry attempts configured in execution settings are ignored. 
  :::

## Timing

| On Request | On Response| 
|---|---|
|X||

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`failureRateThreshold`|yes| Failure rate threshold before the circuit breaker switches to open state. A failure represents a response status code greater than or equal to 500. The threshold is expressed as a percentage.|integer (minimum 0, maximum 100)|50|
|`slowCallRateThreshold`|yes| Slow call rate threshold before the circuit breaker switches to open state. A slow call is represented by a response time greater than the configured `slowCallDurationThreshold`. The threshold is expressed as a percentage.|integer (min. 0, max.100)|50|
|`slowCallDurationThreshold`|yes| The duration threshold above which a call is considered as slow, increasing `slowCallRateThreshold`. The duration is expressed in milliseconds.|integer (minimum 1)|1000|
|`windowSize`|yes|The size of the sliding window which that records the outcome of calls when the circuit is closed.|integer(minimum >0) |100|
|`waitDurationInOpenState`|yes| The duration in milliseconds before switching from open circuit to half-open.|integer (minimum 1)|1000|
|`redirectToURL`|no| Redirect the call to the given URL instead of returning `503 Service Unavailable` status (supports Expression Language)|string||
|`headers`|no|Append additional headers to the redirect request.|array||


## Example

``` json
{
  "failureRateThreshold": 50,
  "slowCallRateThreshold": 50,
  "slowCallDurationThreshold": 1000,
  "windowSize": 100,
  "waitDurationInOpenState": 1000,
  "redirectToURL": "",
  "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        }
    ]
}
```