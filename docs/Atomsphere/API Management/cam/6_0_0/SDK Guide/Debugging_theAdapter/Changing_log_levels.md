---
sidebar_position: 3
---

# Changing Log Levels

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1a6b3da4-b444-4bd9-8cc1-f4ce275b8d2e"/>
</head>

The default log level for messages from the adapter is 'INFO'. To change the LogLevel to DEBUG, use the Cluster Manager commands. To change LogLevel for adapters, log in to the tml-cm container using docker exec or kubectl exec as applicable to the deployment method. 

## To list the components

Run the command: 

```clustermanager ls components```

**Example component ID listing**

```xml
clustermanager ls components

Component ID                          Component Type       Component Name       Component Status     Component Host       Component Agent Port   Component Service Port(s)

------------------------------------- -------------------- -------------------- -------------------- -------------------- ---------------------- ---------------------------

bb32be63-2a72-455e-9ffd-3e65174d119a  logservice           log                  ACTIVE               10.0.0.9             9080                   24224
d9927ae6-8135-4360-8031-4493e2cfd9e6  sql                  sql                  ACTIVE               10.0.0.11            9080                   3306
d2b75938-bcd5-40e9-b260-41abb0418ba7  nosql                nosql                ACTIVE               10.0.0.5             9080                   9042
fca40c79-36eb-4599-a0b4-bbe417d7bbbd  cache                cache                ACTIVE               10.0.0.13            9080                   11212,11211,11213,11214,11215,11216
1bdbc338-946d-42df-a535-5f72b0144372  trafficmanager       tm                   ACTIVE               10.0.0.16            9080                   8080
388ca01b-1442-4a5e-856c-775325af8bbd  trafficmanager       tm                   ACTIVE               10.0.0.15            9080                   8080
```

The component type for the Traffic Manager is *trafficmanager*. 

## To see current Log Level for custom adapters

Run the command: 

```clustermanager ls loggers --componentType trafficmanager --componentId <component id>```

**Output of List Loggers**

```xml

clusterId [1cac153d-48db-4d5c-b3fc-9d25673ee536] and zoneId [a127e639-737c-4220-b42f-da9f14e939dc]

Using cluster name [Tibco APIM-LE  Reference Cluster]
Using Zone name [local]
Using Component ID [1bdbc338-946d-42df-a535-5f72b0144372] of type [trafficmanager]
LoggerName                                                   LogLevel   Process
------------------------------------------------------------ ---------- --------------------
...A list of other loggers...                                INFO
MasheryCustomAdapter                                         INFO
```

## To change log level for custom adapters

Run the command: 

```clustermanager set loglevel --componentType trafficmanager --logLevel DEBUG --loggerName MasheryCustomAdapter```

Acceptable values for log level are: 

- OFF 
- INFO 
- DEBUG 
- WARN 
- ERROR 

:::note

It takes some time for the Log Level change to be reflected in the traffic manager. 

:::

## To verify that the LogLevel has changed

Command to list loggers on the traffic manager: 

```clustermanager ls loggers --componentType trafficmanager --componentId <component id> ```

```xml
clusterId [1cac153d-48db-4d5c-b3fc-9d25673ee536] and zoneId [a127e639-737c-4220-b42f-da9f14e939dc]
Using cluster name [Tibco APIM-LE  Reference Cluster]
Using Zone name [local]
Using Component ID [1bdbc338-946d-42df-a535-5f72b0144372] of type [trafficmanager]
LoggerName                                                   LogLevel   Process
------------------------------------------------------------ ---------- --------------------
...A list of other loggers...                                INFO
MasheryCustomAdapter                                         DEBUG
```
