# Component configuration

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8e1b4740-6530-4e7e-9d6b-79a43b290343"/>
</head>


Components are the reusable configuration objects that are used in processes. They are displayed in the Component Explorer. Components can be created once and referenced by process steps across multiple processes. Component edits take effect only when the component is saved.

The following types of components are available:

-   [Process](c-atm-Process_components_introduction_b35a1383-169f-41a0-aa15-13a45672b9a2.md)

-   [API Proxy](../Event-based%20integration/API%20Management/int-API_Proxy_components_24a9612a-2e4a-4ae9-ba66-88ba1b3f9c97.md)

-   [API Service](../Event-based%20integration/API%20Management/c-atm-API_components_c82f5ad6-e5d3-4cca-ac17-243356132dcf.md)

-   [Flow Service](c-atm-Flow_Service_components_697a4043-7e92-4df6-8f57-331107da2f67.md)

-   [Certificate](c-atm-Certificate_components_9985dbf3-9b86-4983-a68d-53e7c6836763.md)

-   [Connection](c-atm-Connection_components_da4f4be0-36d4-4021-a5d6-79f6010326f5.md)

-   [Connector Operation](c-atm-Connector_Operation_components_106fbc54-b0eb-45aa-91df-d2a401b5a952.md)

-   [Cross Reference Table](c-atm-Cross_Reference_Table_Components_325eacb1-04ac-48fe-b6b2-9b57e0a14c93.md)

-   [Custom Library](c-atm-Custom_Library_components_8844439e-657e-43eb-ab44-27568c52abed.md)

-   [Document Cache](c-atm-Document_Cache_components_ac6d81cd-140c-4fff-9887-793c98e7aa50.md)

-   [Map](c-atm-Map_components_87f669d6-4999-445f-9f29-ed24e79c92dd.md)

-   [Map Function](r-atm-Map_Function_components_d209f3e8-3094-42de-a504-2f2dc33ab15c.md)

-   [Organization](r-atm-Organization_components_b3db9a57-0c21-434a-a6e5-53d521acadcc.md)

-   [Process Property](r-atm-Process_Property_component_configuration_35403713-39a4-4fa1-b048-2b7b4e8d656c.md)

-   [Process Route](c-atm-Process_Route_components_06ab7fa3-ffd8-44af-a716-cbab83ceb689.md)

-   [Profile](c-atm-Profile_components_e9b3ea44-7b4a-4d1e-8185-e09e429275f6.md)

-   [Queue](../Event-based%20integration/c-atm-Atom_Message_Queuing_5310fd40-efdf-4bb2-bb3c-6ef099472b36.md)

-   [Scripting](c-atm-Scripting_components_14793b48-e18a-4cc4-83dc-32ba875530b5.md)

-   [Trading Partner](r-atm-Trading_Partner_Components_96eb4e6c-f5a6-4583-98a8-690236d288f9.md)

-   [Communication Channel](r-atm-Communication_Channel_component_c1345812-8f43-4055-8a5d-87d1ae41f27f.md)

-   [Processing Group](c-atm-Trading_Partner_Group_components_5f1fa272-5d7d-4e5a-a2c3-da273b3db418.md)

-   [XSLT Stylesheet](int-XSLT_Stylesheet_Components_13300ba8-5e94-4b14-b6bd-5b90d7002233.md)


## Component editing 

When you edit the configuration of a component, your changes take effect only when you save the component.

![The controls at the bottom of a component include the Save and Save and Close buttons.](../Images/build-bt-save-close-revision-history.jpg)

When a component is open for editing, the following controls and links are available at the bottom of the screen:

- **Save** - Saves the component. The component remains open for editing.

- **Save and Close** - Saves the component and closes it.

- **Close** - Initiates a request to close a component without editing it. \(Clicking **![x](../Images/main-ic-x-blue-11_09e0ce04-2b67-4627-a479-b25561e3f0bd.jpg) Close** in the component tab has the same effect.\)

  - If there are no unsaved changes, the component closes immediately.

  - If there are unsaved changes, a confirmation dialog appears.

    In the confirmation dialog:

    - Clicking **OK** closes the component without saving it.
    - Clicking **Cancel** closes the confirmation dialog, enabling further editing and saving of the component.

- **Previous Save** - Shows the date and time of the most recently saved revision of the component.

- **Revert** - Initiates a request to discard unsaved changes to the component, thereby reverting it to its configuration as of the last saved revision.

  In the confirmation dialog:

  - Clicking **Revert** reverts the component. The component remains open for editing.
  - Clicking **Cancel** closes the confirmation dialog, enabling further editing and saving of the component. 

- **Revision History** ![Document with clock](../Images/main-ic-document-with-clock-16_2b85ed07-7ace-4a55-a4f7-24617309d6ba.jpg) - Opens the Revision History dialog, which provides access to the component’s revision history and other information — see the linked topic.
