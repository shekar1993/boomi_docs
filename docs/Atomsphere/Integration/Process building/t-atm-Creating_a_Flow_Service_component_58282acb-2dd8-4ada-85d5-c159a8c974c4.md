# Creating a Flow Service component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-70BD794F-8F12-4929-86EB-5A92C4ACEBAA"/>
</head>


Create a Flow Service component to serve as a means by which a Flow service interacts with Integration processes.

## Procedure

1. On the **Build** page, click **New**.

    The Create Component dialog opens.

2. From the Component types dialog list, select *Flow Service*.

3. Create a name for your component.

4. (Optional) If you do not want the *Flow Service* to be stored in the default folder, click the **Folder** button and select the desired folder.

5. In the **General** tab in the Metadata section, type the **External Name** that is exposed to Flow.

6. Click **![icon](../Images/main-ic-copy_boxes_399199e2-8510-4b88-8a36-ea14e1062ac3.jpg) Copy to Clipboard** adjacent to **Path to Service**.

7. In Flow, paste **Path to Service** into the **URL** field for the service and insert the host name of the Atom to which you will deploy the component — for example, `https://c01-usa-east-integrate.boomi.com**Path\_to\_Service**`.

8. Return to the Flow Service component in Integration.

9. (Optional) Add a configuration value(s) as a means of including account-specific information from requesting flows. Each configuration value sent from a flow with a service request becomes a dynamic process property in the Flow Services Server listener process that provides back-end processing for the requested action. These dynamic process properties are named `inflowconfigurationvalues_<configuration_value_name>` — for example, inflowconfigurationvalues\_vendorId.

    For each configuration value you want to add:

    1. Click **![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add Configuration Value**.

    2. In the Add Configuration Value dialog, type a **Name**.

    3. Select the **Type**.

    4. (Optional) To make the configuration value a required Value in flows from which service requests originate, turn on **Require that this value be specified in the flow that points to this component**.

    5. Click **Add**.

10. (Optional) Add a message action.

11. (Optional) Add a file resource.

12. (Optional) Add a data action object type.

13. Click **Save** to save the component.

## Next steps

See the Deploy page topic for information about deploying Flow Service components and processes. See the  help for information about configuring flow services.