---
sidebar_position: 5
---

# Installing Local Edition

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e4925c47-69ea-4f20-ab29-172c4c19912a"/>
</head>

Installing Local Edition is made simple using Helm.

## Installing with edited values.yaml

1. Run the following command:

   ```
   $ cd <extract location>
   $ helm install apim deploy	
   ```				

   The expected sample output is as follows: 

   ```
   NAME: apim
   LAST DEPLOYED: Fri Oct 13 08:01:54 2023
   NAMESPACE: default
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   ```

2. Get the list of pods. 

   ```
   $ kubectl get pods

   NAME                      		       READY       STATUS    RESTARTS     AGE

   cache-7c57dc65f8-5d2gr            	    6/6     Running     0            3d
   cacheloader-deploy-545d9fbd89-2clvn     1/1     Running     0            3d
   configui-deploy-8557886855-kccv7        1/1     Running     1 (3d ago)   3d
   fluent-bit-n292t                        1/1     Running     0            3d
   loader-job-delta-28291155-zgtg2         0/1     Completed   0            9m45s
   loader-job-full-28290240-xh2n2          0/1     Completed   0            15h
   platformapi-deploy-69fc545d49-f4cq7     1/1     Running     0            3d
   startup-cacheloader-job-9fqlc           0/1     Completed   0            3d
   trafficmanager-deploy-8c564cf5b-t8bqk   2/2     Running     0            3d
   ```

## Installing using an over-rides file

### Procedure

1. Run the following command:

   ```
   $ cd <extract location>
   $ helm install apim deploy <path to over-rides file>	
   ```				

   The expected sample output is as follows: 

   ```
   NAME: apim
   LAST DEPLOYED: Fri Oct 13 08:01:54 2023
   NAMESPACE: default
   STATUS: deployed
   REVISION: 1
   TEST SUITE: None
   ```

2. Get the list of pods.

   ```
   $ kubectl get pods

   NAME                      		         READY    STATUS     RESTARTS     AGE

   cache-7c57dc65f8-5d2gr            	    6/6     Running     0            3d
   cacheloader-deploy-545d9fbd89-2clvn     1/1     Running     0            3d
   configui-deploy-8557886855-kccv7        1/1     Running     1 (3d ago)   3d
   fluent-bit-n292t                        1/1     Running     0            3d
   loader-job-delta-28291155-zgtg2         0/1     Completed   0            9m45s
   loader-job-full-28290240-xh2n2          0/1     Completed   0            15h
   platformapi-deploy-69fc545d49-f4cq7     1/1     Running     0            3d
   startup-cacheloader-job-9fqlc           0/1     Completed   0            3d
   trafficmanager-deploy-8c564cf5b-t8bqk   2/2     Running     0            3d
   ```

## Sample Over-rides file

See the following sample-overrides file.

```
# Copyright © 2024. Cloud Software Group, Inc. All Rights Reserved. Confidential & Proprietary

global:
acceptEUA: true
apimImageRegistry: docker.io/apim
imagePullPolicy: IfNotPresent
imagePullSecrets:
- name: abcd
- name: efgh
k8sServiceType: NodePort
enableProbes: true
mysqlDatabase:
host: 10.0.0.7
port: 63306
imagePullSecrets:
- name: gcp-imagepull-secret
- name: aws-pull-secret
trafficmanager:
replicas: 1
tag: apim327
logback:
logLevel: INFO
connectors:
proxy:
settings:
responseHeaderBufferSize: 22222
requestHeaderBufferSize: 22222
platformapi:
replicas: 1
tag: apim327
logback:
logLevel: INFO
configui:
replicas: 1
tag: apim327
httpsEnabled: false
mlc_oauth_scope: "6f55245b-04af-4ec5-8bbf-57c49fdab67f"
cacheloader:
startup:
initialDelaySeconds: 90
periodSeconds: 20
failureThreshold: 50
#successThreshold: 1 ; must be 1 for startup and liveness probe
timeoutSeconds: 5
replicas: 1
tag: apim327
logback:
logLevel: INFO
cacheloadercron:
replicas: 1
tag: apim327
cache:
replicas: 1
tag: apim327
jvmSettings:
minMemory: 512m
maxMemory: 512m
```

