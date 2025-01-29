# Runtime and Platform releases

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-8aa6b48e-b0b6-4382-8ffa-a7cf23f0314f"/>
</head>

Boomi provides monthly runtime and platform updates in official releases called the Runtime Release and Platform Release.

On a monthly cadence, Boomi makes two different types of release updates available to users. The **Runtime Release** includes all runtime updates and the **Platform Release** includes all Boomi Enterprise Platform updates. The following sections detail the differences between both types of releases and their release timing.

## Runtime Release

The **Runtime Release** is the official release of Boomi runtime features, enhancements, and fixes. It is a production quality release that provides the flexibility to apply updates to your runtimes, when it's most convenient for you, two weeks prior to the scheduled Platform release.

:::note

Updates to the user interface, the Boomi Enterprise Platform, Partner APIs, and any updates related to Flow and Boomi DataHub are not included in this release.

:::

## About the Runtime Release

The Runtime Release can include updates for the following runtime containers:

- Atoms, Molecules, and Atom Clouds
- API Gateways
- Specific Connectors

The Runtime Release typically occurs two weeks prior to the Platform Release date. Applying the Runtime Release is an optional action. You can apply available Runtime Release updates at any point between the Runtime Release and the Platform Release. If you choose not to apply the Runtime Release, you receive all runtime updates automatically on the Platform Release date, which typically occurs on the second Saturday of each month.

After applying the Runtime Release to accounts automatically, all runtime containers immediately restart and can require downtime. To avoid disrupting your processes and configurations, you can use the Runtime Release up to two weeks sooner and perform the mandatory restart of runtime containers as needed. 

:::note 

When applying the Runtime Release, API Gateways, Atoms, and the nodes in your Molecules and Atom Clouds restart on a rolling basis. For more information, see the topic [Rolling restart of Molecules and Atom Clouds](/docs/Atomsphere/Integration/Integration%20management/c-atm-Rolling_restart_of_Molecules_and_Atom_Clouds_6a2b6e3c-faa0-4447-93b2-8c7def9fe296.md).

:::

Monthly release notes, published at the start of the Runtime Release, list the updates that are or are not available in the Runtime Release. A list of upcoming Runtime Release dates are on the [Notifications page](https://stats.boomi.com/notifications/). The Runtime Release does not include any features, enhancements, or fixes pertaining to the user interface, Boomi Enterprise Platform, or Platform API and Partner API updates. 
You can optionally choose to apply Runtime Release updates at any time up until the next Platform Release. If you do not apply Runtime Release updates to your account before the next Platform Release, the updates are automatically applied when the next Platform Release occurs. Applying Runtime Release updates requires restarting the runtime containers, which can disrupt running processes. For more information, see the topic [Runtime Release](int-Runtime_Release_887cd0a8-7936-4855-bd18-959990778913.md).

## Applying the Runtime Release

In the Integration service, you can apply available Runtime Release updates to individual Atoms (or clustered Molecules or Atom Clouds) and Connectors using the [Atom & Connector Versions panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Atom_and_Connector_Versions_panel_d4696791-ea22-4c02-9402-5485134c5122.md) using [these instructions](/docs/Atomsphere/Integration/Integration%20management/t-atm-Applying_pending_Atom_and_connector_updates_420c313b-ae24-42e8-8a4c-b6b957d7ce67.md), or schedule to automatically apply all runtime updates in bulk using the [Runtime Release Scheduling panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Release_Control_Scheduling_panel_561dc2b7-3beb-49aa-91a4-8d0f6ed95685.md) using [these instructions](/docs/Atomsphere/Integration/Integration%20management/t-atm-Scheduling_Release_Control_updates_426fcd83-065e-4748-9aca-146fee7be7dc.md).

:::note 

Pending Atom and connector updates are also available on the Boomi Test Atom Clouds during the Runtime Release period.

:::

## Questions and answers about Runtime Release

**Is the Runtime Release considered a release candidate or beta release?**

The Runtime Release is neither a beta release or a release candidate, but rather it is an official release. A release candidate (or beta release) is a version of the release that allows customers to test features and report defects, which are then prioritized and fixed in time for the full release. Report any issues related to the Runtime Release to Boomi Support. Boomi fixes issues as part of the regular development cycle for inclusion in a future release.

**How can I know what features and fixes are or are not available in the Runtime Release?**

With each Runtime Release, Boomi provides release notes that list the features and fixes included in Boomi's Runtime Release.

**How do I know when updates are available prior to the Platform Release?**

A system message appears in Integration when Runtime Release updates are available. You also can check the Atom & Connector Versions panel in the Integration service, or the Gateway version panel in the API Management service to see if pending updates are listed for the respective runtime containers. See the Applying the Runtime Release section of this topic for more information.

Additionally, the Runtime Release schedule is also posted on the [Notifications page](https://stats.boomi.com/notifications/).

**Who is able to apply the Runtime Release updates?**

To apply updates to Atoms, Molecules, or Clouds, users with the Atom Management privilege (typically users with the Administrator role) can apply the Runtime Release. You also must be authorized to update the selected Atom. You cannot apply updates to an Atom that you do not own, for example, a Boomi Atom Cloud.

To apply updates to API Gateways, users with the API Management privilege (typically users with the Administrator role) can apply the Runtime Release.

**If I have multiple Atoms, do I have to update all of them at the same time?**

No, you do not have to update all of your Atoms at once. Instead, you can individually update any Atom, Molecule, Atom Cloud, or API Gateway, as needed. See the section Applying the Runtime Release of this topic for more details.

**Will the runtime containers be updated or rolled back immediately after I click the button to apply or to rollback updates?**

The request is sent to the container immediately. Allow time for the updates or rollback to take effect. The container may restart during this process. It waits for a period of inactivity before applying the updates or rollback.

**Can people use the Platform while I apply the updates or a rollback?**

Yes, users who are logged into the platform are not affected.

**Can updates be applied to or rolled back on a runtime container that is not currently running?**

No, the updates or rollback are applied to the container the next time it starts.

**What happens if I don’t apply the Runtime Release updates prior to the Platform Release?**

On the Platform Release date, accounts are automatically updated to use the Runtime Release and Platform Release updates.

**Can I opt out of applying a release update to my runtimes or the Platform?**

No. Runtime and Platform updates are not optional. If you do not apply the Runtime Release during the two week period, iti will be automatically applied along with the Platform Release on the Platform Release date.

## Platform Release

The **Platform Release** delivers new features, enhancements, and fixes that pertain to each of the services that Boomi offers (Integration, Flow, API Management, and so on) and makes them generally available to users. The Platform Release includes updates related to the user interface, the Boomi Enterprise Platform, and API and Partner APIs.

The Platform Release typically occurs on the second Saturday of each month, though timing varies based on major holidays. Upcoming Platform Release dates are listed on the  [Notifications page](https://stats.boomi.com/notifications/). Release notes announce all upcoming updates at least two weeks prior to the scheduled release date.

When the Platform Release occurs, if you did not apply the updates in the most recent Runtime Release to your account, the updates are automatically applied.

:::note

Boomi does not provide an Platform Release in the month of December.

:::
