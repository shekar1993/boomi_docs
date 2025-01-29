# Creating Hub role entitlements

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-06d21275-b0c6-4854-abef-5782326aa85b"/>
</head>

Administrators can add Hub entitlements to custom roles to specify which specific objects and areas of Boomi DataHub a data steward can access and which actions they can perform.


## Before you begin

Your Boomi Enterprise Platform account must have:

* Advanced User Security feature activated - contact your account manager to add this feature.
* Custom role configured with the MDM - Stewardship privilege.


## About this task
[Custom Roles](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_custom_roles_10e7d3e0-11fc-11ee-be56-0242ac120002.md) can have Hub entitlements, which are additional permissions for data stewards. Entitlements grant and restrict Stewardship access to specific models, repositories, functionalities, and sections within Boomi DataHub. For example, you can allow a Data Steward to view all staged data and prevent them from deleting it.

Hub entitlements require the Advanced User Security feature, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions.

With the Advanced User Security feature, Administrators must grant Hub entitlements to custom roles that have the MDM - Stewardship privilege so they can perform data stewardship duties.

A custom role displays in Hub Role Entitlements if the role has the MDM - Stewardship privilege. If the custom role has the MDM - Stewardship Management privilege, it does not display in Hub Role Entitlements because the privilege overrides Hub entitlements.

## Procedure



1. In the Boomi Enterprise Platform, navigate to Settings > Account Information and Setup > User Management.
2. In Hub Role Entitlements, click the gear icon next to a custom role. Action entitlements cascade downward from broad to more specific access.
3. Select the Actions tab.
4. Select the scope of access:
    * All Repositories & Models - allows you to grant and restrict access across all repositories, data domains, and records in your instance. For example, you may want to prevent a user from editing any record in your instance, regardless of the repository or domain.
    * A repository name - allows you to grant and restrict access to records within a specific repository.
    * A data domain name - allows you to grant and restrict access to records associated with a specific domain in a repository. For example: your customer domain.
5. Select the check box next to Action to grant access. A gray, selected check box indicates that the action or access is inherited from a parent level and is already applied to the role.

:::note

The Export Records entitlement is only available when you’ve activated the Exporting Hub data feature in your account. Contact your Boomi account representative to add the Export Hub data feature.

:::

![Hub entitlement action check boxes](../Images/Getting%20Started/img-hub_entitlement_scope_f3960239-cc76-4db4-8137-134d3ec0d2c9.png)



6. **Optional**: If you selected a domain name, you can select the Filters tab to limit access to specific tagged data only.
    * Data View - allows users to view golden records. The Data View check box is available when you assign the ability to view records in Actions.
    * Quarantine View - allows users to view quarantined records. The Quarantine View check box is available when you assign the ability to quarantine records in Actions.
7. Click **Save**.