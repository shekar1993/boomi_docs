<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bc0170de-6f20-4d24-8a73-9a03136ca9d0"/>
</head>

# Boomi Flow Client connection

The Boomi Flow Client connection represents a single Flow user. You can pair a single connection component with different Boomi Flow Client operation components to request a unique Flow API action.

## **Connection** tab

**URL** - 
The base URL for the tenant’s service. The current base URL for all tenant services is https://flow.manywho.com.

**Flow User User name** - 
The user name for flow usage for flows requiring authentication using the [Flow Identity Providers](/docs/Atomsphere/Flow/topics/flo-IDP_cc718062-51e1-4c35-b9e7-3e971ac28249.md).

**Flow User Password** - 
The password required to authenticate as a flow user for the specified **Flow User Username**.

**Flow Tenant ID** - 
The ID of the tenant in which flows reside.

**Flow Builder Username** - 
The user name for the builder application.

**Flow Builder Password** - 
The password required to authenticate the builder application for the specified **Flow Builder Username**.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::