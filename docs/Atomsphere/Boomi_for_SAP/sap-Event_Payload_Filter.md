# Payload Filter

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-3d310ac4-ca08-461b-82b5-04c31324f573"/>
</head>

When the event mode is set to **payload**, the payload filter option is displayed.

![](./Images/img-sap-payload_add_filter.png)

When presented with the option to select tables in the table service used for payload data, the object class is the business object and remains a static value.

![](./Images/img-sap-payload_filter_table_option.png)

After selecting a table, you will have an option to choose a field for that table.

![](./Images/img-sap-payload_filter_key_filed.png)

Once a column name is selected, the filtering options will become visible.
Additionally, you can create advanced filtering or add additional field filtering.

![](./Images/img-sap-payload_filter_advanced_filter.png)

Advanced filtering functions similarly to change pointers.

![](./Images/img-sap-payload_filter_advanced_filter_desc.png)

When adding a field, the list is displayed again, but fields that already have filtering are not available, as these filtering rules must be defined together. Here, the BANKL is disabled, since this filter has already been added.

![](./Images/img-sap-payload_filter_added_filters._disabled.png)

Note that the advanced filter icon on the right of the BANKL filter is due to multiple rules. For all fields, there is a minus icon to remove a field if the filter rule is no longer needed.

![](./Images/img-sap-payload_filter_added_filter.png)

It is important to note that if a filter is not fully specified, the **Add/Apply filter** button is deactivated, as the rule for a field must be fully defined or removed if not required.

![](./Images/img-sap-payload_filter_add_filter_deactive.png)

The overview of implemented events provides some event details but does not include the filtering aspect.

![](./Images/img-sap-payload_overview_of_events.png)

To view the filtering details, go onto the **View/edit** mode, go to the **Subscription configuration** sub-page, and click the **Event Filters** or **Payload Filter** button.

![](./Images/img-sap-payload_subscription_config.png)


![](./Images/img-sap-payload_event_filter.png)