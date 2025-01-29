# Shopify changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bb49b4bb-1bb7-4248-b92a-9b87925fd117"/>
</head>


## Changelog

**2024-11 (Version 24.11.2, Current)**

- The Shopify connector has been updated to use the 2024-4 version of the Shopify REST APIs. Additionally, the Shopify object request and response profiles have also been updated to support this change. Existing integrations will remain unchanged and continue to use their original versions.
  - APIs of all the objects were updated to use the 2024-04 version. Users must re-import the schemas to update their API version to 2024-04. Backward compatibility is supported. If users choose not to update to the latest version, no modifications will be made.
  - We have added or updated fields to Request/Response profiles to support 2024-04 version, re-import the schemas to apply the update. To learn more, see the topic [Shopify 2024-11 updates](../../Integration/Connectors/r-atm-Shopify_2024-11_updates.md).


**2024-09 (Version 24.09.0)**

- Addressed flagged Sonar issues.

**2024-06 (Version 24.06.2)**

- Necessary runtime packages are now packaged with the connector.

**2024-02 (Version 24.02.0)**

- User is able to set the deadline with the desired date and time for Fulfillment Orders through the connector.

**2023-11**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).

**2023-10**

- The order response payment_details was incorrectly being returned as an array when using an imported Orders profile.
- The Fulfilment Order API Query action was corrected to not have any selectable response fields and all the following fields except `order_id` were deprecated from the filtering option: `created_at_min`, `line_items`, `receipt`, `since_id`, `tracking_numbers`, `tracking_urls`, `updated_at_max`, `updated_at_min`.
- The Fulfillment Order APIs were updated to use the 2023-07 version.

**2023-09**

- We deleted the following deprecated fields from the Request/Response JSON schemas:

  - total_spent
  - total_price_usd
  - last_order_id
  - last_order_name
  - orders_count
  - total_spent
  - origin_location
  - destination_location
  - total_price_usd

  Users must re-import the schemas to get the deletion updates reflected in the latest 2023-07 version of the Order API.