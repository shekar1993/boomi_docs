# Packaged Component Details panel 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2fff8db3-4c0c-433a-83df-ca5789a39e1f"/>
</head>


The Package Component Details panel contains multiple tabs of information about your packaged component that you can reference at any time.

The Packaged Component Details panel is accessible from a packaged component's Action ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu on the Packaged Components page \(**Deploy** \> **Packaged Components**\) and from the Deployment History dialog \(**Deploy** \> **Deployments** page\).

## Details tab 

The following fields are on the Details tab:

- **Packaged Component ID** - The unique ID assigned to a specific version of a packaged component. Use the **Copy** button to copy the ID to another location, such as the Packaged Component ID search filter.

- **Folder** - The folder location where the component resides within the Build tab's Component Explorer hierarchy.

- **Date Created** - The date and time in which this specific version of the packaged component was created.

- **Created By** - The user whom created this specific version of the packaged component. You can contact this user by copying the email address in this field and copying it into the To addressee field of a new email from the email application of your choice.

- **Sharing** - Indicates whether the packaged component can be shared to the Process Library and integration packs. When the field value is **Allowed**, the packaged component version is shareable. Conversely, when the field value is **Not Allowed**, the version cannot be shared.

   This setting is configured during initial creation of the packaged component and cannot be changed.

- **Package Notes** - Includes any notes that were applied during the initial creation of the packaged component. Notes cannot be changed once a packaged component is created.

- **Status** - A status of **Active** indicates that this packaged component version is operative and is eligible for use in a deployment, the Process Library, or part of an integration pack. A status of **Deleted** indicates this packaged component version is deleted from the account and cannot be used in a deployment, the Process Library, or an integration pack.

The Package Component page only shows Active status packaged components by default. To view deleted versions of packaged components, you must apply the **Deleted Packaged Components** filter.

 Deleted packaged components can be restored from the Packaged Components page by first applying the **Deleted Packaged Components** filter and choosing **Restore** from the Action menu \(![gear icon](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg)\).

## Included Components tab 

The Included Components tab displays all the components included within a packaged component, including any child components that reference the primary component.

For processes, API Service components, and Processing Group components, a packaged component consists of the primary component and all the dependent components that are required to support that component (such as subprocesses, connectors, or maps). For other deployable components (such as certificates and API Proxy components), a package is the component itself.

By default, the primary component is listed first, followed by any dependent components. You can also sort the list of components that make up the package by:

- **Component name** — Alphabetically sorts the names of included components.

- **Component type** — Alphabetically sorts the type of components that are included in the package, like process type, API service type, etc.

- **Folder** — Alphabetically sorts folder location per each component included in the packaged component version. The value in the Folder column always displays the current location inwhich that particular component lives. In other words, if you changed the component's folder location or changed the name of the folder at any time, the Folder value always displays the current location but never the previous.

- **Modified By** — Alphabetically sorts the email of the user who last modified the component on the Build tab.

- **Modified Date** — Chronologically sorts the date and time in which the component was last modified on the Build tab.

:::note

All fields are sortable in both ascending and descending order.

:::

To open a specific component within the package on the Build tab, click the hyperlinked name in the **Component Name** field. To contact the user who last modified a specific component within the packaged component, copy the email address in the **Modified By** field into a new email.

## Deployments tab 

The Deployments tab shows if and where the packaged component version is deployed. You can find and sort such details as:

- **Environment** — The environment to which the packaged component version was deployed.

- **Deployment Date** — The date and time in which the packaged component version was deployed.

- **Deployed By** — The user who deployed the packaged component. To contact the user who last modified a specific component within the packaged component, copy the email address in the **Modified By** field into a new email.

- **Deployment Notes** — Includes any notes about the deployment that were applied during the deployment process.


To open the packaged component in the Deployments page \(**Deploy** \> **Deployments**\), click the **View in Deployments** hyperlink in the Action column.

If you see an empty table upon opening this tab, it simply means that you have not yet deployed the packaged component or it is not currently deployed \(in other words, it has been undeployed\).

## Process Library tab 

In order to view information on this tab, the account must have the Process Library feature enabled, and your user must have permissions to access the Process Library feature.

If a user published the packaged component, the Process Library tab shows details about the publication, including the date and time in which the packaged component was published to the library, the publisher, and any notes about the publication that may have been applied. Additionally, you can open the publication of the packaged component from the Process Library page by clicking the **View Publication** hyperlink in the Action column. The Process Library page opens in a new window.

## Integration Packs tab 

In order to view information on the Integrations Packs tab, the account must have the Integration Packs feature enabled, and your user must have permissions to access the Integration Packs feature.

If a user shared the packaged component as an integration pack, the Integration Packs tab shows details about the integration pack, including the name and description used to define the pack. Additionally, you can click the **View Integration Pack** hyperlink to open the integration pack in the **Manage** \> **Integration Packs** page; upon clicking the link, this page opens in a new window.
