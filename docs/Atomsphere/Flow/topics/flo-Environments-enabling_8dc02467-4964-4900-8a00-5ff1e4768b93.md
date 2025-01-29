# Enabling environments

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8dc02467-4964-4900-8a00-5ff1e4768b93"/>
</head>


Enable environments in a tenant on the **Tenant** page.

## Enabling environments

**Note:**

-   You must be a tenant Administrator to enable environments for a tenant.

-   Environments are not supported in tenants that use multi-cloud runtime. See [Flow Multi-cloud](c-flo-MC_149c8266-5449-4c3c-afc4-a53f814bd7bb.md).

To enable environments in a tenant:

1.  Select **Tenant** from the top **Settings** menu to open the **Tenant** page.
2.  Select the **Enable Environments** toggle in the **Environments** section.
3.  Environments functionality is enabled for the tenant. You can select **Environments** from the top **Settings** menu to open the **Environments** page and start using environments.

## Next steps

When you enable environments in a tenant, the flow publishing procedure changes:

-   Any existing published flows in the tenant are automatically published to the production environment.

    -   Existing published flows can still be accessed using their original default flow Run URL.

    -   If you disable environments in the tenant, any flows in the production environment are set as the default published version for the flow.

-   As well as performing basic release management tasks on the **Environments** page, you can access and manage each environment separately.

    -   [Managing environments](flo-Environments-managing_6e577ba9-468e-4dbc-ace5-43b787e418ca.md)

-   You now build flows and add them to a release, instead of publishing them to a default flow URL. Release flows are built and automatically deployed to the development environment. You can then promote the release on to the test and production environments as required.

    -   See [Releases](flo-Environments-releases_cada8541-d290-4f3b-a2a7-3cda33e9ca2a.md)

-   On the flow canvas, the **Publish** icon is replaced with a **Build** icon. Click this icon to open the **Build Flow** form, where you can choose an existing release or create a new release to add the flow to.

    -   See [Creating a release](flo-Environments-adding-to-release_a13156ec-3eee-4303-9c27-a480e88a3ba8.md)