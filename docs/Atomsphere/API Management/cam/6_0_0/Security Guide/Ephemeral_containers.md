---
sidebar_position: 5
---

# Ephemeral Containers

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d68c19a5-6a50-40ff-bda7-d158b5f53f14"/>
</head>

Since all containers are shell-less, troubleshooting issues becomes difficult. For example, how does one take a thread or heap dump of a process? 

K8s provides a way to attach ephemeral containers to running pods. Ephemeral containers provide a way to access resources in the main pod. 

:::note

Cluster admins must define role based access controls (RBACs) or policies for ephemeral containers.

:::

For more information, see [Ephemeral Containers](https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/) in Kubernetes documentation.
