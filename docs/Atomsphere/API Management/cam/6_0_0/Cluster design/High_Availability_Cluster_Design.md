---
sidebar_position: 4
---

# High Availability Cluster Design

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-51c7014d-9a41-4e1e-980b-9c1a3e651633"/>
</head>

Local Edition architecture is quite flexible, and can be scaled up or down as needed. But other than TPS consideration, to achieve High Availability (HA), you need to carefully design the cluster. Container orchestrators (K8S) can take care of components failure, for example, if one Local Edition component shuts down due to some reason, they will bring another one to maintain the given number of instances if all the criteria are satisfied. But to achieve HA in case of infrastructure failure (such as node failure, zone failure, etc.) of K8S, extra planning should be done before creating cluster. HA at different levels requires different planning. The following sections provide some general guidelines to achieve HA for the Local Edition cluster to work as expected.

## Cluster considerations for High Availability

### Node/Instance redundancy

If your K8S cluster has been designed just to meet a TPS requirement, then node failures might degrade Local Edition functioning. Situations can be more challenging in case you placed some deployment constraints during initial deployment without HA considerations. One such deployment constraint could be that three Cache pods should be deployed on three different nodes in a three K8S worker nodes cluster. If any node failure happens in this scenario, then the Cache pod which was running on this node is not redeployed on remaining two nodes. Unless a third node joins the K8S cluster, the Local Edition cluster works (assuming no other constraint) but remain in degraded operation mode. recommends having extra nodes in the K8S if any pod/ container deployment constraints is in place. Even in the case of no deployment constraint, extra nodes might come handy in handling throughput in case of node failure.

### Availability Zone Redundancy

Local Edition supports multi zone deployment. You can deploy Local Edition components spread across different availability zones in all major cloud platforms (AWS, Azure, GCP, etc.). In multi zone deployment, configuration and token data is continuously synced across zones by the highly available database, so even in case of a zone failure, another zone can still serve the traffic. Multi zone deployment should be considered during the initial planning phase itself. Extending the existing cluster is currently not supported. Also, out-of-the-box multi zone deployment is supported only in K8S. Scaling out or scaling down of pods/containers is needed in burst and trickle down situations to ensure that the services are resilient.

It is a good practice to have an odd number of zones for tolerance and resilience.

Cache and TM pods can scale by setting [Horizontal Pod Autoscaling (HPA)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) rules in Kubernetes. 
