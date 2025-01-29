# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-118f829e-22fd-4124-9d40-a39a93c57b72"/>
</head>


**We added these features:**

- Containers configured to use the legacy classloader run in RELAXED mode, which has the same functionality as the legacy framework, with no restrictions on core libraries. (RUN-5914)

- The Boomi Docker v5 image is available in DockerHub. The v5 image is based on RedHat UBI 9 Minimal OS and is available for [Atoms](https://hub.docker.com/r/boomi/atom), [Molecules](https://hub.docker.com/r/boomi/molecule), and [Atom Clouds](https://hub.docker.com/r/boomi/cloud). You can get this image by using the tag `release-rhel` or `5.0.0.-rhel`. (RUN-5793)

:::caution

Custom security policies are deprecated as of June 10, 2023 and will be retired in January 2024. You must [convert to HIGH policies](../../Integration/Integration%20management/int-Converting_from_a_custom_to_a_high_security_policy_6e30adbc-c806-497b-9e86-47b9487aa567.md) and use the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) to manage any customizations. For more information, see the deprecation notice [Custom Security Policy file deprecation](https://community.boomi.com/s/article/Custom-Security-Policy-File-deprecation-for-private-Atom-Clouds).

:::

**We fixed these issues:**

- The Atom Queue Operation no longer results in a nullpoint exception error if the `Timeout`, `Minimum Number of Documents`, and `Batch Size` fields have a blank value. (RUN-3765)

- When a listener submits a batch of documents, the start time will now be the time that the connector submits the documents for processing rather than the time the batch was created. (CON-1712)

- Singleton Listeners now report startup errors in its status on the Listeners page. (CON-7458)

- If a listener has a delayed amount of time before a startup or failure, an "Inconsistent state" message is now displayed. (CON-7458)

- A security vulnerability was reported in [CVE-2023-46604](https://www.cve.org/CVERecord?id=CVE-2023-46604) that impacts the version of ActiveMQ that Boomi Runtime uses. Runtime release 23.11.5 is available immediately (this replaces 23.11.4 that was released on Dec. 15th) and contains an updated version of the ActiveMQ that addresses the CVE-2023-46604 issue.<br/><br/> **You should apply this update to your Runtimes as soon as possible**. If you do not apply it manually, it will be applied automatically on December 27, 2023 between 3am and 7am EST.  Your runtimes will restart with this update. To manually update your runtime, see [Applying pending Atom and connector updates](https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/t-atm-Applying_pending_Atom_and_connector_updates_420c313b-ae24-42e8-8a4c-b6b957d7ce67).<br/><br/>A new patch 23.11.6 ( with no additional changes)  will be applied automatically on December 27, 2023 between 3am and 7am EST.  **All runtimes will restart with this update during this window**.<br/><br/>For customers using Boomi’s public clouds, the presence of compensating controls we have in place mitigates the risk to Boomi’s public clouds. These clouds will be updated with this patch on December 27, 2023 between 3am and 7am EST.

  (RUN-6231)
