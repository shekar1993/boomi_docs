---
sidebar_position: 3
---

# Pod - Level Sizing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d6ed9abf-d5e6-49f7-863f-bef2d2f42ee8"/>
</head>

Cluster sizing recommends the number of pods of each type that are required for different Queries per Seconds (QPS).

## Pod or Container Sizing

Pod sizing covers two aspects- the resources required by a pod and the number of pods required for a given QPS and number of refresh token requests for OAuth.

The sizing guidelines are generic and resource requirements vary by factors like average payload per traffic request and response, size of configuration, and number of OAuth (refresh + create tokens) requests.

## Pod Characteristics
  
| Pod Type | Memory Usage | CPU Usage | Storage Usage | Network |
| --- | --- | --- | --- | --- |
| cache | High (for content caching) | High | Low | High (depending on traffic) |
| configui | Normal | Normal | Low | Low |
| cacheloader | Low | Low | Low | Low |
| platformapi | Low | Low | Low | Low |
| trafficmanager (TM) | High (It has a lot of G1GC young gc activity) | High | Low | High (depending on traffic) |

## Resource Limits and Requests

Requests are initial allocation of resources and limits define the max memory or CPU a pod can utilize.

We can define limits for CPU or CPU time, and memory required. When defining limits a general recommendation is to set the value for requests to half of the limit. A general rule of thumb is to allow a 20% overhead or bump up space for memory and CPU and to ensure that the application is not paging.

By defining resource limits, you have the following benefits:

- Pods and containers consume resources and there are situations where one pod can consume more resources leaving other pods starved for them; a starved pod is restarted.

- Memory leaks in the application drain nodes of memory

- Optimizes use of resources instead of over-provisioning

- Allows for automatic horizontal scaling of Cache and traffic manager pods

For more information about units of resource:

- For Kubernetes, see [Resource Units in Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes)

- For docker, see [Runtime options with Memory, CPUs, and GPUs](https://docs.docker.com/config/containers/resource_constraints/)

## Kubernetes Pod Sizing

:::caution

1.  The following data captured is for indicative recommendations only.
2.  You can choose to vertically scale by providing higher CPU and memory requests and limits.

:::

Each component pod runs a Fluent Bit container sidecar. The CPU and memory utilization figures also include the figures for Fluent Bit container.

## Idle state utilization observed

| Service | Number of Pods | Expected Utilization per Pod |     |
| --- | --- | --- | --- |
|     |     | Memory | CPU |
| TM  | 3   | 4.7 GB | 15m/0.015 CPU core |
| cache | 3   | 1.2 GB | 25m/0.025 CPU core |
| cacheloader | 1   | 1.2 GB | 30m/0.03 CPU core |
| configUI | 1   | 600 MB | 20m/0.02 CPU core |
| platformapi | 1   | 1.4 GB | 30m/0.03CPU core |

## Memory sizing

Every pod hosts a fluent-bit container. The memory utilization is usually driven by the Java Virtual Machine (JVM) max heap size to which an overhead due to the non-heap usage (OS native java binary/libraries) and the memory footprint of the fluent-bit container are added.

All components (except for configui) execute in a JVM

For the medium (multi-zone) cluster:
  
| Service | Memory Utilization per Pod |     |     |
| --- | --- | --- | --- |
|     | Base Memory Usage | overhead | Including margin |
| TM  | 4 GB | 0.7 GB | 4.9 GB |
| cache | 1 GB | 300 MB | 1.5 GB |
| cacheloader | 1 GB | 200 MB | 1.3 GB |
| configUI | 600 MB | 150 MB | 750 MB |
| platformapi | 2 GB | 400 MB | 2.5 GB |

## Sizing for the components that are not directly involved in traffic handling

The resource allocation for the cacheloader, configUI, and platformapi components does not depend on volume of traffic handled by the traffic manager component.

|     |     |     |     |
| --- | --- | --- | --- |  
| Service | Number of Pods | Resource Utilization per Pod |     |
|     |     | Memory | CPU |
| cacheloader | 1   | 1.2 GB | 1 CPU core |
| configUI | 1   | 600 MB | 1 CPU core |
| platformapi | 1   | 1.4 GB | 1 CPU core |

## Sizing for the multi-zone cluster topology

**500 QPS**

| Service | Recommended Number of Pods | Minimum Number of Pods | Recommended Number of Nodes per zone | Minimum Number of Nodes per Zone | Observed CPU utilization per pod | CPU limit inclusive of 25% margin |
| --- | --- | --- | --- | --- | --- | --- |  
| TM  | 6   | 3   | 3   | 2   | 900m/0.9 CPU cores | 1125m/1.2 CPU cores |
| cache | 3   | 3   | 3   | 2   | 500m/0.5 CPU core | 625m/0.63 CPU cores |

**1500 QPS**

| Service | Recommended Number of Pods | Minimum Number of Pods | Recommended Number of Nodes per zone | Minimum Number of Nodes per Zone | Observed CPU utilization per pod | CPU limit inclusive of 25% margin |
| --- | --- | --- | --- | --- | --- | --- |  
| TM  | 6   | 3   | 3   | 2   | 2500m/2.5 CPU cores | 3125m/3.2 CPU cores |
| cache | 3   | 3   | 3   | 2   | 750m/0.75 CPU core | 950m/1 CPU cores |

**3000 QPS**

| Service | Recommended Number of Pods | Minimum Number of Pods | Recommended Number of Nodes per zone | Minimum Number of Nodes per Zone | Observed CPU utilization per pod | CPU limit inclusive of 25% margin |
| --- | --- | --- | --- | --- | --- | --- |  
| TM  | 6   | 3   | 3   | 2   | 5300m/5.3 CPU cores | 6650m/6.7 CPU cores |
| cache | 3   | 3   | 3   | 2   | 1000m/1 CPU core | 1250m/1.3 CPU cores |

## Fault tolerance considerations

For the recommended configuration: having 2 TM + 1 Cache pod per zone, each on distinct node, affords one

- tolerance for the loss of up to 3 TM pods or 3 TM-hosting nodes

- tolerance for the loss of two cache-hosting node

- tolerance for the loss of all the pods from a zone and of up to a 1 TM and 2 cache pods (or of their hosting nodes)
    
For the minimal configuration: having 1 TM + 1 Cache pod per zone, each on distinct node, affords one

- degraded mode operation in the event of a loss of a TM-hosting node or of an entire zone (the surviving 2 pods may not have enough CPU to handle all the traffic)

- tolerance for the loss of up to two cache-hosting nodes

## Sizing for the small single zone cluster topology

**500 QPS**

| Service | Recommended Number of Pods | Minimum Number of Pods | Observed CPU utilization per pod | CPU limit inclusive of 25% margin |
| --- | --- | --- | --- | --- |  
| TM  | 3   | 2   | 1050m/1.05 CPU cores | 1125m/1.2 CPU cores |
| cache | 3   | 2   | 270m/0.27 CPU core | 340m/0.4 CPU cores |

:::caution

Pod performance is dependent on factors like a network in most cases, and, for the fluent-bit containers, the storage speed. Each TM pod can handle a limited number of concurrent calls configured via the jetty\_pool\_maxthreads parameter (defaults value set in trafficmanager's `values.yaml` configuration file is 512). Having more small (in terms of CPU allocation) TM pods vs fewer larger TM pods would allow for a better handling of situations where back-ends are slow to respond. The peak CPU utilization also depends on the JVM garbage collection (GC) activity, not on just the traffic volume.

:::

Requirements for different QPS shown here are based on actual observation. Horizontal Pod Autoscaling (HPA) was not in effect during the load testing.

## Pod affinities vis-à-vis placement on nodes

In the case where users would not like to request and set resource limits, the resource usage characteristics of each pod dictate the placement of workloads on nodes. HA deployment also dictates that pods of same type don't end up on same node. The TM and Cache are critical components; one should therefore avoid having a TM and a Cache pod hosted by the same node - anti-affinity.

| Pod/Node affinity | Platform API | cacheloader | configUI | cache | TM  |
| --- | --- | --- | --- | --- | --- |  
| Platform API |![](../Images/not_compatible.png) | ![](../Images/compatible.png) | ![](../Images/compatible.png)  | ![](../Images/compatible.png)  | ![](../Images/compatible.png) |
| cacheloader | ![](../Images/compatible.png)  | ![](../Images/not_compatible.png) | ![](../Images/compatible.png)  | ![](../Images/compatible.png)  | ![](../Images/compatible.png)  |
| configUI | ![](../Images/compatible.png)  | ![](../Images/compatible.png) | ![](../Images/not_compatible.png) | ![](../Images/compatible.png)  | ![](../Images/compatible.png)  |
| cache | ![](../Images/compatible.png)  | ![](../Images/compatible.png)  | ![](../Images/compatible.png)  |![](../Images/not_compatible.png) | ![](../Images/not_compatible.png)|
| TM  | ![](../Images/compatible.png)  | ![](../Images/compatible.png) | ![](../Images/compatible.png) | ![](../Images/not_compatible.png) |![](../Images/not_compatible.png) |

## Networking considerations

- Local Edition is compatible with all CNCF certified CNI's.

- Make sure the POD network is initialized with a unique set of CIDR.

- Services should be properly deployed with a unique service IP for POD-POD communication

## Storage considerations

The Local Edition 6.0.0 components are stateless/ persistent volume-less.

The database accommodates the following non-API definition objects:

- Daily or monthly counters.

- OAuth tokens: A million tokens would require 1.1 GB (Table+Index+binlog).

- Configuration data: Requires 2 GB storage.

It is important that the console logs size and number of log archives are set so that enough can be stored before rollover/loss of logs happens before Fluent Bit container is ready and able to publish the logs to the observability stack.

You can configure two kubelet [configuration settings](https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/), `containerLogMaxSize` and `containerLogMaxFiles`, using the [kubelet configuration file](https://kubernetes.io/docs/tasks/administer-cluster/kubelet-config-file/). These settings let you configure the maximum size for each log file and the maximum number of files allowed for each container respectively. 

For more information, see [Kubernetes Logging Architecture](https://kubernetes.io/docs/concepts/cluster-administration/logging/).