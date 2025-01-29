# Atoms within an environment

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4bac7975-f126-49f9-bcc4-3c1f4cb346f2"/>
</head>


There are important limitations on attaching Atoms to environments.

Attaching Atoms to environments is controlled on the Environments page. The Unattached Atoms list shows all Atoms that are not attached to any environment.

For accounts with Basic environment support, each environment in the account can have a single Atom attached. For accounts with Unlimited environment support, each environment can have an unlimited number of Atoms attached.

If your account has Unlimited environment support and test connections are enabled, you can attach local Atoms to production or test environments. An Atom Cloud can be attached only to an environment with the same classification. In other words, test Atom Clouds can only be attached to test environments, and production Atom Clouds can only be attached to production environments. If you set up additional Atoms in an Atom Cloud, those Atoms can be attached only to an environment with the same classification.

When a local Atom or Atom Cloud is attached to an environment, the connection licenses are calculated based on the classification of the environment. For example, when an Atom is attached to a test environment, the test connection licenses are recalculated. When an Atom or Atom Cloud is moved from one environment classification to another, the connection licenses are recalculated. When an Atom is detached from a test environment and attached to a production environment, the test and production connection licenses are recalculated. See the topic about test connection licensing for more information.

Deployed processes to which an environment are already attached can execute in Atoms subsequently attached to that environment upon attachment. Execution occurs automatically for those processes for which a default schedule is enabled.

Set up environment roles on the Roles tab. Refer to the User Management topic to learn more about setting roles for environments.

![Environments page](../Images/manage-fs-environments_f204bec5-746d-4806-84be-b6e5865c3af6.jpg)

**Related information**  


[Attaching an Atom to or detaching an Atom from an environment](t-atm-Attaching_an_Atom_to_an_Enviro_52424d54-14b4-4e18-82b8-8f756211d5a6.md)

[User Management settings](../../Platform/r-atm-User_management_baf961e2-b480-4fca-a3f5-8262aed6c031.md)

[Test connection licensing](../../Platform/c-atm-Test_connection_licensing_04708d54-8ea3-453f-8dac-3e2e6b72330b.md)