# Releasing an integration pack

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a69e49ac-ea77-4676-b930-2f177ce6b84d"/>
</head>

Release an integration pack on the **Integration Packs** page to schedule or push updates to user accounts that subscribe to the integration pack. Releasing an integration pack is how you make new versions of shared processes and API components available to consumers in your Account Groups.

## About this task

The steps for releasing an integration pack are a two part process. You must first review the versions of packaged components that are available for release or choose to select a different version of a component depending what you intend to release. In the second step, choose whether to immediately release your integration pack or schedule its release for a future date. Use the Release Integration Pack wizard to make your decisions for both steps, as outlined in this topic.

The steps for re-releasing an integration pack are the same as those for its initial release. In both cases, you first need to add one or more shareable packaged processes or API Service components to the integration pack.

:::note

For Legacy deployment, an integration pack consists of published processes and API Service components. The UI for releasing integration packs under Legacy deployment varies slightly from this task.

:::

## Select versions of packaged components

Selecting a version of a packaged component for an integration pack release not only allows you to have granular control over each item in the pack, but it also allows you to effectively roll back the integration pack to a different version. Follow the steps below for verifying or changing versions for an integration pack component:

1. From the Integration Packs landing page \(**Manage** \> **Integration Packs**\), select the integration pack that you wish to release.

2. Click the **Release Integration Pack** button. You will not see the **Release Integration Pack** button if your packages within the Integration Pack are already released.

    The Release Integration Pack wizard displays.

3. On the **Release Integration Pack: Select Versions** screen of the wizard, review the version of each component that is included in the selected integration pack. The wizard selects the pending version latest available version of the packaged component by default.

    :::note
    
    If you do not need to make any changes to the selected versions of any packaged components in the pack, skip to step 6. Otherwise, continue on to step 4.

    :::

4. (Optional) To select a different version of the packaged component to release as part of the integration pack, click the **Select another version** link in the Pending Version column of the component table.

    The Select Version dialog appears. To change the existing version, click the radio button option for a different version and click **Select Version**, or click **Cancel** to return to the main wizard without making changes.

5. (Optional) Click **View Details** on the release wizard to view more granular information about the packaged component and to help you make informed decisions about whether or not this is the version you would like to release as an integration pack.

6. Once you finish making your selections, click **Next**.

    The Select Release Schedule screen of the Release Integration pack wizard appears.

Follow steps in the next section to complete the release of your integration pack.

## Schedule the integration pack

After making selections for your packaged component versions, you can now schedule a release. Follow the steps below to choose your release options.

1. (Continued from the Release Integration Pack wizard) On the **Select a Release Option** field, do one of the following:

    - To specify immediate release, select **Release immediately**.

        If you are re-releasing the integration pack, the update would be applied immediately to managed accounts in which the integration pack is installed.

    - To specify a future release date, select **Release on specified date**. Then click the **Release on Date** field and select the desired release date in the drop-down calendar.

        If you are re-releasing the integration pack, users of managed accounts in which the integration pack is installed will have the option to apply the pending update. On the specified release date, if the pending update had not yet been applied manually, it will be applied automatically.

        :::note
        
        Integration packs scheduled for a future date are automatically released between midnight and 1 A.M., respective to the server scheduler's eastern timezone, on the release day.

        :::

2. Click **Release Integration Pack** \(if you specified immediate release\) or **Schedule Integration Pack Release** \(if you specified a future release date\).

3. Click **Finish** on the Success screen.

## Results

If you specified immediate release, the release occurs; the Packaged Components list updates to reflect the versions of the packaged components in the new release. If you specified a future release date, the release date appears above the Packaged Components list.

## Next steps

If you have not already done so, add the integration pack as a resource to account groups on the **Account Groups** tab in **Settings** \> **Account Information and Setup**. You only need to do this once for future releases to be shared to the account group. For more information on account groups and how to create groups and add users, read the topic [Adding a resource to an account group](../Integration%20management/t-atm-Adding_a_resource_to_an_account_group_09eb9daf-9fca-465b-b681-55a5da819184.md).
