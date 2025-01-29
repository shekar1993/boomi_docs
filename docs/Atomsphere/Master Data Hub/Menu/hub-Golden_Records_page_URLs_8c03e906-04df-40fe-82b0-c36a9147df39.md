# Golden Records page URLs 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8c03e906-04df-40fe-82b0-c36a9147df39"/>
</head>


While the Golden Records page is loaded, the URL in the browser location bar contains parameters specifying the currently applied filters. You can enter a URL that contains filter parameters directly in the location bar. You can also bookmark URLs that contain filter parameters.

:::note

A Golden Records page URL does not specify the page’s **Filter Operator** setting. Browsing to a bookmarked URL loads the page with **Filter Operator** set to AND.

:::

The delimiter between filter parameters is the semi-colon (;). For example, the following URL retrieves active golden records updated during the past 24 hours that were originally contributed by the source whose permanent ID is NS, which is attached to the domain with system ID abcdef01-2345-6789-abcd-ef0123456789, which is hosted in the repository with system ID 01234567-89ab-cdef-0123-456789abcdef:

```
https://platform.boomi.com/MdmSphere.html#mdm_data;accountId=account-123456;repository=01234567-89ab-cdef-0123-456789abcdef;universe=abcdef01-2345-6789-abcd-ef0123456789;sourceId=NS;updated_dateRange=day;type=active
```

These are the valid filter parameters:

- `ids` — golden record IDs separated by commas.

  If a single ID is specified and the only other applied filter (explicitly or implied) is `type`, the page opens directly to the detail view for that golden record. For example:

  ```
  https://platform.boomi.com/MdmSphere.html#mdm_data;accountId=account-123456;repository=01234567-89ab-cdef-0123-456789abcdef;universe=abcdef01-2345-6789-abcd-ef0123456789;ids=c23e3c8c-2840-449e-ba6c-ea90eccd99c3
  ```

  If the specified `ids` value is the ID of a single *end-dated* golden record, `type=deleted` must also be explicitly included for the page to open directly to the detail view.

- `type` — one of the following:

    - `active` — active golden records.

    - `deleted` — end-dated golden records.

  If `type` is omitted it is implied with a value of `active`.

- `entitySource` — permanent source ID (not the source name).

- `entityId` — entity ID.

- `created_dateRange` (valid only if `type` is omitted or its value is `active`) — created date. Value is one of the following:

    - `hour` — equates to the **Past Hour** selection.

    - `day` — equates to the **Past 24 Hours** selection.

    - `week` — equates to the **Past Week** selection.

    - `range` — equates to a custom time span if followed by these parameters:

        - `created_tz` — UTC time zone offset.

        - `created_fromDate` — starting date specified as MM/DD/YYYY.

        - `created_fromHour` — hour in the range 00–23.

        - `created_fromMinute` — minute in the range 00–59.

        - `created_toDate` — ending date specified as MM/DD/YYYY.

        - `created_toHour` — hour in the range 00–23.

        - `created_toMinute` — minute in the range 00–59.

- `updated_dateRange` (valid only if `type` is omitted or its value is `active`) — updated date. Value is one of the following:

    - `hour` — equates to the **Past Hour** selection.

    - `day` — equates to the **Past 24 Hours** selection.

    - `week` — equates to the **Past Week** selection.

    - `range` — equates to a custom time span if followed by these parameters:

        - `updated_tz` — UTC time zone offset. <br />
        The offset is applicable to both the range starting and ending times. The default is the offset for the user’s system’s local time zone. This parameter is specified in RFC 822 format, which is five characters: ±HHMM. For example, –0400 is the offset for the US Eastern time zone while daylight saving time is in effect. While this parameter can be omitted from a bookmarked URL specifying a `range`, if the bookmark is to be shared with users in different time zones, including this parameter ensures those users will have the same view of the data. 

        - `updated_fromDate` — starting date specified as MM/DD/YYYY.

        - `updated_fromHour` — hour in the range 00–23.

        - `updated_fromMinute` — minute in the range 00–59.

        - `updated_toDate` — ending date specified as MM/DD/YYYY.

        - `updated_toHour` — hour in the range 00–23.

        - `updated_toMinute` — minute in the range 00–59.

- `tags` (valid only if `type` is omitted or its value is `active`) — system tag IDs separated by commas.

- `unresolved` (valid only if `type` is omitted or its value is `active`) — value is the name of a reference field, optionally followed by a colon (:) and the permanent ID of a source (not the source name).

- `sourceId` (valid only if `type` is omitted or its value is `active`) — permanent ID (not the source name) of creating source.

- `srcLink` (valid only if `type` is omitted or its value is `active`) — one of the following, followed by a colon (:) and the permanent ID of a source (not the source name):

    - `LINKED` — having links to the specified source.

    - `NOT_LINKED` — not having links to the specified source.

  For example: `srcLink=LINKED:NS`.

- `field` — field specified by its unique Boomi DataHub-assigned ID, followed by a colon (:), operator, another colon, and, except in the case of the IS_NULL or IS_NOT_NULL operator, a field value — for example, `field=ACCOUNT_NAME:STARTS_WITH:Cheerful Cooking`. A pair of tilde (~) characters separates multiple criteria. Operator is one of the following:

    - `EQUALS` — equates to the **Equals** selection for all field types except Reference.

    - `REF_EQUALS` — equates to the **Equals** selection for Reference

    - `NOT_EQUALS` — equates to the **Not Equal To** selection.

    - `IS_NULL` — equates to the **Is Not Set** selection.

    - `IS_NOT_NULL` — equates to the **Is Set** selection.

    - `STARTS_WITH` — equates to the **Starts With** selection.

    - `ENDS_WITH` — equates to the **Ends With** selection.

    - `CONTAINS` — equates to the **Contains** selection.

    - `LESS_THAN` — equates to the **Less Than** selection.

    - `LESS_THAN_EQUAL` — equates to the **Less Than or Equal To** selection.

    - `GREATER_THAN` — equates to the **Greater Than** selection.

    - `GREATER_THAN_EQUAL` — equates to the **Greater Than or Equal To** selection.

    - `RANGE` — equates to the **In the Range** selection. The value format is format is yyyy-MM-dd'T'HH:mm:ss'Z'%5Eyyyy-MM-dd'T'HH:mm:ss'Z', where 'T' separates each date and time and “%5E” (URL-encoded “^”) separates the start and end timestamps — for example, `field=CREATED_DATE:RANGE:2013-03-01T15:32:00Z%5E2016-05-04T03:16:48Z`.

- `enddate_dateRange` (valid only with `type=deleted`) — golden record end-date. Value is one of the following:

  - `hour` — equates to the **Past Hour** selection.

  - `day` — equates to the **Past 24 Hours** selection.

  - `week` — equates to the **Past Week** selection.

  - `range` — equates to a custom time span if followed by these parameters:

    - `enddate_tz` — UTC time zone offset applicable to both the range starting and ending times. This parameter is specified in RFC 822 format, which is five characters: ±HHMM. For example, –0400 is the offset for the US Eastern time zone while daylight saving time is in effect.

    - `enddate_fromDate` — starting date specified as MM/DD/YYYY.

    - `enddate_fromHour` — hour in the range 00–23.

    - `enddate_fromMinute` — minute in the range 00–59.

    - `enddate_toDate` — ending date specified as MM/DD/YYYY.

    - `enddate_toHour` — hour in the range 00–23.

    - `enddate_toMinute` — minute in the range 00–59.

The filter parameters `ids` and `entityId` are not valid in combination with other filter parameters — and vice-versa.