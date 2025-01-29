# Quarantine page URLs 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-698d8389-e8ee-482e-9620-e7146f489bf1"/>
</head>


While the Quarantine page is loaded, the URL in the browser location bar contains parameters specifying the currently applied filters. You can enter a URL that contains filter parameters directly in the location bar. You can also bookmark URLs that contain filter parameters.

:::note

A Quarantine page URL does not specify the page’s **Filter Operator** setting. Browsing to a bookmarked URL loads the page with **Filter Operator** set to AND.

:::

The delimiter between filter parameters is the semicolon \(;\). For example, the following URL applies filtering by the repository having system ID 01234567-89ab-cdef-0123-456789abcdef, the domain having system ID abcdef01-2345-6789-abcd-ef0123456789, the attached source whose permanent ID is NS, and the past 24-hour time span:

```
https://platform.boomi.com/MdmSphere.html#mdm_quarantine;accountId=account-123456;repository=01234567-89ab-cdef-0123-456789abcdef;universe=abcdef01-2345-6789-abcd-ef0123456789;**sourceId=NS;dateRange=day;type=active**
```

These are the valid filter parameters:

-   `transactionIds` — transaction IDs separated by commas.

    If a single ID is specified and the only other applied filter \(explicitly or implied\) is `type`, the page opens directly to the detail view for that quarantine entry. For example:

    ```
    https://platform.boomi.com/MdmSphere.html#mdm_quarantine;accountId=account-123456;repository=01234567-89ab-cdef-0123-456789abcdef;universe=abcdef01-2345-6789-abcd-ef0123456789;**transactionIds=768bf2e4-9f24-11e3-8169-525400d21c77**
    ```

    If the specified `transactionIds` value is the ID of a single *resolved* quarantine entry, `type=resolved` must also be explicitly included for the page to open directly to the detail view.

-   `type` — one of the following:

    -   `active` — active quarantine entries.

    -   `resolved` — resolved quarantine entries.

    If `type` is omitted it is implied with a value of `active`.

-   `sourceId` — permanent source ID \(not the source name\).

-   `entityId` — entity ID.

-   `causes` — any or all of the following tokens, separated by commas:

    -   `INCORPORATION ERROR` — equates to the **Data Incorporation Error** filter selection.

    -   `INCORPORATE ERROR` — equates to the **Other Incorporation Error** filter selection.

    -   `REFERENCE_UNKNOWN` — equates to the **Unknown Reference Value** filter selection.

    -   `RECORD_ALREADY_ENDDATED`— equates to the **Record Already End-dated** filter selection.

    -   `PARSE_FAILURE` — equates to the **Data Integration Error** filter selection.

    -   `ENRICH_ERROR_GRP` — equates to the **Data Quality Error** filter selection.

    -   `VALIDATION_ERROR` — equates to the **Data Validation Error** filter selection.

    -   `REQUIRED_FIELD` — equates to the **Required Field Omitted** filter selection.

    -   `FIELD_FORMAT_ERROR` — equates to the **Field Format Error** filter selection.

    -   `DUPLICATE_KEY` — equates to the **Duplicate Collection Key** filter selection.

    -   `MATCH_ERROR` — equates to the **Matching Error** filter selection.

    -   `MULTIPLE_MATCHES` — equates to the **Multiple Matches** filter selection.

    -   `AMBIGUOUS_MATCH` — equates to the **Ambiguous Match** filter selection.

    -   `POSSIBLE_DUPLICATE` — equates to the **Potential Duplicate** filter selection.

    -   `MATCH_REFERENCE_UNKNOWN` — equates to the **Reference Matching Error** filter selection.

    -   `REQUIRES_APPROVAL_GRP` — equates to the **Requires Approval** filter selection.

    -   `REQUIRES_APPROVAL` — equates to the **Create Approval Required** filter selection.

    -   `REQUIRES_UPDATE_APPROVAL` — equates to the **Update Approval Required** filter selection.

    -   `REQUIRES_UPDATE_WITH_BASE_VALUE_APPROVAL` — equates to the **Update With Base Value Approval Required** filter selection.

    -   `REQUIRES_END_DATE_APPROVAL` — equates to the **End-date Approval Required** filter selection.

-   `quarantineddateRange` — quarantined date. Value is one of the following:

    -   `hour` — equates to the **Past Hour** selection.

    -   `day` — equates to the **Past 24 Hours** selection.

    -   `week` — equates to the **Past Week** selection.

    -   `range` — equates to a custom time span if followed by these parameters:

        -   `quarantinedtz` — UTC time zone offset.
            The offset is applicable to both the range starting and ending times. The default is the offset for the user’s system’s local time zone. This parameter is specified in RFC 822 format, which is five characters: ±HHMM. For example, –0400 is the offset for the US Eastern time zone while daylight saving time is in effect. While this parameter can be omitted from a bookmarked URL specifying a `range`, if the bookmark is to be shared with users in different time zones, including this parameter ensures those users will have the same view of the data.   

        -   `quaranttinedfromDate` — starting date specified as MM/DD/YYYY.

        -   `quaranttinedfromHour` — hour in the range 00–23.

        -   `quaranttinedfromMinute` — minute in the range 00–59.

        -   `quaranttinedtoDate` — ending date specified as MM/DD/YYYY.

        -   `quaranttinedtoHour` — hour in the range 00–23.

        -   `quaranttinedtoMinute` — minute in the range 00–59.

-   `tags` — system tag IDs separated by commas.

-   `field` — ffield specified by its unique Boomi DataHub-assigned ID, followed by a colon (:) and a field value — for example, `field=ACCOUNT_NAME:Cheerful Cooking`.

-   `resolveddateRange` \(valid only with `type=resolved`\) — resolution date. Value is one of the following:

    -   `hour` — equates to the **Past Hour** selection.

    -   `day` — equates to the **Past 24 Hours** selection.

    -   `week` — equates to the **Past Week** selection.

    -   `range` — equates to a custom time span if followed by these parameters:

        -   `resolvedtz` — UTC time zone offset.

        -   `resolvedfromDate` — starting date specified as MM/DD/YYYY.

        -   `resolvedfromHour` — hour in the range 00–23.

        -   `resolvedfromMinute` — minute in the range 00–59.

        -   `resolvedtoDate` — ending date specified as MM/DD/YYYY.

        -   `resolvedtoHour` — hour in the range 00–23.

        -   `resolvedtoMinute` — minute in the range 00–59.

-   `resolutions` \(valid only with `type=resolved`\) — any or all of the following tokens, separated by commas:

    -   `USER_APPROVED` — equates to the **Approved for Incorporation** filter selection.

    -   `USER_IGNORE` — equates to the **Entity Deleted** filter selection.

    -   `USER_REJECTED` — equates to the **Entity Rejected** filter selection.

    -   `USER_SELECTIVE_MERGED` — equates to the **Fields Selectively Merged** filter selection.

    -   `GRID_DELETED` — equates to the **Golden Record Deleted** filter selection.

    -   `RESTORED` — equates to the **Golden Record Restored** filter selection.
    -   `USER_MATCHED` — equates to the **Matching Issue Resolved** filter selection.

    -   `SUPERSEDED` — equates to the **Newer Version Contributed** filter selection.

    -   `INCORPORATE_SUCCESS` — equates to the **Newer Version Incorporated** filter selection.

    -   `USER_IGNORED_ENRICHMENT` — equates to the **Resubmitted Ignoring Enrichment** filter selection.

    -   `USER_RETRIED_ENRICHMENT` — equates to the **Resubmitted Retrying Enrichment** filter selection.

    -   `USER_REPLAY_WITH_EDITS` — equates to the **Resubmitted With Edits** filter selection.

    -   `USER_REPLAY` — equates to the **Resubmitted Without Editing** filter selection.


The filter parameter `transactionIds` is not valid in combination with other filter parameters — and vice-versa.