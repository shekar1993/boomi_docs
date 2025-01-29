# Stripe changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4d7c31c5-c130-407b-89ea-3cd3dc8ecff4"/>
</head>

## Changelog

**2025-01 (Version 5, Current)**

- New actions have been introduced for Balance Transactions and Capture Charges objects.

- The Balance Transactions object now supports the Create request, response profiles, Get and List actions. The Charges object now supports the Capture Charges Execute action.

**2024-11 (Version 3)**

- This connector is now in General Availability (GA).

- New actions have been introduced for various objects, including Execute, Retrieve, List Line Items, and Update Lines for Customers, Products, Prices, Payment Links, Invoices, Invoice Items, Payment Intents, and Charges. Additionally, a new Query action is now available for Customers, Products, Prices, Payment Intents, Invoices, and Charges.

**2024-09 (Version 2)**

- Enhanced Tech Preview connector  
  - When an action is selected for the Stripe connector, only the supported object types for that action (e.g: Customers, Charges, Invoices) will be displayed at the import tab.
  - Updated Request/Response Profiles for Customers, Products, Prices, Payment Links, Payment Intents, Charges, Invoice Items, and Invoices to resolve earlier profile configuration mismatches and ensure smoother integration.
  - Introduced the new List action for the objects Customers, Products, Prices, Payment Links, Invoices, Invoice Items, Payment Intents and Charges.
  - Introduced new objects Invoices, Invoice Lines, Charges and Payment Intents.
  - Enhanced user experience by making the `id` parameter available as a connector step parameter for the **Get** action and as part of the request profile for the **Update** action.

**2024-08 (Version 1)**

- Initial Tech Preview release of the connector. To learn about support levels of Tech Preview connectors, see the topic [Feature Release Stages](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).