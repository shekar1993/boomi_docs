# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-9ad90ff5-f614-4262-8f5d-2e91e04573e4"/>
</head>


**We added these features:**

- **Atom Queue Rate Limiting**

  To help ensure quality of service for the runtimes, we made the following improvements:

  - The new feature allows runtime owners to optionally set a rate limit for atom queue traffic to protect their systems and avoid disruptions to other integrations running on the runtime.
  - For multi-tenant atom clouds, the rate limit can be adjusted per tenant through attachment quotas. This limit can also be set with the Account Cloud Attachment Properties object in the Platform API. 
  - We have enabled these rate limits for Boomi-hosted public clouds.

  (RUN-6452, RUN-6460, RUN-6625)

  To learn more about this feature, refer to [Shared Queue server](/docs/Atomsphere/Integration/Event-based%20integration/c-atm-Shared_queue_server_8064eceb-9398-4272-8799-833abd7762f4.md) and [Atom Message Queuing](/docs/Atomsphere/Integration/Event-based%20integration/c-atm-Atom_Message_Queuing_5310fd40-efdf-4bb2-bb3c-6ef099472b36.md)

- Added Clear queue API to the Boomi AtomSphere API connector and AtomSphere Partner API connector. You can now clear messages from an Atom queue by making a Clear queue API call from AtomSphere API and AtomSphere Partner API connectors. (RUN-1786)


- The ceiling for the listener shutdown (`com.boomi.container.connectorServer.listenerShutdownTimeout`) is being raised to 10 minutes. (CON-9097)

To learn more, see the topic [Implementing Singleton Listen operations](https://developer.boomi.com/docs/Connectors/DevelopConnectors/Singleton_listen_operations).


**We fixed these issues**

- Atom Queue executions for `SEND` and `GET` operations no longer fail to commit. (RUN-6597)
- Process reporting data no longer cause errors when processing. We released a patch that improves the robustness of generating process reporting records from backed-up execution history artifacts. (RUN-7029)

