---
sidebar_position: 7
---

# API Plan Rate Limits

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-9ca8ac40-7010-46fa-88ab-0c14f1f32b4c"/>
</head>

Like individual APIs, Plans that combine multiple APIs, can also have the call rate limits. These rate limits are applied to all calls that are made to a particular Package Plan.

The following table describes the fields on the **API Plan Rate Limits** page. 

|**Field** |**Description** |
| ------ | ------- |
|Throttle|Maximum number of calls (Queries) handled per second (QPS) per package key for the Plan. |
|Allow package keys to override throttle settings|Setting that enables the Package key limit to override the limit set in the **Throttle** field. |
|Quota Period|<p>Maximum number of API calls that can be made globally in a specified period. </p><p>The following are the available options: **Minute, Hour, Day, and Year**. </p>|
|Allow package keys to override quota settings|Setting that enables the Package key limit to override the limit set in the **Quota** field. |

:::note

The following table describes use cases and resulting behaviors when Throttle and Quota Period values are 0, non-zero/non-empty, or empty: 

|**Use Case** |**Throttle Value** |**Quota Value** |**Throttle Limit honored** |**QPS Limit honored** |
| ----- | ------ | ----- | ------ | ------ |
|1 |0 |0 |0 |0 |
|2 |Non-zero/ non-empty field value |Empty field |As defined by field |Unlimited |
|3 |Empty field |Non-zero/ non-empty field value |Unlimited |As defined by field |
|4 |Non-zero/ non-empty field value |Non-zero/ non-empty field value |As defined by field |As defined by field |
|5 |Empty field |Empty field |Unlimited |Unlimited |

:::

