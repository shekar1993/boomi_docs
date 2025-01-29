# XML profile’s Data Elements tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c846011c-2964-42fc-93ec-3a2344a8dbbe"/>
</head>


On the XML profile's **Data Elements** tab you define the elements and attributes used in the XML document.

Elements and attributes in an XML profile have the following configuration settings. If an element references a complex type or element declaration, the element inherits many of its configuration settings from the complex type or element declaration. They cannot be changed on this tab.

## General options

**Name**   
**Description**

**Element Name**   
\(elements only\) Name of the selected element as it appears in the tree. The name must match the actual XML element name in the source or destination file.

**ttribute Name**
:   \(attributes only\) Name of the selected attribute as it appears in the tree. The name must match the actual XML attribute name in the source or destination file.

**Namespace**   
Namespace to use for the selected element or attribute. The options are “None” or any of the namespaces defined under Namespace Declarations.

**Type Name**   
\(elements only\) Used to select a complex type or element declaration.

**Type Namespace**   
\(elements only\) Displays the namespace to which the selected complex type or element declaration belongs.

**Required**   
\(attributes only\) If selected, when the element is written, the attribute is also written, even if the attribute is not mapped and/or does not have a value.

**Comments**   
Free text description.

These settings determine how looping and repeating elements are handled in an XML profile. Establish Looping elements, such as order line items or contacts within an account, by setting the minimum and maximum occurrences appropriately for the element.

**Name**   
**Description**

**Min Occurs \(Minimum Occurrences\)**  
The minimum number of times the element can occur.

**Max Occurs \(Maximum Occurrences\)**   
The maximum number of times the element can occur.

**Looping Option**  
Unique — Only unique instances of a loop or segment will be written. If two \(or more\) loops or segments are identical, then only the first instance is written.

Occurrence — All instances are written.

Here are tips for using the Min/Max Occurs settings:

-   For an optional element, set Min Occurs=0 and Max Occurs=1.

-   For a mandatory element, set Min Occurs=1 and Max Occurs=1.

-   For an optional looping element, set Min Occurs=0 and Max Occurs=unbounded.

-   For a mandatory looping element, set Min Occurs=1 and Max Occurs=unbounded.


## Field Size Options

**Name**  
**Description**

**Field Length Validation**  
Determines whether data validation should occur on this element or attribute \(mandatory, length, etc.\). This setting is most often used in conjunction with the Cleanse step.

**Minimum Length**   
Defines the minimum allowable length of the element or attribute's value.

**Maximum Length**   
Defines the maximum allowable length of the element or attribute's value.

## Data Format Options

**Name**   
**Description**

**Data Type**   
Data type of the element or attribute. The available choices are Character \(default\), Number, and Date/Time. Selection of Number or Date/Time may be necessary to satisfy an integration requirement.

**Number Format**   
\(Number **Data Type** only\) A standard Java number formatting string specifying the format for the value.

**Signed**  
\(Number **Data Type** only\) If selected, a byte in the value indicates whether the value is positive or negative.

**Implied Decimals**   
\(Number **Data Type** only\) Often in fixed-length legacy files, numeric values do not have decimal points so the decimal precision can be determined only by an assumed number of decimal digits. The effect of this setting in a process on a given value is dependent upon the context in which the profile that contains the data element is used.

**Date Format**   
\(Date/Time **Data Type** only\) The date/time format for the value. You can either type the format or select an existing one.

For more information about formatting Number and Date elements, see [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md) and [Date/Time data type](r-atm-DateTime_data_type_05826c0b-8b49-4d8f-94a5-9ce7c15d64d0.md) topics.

## Qualifiers

Text qualifiers for the element or attribute identify values that can be used in instance identifiers. For each qualifier, the table shows the Value and Description. Clicking a value opens the Edit Qualifier dialog, which is used to edit the **Value** and **Description**.

The check boxes in the table are used with the **Remove Selected** and **Remove All** actions — see below. Clicking **Remove ![](../Images/main-ic-trashcan-gray-16_607066a6-af16-43bb-b12e-6ac8ad67304e.jpg)** initiates a request to remove the qualifier from the element or attribute. This action requires confirmation.

The **Actions** menu items are as follows:

-   **Add** — opens the Add Qualifier dialog, which is used to add a qualifier value to the element or attribute. **Value** is required. A **Description** can optionally be included in the qualifier definition.

-   **Remove Selected** — initiates a request to remove selected qualifiers from the element or attribute. In the confirmation dialog, clicking **OK** executes the request; clicking **Cancel** cancels the request.

-   **Remove All** — initiates a request to remove all qualifiers from the element or attribute. In the confirmation dialog, clicking **OK** executes the request; clicking **Cancel** cancels the request.


## Constraints \(in legacy XML profiles only\)

**Note:** Constraints are available only in XML profiles created prior to the September 2013 release. XML profiles created as of the September 2013 release or later must use instance identifiers instead.

If the XML document has multiple instances of the same element \(other than in a normal looping context\), you can use constraints to define a specific instance of that element, based on its occurrence or the value of the element or one of its child elements. Use the Add and Delete buttons to create or remove constraints for the element.

**Name**   
**Description**

**Constraint Element**   
The element to constrain by. You can select element or one of its child elements or attributes.

Type   
-   Value — Constrain the element by a specific text value.

-   Occurrence — Constrain the element by its indexed position.


**Value**   
The text value or number value to constrain by.

For example, suppose your XML looked like this:

```code-xml
...
<OrderNotes>
<Note type="specialInstructions">Ship line items immediately</Note>
<Note type="shipMethod">Ground</Note>
</OrderNotes>
...
```

In order to map to and from a particular "Note" element, you need to use a constraint that references the value of the "type" attribute. Start by defining two "Note" elements with "type" attributes in the tree. For the first, add a constraint and choose the "@type" attribute as the Element, select "Value" as the Type, and enter "specialInstructions" as the Value. Do the same for the second but enter "shipMethod" as the Value. When you look at the profile in a map, you see two separate "Note" elements to map to and from.

## Namespace Declarations

Namespace declarations are a way to qualify an element with a prefix to avoid naming conflicts. An element’s namespace declarations can be used by the element’s descendant elements.

For each namespace declared for the selected element, the URI, Prefix, and Comments specified for that namespace in the profile’s **Types** tab are shown.

-   Select **Default** for a namespace declaration to associate with that namespace all elements in the document that do not have a prefix. The default namespace declaration is typically declared in the root or other high-level element.

-   Pause on a namespace declaration and click **Delete** to remove that namespace declaration for the element.


**Name**   
**Description**

**Add Namespace Declaration**   
Opens the Choose Namespace dialog, which is used to add a namespace declaration for the selected element. All available namespaces declared within the element or its ancestors are available for selection in the dialog.