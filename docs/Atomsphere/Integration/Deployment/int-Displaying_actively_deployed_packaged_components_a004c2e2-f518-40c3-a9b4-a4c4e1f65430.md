# Displaying actively deployed packaged components 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a004c2e2-f518-40c3-a9b4-a4c4e1f65430"/>
</head>

On the Deployments page, use filters to display a list of packaged components that are actively deployed, including all types of components in all environments to which you have access.

## Procedure

1. In the Deploy menu, select **Deployments**.

    The Deployments page is displayed.

    By default, the deployments are sorted by deployment date in descending order. You can also sort the list by:

    - Component name
    - Component Type
    - Packaged Version
    - Environment
    - Deployment Date
    - Deployed By

2. A date filter of **Past Week** is applied by default. You can change the date filter or remove it by clicking the **Clear**![img-int-blue_circle_with_white_x](../Images/img-int-blue_circle_with_white_x_8a03d8b0-defd-4cfc-bcc1-b3d53392b78b.jpg) button.

3. To filter the list of deployments, perform the following steps:

    1. Click **Add Filter** ![img-atm-Add_filter](../Images/img-atm-Add_filter_e3ea3e31-68f5-46f4-b975-4f37e3d3df53.jpg).
    2. Select one of the following filters:

        - **Date**— Filter and narrow results by deployments that were initiated within the past hour, the past 24 hours, the past week, or within a specified date range.

        - **Component**— Filter by the specific names of deployed components.

        - **Component Type**— Filter by a specific type of component category. For example, process or API service.

        - **Deployed By**— Enter a user email to see only those deployments that were initiated by a specific user.

        - **Deployment ID**— Filter by the unique identifier associated with a specific deployment. You can view the Deployment ID by click on a deployment's **Action** menu, and select **Deployment History** from the list of options. The alphanumeric identifier is located in the Deployment ID column.

        - **Environment**— Filter results to show only those components that were deployed to the selected environment.

        - **Packaged Version**— Filters versions of packaged components according to any matches that exist in the Packaged Component column.

        - **Packaged Component ID** - Filters packaged components according to a specific ID. You can locate and copy a packaged component's ID by going to the **Action menu ![Action menu icon](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg)** \> **Package Component Details page**.

    3. Click **Apply**. The deployments that match the filter you selected appear in the list. The filter that is in effect is displayed at the top of the table.

    4. To apply additional filters, click **Add Filter**![img-atm-Add_filter](../Images/img-atm-Add_filter_e3ea3e31-68f5-46f4-b975-4f37e3d3df53.jpg) again and select another filter.

4. To reset the list, clear all filters using the Clear All button ![img-int-blue_circle_with_white_x_in_box](../Images/img-int-blue_circle_with_white_x_in_box_2f7d2154-9234-40a5-8856-ee451e03dfc9.jpg).

5. (Optional) To contact the user who deployed a packaged component, copy the user address in the **Deployed By** column into a new email from the email application of your choice.
