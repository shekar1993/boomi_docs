#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d006c22e-fbcf-447c-8d6d-080fb75ca977"/>
</head>

**We added these features:**

- Early delta detection reduces the time it takes to process golden record updates from a contributing source. It skips processing inbound entities that do not change the golden record.

  Select **Enable early delta detection** in the inbound source configuration to turn on this setting. Read [Adding a source to a model](/docs/Atomsphere/Master%20Data%20Hub/Modeling/hub-Adding_a_source_to_a_model_e77a2437-3758-413a-bdbe-7911fb57e492.md) and [Manually attaching a source to a domain](/docs/Atomsphere/Master%20Data%20Hub/Deployment/t-mdm-Attaching_a_source_to_a_domain_4dc39589-d478-4d0b-a697-645453595f69.md) to learn more.

  (HUB-3855)

- The Statistics tab displays reference resolution statistics for sources contributing to a golden record. These statistics provide valuable insights into the health of your golden record data and which contributing sources may need further investigation and data quality improvements.
  - **Most Resolved Source** - This metric shows which source has the most resolved foreign key references. This could indicate that the source has a high level of data integrity.
  - **Least Resolved Source** - This metric shows which source has the fewest resolved foreign key references. This could indicate data quality issues, such as missing or incorrect reference values in that source.
  - **Most Unresolved Source** - This metric shows which source contributes the most entities with foreign keys that don't match the golden record. This could indicate potential data integrity issues with the source.
  - **Least Unresolved Source** - This metric shows which source has the fewest unresolved foreign key references. This could indicate that the source has high quality data and adheres to referential constraints.

  Read [Viewing golden record field statistics](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-Viewing_golden_record_field_statistics.md) to learn more. (HUB-4287)

**We fixed these issues:**

- Javascript errors no longer occur when you edit model fields. The user interface now correctly prevents you from selecting Occurrence as a repeat option for repeatable reference fields. (HUB-4215)

- The Accelerated Query feature allows you to successfully query records by repeatable and non-repeatable field names. (HUB-4283)

- When you set an outbound source configuration to exclude specific fields, responses from the Fetch Channel Updates API endpoint consistently reflect the outbound source configuration for the deployed model. (HUB-4176)

- The Create Model and Update Model API endpoints now validate unique IDs for collection fields. Unique IDs cannot repeat and cannot contain special characters, spaces, or lowercase characters. (HUB-4188)

- If channel updates to outbound sources exceed the outbound limit (by default, 200), only the records up to the limit are processed and delivered. If the source entities linked to a single record exceed the outbound limit, it will be marked as HELD in the UI until you edit the number of linked source entities to be below the outbound limit. (HUB-4427)

- Reference fields now resolve only with the source entity ID that contributed to the entity. They do not resolve to read-only sources, which causes duplicate entities. (HUB-4070)

- The Unresolved Reference Count statistics for the deployed model and for each source are now consistent. If null values exist, they are not included in the deployed model's Unresolved Reference Count. (HUB-4272)

- During the Fetch Channel Updates operation, Master Data Hub no longer incorrectly displays the error message  “Must have a valid entity ID for non-CREATE operation” when fetching record updates. (HUB-4557)

- Date/time fields now maintain the correct timezone settings, reflecting the timezone of the Boomi Hub Cloud hosting the deployed model. This fix resolves the issue of incorrect timezone updates observed in the US-East-1 Hub cloud when Hub processed record updates to other fields. (HUB-4558)