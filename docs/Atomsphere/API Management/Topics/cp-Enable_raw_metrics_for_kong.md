# Enable raw metrics for Kong

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-914dcd4c-6806-440e-8b1f-4586c7e85298"/>
</head> 

To enable raw metrics in Kong oss gateway, you need to globally enable the file-log plugin by POSTing the following payload to `<admin-api-url>/plugins`:


```
{
    "name": "file-log",
    "config": {
        "path": "/metrics/request.log",
        "custom_fields_by_lua": {
            "response": "return {status=kong.response.get_status()}",
            "client_ip": "return nil",
            "tries": "return nil",
            "route": "return nil",
            "request": "return nil",
            "upstream_uri": "return nil",
            "authenticated_entity": "return nil"
        }
    }
}
```
The custom_fields_by_lua are only there to remove some parts from the logs, that API Control Plane will not need. 

Once logging is enabled, the log file must be made accessible to API Control Plane agent. If you run the gateway in a container, you will have to mount a volume to the path where the file is stored. The same volume must then be mounted somewhere into the agent container. To actually enable the processing of raw metrics by the agent, you must add a configuration parameter named metricsLogFile (either in agent config file, or as environment variable gateway.metricsLogFile) and set it to the path inside the agent container, where the log file is found.