# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-7de11992-9c17-447a-924b-391199524744"/>
</head>

:::caution

The use of CUSTOM security policy files is retired as of January 20, 2024. Runtimes still configured to use CUSTOM policies will automatically default to use the standard HIGH policy instead, which might cause issues with process executions. You must [convert to a HIGH security policy](../../Integration/Integration%20management/int-Converting_from_a_custom_to_a_high_security_policy_6e30adbc-c806-497b-9e86-47b9487aa567.md) and use the [Atom Security Policies object](https://developer.boomi.com/api/platformapi#tag/AtomSecurityPolicies) to manage any customizations. Custom policy functionality will no longer be supported.

:::

**We added these features:**

- The Atom will now apply operation overrides to all SDK Listen operations and not only the Web Service Server operations. (CON-8337)

- Upgraded the Alpine Linux base image for Boomi Docker v4 images to version 3.18.4. (RUN-6267)

- Upgraded Boomi Docker images to Java version 11.0.21.8.1. (RUN-5871)

- Upgraded the Atom, Molecule, and Atom Cloud installers and ugpraders to Java version 11.0.21.9.1. (RUN-6268)

**We fixed these issues:**

- For all listener processes when you select **Stop All Schedules** or **Start All Schedules** on the **Deployed Processes** panel, the listener icon is now displayed beside the listener process by default. (RUN-4081)

- **Force Restart Override for Molecule Scale Down** property has now separate fields for hours, minutes, seconds, and milliseconds in the UI. (RUN-4005)

- The **Maximum Concurrent Execution per Listener** property now displays in the Properties panel's Cloud Attachment Quotas tab. (RUN-3862).

- Master Data Hub now links staged entities to source entities correctly. Patch 24.01.4 is relevant to public Boomi Hub clouds only. (HUB-3600)
