---
sidebar_position: 2
---

# Preinstallation Checklist

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d0f55959-edb1-49cb-af8c-d2c871fb365d"/>
</head>

## Overview

Ensure that all requirements and dependencies have been resolved before starting installation.

## Synopsis

This is a planning step and this document provides a step-by-step guide for the preparatory steps before proceeding to actual cluster setup. 

This step depends on the Local Edition images that you need to create and uses the toolkit pod for some activities. For more information, see Building Images.

Before proceeding with actual cluster setup, ensure that you have all the necessary resources such as database credentials in the form of K8s secrets and the necessary access permissions available.

You may need the following expertise to complete the prerequisites:

- **Network Administrator**: To create Certs, Open Ports in firewalls, and Network settings like timeouts, packet sizes.

- **K8S Administrator**: Ability to create service accounts, namespaces, Kubernetes management (topology constraints, toleration), HA/DR posture within a region and across regions, pod management providing resources such as CPU and memory allocating limits, and scaling them.

- **Database Administrator (DBA)**: Create database and users, secure database connections with clients, add timezone information, client connection management including read, write, and connection timeouts, HA/DR posture for database by using replication within a region or across regions. A region is a location of a physical data center.

- **Full-Stack Observability Administrator**: Select your full-stack observability software such as OpenSearch, Elastic Search, or Splunk. The stack administrator must build the cluster and size the storage based on your queries per second, create users, and create indexes.

- **IT Administrator**: - Email services, LDAP or SSO integration.

- **DevOps**: To install, manage, monitor, and upgrade Local Edition.

For a complete list of required softwares and services, see [Prerequisites](../Installation/Prerequisites.md). 

## Check Required Accesses

Ideally, no escalated privileges are required for provisioning the Local Edition cluster and sudo access is rarely needed.

- In case of cloud deployments: 

  - You can sign in to the cloud provider.

  - You are signed-in to the cloud provider using the cloud provider CLI such as googlesdk, azurecli, or awscli

- You have a `Kubeconfig` file providing required access to the Kubernetes cluster and this config file is in a path that Helm can access.

  - The `Kubeconfig` file can be passed to Helm commands as `--kubeconfig`.

  - The `Kubeconfig` is available as `KUBECONFIG` environment variable.

  - The `Kubeconfig` file is accessible at `$HOME`.

## Kubernetes and OpenShift Versions and Capabilities

### Kubernetes version

```
kubectl version
Client Version: v1.28.2
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
Server Version: v1.28.3-gke.1286000
```

### OpenShift version

```
$ oc version
Client Version: 4.14.11
Kustomize Version: v5.0.1
Server Version: 4.14.11
Kubernetes Version: v1.27.10+28ed2d7
```

### Verify Kubernetes cluster

Compare the output of Cluster information. Enabling metrics is useful when troubleshooting issues with the cluster or Local Edition deployment.

```
$ kubectl cluster-info
Kubernetes control plane is running at https://104.154.231.140
GLBCDefaultBackend is running at https://104.154.231.140/api/v1/namespaces/kube-system/services/default-http-backend:http/proxy
KubeDNS is running at https://104.154.231.140/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://104.154.231.140/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy		
```

### Kubernetes Cluster Nodes

Use the following command:

```$ kubectl get nodes -o wide```

### Verify that the required namespace is usable

Typically applications are deployed in a different namespace instead of the default one. Ensure that the namespace is usable.

The namespace is important since all Kuberenetes entities for Local Edition(created by user or Helm) are created in this namespace.

:::caution

ON AKS, the default namespace cannot be used to deploy applications. Ensure that you have created the required namespace. The namespace must be provided as Helm values.

:::

### List namespace

```
$ kubectl get namespace

NAME              STATUS   AGE
default           Active   15d
<name space you have created>
```

Verify the current kubectl config has the correct namespace in the current context. 

```
$ kubectl config view --minify | grep namespace
namespace: default or <namespace you have created>
```

## Check Helm

Verify Helm installation. Run the following command:

```
$ helm version
Expected output is similar to
version.BuildInfo{Version:"v3.11.2", GitCommit:"912ebc1cd10d38d340f048efaf0abda047c3468e", GitTreeState:"clean", GoVersion:"go1.20.2"}
```

Check Helm environment.

```
$ helm env
HELM\_BIN="helm"
HELM\_BURST\_LIMIT="100"
HELM\_CACHE\_HOME="/<user-home>/.cache/helm"
HELM\_CONFIG\_HOME="/<user-home>/.config/helm"
HELM\_DATA\_HOME="/<user-home>/.local/share/helm"
HELM\_DEBUG="false"
HELM\_KUBEAPISERVER=""
HELM\_KUBEASGROUPS=""
HELM\_KUBEASUSER=""
HELM\_KUBECAFILE=""
HELM\_KUBECONTEXT=""
HELM\_KUBEINSECURE\_SKIP\_TLS\_VERIFY="false"
HELM\_KUBETLS\_SERVER\_NAME=""
HELM\_KUBETOKEN=""
HELM\_MAX\_HISTORY="10"
HELM\_NAMESPACE="default"
HELM\_PLUGINS="/<user-home>/.local/share/helm/plugins"
HELM\_REGISTRY\_CONFIG="/<user-home>/.config/helm/registry/config.json"
HELM\_REPOSITORY\_CACHE="/<user-home>/.cache/helm/repository"
HELM\_REPOSITORY\_CONFIG="/<user-home>/.config/helm/repositories.yaml"
```
