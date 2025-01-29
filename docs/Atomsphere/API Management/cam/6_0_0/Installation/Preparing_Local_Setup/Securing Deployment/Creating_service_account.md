---
sidebar_position: 2
---
# Creating Service Account

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bead0beb-612d-40c2-8139-4fee025226b5"/>
</head>

Deploying Local Edition requires accesses to certain resources and requires that access to those Kubernetes resources are secured by a service account and role binding.

- **Why service account is required specifically by APIM-LE?**

  Local Edition uses Apache Ignite as the caching component. All cache pods and cache clients interact by discovering each other using ignite discovery and gossip. To discover peers and gossip with them within the name space, Apache Ignite using K8s API. This service account is required to access K8s API to enable discovery of Ignite peers.

- **What RBACs are required?**

  On two resources: Pods and Endpoints, RBACs GET, LIST, and WATCH are required.

- **How to create the service account?**

  A sample `<extract location>/samples/general/apiml-role.yaml` is provided to create the service account. You can change the account name and role binding name.

## Procedure

1. Copy the sample file or create a new file.

2. Provide the content as specified in the following sample apiml-role.yaml:

```
  ---
  apiVersion: v1
  kind: ServiceAccount
  metadata:
  name: apiml-sa
  ---

  apiVersion: rbac.authorization.k8s.io/v1
  kind: Role
  metadata:
  name: apiml-role
  rules:
  - apiGroups:
  - ""
  resources:
  - pods
  - endpoints
  verbs:
  - get
  - list
  - watch
  ---

  apiVersion: rbac.authorization.k8s.io/v1
  kind: RoleBinding
  metadata:
  name: apiml-role-binding
  roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: apiml-role
  subjects:
  - kind: ServiceAccount
  name: apiml-sa
  
```

3. Create SA and role binding.

   ```$ kubectl apply -f <path to apiml-role.yaml>```
