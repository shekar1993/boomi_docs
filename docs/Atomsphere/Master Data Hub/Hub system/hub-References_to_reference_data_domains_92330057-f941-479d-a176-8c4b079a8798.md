# References to reference data domains

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-92330057-f941-479d-a176-8c4b079a8798"/>
</head>


The goal of implementing inter-domain referencing from master data domains for the nouns of a business to reference data domains is to ensure reference data is consistent across master data domains and across the source systems that contribute to individual master data domains. Achieving this goal requires that one of the reference data domain’s contributing sources be designated as the domain’s default source.

If a source contributing to a domain is designated as the domain’s default source, thereby identifying the domain as a reference data domain, when an entity is contributed to a referencing master data domain from a source not attached to the reference data domain, an attempt is made to match the entity ID in the referencing field to an entity ID linking a golden record in the reference data domain to the default source. If the attempt is successful, the reference is resolved for the source contributing the entity.

For example, suppose you are maintaining these domains in Hub:

- Country contains only a list of countries. NetSuite is the sole contributing source. In the Country domain, there is a golden record linked to the NetSuite source entity with ID 1. The Country field value in that golden record is United States.

- Account has Salesforce and Workday as sources and a reference field, Country, referencing the Country domain.

Assume NetSuite is at first not designated as the default source for the Country domain. While that is the case, if an entity is contributed to the Account domain by Salesforce or Workday with any Country field value, the Country field in the created or updated Account golden record would not be populated. The reference would be designated as Pending for its contributing source.

Assume NetSuite is then designated as the default source for the Country domain. While that designation is in effect:

- If an entity is contributed to the Account domain by Salesforce or Workday with the Country field value of 1, the reference field value in the created or updated Account golden record would be populated with the ID of the United States golden record. That reference would be designated as Resolved for its contributing source.

- If an entity is contributed to the Account domain by Salesforce or Workday with a Country field value that is not an entity ID linking any golden record in the Country domain to NetSuite, the Country field in the created or updated Account golden record would not be populated. That reference would be designated as Pending for its contributing source.

## Immediate effects of changes to a referenced domain’s data or configuration
When the default source designation is changed from one source to another, there are two immediate effects:

1. All resolved references to golden records in the referenced domain linked to the previous default source are changed to Pending.

2. Then an attempt is made to match the entity ID in each pending reference to the entity ID linking a golden record in the referenced domain to the new default source. For each such successful attempt, the reference is resolved for its contributing source.

The following other changes in the configuration of a referenced domain with a designated default source, or to the domain’s data, immediately result in the discarding or changing to Pending of resolved references from golden records in referencing domains to golden records in the referenced domain.

- When an end-dated golden record is purged from the referenced domain, resolved references to that golden record are changed to Pending.

- When a golden record in the referenced domain is unlinked from the default source, resolved references to that golden record are changed to Pending.

- When the referenced domain’s default source is removed (detached), resolved references to golden records in the referenced domain are discarded. However, if, for a given golden record, the removed source is the only source for which a reference is resolved, the reference is instead changed to Pending.

- When the default source designation is removed in the referenced domain and another source is not designated, all resolved references to golden records in the referenced domain linked to the previous default source are changed to Pending.

- When the data in the referenced domain is cleared, all resolved references to golden records in the referenced domain are changed to Pending.

The following other changes in the configuration of a referenced domain with a designated default source, or to the domain’s data, immediately result in the resolution of references from golden records in referencing domains to golden records in the referenced domain.

- When a golden record in the referenced domain is created or updated, an attempt is made to match the entity ID in each pending reference to the entity ID linking the created or updated golden record to the default source. For each such successful attempt, the reference is resolved for its contributing source. Furthermore, quarantine entries are automatically resolved for entities quarantined in referencing domains due to an unresolvable reference to that entity ID or a reference matching error specific to that entity ID.

- When an end-dated golden record in the referenced domain is restored, an attempt is made to match the entity ID in each pending reference to the entity ID linking the restored golden record to the default source. For each such successful attempt, the reference is resolved for its contributing source.