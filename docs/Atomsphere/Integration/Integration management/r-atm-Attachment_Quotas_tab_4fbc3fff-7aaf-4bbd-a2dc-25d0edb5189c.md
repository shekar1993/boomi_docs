# Attachment Quotas tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3F458E2D-3D88-4035-B96C-AC71721792FE"/>
</head>

Private Cloud owners can set and edit the properties of an Atom Cloud’s Cloud Molecules and the Atoms that the owner or accounts have attached to the Cloud.

The Attachment Quotas tab appears on the Cloud Management page.

When you select a private Atom Cloud from the Clouds list on the left, the following is displayed on the tab:

- All Cloud Molecules in the selected Cloud
- All accounts that have at least one Atom set up in the Cloud
- For each account, the Atom(s) that the account has set up in the Cloud
- Some properties and values for the selected Cloud Molecule or Atom

When you select a Cloud Molecule or Atom on the left side of the tab, some of its properties and their values appear on the right. If a Cloud Molecule is offline, its name and the accounts’ names appear in light gray text and you cannot see its property values.

Private Cloud owners can view, edit, and save these property values on the Attachment Quotas tab.

- When a Cloud owner sets a property value, the value appears in black text. If the Cloud owner has not entered a property value, the default value is used. Default values appear in light gray text.
- If you enter a long number in bytes, text appears to the right in parentheses. It rounds your value to the nearest KB, MB, GB or TB.
- For properties whose format is a positive integer in bytes, instead you can enter a whole number followed by KB, MB, GB or TB, such as 30 GB or 30GB.
- For properties whose format is a positive integer in bytes, you cannot save negative numbers or numbers containing a decimal point.
- Invalid entries appear in red and cannot be saved.

When a Cloud owner sets and saves property values for a Cloud Molecule, those values are inherited by the Atoms installed in the Cloud Molecule by the various accounts. However, if the Cloud owner has already set a property value for an Atom, it will not be overwritten by the Cloud Molecule’s property value. This allows Cloud owners to set properties at the Cloud Molecule level and propagate those values to the Cloud Molecule’s Atoms, but also override the Atom property values if needed.

The Cloud Molecule’s properties that you see here are stored in the `<molecule_install_dir>/conf/container.properties` file. The Atom’s properties that you see here are stored in the `<molecule_install_dir>/conf/limits/<account_cloud_attachment_id>` file. Although you can use a text editor to edit these properties in these files, it is easier and it is recommended that you edit them on the Attachment Quotas tab instead. If you use this tab to save these properties for an account, the account’s `<molecule_install_dir>/conf/limits/` directory is created automatically.

:::note

Accounts that have an Atom attached to the Cloud do not have access to the Attachment Quotas tab. They can view, but not change, this information in the Account Properties dialog.

:::

<details>
  <summary>Account Concurrent Execution Limit</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer

  The total number of concurrent executions allowed. If this field does not contain a value, there is no limit. On a Cloud, you must also set the Cloud Partition Size property for this limit to take effect. The Cloud Partition Size property is set in the [Properties panel's Advanced tab](./r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md) under **Atom Management**.
  </div>
</details>

<details>
  <summary>Account Concurrent Execution Warning Offset</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer

  This value is subtracted from the Account Concurrent Execution Limit to determine when the Atom will generate a warning that the account is close to exceeding its number of concurrent executions.

  For example, if this property is set to 5 and the Account Concurrent Execution Limit is set to 20, the Atom generates a warning in the container log when the account exceeds 15 concurrent executions. If this field does not contain a value, no warning is generated.
  </div>
</details>

<details>
  <summary>Account Disk Usage</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer, in bytes

  Used to set the size limit for an account that uses this private Atom Cloud.
  </div>
</details>

<details>
  <summary>Atom Output Overflow Size</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer, in bytes

  For Atom worker processes, limits the number of bytes per output datastore maintained in memory before overflowing to disk.
  </div>
</details>

<details>
  <summary>Atom Worker Maximum Execution Time</summary>
  <div>

  - **Default value** - 0:0:30:0
  - **Format** - hr:min:sec:ms

  Maximum execution time for Atom worker processes. After this amount of time passes, a 522 HTTP status code message is returned to the client saying that the time limit has been exceeded. The process execution is canceled. After you change this property value, you must restart the Cloud Molecule or Atom.
  </div>
</details>

<details>
  <summary>Atom Worker Maximum General Execution Time</summary>
  <div>

  - **Default value** - 0:10:0:0
  - **Format** - hr:min:sec:ms

  Maximum execution time for Atom worker processes that use Low_Latency_Debug mode. After you change this property value, you must restart the Cloud Molecule or Atom.
  </div>
</details>

<details>
  <summary>Atom Worker Maximum Queued Executions</summary>
  <div>

  - **Default value** - 10
  - **Format** - Positive integer

  Maximum number of extra processes that can be queued in a single Atom worker, when the maximum number of processes is running. After you change this property value, you must restart the Cloud Molecule or Atom.
  </div>
</details>

<details>
  <summary>Atom Worker Maximum Running Executions</summary>
  <div>

  - **Default value** - 20
  - **Format** - Positive integer

  Maximum number of extra executions that can run in a single Atom worker, when the maximum number of processes is running. After you change this property value, you must restart the Cloud Molecule or Atom.
  </div>
</details>

<details>
  <summary>Atom Worker Queued Execution Timeout</summary>
  <div>

  - **Default value** - 0:0:10:0
  - **Format** - hr:min:sec:ms

  Maximum time that a queued job can wait to be executed. After this amount of time, the job fails with a timeout exception. After you change this property value, you must restart the Cloud Molecule or Atom.
  </div>
</details>

<details>
  <summary>Queue Server Incoming Message Rate Limit</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer

  The maximum number of requests the attachment is allowed to send to the Shared Queue Server per minute. The limit is only enforced if the Incoming Message Rate Limit is set in the underlying cloud Queue Shared Server. If a value is not set or is less than 1, the Shared Queue Server limit is used. The message is rejected if the limit is exceeded and should be retried from within the integration process. The limit is enforced per cloud node.
  </div>
</details>

<details>
  <summary>Atom Worker Warmup Enabled</summary>
  <div>

  - **Default value** - Inherited (Fals)
  - **Format** - Choose one of the following:

    - Inherited — The setting is inherited from the Cloud Molecule.
    - False or Inherited (False) — The feature is not enabled.
    - True or Inherited (True) — When an Atom worker is within 30 minutes of shutting down, the Cloud will start (“warm up”) another Atom worker to replace it. When the Atom worker that is ready to shut down stops running there is already another Atom worker up and running, ready to take on its load. Setting this property to True ensures that there is no gap in coverage between the time when one Atom worker stops and the next Atom worker is initialized and begins to run. It ensures that there is always at least one Atom worker available on which processes can be executed.

  You can use this feature if your account is provisioned with at least one Atom worker. If your account is provisioned with more than one Atom worker, and if there are multiple Atom workers within 30 minutes of shutting down, then by default only one Atom worker is replaced. However, if one of those Atom workers has a load greater than “LOW”, then it is replaced even though there is another Atom worker running. If you have set the **Minimum Atom Workers** property, then the appropriate number of Atom workers are replaced so that you do not go below the minimum.
  </div>
</details>

<details>
  <summary>Atom Workers</summary>
  <div>

  - **Default value** - 0
  - **Format** - Positive integer

  Number of Atom workers allocated. This change takes effect immediately, assuming that the Cloud owner has already enabled Atom Workers on this Atom Cloud.
  </div>
</details>

<details>
  <summary>Atom Working Overflow Size</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer, in bytes

  For Atom worker processes, limits the number of bytes per working datastore maintained in memory before overflowing to disk.
  </div>
</details>

<details>
  <summary>Default AS2 Workload</summary>
  <div>

  - **Default value** - Inherited (General)
  - **Format** - Choose one of the following:

    - Inherited - The setting is herited from the Molecule.
    - General - The default process mode for all new processes.
    - Low_Latency_Debug - All AS2 listener proccesses use an Atom worker.

  Used to select the process execution mode for AS2 listener processes. After you change this property value, you must restart the Cloud Molecule or Atom.

  For more information, refer to [Process Options dialog](../Process%20building/r-atm-Process_Options_dialog_97679f9e-1130-46ed-9937-8d1af5bcdbd5.md) and [Atom Workers](./c-atm-Atom_workers_057ddda4-0cf2-40b2-8dd9-c193ae168569.md).

  :::note

  If you select **Low_Latency_Debug**, Trading Partner components that use AS2 listeners will also use that execution mode.

  :::
  </div>
</details>

<details>
  <summary>Default HTTP Workload</summary>
  <div>

  - **Default value** - Inherited (General)
  - **Format** - Choose one of the following:

    - Inherited - The setting is inherited from the Molecule.
    - General - The default process mode for all new processes. General mode processes do not use an Atom worker, but Low_Latency mode processes do use one.
    - Low_Latency - All Web Services Server processes use an Atom worker and run in Low_Latency mode
    - Low_Latency_Debug - All Web Services Server processes use an Atom worker. Processes configured in General mode run in Low_Latency_Debug mode.

  Used to select the process execution mode for Web Services Server processes. The Default HTTP Workload applies only to processes set to run in General mode. After you change this property value, you must restart the Cloud Molecule or Atom.

  For more information, refer to [Process Options dialog](../Process%20building/r-atm-Process_Options_dialog_97679f9e-1130-46ed-9937-8d1af5bcdbd5.md).
  </div>
</details>

<details>
  <summary>Enabled Download of Execution Artifacts and Atom Worker Logs</summary>
  <div>

  - **Default value** - True
  - **Format** - Choose one of the following:

    - Inherited (false) - The setting is inherited from the Cloud Molecule and the feature is turned off.
    - False - The feature is not enabled and users cannot download Atom Worker logs or execution artifacts.
    - True - (default) The feature is enabled and users can download Atom Worker logs and execution artifacts.

  :::note

  This property is automatically turned on for public Boomi Atom Clouds.

  :::
  </div>
</details>

<details>
  <summary>Enable Processed Document Archiving</summary>
  <div>

  - **Default value** - Inherited (false)
  - **Format** - Choose one of the following:

    - Inherited (plus the value of the setting being inherited)
    - False
    - True

  If true or Inherited (true), the owner of the selected attached Atom is allowed to enable [Processed document archiving](./c-atm-Processed_document_archiving_1e1fedc4-b844-4dde-988a-875b4980cce9.md).
  </div>
</details>

<details>
  <summary>Flow Control Parallel Processing Type</summary>
  <div>

  - **Default value** - None
  - **Format** - None, Threads, or Processes

  Overrides the **Parallel Process Type** setting in Flow Control steps at a global Atom Cloud or Attachment Quota level. This property can be set only by a Private Atom Cloud owner.
  </div>
</details>

<details>
  <summary>HTTP Request Rate</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer

  Limits the number of Web Services Server requests per second. This limitation is per node in the Atom Cloud and per Cloud or Atom attachment. If this value is exceeded, callers receive a 503 error. After you change this property value, you must restart the Cloud Molecule or Atom.

  :::note

  If an HTTP Request Rate value is set, API Management uses this limit before the values specified in the API Contract for Rate Limit or Quota Limit.

  :::
  </div>
</details>

<details>
  <summary>Maximum Concurrent Executions per Listener</summary>
  <div>

  - **Default value** - 10
  - **Format** - Positive integer

  The maximum number of concurrent executions allowed per listener&mdash;that is, the maximum listener pool size.
  </div>
</details>

<details>
  <summary>Maximum Connector Tracking Documents</summary>
  <div>
  
  - **Default value** - 10,000
  - **Format** - Positive integer, less than or equal to 10,000

  The maximum number of connector tracking documents that will be generated for a single connector step in a process execution. Once this limit is reached, no more tracking documents are reported to the platform for that step in the execution.
  </div>
</details>

<details>
  <summary>Minimum Atom Workers</summary>
  <div>

  - **Default value** - 0
  - **Format** - Positive integer

  The minimum number of Atom workers that run continuously in the Cloud.

  If this property is set to a number greater than zero, then a few minutes after the Cloud starts and stabilizes, this number of Atom workers begin to run. Their starting is not dependent upon receiving incoming process execution requests.

  This property works in conjunction with the **Atom Worker Warmup Enabled** property. If you set **Minimum Atom Workers** greater than 0, then Atom Worker Warmup behavior is enabled as well. As your minimum number of Atom workers reach the end of their lifespan, they are replaced with new Atom workers.

  If the load on active Atom workers drops, the Atom Cloud reduces the number of Atom workers to the value you set for this property.

  :::note

  Setting this property to a number greater than the number of Atom workers provisioned in your account does not cause additional Atom workers to run. If you want additional Atom workers provisioned to your account, contact Boomi Support.

  :::
  </div>
</details>

<details>
  <summary>Test Mode Maximum Aggregate Document Size</summary>
  <div>

  - **Default value** - 10 MB
  - **Format** - Integer, in byes

  The maximum aggregate data size across the execution of a process in test mode. A negative value means there is no maximum.

  :::note

  This field is present only if the enhanced test mode feature is enabled in the account. Contact your Boomi sales representative if you want to enable this feature.

  :::
  </div>
</details>

<details>
  <summary>Test Mode Maximum Document Count</summary>
  <div>

  - **Default value** - 100
  - **Format** - Integer

  The maximum number of files (documents) per inbound connector step during execution of a process in test mode. A negative value means there is no maximum.

  :::note

  This field is present only if the enhanced test mode feature is enabled in the account. Contact your Boomi sales representative if you want to enable this feature.

  :::
  </div>
</details>

<details>
  <summary>Web Service Request Input Size</summary>
  <div>

  - **Default value** - Unlimited
  - **Format** - Positive integer, in bytes

  For Web Services Server listener processes, limits the input size of a web service request. If this limit is reached, the request is rejected.

  For Flow Services Server listener processes, limits the request size and response size. If this limit is reached on the request, the request is rejected with a 400 error code. If the limit is reached on a response, the request is rejected with a 503 error code.
  </div>
</details>

<details>
  <summary>Reload</summary>
  <div>
  Displays the most recently saved property values for the selected Cloud Molecule or Atom.
  </div>
</details>

<details>
  <summary>Save</summary>
  <div>
  Saves changes made to the property values for the selected Cloud Molecule or Atom. Changes to some properties take effect after you restart the Cloud Molecule or Atom. You must click **Save** before selecting a different Cloud Molecule or Atom, otherwise your changes will be lost.
  </div>
</details>
