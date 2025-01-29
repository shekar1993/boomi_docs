# Account Group settings 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-194BB629-ACD1-40EF-A962-8B80A342B16E"/>
</head>


Boomi partners can control their account and user relationships.

:::note 

If you use a single account, account groups are not available and not required. Primary accounts and the **Account Groups** tab are for administrators of a primary account who manage multiple accounts. If you manage multiple accounts, you must contact to have Primary accounts and the Account Groups tab enabled.

:::

The Account Groups tab, located on the Settings page, enables administrators of primary accounts to define and manage relationships between various resources and the accounts that use those resources.

Platform features and resources are enabled for accounts, not for individual users. Users have access to an account and therefore have access to the account's features and resources.

Partners can use account groups to manage:

-   a large number of customer accounts and to distribute access rights. For example, a partner manages 1000 accounts and has five different support teams. The primary account administrator can create an account group for each of the five support teams and then assign 200 accounts to each account group.

-   partner users and direct customer users. Setting up account groups allows your partner user base to have strategic access to specific groups of accounts where some users have limited versus administrative access. The direct customers can still enable users and roles by using the User Management tab.

-   a partnership where systems integrators are used. The primary account administrator can create an account group for each systems integrator and assign the appropriate accounts to each account group.


## Types of user access 

If you use account groups, there are two types of user access:

-   Direct Access — The user is assigned role\(s\) directly on an account by using the User Management tab.

-   Account Group Access — The user is assigned role\(s\) through one or more account groups by using the Users in Group list.


Users added to the Account Groups tab in the Users in Group list are independent from the users added directly to the User Management tab. If two instances of the same user exist for both Direct access and Account Group access, the Direct access user role and privileges takes precedence when that user logs into the account.

:::note 

There is no more inheritance-based user access. You can no longer switch into an account based on having access to a parent account. Account groups take the place of a parent/child account relationship.

:::

## Support access role 

On the Account Information tab, there is a Support Access Role field that allows direct customer users, enabled under User Management, to control the level of access that outside users should have upon logging into the account. If a partner user is enabled within an account group, the Support Access Role setting takes precedence and limits the account group user to this setting. This is only applicable when the partner user is not enabled as a Direct Access user in the account.