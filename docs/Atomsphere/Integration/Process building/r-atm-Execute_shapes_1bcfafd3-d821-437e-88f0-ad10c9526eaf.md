# Execute steps

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1bcfafd3-d821-437e-88f0-ad10c9526eaf"/>
</head>


Execute steps manipulate the document data.

| | | |
| --- | --- | --- |
|![Map icon](../Images/step-ic-map-32_6c9d1742-59f2-4cf5-9a5f-0e6e0d488f14.jpg)|[Map](r-atm-Map_shape_a481eb4d-739a-46fb-b062-866d9d13f21a.md)|Transforms data from one format \(profile\) to another.|
|![Set Properties icon](../Images/step-ic-set-properties-32_f65f1524-add5-42a6-bebf-bb83b2fb02c1.jpg)|[Set Properties](r-atm-Set_Properties_shape_d99aaa70-ed9a-4792-b641-b94aea1254b9.md)|Sets connector-specific properties \(such as disk file name, FTP directory, mail subject, etc.\) for documents as well as global process properties.|
|![Message icon](../Images/step-ic-message-32_f9ed9fef-3df3-499c-91fd-aeb0198f07b4.jpg)|[Message](r-atm-Message_shape_d7f9fd28-857c-4550-ab7d-39d4817c4668.md)|Generates free-flow text messages with both static and dynamic content.|
|![Notify icon](../Images/step-ic-notify-32_92922dac-3cdb-468f-97fd-5340699d2a3c.jpg)|[Notify](r-atm-Notify_shape_370d8b10-3713-4ea1-95d6-a2e82db7928d.md)|Creates a custom notification that appears in your RSS feed.|
|![Program Command icon](../Images/step-ic-program-command-32_7e1581f0-d7be-457a-84cb-125dcf175910.jpg)|[Program Command](r-atm-Program_Command_shape_2bfcdb5d-04d2-4d7a-b50f-9c45eedd8744.md)|Executes commands including calling database SQL and stored procedures and invoking command line scripts.|
|![Process Call icon](../Images/step-ic-process-call-32_0a02413b-c876-48a2-9ff1-dddea14e200f.jpg)|[Process Call](r-atm-Process_Call_shape_cc0f1835-4d30-499f-8fd2-95d3c0997c85.md) |Executes another process from within a process or passes document data to another process for further execution.|
|![Process Route icon](../Images/step-ic-process-route-32_0b755932-0582-47ac-a494-cb50c2e90686.jpg)|[Process Route](r-atm-Process_Route_shape_5ee00436-fb63-43c1-8fcb-48f8c8829115.md) | Dynamically executes another process from within a process based on a reference that is set at run time instead of build time.|
|![Data Process icon](../Images/step-ic-data-process-32_29fab4ec-876b-4cb9-afe1-9db20a9d2409.jpg) |[Data Process](r-atm-Data_Process_shape_8d7ca2b4-b8a7-4820-a8fe-c85dedb12b5c.md) | Manipulates data with one or more processing shapes, including document splitting, zip/unzip and custom scripting.|
|![Find Changes icon](../Images/step-ic-find-changes-32_2d716f1b-bb77-4ad5-9966-a780f9a3cbb6.jpg)|[Find Changes](r-atm-Find_Changes_shape_96d76bf4-7d93-4430-ae3a-4d38a5871de5.md)|Tracks changes made to system files and sends the document results down an add, update, or delete path.|
|![Add to Cache icon](../Images/step-ic-add-to-cache-32_55d42bae-ed57-4200-884a-35644bc14b01.jpg) |[Add to Cache](r-atm-Add_to_Cache_shape_9723ab12-45da-4e64-aa85-c9449b587286.md) | Used to add documents to a document cache so that they can be referenced later in the currently executing process or sub-process. References a Document Cache component, which describes how the cache is defined.|
|![Load From Cache icon](../Images/step-ic-load-from-cache-32_55df297c-8f4f-45f3-924f-7c493f75b78d.jpg)|[Retrieve From Cache](r-atm-Retrieve_From_Cache_shape_aed8db7a-b2e1-4d40-b3af-ef9fa0e19864.md)|Used to retrieve documents from a document cache so that they can be used in the currently executing process or sub-process. References a Document Cache component, which describes how the cache is defined.|
|![](../Images/step-ic-remove-from-cache-32_c5b8e1c7-760c-4dc7-9fc5-e08609771a8a.jpg)|[Remove From Cache](r-atm-Remove_From_Cache_shape_2dfc4d0c-4492-4228-91b6-45445ef57b61.md)|Used to remove documents from a document cache so that they are no longer available for use in the currently executing process or sub-process. References a Document Cache component, which describes how the cache is defined.|