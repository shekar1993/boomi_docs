# Offline flows player settings

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c0d25279-d72a-405b-99e2-bfdd92269805"/>
</head>


The customized player used to deliver an offline flow can also be configured with additional settings.

## Synchronization

The following settings can be configured in a custom flow player to define synchonization behaviour.

`instantReplay`: Allows you to modify the behaviour of the **Sync Flow** button for an offline flow.
For example:

```
offline: {
    instantReplay: true,
},
```

-   **False**: Clicking the **Sync Flow** button displays the **Go Online** form, allowing all offline requests to be viewed and replayed individually by a user as required. This is the default setting.

-   **True**: Clicking the **Sync Flow** button displays the **Go Online** form, but automatically replays all offline requests immediately before closing the form and returning the user to the flow.



## Data caching

The following data caching settings can be configured in a custom flow player.


`offline.cache.objectDataCachingInterval`: If the flow contains any data loads either in load map elements or objectdata requests from a table \(or other component\) when the user goes offline each data load is fired immediately when the flow is initialized to cache a local copy of the data.

Whilst the flow is online, each data load is fired by default every five minutes to refresh the cache. This can be overridden by modifying the `offline.cache.objectDataCachingInterval` setting which accepts a numerical value in milliseconds.


`offline.cache.requests.limit`: By default 250 records from each data load will be cached on the client. More granular control over limits per dataset can be achieved by adding the following to the `offline.cache.requests` setting:

 ```
limitByType: {
    "<type ID>":100,
    "<type ID>":150,
}
```

The keys are the type ID associated to that data load and the values are the limits.

You may wish to change this setting if you have a large number of configured in the flow.


`offline.cache.pollInterval`: In addition, whilst the flow is online, state values are being cached in memory by default every 30 seconds. This is so that values persist in the flow even if network connectivity is suddenly lost. This can be overridden by modifying the setting which accepts a numerical value in milliseconds.

State values are also being cached in memory as a user moves through the flow.
