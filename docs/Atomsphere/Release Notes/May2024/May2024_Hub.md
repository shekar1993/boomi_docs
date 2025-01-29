# Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-9729972a-6583-44ab-a624-012f9535bc00"/>
</head>

**We added these features:**

- If you set the mask type of a field to ALL, Master Data Hub applies five asterisks consistently to masked field values. This update hides the length of fully masked field values. Read [Data masking examples](/docs/Atomsphere/Master%20Data%20Hub/Modeling/hub-Data_masking_examples.md) to learn more. (HUB-3883)

- The Statistics tab shows the minimum, maximum, and median text length when displaying column statistics for a non-numeric field. Read [Viewing golden record field statistics](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-Viewing_golden_record_field_statistics.md) to learn more. (HUB-4041)

**We fixed these issues:**

- Master Data Hub no longer allows you to add a masked field value to the golden record title. (HUB-4017)

- For the Query Golden Records API endpoint, the OR filter for Created_date and Updated_date correctly returns records based on your filter criteria. (HUB-4004)

- Master Data Hub now assigns a tag to a record if any items in a collection meet the tag condition. It updates the tags upon changes to the golden record or deployed model. Tags are re-applied when you restore an end-dated golden record. (HUB-1317, HUB-3041)

- The “(masked)” label no longer displays when you edit a quarantine entry’s masked field value in the user interface. (HUB-3800)

- The “(masked)” label no longer displays when you edit a golden record’s masked field value in the user interface. (HUB-3890)

- Master Data Hub now updates the correct collection item during an upsert operation when a collection field group has more than one collection item in the golden record. (HUB-3955)

- Master Data Hub applies tags to inbound record fields according to tag rules, even when the field contains a null or empty value. (HUB-4282)
