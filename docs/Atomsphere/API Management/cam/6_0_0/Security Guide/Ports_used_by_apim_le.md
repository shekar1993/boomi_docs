---
sidebar_position: 9
---

# Ports Used By Local Edition

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cb8f9faf-4b8b-4968-aa0e-948a12deae7f"/>
</head>

There are two kinds of ports in Local Edition. 

- Public ports on which services are exposed outside of the cluster. These are applicable to Load Balancer (LB) services. 

- The second type of port is cluster only ports. These ports are defined for services of type ClusterIP. These ports are used for inter-component networking. You can change the type of service using Helm values. 

You can also configure LB services as ClusterIP and expose them using ingress controllers. Some ports are not bound to any service but are exposed by individual pods. These ports are used by liveness and readiness probes for checking and maintaining the availability of the pods.

## cache-svc

|Ports|Scope|Notes|
| :- | :- | :- |
|8080|ClusterIP|HTTP port for cache clients using REST protocol.|
|10080|ClusterIP|Ignite thin clients that need to connect to a Ignite pod directly.|

## cache-deploy

|Ports|Scope|Notes|
| :- | :- | :- |
|47100|ClusterIP|Port for members of Ignite ring to commuicate via gossip protocol.|
|47500|ClusterIP|Port for members of Ignite ring to discover each other and maintain the ring.|
|49112| |JMX port|
|10800| |Maps to cache-svc:10080|
|8080| |Maps to cache-svc:8080|

## cacheloader-svc

|Ports|Scope|Notes|
| :- | :- | :- |
|8082|ClusterIP|HTTP and generic TCP port for k8s cron jobs - loader-delta, loader-full,startup-loader to invoke data loading into cache.|

## cacheloader-deploy

|Ports|Scope|Notes|
| :- | :- | :- |
|8082| |HTTP port bound to cacheloader-svc:8082. This same probe is used by the cacheloader's startup, liveness and readiness probes.|

## configui-svc

|Ports|Scope|Notes|
| :- | :- | :- |
|80|LB|HTTP port that redirects to pod's 8080 port.|
|443|LB|HTTPS port that redirect to pods' 8443 port. Needed only if HTTPS is enabled for ConfigUI.|

## configui-deploy

|Ports|Scope|Notes|
| :- | :- | :- |
|8080| |configui-svc:80|
|8443| |configui-svc:443|
|8082|Container|HTTP port used by liveness and readiness probes|

## platformapi-svc

|Ports|Scope|Notes|
| :- | :- | :- |
|7080|LB|HTTP port for allowing access to Platform API. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|
|7443|LB|HTTP port for allowing access to Platform API. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|

## platformapi-deploy

|Ports|Scope|Notes|
| :- | :- | :- |
|7080| | |
|7443| |Maps to platformapi-svc:7443|
|8082|Container|HTTP port used by liveness and readiness probes.|

## trafficmanager-svc

|Ports|Scope|Notes|
| :- | :- | :- |
|80|LB|HTTP port for traffic calls. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|
|443|LB|HTTP port for traffic calls. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|
|1443|LB|HTTPS with mTLS port for traffic calls. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|

## trafficmanager-deploy

|Ports|Scope|Notes|
| :- | :- | :- |
|20080| |Maps to trafficmanager-svc:80. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|
|20443| |Maps to trafficmanager-svc:443. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|
|1443| |Maps to trafficmanager-svc:1443. Depending on your needs, you can make this ClusterIP using values .Values.global.k8sServiceType.|
|8082|Container|Port used by startup, liveness and readiness probes.|

## trafficmanager-deploy/fluent-bit

|Ports|Scope|Notes|
| :- | :- | :- |
|24320|Container|Verbose Logging : when enabled traffic manager writes request metadata to this port using the fluent-bit FORWARD protocol|
|24321|Container|Verbose Logging : when enabled traffic manager writes inbound request headers and payload to this port using the fluent-bit FORWARD protocol|
|24322|Container|Verbose Logging : when enabled traffic manager writes target request headers and payload to this port using the fluent-bit FORWARD protocol|
|24323|Container|Verbose Logging : when enabled traffic manager writes target response headers and payload to this port using the fluent-bit FORWARD protocol|
|24324|Container|Verbose Logging : when enabled traffic manager writes outbound response headers and payload to this port using the fluent-bit FORWARD protocol|

## fluent-bit common

|Ports|Scope|Notes|
| :- | :- | :- |
|2020|Container|Port used by fluent-bits liveness and readiness probes.|

