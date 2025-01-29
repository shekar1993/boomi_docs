# Liveness for Components

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ef8f5bb1-5955-4ab1-9d83-1f5e65310a8a"/>
</head>

Scaling up or scaling down of pods or containers is required in burst and trickle down situations to ensure that the services are resilient. 

It is a good practice to have odd number of NoSQL pods per zone and odd number of zones for tolerance and resilience. Cache, Log, and TM pods can scale by setting HPA rules in Kubernetes and Openshift but has to be manually done in Docker swarm clusters 

The kubelet uses liveness probes to know when to restart a container. For example, liveness probes could catch a deadlock, where an application is running, but unable to make progress. Restarting a container in such a state can help to make the application more available. In case of , liveness can be defined for NoSQL, CM and SQL container. Liveness criteria for these containers is that services present inside these containers should be running. 

Liveness can be defined only for k8s and openshift setup not for docker swarm setup 

|||Suggested Parameters For Liveness||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|**Container**|**Command**|**Initial Delay Seconds**|**Period Seconds**|**Failure Threshold**|**Success Threshold**|**Log File**|
| CM  | `/usr/local/bin/cm-liveness-probe.sh` | 800 | 30  | 12  | 1   | cm\_liveness\_probe.log |
| SQL | `/usr/local/bin/sql-liveness-probe.sh` | 300 | 30  | 10  | 1   | sql\_liveness\_probe.log |

These suggested parameters depends on number of containers, installation platform, network connectivity and so on. In case container is restarting itself again and again while cluster set up due to liveness probe failure, these suggested parameters are to be adjusted. 

## Liveness Logs

Liveness log file in the container can be found at location - `/opt/mashery/containeragent/log`. For every day new file is generated for liveness logs. Liveness logs more than 5 days ago are deleted from container. 
