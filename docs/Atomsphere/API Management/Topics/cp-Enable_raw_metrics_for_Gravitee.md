# Enable raw metrics for Gravitee 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6fb14e1f-d228-4135-8ecf-25ec446c3551"/>
</head> 

To enable raw metrics in Gravitee, you need to enable the file reporter in the Gravitee gateway. If you are running the gateway as a container, the easiest way to archive this, is to provide an environment variable named `gravitee_reporters_file_enabled` and set its value to `true`. [Click here to learn more about configuring file reporter](https://documentation.gravitee.io/apim/getting-started/configuration/reporters#file-reporter). You do not need to enable all event types for file reporter. Only the request event type needs to be enabled. Also, you can change the default file name pattern, as long as the filename always contains ‘request’, as this is how the agent identifies the correct files.

Once file reporter is enabled, the files must be made accessible by API Control Plane agent. If you run the gateway in a container, you will have to mount a volume to the path where the files are stored. The same volume must then be mounted somewhere into the agent container. To actually enable the processing of raw metrics by the agent, you must add a configuration parameter named `metricsDir` (either in agent config file, or as environment variable `gateway.metricsDir`) and set it to the path inside the agent container, where you mounted the report files directory.

