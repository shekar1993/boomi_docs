# Staged Entities page URLs 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-45047591-bef2-4d35-a764-9a2f9a70798e"/>
</head>


While the Staged Entities page is loaded, the URL in the browser location bar contains parameters specifying the currently applied filters. You can enter a URL that contains filter parameters directly in the location bar. You can also bookmark URLs that contain filter parameters.

The delimiter between filter parameters is the semi-colon (;). For example, the following URL, applies filtering by the repository having system ID 01234567-89ab-cdef-0123-456789abcdef and the domain having system ID abcdef01-2345-6789-abcd-ef0123456789, selects the staging area having Boomi DataHub system ID bcdef012-3456-789a-bcde-f0123456789a, and applies filtering by entity ID 11 and the past 24-hour time span:

```
https://platform.boomi.com/MdmSphere.html#mdm_staging;accountId=account-123456;repository=01234567-89ab-cdef-0123-456789abcdef;universe=abcdef01-2345-6789-abcd-ef0123456789;**entityId=11;dateRange=day;stagingId=bcdef012-3456-789a-bcde-f0123456789a**
```

These are the valid filter parameters:

-   `entityId` — entity ID.

-   `dateRange` — one of the following:

    -   `hour` — equates to the **Past Hour** selection.

    -   `day` — equates to the **Past 24 Hours** selection.

    -   `week` — equates to the **Past Week** selection.

    -   `range` — equates to a custom time span if followed by these parameters:

        -   `tz` — UTC time zone offset.

            The offset is applicable to both the range starting and ending times. The default is the offset for the user’s system’s local time zone. This parameter is specified in RFC 822 format, which is five characters: ±HHMM. For example, –0400 is the offset for the US Eastern time zone while daylight saving time is in effect. While this parameter can be omitted from a bookmarked URL specifying a `range`, if the bookmark is to be shared with users in different time zones, including this parameter ensures those users will have the same view of the data.

        -   `fromDate` — starting date specified as MM/DD/YYYY.

        -   `fromHour` — hour in the range 00–23.

        -   `fromMinute` — minute in the range 00–59.

        -   `toDate` — ending date specified as MM/DD/YYYY.

        -   `toHour`— hour in the range 00–23.

        -   `toMinute` — minute in the range 00–59.

-   `state` — one of the following:

    -   `COMPLETED.CREATED` — equates to the **Entity Result** selection of Create Record.

    -   `COMPLETED.DELETED` — equates to the **Entity Result** selection of Delete Record.

    -   `COMPLETED.LINKED` — equates to the **Entity Result** selection of Link Record.

    -   `COMPLETED.LINKED_WITH_UPDATE` — equates to the **Entity Result** selection of Link and Update Record.

    -   `COMPLETED.NOOP` — equates to the **Entity Result** selection of No Change to Record.

    -   `COMPLETED.UPDATED` — equates to the **Entity Result** selection of Update Record.

    -   `QUARANTINED.*` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of All.

    -   `QUARANTINED.AMBIGUOUS_MATCH` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Ambiguous Match.

    -   `QUARANTINED.DUPLICATE_KEY` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Duplicate Collection Key.

    -   `QUARANTINED.ENRICH_ERROR` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Data Quality Error.

    -   `QUARANTINED.FIELD_FORMAT_ERROR` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Field Format Error.

    -   `QUARANTINED.INCORPORATE ERROR` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Other Incorporation Error.

    -   `QUARANTINED.MATCH_REFERENCE_UNKNOWN` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Reference Matching Error.

    -   `QUARANTINED.MULTIPLE_MATCHES` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Multiple Matches.

    -   `QUARANTINED.PARSE_FAILURE` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Data Integration Error.

    -   `QUARANTINED.POSSIBLE_DUPLICATE` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Potential Duplicate.

    -   `QUARANTINED.RECORD_ALREADY_ENDDATED`— equates to the Entity Result selection of Quarantine and the Quarantine Cause selection of Record Already End-dated.

    -   `QUARANTINED.REFERENCE_UNKNOWN` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Unknown Reference Value.

    -   `QUARANTINED.REQUIRED_FIELD` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Required Field Omitted.

    -   `QUARANTINED.REQUIRES_APPROVAL` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Create Approval Required.

    -   `QUARANTINED.REQUIRES_END_DATE_APPROVAL` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of End-date Approval Required.

    -   `QUARANTINED.REQUIRES_UPDATE_APPROVAL` — equates to the **Entity Result** selection of Quarantine and the **Quarantine Cause** selection of Update Approval Required.

    -   `QUARANTINED.REQUIRES_UPDATE_WITH_BASE_VALUE_APPROVAL` — equates to the **Entity Result** selection of Quarantine and the **Qurantine Cause** selection of Update With Base Value Approval Required.

-   `stagingId` — Boomi DataHub system ID of the staging area. This is the last segment of the staging area’s endpoint URL.