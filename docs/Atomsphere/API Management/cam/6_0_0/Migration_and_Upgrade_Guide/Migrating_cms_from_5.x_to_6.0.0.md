---
sidebar_position: 6
---

# Migrating CMS

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c215ef8f-d858-4bdb-9a03-bfff6297b2d6"/>
</head>

A new migration utility is created for migrating CMS to Local Edition 6.0.0. The process is applicable when migrating the CMS data from the Local Edition versions 5.3.x, 5.4.x, 5.5.x, and 5.6.x. 

:::note

Points to consider for the CMS migration:

- Only the latest published CMS objects can be migrated.

- Only the active CMS objects can be migrated.

- If there are any unpublished folders that have published objects inside them, such unpublished folders are also published.

:::

## Before you begin

- Ensure that you have migrated the configuration data and tokens. For more information, see [Migrating Configuration Data in the Untethered Mode](./Migrating_from_5.x_to_6.0.0.md) and [Migrating Tokens in the Untethered Mode](./Migrating_tokens_from_5.x_to_6.0.0.md).

- The content\_objects and content\_objects\_role tables in MySQL 8 must be empty.

Run the following command. 

```xml
migrate.py --migrate\_cms
```
