---
sidebar_position: 3
---

# values.yaml

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c38e9d9e-5411-44d8-a9eb-494944f2fe51"/>
</head>

You can use `values.yaml` or provide an over-rides file for bringing up a running Local Edition cluster using Helm. Edit values to provide different configurations that are required to deploy pods and services on Kubernetes. The entries affect all K8s resources such as pods, containers, services, cron jobs, configmaps, and secrets. 

:::note

When editing values.yaml or providing an over-rides file, ensure that no yaml rules are broken. An improper edit can result in preventing the application from being deployed successfully.

:::

You can verify compliance for the YAML syntax by using the following command: 

```
helm lint
```

You must review and modify the following properties:

## Values.acceptEUA

- You must set the value to true before deploying the chart.

- Impacted templates: 

  - cacheloader-deploy.yaml

  - configui-deploy.yaml

  - platformapi-deploy.yaml

  - trafficmanager-deploy.yaml

- Data type: boolean

- Default value: false

- Acceptable values: true and false.

## Values.global.apimImageRegistry

- The FQDN or IP address of the image registry from which the application images are pulled. You must provide this value.

- Impacted templates: 

  - cache-deploy.yaml

  - cacheloader-cronjob.yaml

  - cacheloader-deploy.yaml

  - configui-deploy.yaml

  - platformapi-deploy.yaml

  - startup-cacheloader-job.yaml

  - trafficmanager-deploy.yaml

- Data type: String

- Default value: "-"

- Acceptable values: Resolvable and reachable FQDN or IP address and optionally provide registry. 

  For example - mycompany.harbor.com, mycompany.harbor.com/apimtrials

## Values.global.imagePullSecrets

- Image pull secrets are created as a part of preinstall checklist. This is required only for secure image registry. If you are not using secure registries, leave the default value.

- Impacted templates:

  - cache-deploy.yaml

  - cacheloader-cronjob.yaml

  - cacheloader-deploy.yaml

  - configui-deploy.yaml

  - platformapi-deploy.yaml

  - startup-cacheloader-job.yaml

  - trafficmanager-deploy.yaml

- Data type: array

- Default value: []

- Acceptable values: An array of secret names declared in Kubernetes syntax. 

  For example: imagePullSecrets: 

  -name:secret1

  -name:secret2

## Values.global.namespace

- Kubernetes namespace in which Local Edition resources are created. 

  :::caution
  
  AKS places restrictions on using the "default" namespace.

  :::

- Impacted templates:

  - cache-deploy.yaml

  - cacheloader-cronjob.yaml

  - cacheloader-deploy.yaml

  - configui-deploy.yaml

  - platformapi-deploy.yaml

  - startup-cacheloader-job.yaml

  - trafficmanager-deploy.yaml

- Data type: String

- Default value: default

- Acceptable values: any K8s legal string value.

## Values.global.apimClusterName

- Cluster name is a unique identifier to a Local Edition instance. This value is important in instances where multiple Local Edition clusters share the same database. 

- Impacted templates:

  - cacheloader-deploy.yaml

  - cache-deploy.yaml

  - trafficmanager-deploy.yaml

  - Data type: String

  - Default value: apiml1

  - Acceptable values: Must be unique for each cluster sharing the same database.

## Values.global.imagePullPolicy

- The image pull policy governs when the kubelet should pull images.

- Impacted templates: 

  - cacheloader-deploy.yaml

  - startup-cacheloader-job.yaml

  - cacheloader-cronjob.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - configui-deploy.yaml

  - fluentbit-daemonset.yaml

  - trafficmanager-deploy.yaml

- Data type: String

- Default value: Always

- Acceptable values: IfNotPresent, Always, Never

## Values.global.securityContext.runAsUser

- Local Edition images has the default user: nonroot - 65532. 

  You can change the value based on your organization policies. This is a good security practice.

  :::caution
  
  Refrain from using user 0.

  :::

- Impacted templates: 

  - cacheloader-deploy.yaml

  - startup-cacheloader-job.yaml

  - cacheloader-cronjob.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - configui-deploy.yaml

  - fluentbit-daemonset.yaml

  - trafficmanager-deploy.yaml

- Data type: Integer

- Default value: 10001

- Acceptable values: Any integer only within range 1 to 65535. Check the clusters' SCC setting for range.

## Values.global.securityContext.runAsGroup

- Local Edition images has the default group: nonroot - 65532. 

  You can change the value based on your organization policies. This is a good security practice.

  :::caution
  
  Refrain from using group 0.

  :::

- Impacted templates:

  - cacheloader-deploy.yaml

  - startup-cacheloader-job.yaml

  - cacheloader-cronjob.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - configui-deploy.yaml

  - fluentbit-daemonset.yaml

  - trafficmanager-deploy.yaml

- Data type: Integer

- Default value: 10001

- Acceptable values: Any integer only within range 1 to 65535. Check the clusters' SCC setting for range.

## Values.global.securityContext.openshiftDeployment

- In case of OpenShift deployment, this value must be set to true.

- Impacted templates: 

  - cacheloader-deploy.yaml

  - startup-cacheloader-job.yaml

  - cacheloader-cronjob.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - configui-deploy.yaml

  - fluentbit-daemonset.yaml

  - trafficmanager-deploy.yaml

- Data type: boolean

- Default value: false

- Accepted values: true and false

## Values.global.mysqlDatabase.host

- This is a host name, IP address, or managed service database instance's FQDN.

- Impacted templates: 

  - platformapi-configjson-configmap.yaml

  - cacheloader-configmap.yaml

  - trafficmanager-configmap.yaml

  - configui-configmap.yaml

- Data type: String

## Values.global.mysqlDatabase.port

- The port number on which the database is listening for client connections.

- Impacted templates:

  - platformapi-configjson-configmap.yaml

  - cacheloader-configmap.yaml

  - trafficmanager-configmap.yaml

  - configui-configmap.yaml

- Data type: Integer

- Default value: 3306

- Acceptable value: Port number

## Values.global.mysqlDatabase.sslMode

- This setting informs whether you want to communicate with the database via TLS. For more information, see Securing Connections to an External MySQL 8 compliant database.

- Impacted templates: 

  - cacheloader-deploy.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - trafficmanager-deploy.yaml

  - configui-deploy.yaml

- Data type: String

- Default value: disable

- Acceptable values: disable, trust, verify-ca, verify-full

## Values.global.mysqlDatabase.mutualTls

- This setting informs clients if they have to use mTLS to the database. For more information, see [Securing Connections to an External MySQL 8 compliant database](../Installation/Securing_connections_to_external_MySQL_8_compliant_databases.md).

- Impacted templates: 

  - cacheloader-deploy.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - trafficmanager-deploy.yaml

  - configui-deploy.yaml

- Data type: String

- Default value: disable

- Acceptable values: enable and disable

## Values.global.mysqlDatabase.connectTimeout

- Time in seconds the database server waits for a client connection to send more data before aborting the read operation.

- Impacted templates:

  - cacheloader-deploy.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - trafficmanager-deploy.yaml

  - configui-deploy.yaml

- Data type: Integer or Long

- Default value: 4000

## Values.global.mysqlDatabase.netReadTimeout

- Time in seconds to wait on writing a block to a connection before aborting the write. It also defines how long the database server waits for the client to retrieve the entire result set.

- Impacted templates: 

  - cacheloader-deploy.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - trafficmanager-deploy.yaml

  - configui-deploy.yaml

- Data type: Integer or Long

- Default value: 30

## Values.global.mysqlDatabase.netWriteTimeout

- Defines the network socket timeout (`SO_TIMEOUT`) in milliseconds. Value of 0 (default) disables this timeout.

- Impacted templates: 

  - cacheloader-deploy.yaml

  - cache-deploy.yaml

  - platformapi-deploy.yaml

  - trafficmanager-deploy.yaml

  - configui-deploy.yaml

- Data type: Integer or Long

- Default value: 360

## Values.global.email.mail.transport.protocol

- Protocol represents the system to notify users. See the comments in the values.yaml for additional settings for each protocol.

- Impacted templates:

  - trafficmanager-deploy.yaml

  - configui-deploy.yaml

- Data type: String

- Default value: log

- Acceptable values: aws, smtp, and log.

## Values.trafficmanager.replicas

- Property that allows Helm (and Kubernetes) to scale the trafficmanager. Set the value and run helm upgrade.

- Impacted template: trafficmanager-deploy.yaml

- Data type: Integer

- Default value: 1

- Acceptable values: Any number. However, the number of pods that can actually be scaled out depends on available resources.

## Values.platformapi.replicas

- Property that allows Helm (and Kubernetes) to scale platformapi. Set the value and run helm upgrade.

- Impacted template: platformapi-deploy.yaml

- Data type: Integer

- Default value: 1

- Acceptable values: Any number. However, the number of pods that can actually be scaled out depends on available resources.

## Values.configui.replicas

- Property that allows Helm (and Kubernetes) to scale the configui. Set the value and run helm upgrade.

- Impacted template: configui-deploy.yaml

- Data type: Integer

- Default value: 1

- Acceptable values: Any number. However, the number of pods that can actually be scaled out depends on available resources.

## Values.cacheloader.replicas

- Property that allows Helm (and Kubernetes) to scale the cacheloader. Set the value and run helm upgrade.

- Impacted template: cacheloader-deploy.yaml

- Data type: Integer

- Default value: 1

- Acceptable values: Any number. However, the number of pods that can actually be scaled out depends on available resources.

## Values.cache.replicas

- Property that allows Helm (and Kubernetes) to scale the cache. Set the value and run `helm upgrade`.

- Impacted template: cache-deploy.yaml

- Data type: Integer

- Default value: 3

- Acceptable values: Any number. However, the number of pods that can actually be scaled out depends on available resources.

## Values.global.k8sServiceType

- Property that allows Kubernetes services of a particular type.

- Impacted templates:

  - trafficmanager-svc.yaml

  - platformapi-svc.yaml

  - configui-svc.yaml

  - cacheloader-svc.yaml

  - cache-svc.yaml

- Data type: String

- Default value: LoadBalancer

- Acceptable values: LoadBalancer, NodePort, ClusterIP.

## Values.global.domainSuffix

- This is the domain that is provided when you customized seed data. The default value is mashery.com

- Impacted templates:

  - platformapi-deploy.yaml

  - configui-deploy.yaml

  - configui-configimap.yaml

- Data type: String

- Default value: mashery.com

- Acceptable values: The text should be in the form of `domain_name.tld` or `domain_name`. For example, `mycompany.com` or `myorganization.org` or `mycompany` or `myorganization`.

## Values.configui.adminUser

This is the value of the Local Dev admin parameter you provided when customizing seed data. The default value is admin.

Some of the sections in the `values.yaml` are dependent on user actions in previous steps. Notable are the image names and tags.

## The following properties are optional.

### Values.trafficmanager.tag

- Update this value based on the tag set during image push. You must change this value based on the tag used when you pushed images to a registry.

- Impacted template: trafficmanager-deploy.yaml

- Data type: String

- Default value: v6.0.0

- Acceptable values: Alpha-numeric without spaces and no special characters.

## Values.platformapi.tag

- Update this value based on the tag set during image push. You must change this value based on the tag used when you pushed images to a registry.

- Impacted template: platformapi-deploy.yaml

- Data type: String

- Default value: v6.0.0

- Acceptable values: Alpha-numeric without spaces and no special characters.

## Values.cacheloader.tag

- Update this value based on the tag set during image push. You must change this value based on the tag used when you pushed images to a registry.

- Impacted template: cacheloader-deploy.yaml

- Data type: String

- Default value: v6.0.0

- Acceptable values: Alpha-numeric without spaces and no special characters.

## Values.cacheloadercron.tag

- Update this value based on the tag set during image push. You must change this value based on the tag used when you pushed images to a registry.

- Impacted template: 

  - startup-cacheloader-job.yaml

  - cacheloader-cronjob.yaml

- Data type: String

- Default value: v6.0.0

- Acceptable values: Alpha-numeric without spaces and no special characters.

## Values.cache.tag

- Update this value based on the tag set during image push. You must change this value based on the tag used when you pushed images to a registry.

- Impacted template: cache-deploy.yaml

- Data type: String

- Default value: v6.0.0

- Acceptable values: Alpha-numeric without spaces and no special characters.

## Values.fluentbit.tag

- Local Edition uses Fluent Bit 2.2.1

- Impacted template: 

  - fluentbit-daemonset.yaml

  - trafficmanager-deploy.yaml

- Data type: String

- Default value: 2.2.1

- Acceptable values: Alpha-numeric without spaces and no special characters. DO not change without advice from the support team.

## Values.fluentbit.image

- Local Edition uses Fluent Bit official image fluent/fluent-bit from DockerHub.

- Impacted templates:

  - fluentbit-daemonset.yaml

  - trafficmanager-deploy.yaml

- Data type: String

- Default value: fluent/fluent-bit

- Acceptable values: Alpha-numeric without spaces and no special characters. 

  :::caution
  
  Do not change without advice from the support team

  :::
