---
sidebar_position: 2
---

# Uninstalling Local Edition Using Helm

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2061c1a5-e8e6-4b55-b05a-9aee394b9c49"/>
</head>

## Procedure

1. Identify an application to undeploy. 

   ```
   $ helm list

   NAME        NAMESPACE   REVISION    UPDATED                                 STATUS      CHART       APP VERSION

   apim-trials default     1           2023-10-19 12:20:44.480273142 -0700 PDT deployed    apim-6.0.0  1.0
   ```

   apim-trials application is the release name.

2. Uninstall the application. 

   ```
   $ helm uninstall apim-trials
   ```

:::note
   
   Helm does not support uninstalling a specific version.

:::

## Result

Uninstallation of the application is successful. 

## What to do next

Verify whether all Kubernetes resources that are created when deploying an application are removed. 
