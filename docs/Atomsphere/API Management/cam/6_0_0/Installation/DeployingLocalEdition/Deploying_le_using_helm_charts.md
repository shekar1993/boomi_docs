---
sidebar_position: 1
---

# Deploying Local Edition Using Helm Charts

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2f7b8770-4bcd-47c7-a0cb-026163311c42"/>
</head>

Local Edition is deployed on Kubernetes or OpenShift using Helm Charts. 

Before deploying the application, verify that the required resources are available and are accessible. For more information, see Prerequisites and Preinstallation Checklist.

Local Edition is stateless and can spread across availability zones (AZ). Based on your organizational IT policies, configure the pods for:

- [Define pod topology spread constraints](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/).

- [Define pod affinity rules and tolerances](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/).

- Follow the [Kubernetes best practices of spreading nodes across zones.](https://kubernetes.io/docs/setup/best-practices/multiple-zones/)

## Steps to deploy the application

1. Edit `values.yaml` and provide configuration. For more information, see [values.yaml](../DeployingLocalEdition/values.yaml.md).

2. Customize the Fluent Bit template as per your observability requirements.

3. Deploy the application using Helm.

4. Verify that the application is ready.
