# Role-Based Access Control Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-985749fa-49f4-46c8-a1da-86d1ac46d260"/>
</head>

You can use the role-based access control policy to control access to a resource by specifying the required roles to access it. The policy can be configured to allow only incoming requests with at least one role matching the configured roles.

Role-based access can be configured in a policy rule or in the authentication source on a Gateway. To set up roles on a Gateway, see [this topic](docs/Atomsphere/API%20Management/Topics/r-api-Auth_Source_settings_for_Basic_Authentication_f84a524e-9874-45f4-8a79-c624529d79ba.md).

:::note If you have configured **Restrictions by Role** on the **Deployed API** screen, a role-based access control policy will be created as part of the standard policies. 
:::

## Timing


| On Request | On Response |
|---|---|
|  X |   |  

## Configuration


| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|  `roles` |  yes |The list of required roles.   |Array of strings ||


## Example

```
{ "roles": { "requiredRoles": ["read", "write", "admin"] } }
```


## Errors

|Code|Message|
|---|---|
|`403`| If the policy roles do not match the auth user roles, you will see the following error message:<br/> `Role(s) <LIST_OF_USER_ROLES> for user <USER_NAME> do not match the required role(s) for this request.` <br/> If the auth user doesn’t have any roles, you will see the following error message: <br/> `No Role(s) are associated for user <USER_NAME> to validate the current request.`|
