# System Types

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d5418044-1ac0-4d01-9485-5ebd06ab7f8e"/>
</head>


Default system types allow you to access common system elements.

## $File 

This type provides a representation of the common elements that a file can define, and contains the following properties.

|Property Name|Content Type|
|:------------|------------|
|Date Created|Date/Time|
|Date Modified|Date/Time|
|Description|String|
|Download Uri|String|
|Embed Uri|String|
|Icon Uri|String|
|Id|String|
|Kind|String|
|Mime Type|String|
|Name|String|

## $Location 

This type provides a representation of the common elements used by Location functionality, and contains the following properties. See [System user values](r-flo-Values_System_User_Values_d9728e25-86de-4d77-8246-a04031fe6b63.md) and [Using geolocation in a player](c-flo-Players_Localization_f69770b6-9414-46bd-a6da-68d078855a4b.md).

|Property Name|Content Type|
|:------------|------------|
|Altitude Accuracy|Number|
|Current Altitude|Number|
|Current Heading|Number|
|Current Latitude|Number|
|Current Longitude|Number|
|Current Speed|Number|
|Location Accuracy|Number|
|Location Timestamp|Date/Time|

## $State 

This type provides a representation of the common elements relating to flow state information, and contains the following properties. See [System state values](r-flo-Values_System_State_Values_0e184acc-ec85-4922-b06b-07a5d6966fa0.md).

|Property Name|Content Type|
|:------------|------------|
|Current Map Element Developer Name|String|
|Current Map Element ID|String|
|Date Created|Date/Time|
|Date Modified|Date/Time|
|External ID|String|
|Flow Developer Name|String|
|Flow ID|String|
|Flow Version ID|String|
|ID|String|
|Is Done?|Boolean|
|Join URI|String|
|Owner Email|String|
|Owner First Name|String|
|Owner ID|String|
|Owner Last Name|String|
|Owner Name|String|
|Owner User ID|String|
|Owner Username|String|
|Parent ID|String|

## $User 

This type provides a representation of the common elements relating to flow user information, and contains the following properties. See [System user values](r-flo-Values_System_User_Values_d9728e25-86de-4d77-8246-a04031fe6b63.md).

|Property Name|Content Type|
|:------------|------------|
|Altitude Accuracy|Number|
|AuthenticationType|String|
|Brand|String|
|Country|String|
|Current Altitude|Number|
|Current Heading|Number|
|Current Latitude|Number|
|Current Longitude|Number|
|Current Speed|Number|
|Directory Id|String|
|Directory Name|String|
|Email|String|
|First Name|String|
|IP Address|String|
|Language|String|
|Last Name|String|
|Location|Object|
|Location Accuracy|Number|
|Location Timestamp|Date/Time|
|LoginUrl|String|
|Primary Group Id|String|
|Primary Group Name|String|
|Role Id|String|
|Role Name|String|
|Status|String|
|User ID|String|
|Username|String|
|Variant|String|

## $Payment Card 

This type is used to store user input data from the [Payment Card](flo-pcard_c992dbb6-300e-4129-927c-1860613f6e75.md) component, and contains the following properties.

|Property Name|Content Type|
|:------------|------------|
|Card Number|String|
|Expiry Month|String|
|Expiry Year|String|
|Name on Card|String|
|Postal Code|String|
|Security Code|String|