---
sidebar_position: 5
---
# Setup Observability

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-db7e77c9-eaaf-4b06-8973-1b0a29c4df56"/>
</head>

Observability stacks will require sinks for different types of logs - Application logs from each pod and access logs, verbose logs from trafficmanager. Once the sinks are configured, configure ingestion ports/paths for Fluent Bit side-car from each pod to be able to send logs. Check reference implementation with AWS opensearch at the [GitHub repository](https://github.com/TIBCOSoftware/tcapim-samples). Check out [webinar](https://calyptia.com/blog/send-logs-to-elasticsearch-service-using-fluent-bit) from Fluent Bit for sending logs to elastic search.

## Configuring Fluent Bit Sidecar

### Log fowarding 

The default output for Fluent Bit in Local Edition is the console. For making useful decision with logs, you must configure Fluent Bit to send logs to observability stack. 

There are two config maps for fluent-bit: one specific to the traffic manager and one common to other pods. You must replace these config maps with your own for configuring Fluent Bit to send logs to external destinations. A community implementation is available in the opensource repository. You must set up and configure log storage destinations before bringing up the cluster. You can use secure communications between Fluent Bit and the external system. The TLS configuration secrets required for the log flow is specific to each output supported by Fluent Bit.
