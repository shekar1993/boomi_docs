# Source record Create exception case

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8df0cdf5-d457-4e7c-adf4-e96b5957e12f"/>
</head>


An exception to normal processing of source record Creates occurs if a new source record fails to match an existing golden record because that golden record was updated.

Here, for example, new NetSuite record NS1 fails to match existing golden record GR1, derived from Salesforce record SF1, because GR1 was updated:

1. Salesforce record SF1 is created.

2. Golden record GR1 is created with a link to SF1.

3. NetSuite record NS1 is created with an additional field.

4. In the meantime SF1 is updated: The value of field A is changed from 1 to 2.

5. The repository applies the SF1 update to GR1.

6. The repository receives NS1, checks whether a golden record is linked to NS1, and finds none.

7. The repository applies match rules to try to match NS1 to an existing golden record that does not have a NetSuite link. NS1 fails to match GR1 due to the previous updating of the value of field A.

8. Golden record GR2 is created with a link to NS1.

9. Salesforce record SF2, derived from GR2, is created.

10. Golden record GR2 is updated with a link to SF2.

At this point there is an extra golden record, GR2, and Salesforce has an extra record, SF2. To properly synchronize the master data with Salesforce and NetSuite, one would need to manually intervene as follows:

1. Delete SF1, which would then cause the deletion of GR1.

2. Update SF2, changing the value of field A from 1 to 2, which would then cause the updating of GR2 and then NS1.