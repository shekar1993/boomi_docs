# Value naming conventions

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-217e78cd-f068-43e3-85d2-5da28a110dcb"/>
</head>


It is important to follow a naming convention for values in to make it easy to find specific values in the future, understand what a value contains and to avoid naming collisions.

## Overview

Data \(such as numbers, text, or dates\) or instances of a Type \(such as 'Type: Customer'\), are stored as values in . A single tenant can contain hundreds of values, shared between hundreds or even thousands of flows, so it is important that you follow a naming convention when creating and working with values in .

We recommend the following best practices:

-   Use descriptive names, that include a hint as to what the value contains, or what its intended use is.

-   Stick to a single naming convention.


## String, Content, Password, Boolean and Number values

-   For values that will not change during the life cycle of flows, include the content *category* \(or what kind of value it is\) in the name.

    **Example scenario A**: For a fixed value that will be used to set the status of a task in Salesforce, set the value name as '*Status: In Progress*'. This will help other users to recognize that this value is a *status* of some kind. If the fixed value is later used with an object or list, the *category* is usually the same as the property that will be assigned. For example, the Task Object in Salesforce has a property/field called 'Status'.

    **Example scenario B**: If you have a value that will store validation alerts, name the Value *Validation Alert.* For subsequent values that will store the various alert messages, use a notation similar to this: '*Validation Alert:Payment Required*', and so on.

-   Include a short summary in the value name.

    **Example scenario**: If you are creating a value that will store the body of an email message, name the value '*Email Body:Registration Complete Notification*'.


## Object and List values

-   When creating the first value for the Type, give it the same name as the Type. An object value of Type: Contact, should be named 'Contact' for example, and a list value of Type: Contact should be named 'Contacts', and so on.

-   If you have more values of the same Type, use a notation that denotes a *category.*

    **Example scenario**: An object value of Type: Contact that will store information about the spouse of a Contact, should be named 'Contact:Spouse'. A list value that contains information about the dependents of a Contact, should be named '*Contacts:Dependents*'.


## Picklist values

When building Salesforce flows, you may need to create picklists. To do this, you create a type called ‘Picklist’ or ‘Dropdown’. This type is re-used for all picklists; so the naming convention is a little different.

-   For the list value holding the picklist data, use the notation '*Type:category*'.

    **Example scenario**: A list values storing a list of countries is named '*Picklist:Countries*'.


-   For the object value holding the selected picklist entry, use the notation '*Type:category:selected purpose*'.

    **Example scenario**: If you select a country from *Picklist:Countries*, the object value holding the selection is named '*Picklist:Country:Selected Primary Residence*'.


-   If there are any fixed values related to these selections \(for example, you have a decision based on a selected picklist entry\), use the notation '*Category:Content*'.

    **Example scenario**: '*Country:USA*' - this assumes that your picklist or dropdown type contains the standard Label/Value properties \(as with HTML5 options\). If the Type has more properties, modify the notation to '*Category.Property:content*'. For example, if you are categorizing countries, the value would be named 'Country.Category:North America'.
    