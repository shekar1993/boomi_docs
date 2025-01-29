# Observability for Multi-cloud runtime environments

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-133943ce-340c-4be1-a401-2f8a3e3741e9"/>
</head>


Observability data can be exported for runtime environments.

You can access runtime environment observability data using either of the following methods:

-   Error logs

-   OpenTelemetry data export


## Error logs

A runtime environment will log any errors to disk by default, allowing you to quickly obtain basic error information about any issues that may be occurring within the runtime.

These error logs are located within the container in the following location:

- /usr/src/app/artifacts/logs/flowlog`<date\>`.txt

If no errors occur within the runtime environment, the log files are not generated.

## OpenTelemetry data export

As well as basic error logging, more detailed system-level OpenTelemetry data can be exported from a runtime environment and sent to an OpenTelemetry Protocol \(OTLP\) endpoint/APM system.

This is similar to how flow tenant runtime data can be exported and sent to an APM system \(see [Observability](flo-Observability_e3ebeb63-f184-4c13-88a5-e20b9115ae10.md)\), but as it operates at a system level it contains more detailed information useful for debugging technical errors within a runtime installation.

If the required environment variables are added into your runtime Docker container, error logging is disabled, and detailed information is sent to the OpenTelemetry Protocol \(OTLP\) endpoint/APM system configured in the environment variables.

To enable OpenTelemetry data export, add the following environment variables to your runtime Docker container:

-   **Otlp\_Endpoint**: The OpenTelemetry Protocol \(OTLP\) endpoint to which data should be sent, i.e. your APM system or OpenTelemetry collector. Only RPC over HTTPS \(Remote Procedure Call over HTTPS\) endpoints are supported.
-   **OTLP headers**: Optional list of headers to send with the data, such as API key credentials for authentication to the APM system. Multiple headers are supported, but must be comma-separated. For example, “name1=value1,name2=value2”.


For example, if you wanted to send data directly to an APM system that supports direct OTLP ingestion \(such as Honeycomb\), the environment variables might be configured in the Docker container as follows:

```
"Otlp_Endpoint": "https://api.honeycomb.io:443"
"Otlp_Headers": "x-honeycomb-team=<apikey>,x-honeycomb-dataset=$mcr-platform"
```