# Enable raw metrics for WSO2 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5901acf5-879a-4f99-85cb-cb8baa311c59"/>
</head> 

To enable raw metrics in WSO2, you need to configure the gateway to log api metrics to files. [You can follow this guide](https://apim.docs.wso2.com/en/latest/api-analytics/on-prem/elk-installation-guide/). (You only need ‘Step 1 - Configuring API Manager’.) If you are running WSO2 as a docker container, you will have to copy the two files `deployment.toml` and `log4j2`.properties from the running container, modify them, and then mount them back in. You can change some of the configuration as you see fit but make sure that the filename of the metric files still contains ‘apim_metrics’ as that is how the agent identifies the correct files.

Once metrics logs are enabled, the files must be made accessible to API Control Plane agent. If you run the gateway in a container, you will have to mount a volume to the path where the files are stored. The same volume must then be mounted somewhere into the agent container. To actually enable the processing of raw metrics by the agent, you must add a configuration parameter named metricsDir (either in agent config file, or as environment variable gateway.metricsDir) and set it to the path inside the agent container, where you mounted the metrics files directory.