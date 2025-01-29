#  Boomi DataHub November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-53b2c450-837d-4e06-860a-c0ad15cb50a1"/>
</head>

**We added these features:**

- The [Boomi DataHub connector](/docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector.md) is now in General Availability (GA). New integrations with Hub require you to use the DataHub connector. 

  We labeled the previous [Boomi Master Data Hub connector](/docs/Atomsphere/Integration/Connectors/r-atm-MDM_connector_ff690a6f-288d-44b3-96fb-e81afb046703.md) as the legacy connector. If you currently use the legacy connector for your integrations, it will remain available for your existing integrations. (HUB-4818, HUB-4928, HUB-4929)

- You can use the AND and OR operators when filtering staged entities on the Staged Entities screen in the Hub user interface. Review [Viewing a domain's staged entities](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/t-mdm-Viewing_a_domains_staged_entities_0fdcb1a0-9f4d-4d2e-9752-e6ec0c8c29f4.md) to learn more. (HUB-4574)

- We’ve improved performance of the Fetch Channel Updates operation. (HUB-4796)

  HUB-4796 is postponed and will be rescheduled.

**We fixed these issues:**

- DataHub no longer allows you to end-date a referenced record after you have configured the reference field to enforce reference integrity (with the Reference Integrity setting). (HUB-3485)

- DataHub displays accurate and detailed quarantine error messages for data quality steps that use an integration process deployed in low latency mode. (HUB-3834)

:::note

We resolved the unexpected disk usage issues caused by HUB-3834 in the November release by implementing patch 24.11.6 that removes HUB-3834. The patch applies to all Hub clouds. The improvements to quarantine messages for data quality steps, initially addressed by HUB-3834, will be rescheduled for a future release.

:::

- The Outbound Activity screen in the Hub user interface now accurately reflects the HELD status for updates to field values, including those in reference fields. (HUB-4160) 
  
  HUB-4160 is postponed and will be rescheduled. 

- DataHub no longer allows you to end-date a record if that record is being referenced by another record when reference integrity is turned on or when the reference links to repeatable fields. (HUB-4356)

- Spaces and special characters, such as slashes, in source entity IDs no longer prevent the quarantine detail view from loading. (HUB-4591)

- DataHub now accurately re-evaluates edited quarantine entities and can recognize an edited quarantine entity as a potential duplicate. (HUB-4645)

- When you use Accelerated Query and update a quarantined source entity with an “unknown reference value” reason, and the reference is resolved, any updated fields will sync correctly. Hub also accurately returns the field values in the golden record query response. (HUB-4916)

- DataHub automatically re-applies the latest successfully deployed model version if you encounter a model deployment failure because the deployment would delete the only source linked to a record. For example, if version 2 fails, Hub re-applies version 1 of the model. This fix prevents the deployment process from being stuck. 

  DataHub creates a new audit log message indicating when it re-applies the previously deployed version. Hub no longer shows the reason for the failure on the Versions page. (HUB-3905)

- You can now see the text associated with the Held icon pop-up on the Reporting page. (HUB-4626)

- Hub no longer puts read-only sources in a HELD status when outbound integrity is enforced and references are resolved. (HUB-5029)
