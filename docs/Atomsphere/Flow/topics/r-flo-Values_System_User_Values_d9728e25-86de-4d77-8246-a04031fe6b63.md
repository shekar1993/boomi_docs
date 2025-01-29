# System user values 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d9728e25-86de-4d77-8246-a04031fe6b63"/>
</head>

The following system values store flow user information.

-   General user values

-   Internationalization values

-   Location values


## General user values 

| Value Name | Description |
| --- | --- |
| $User | The $User value stores the unique Boomi Flow user account being used. |
| $User/Directory ID | The $User/Directory ID value stores the unique identifier of the user directory from which the flow received the user. For example, if a user is logged into Salesforce, this value stores the ID of the Salesforce organization that the user was logged in as. |
| $User/Directory Name | The $User/Directory Name value stores the name of the user directory from which the flow received the user. For example, if a user is logged into Salesforce, this value stores the name of the Salesforce organization that the user was logged in as. Also, two directories may have the same name. |
| $User/Email | The $User/Email value stores the email of the user, as defined in the third-party directory system in the authentication connector being used. |
| $User/Groups | The $User/Groups value stores relevant 'groups' data from an identity connector being used to protect a flow. The $Group type contains the “Name” and “ID“ properties. For example, this system value can be used to list the groups that a user belongs to in an identity connector. |
| $User/First Name | The $User/First Name value stores the first name of the user, as defined in the third-party directory system in the authentication connector being used. |
| $User/Last Name | The $User/Last Name value stores the last name of the user, as defined in the third-party directory system in the authentication connector being used. |
| $User/Primary Group ID | A flow can have swimlanes, restricting access to parts of the flow to certain groups of users, and a user can belong to multiple groups. The $User/Primary Group ID value stores the ID of the group that lets a user access a specific swimlane. For example, a user is a CFO, and belongs to three groups - the 'Finance' group (ID 331.78), the 'North America' group (ID 17.29), and the 'Compliance' group (ID 206.13). When the user accesses a swimlane restricted to the 'Compliance' group only, the $User/Primary Group ID value will be set as '206.13'. |
| $User/Primary Group Name | A flow can have swimlanes, restricting access to parts of the flow to certain groups of users, and a user can belong to multiple groups. The $User/Primary Group Name value stores the Name of the group that lets a user access a specific swimlane. For example, a user is a CFO, and belongs to three groups - the 'Finance' group (ID 331.78), the 'North America' group (ID 17.29), and the 'Compliance' group (ID 206.13). When the user accesses a swimlane restricted to the 'Compliance' group only, the $User/Primary Group Name value will be set as 'Compliance'. |
| $User/Role ID | The $User/Role ID value stores the role ID of the user; some identity management systems use assigned roles and IDs. For example, in Salesforce a Role ID is a unique, 16-character alphanumeric string. |
| $User/Role Name | The $User/Role Name value stores the name of the role for the flow user; some identity management systems use assigned roles and IDs. A Role Name can be duplicated across directories. For example, a user is the CEO of a company, with the $User/Role Name value defined as 'CEO'. The user role continues to be CEO, when they are authenticated using Salesforce, and when they are authenticated using Box. |
| $User/User ID | The $User/User ID value stores the User ID of the user, as defined in the third-party directory system in the authentication connector being used. |
| $User/Username | The $User/Username value stores the Username of the user, as defined in the third-party directory system in the authentication connector being used. |



## Internationalization values 
Boomi Flow follows ISO internationalization standards, and uses Language, Country, Variant and a custom Brand value when translating the content of flows.

|Value Name|Description|
|:---------|:----------|
|$User/Brand|The **$User/Brand** value can be used to handle scenarios where a flow can run under the same language configuration but using a different customer brand, or using the value to perform A/B testing using the translation framework.|
|$User/Country|The **$User/Country** value stores the country code for the content being delivered to the user running the flow.|
|$User/Language|The **$User/Language** value stores the language code for the content being delivered to the user running the flow.|
|$User/Variant|The **$User/Variant** value stores the ISO defined variant \(the 'dialect'\) of the language that is displayed to the user running the flow web application.|

## Location values 

The following values and functionality are device dependent and require Location functionality to be enabled in the flow player. For example, if a mobile phone does not have a GPS or an altimeter built in, some of these values will not be available.

For more information on using the HTML Geolocation API see [HTML5 Geolocation](https://www.w3schools.com/html/html5_geolocation.asp).

| Value Name | Description |
| --- | --- |
| $User/Current Latitude | The $User/Current Latitude value stores the current latitude of the flow web application user. |
| $User/Current Longitude | The $User/Current Longitude value stores the current longitude of the flow web application user. |
| $User/Location Accuracy | The $User/Location Accuracy value stores a numeric value that represents the accuracy of the location information. |
| $User/Current Altitude | The $User/Current Altitude value stores the current altitude of the flow web application user. |
| $User/Altitude Accuracy | The $User/Altitude Accuracy value stores a numeric value that represents the accuracy of the altitude information. |
| $User/Current Heading | The $User/Current Heading value stores the current compass heading of the flow web application user. This value additionally requires compass functionality on the device being used. |
| $User/Current Speed | The $User/Current Speed value stores the current speed of the flow web application user. This value additionally requires GPS functionality on the device being used. |
| $User/Location Timestamp | The $User/Location Timestamp value stores the time of the location where the user is accessing the flow. The data stored in this value changes with time, or if the flow is refreshed. This value can be referenced within a flow to create time-specific actions, for example by showing an alert to the user at 5.30 pm.|