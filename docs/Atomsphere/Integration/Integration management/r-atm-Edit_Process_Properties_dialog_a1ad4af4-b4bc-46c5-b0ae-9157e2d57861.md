# Edit Process Properties dialog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a1ad4af4-b4bc-46c5-b0ae-9157e2d57861"/>
</head>


Process field descriptions and values are provided in the Edit Process Properties dialog.

|Property Name|Description|Property Value|
|-------------|-----------|--------------|
|`com.boomi.execution.lastrun`|This predefined property stores the most recent date and time at which the process ran, either successfully or unsuccessfully. You cannot delete or edit the name of this property.|You can change this property's date and/or time. The date format is month, day and year \(MM/dd/yyyy\). The time format is hour, minute, and second \(HH/mm/ss\).|
|`com.boomi.execution.lastsuccessfulrun`|This predefined property stores the most recent date and time at which the process ran successfully. You cannot delete or edit the name of this property.|You can change this property's date and/or time. The date format is month, day and year \(MM/dd/yyyy\). The time format is hour, minute, and second \(HH/mm/ss\).|
|Name of a dynamic process property that you previously created|This name cannot be blank and it cannot be a duplicate of another property name in this dialog. The name can include special characters. You can edit the name.|The value can include special characters or it can be blank.|
|Name of a process property component that you previously created|This name cannot be changed in this dialog.|The value can include special characters or it can be blank.|

:::note

When you change the time for the `com.boomi.execution.lastrun` or `com.boomi.execution.lastsuccessfulrun` process property, you can enter hours, minutes, and seconds. Although you cannot specify milliseconds, the time is stored with millisecond precision. You can compare the time that you entered in the Edit Process Properties dialog to the time, which is in milliseconds, stored in the Process Properties file in the Atom on which it runs.

:::
