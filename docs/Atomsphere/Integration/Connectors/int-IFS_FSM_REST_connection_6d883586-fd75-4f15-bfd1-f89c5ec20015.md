# IFS FSM REST connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6d883586-fd75-4f15-bfd1-f89c5ec20015"/>
</head>


The IFS FSM REST connection represents and contains all the information that is needed to connect and log into a single IFS FSM account associated with your workspace. If you have multiple accounts, you need a separate connection for each. You can pair a single connection with different operations to perform a unique action against an IFS Applications instance.

## Connection tab

The IFS FSM REST connector supports basic authentication \(username:encodedpassword\).



URL
:   \(Required\) The home URL of your IFS FSM OData endpoint. For example: https://server-name.ifsworld.com/odata

Username
:   The IFS FSM username associated with the account for authentication.

Password
:   The IFS FSM password associated with the account for authentication.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::