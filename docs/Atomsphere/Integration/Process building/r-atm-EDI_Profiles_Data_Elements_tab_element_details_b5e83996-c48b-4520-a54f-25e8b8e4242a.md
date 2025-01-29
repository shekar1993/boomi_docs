# EDI profile’s Data Elements tab, element details

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b5e83996-c48b-4520-a54f-25e8b8e4242a"/>
</head>


When you select a data element in the tree, you can view or edit the data element's details.

**Name**   
**Description**

**Data Name**   
The element ID that appears in the profile tree. Typically this is a sequentially-numbered identifier related to the segment in which the element is contained (for example, N101, N102, etc.).

**Position**   
Number that indicates the data element's location in relation to its parent. If you move the data element to a different location, its position number changes.

**Mandatory**   
If selected, the existence of the element is validated. **Write Rule**, if selected, supersedes this setting. When a segment is not to be output as a result of the application of a write rule, mandatory element errors are not generated.

**Field Length Validation**   
\(Available if **File Type** in the Options tab is set to Delimited.\) If selected, **Min Length** and **Max Length** are used to validate the element content..

**Min Length**   
\(Available if **File Type** in the Options tab is set to Delimited. Required if **Field Length Validation** is on.\) Number representing minimum field length.

**Max Length**   
\(Available if **File Type** in the Options tab is set to Delimited. Required if **Field Length Validation** is on.\) Number representing maximum field length.

**Start Column**   
\(Available if **File Type** in the Options tab is set to Data Positioned.\) Number representing the beginning of the segment. It can be defined as the column where the data to be read begins on a given segment line.

For example, if the segment includes a prefix that you want to exclude, specify the column where you want reading to start.

:::note

The first column in a data-positioned profile is column 0. Be sure to start counting from 0 when you specify a Start Column value.

:::

**Length**   
\(Available if **File Type** in the Options tab is set to Data Positioned.\) Number representing the field length to be read. Any characters beyond this length are ignored.

**Justification**   
\(Available if **File Type** in the Options tab is set to Data Positioned.\) Identifies the alignment of data within the element length, to the left or right.

**Data Type \(for X12, EDIFACT, ODETTE, and User Defined\)**   
Used to define the data type of the data element as defined by the associated standard. For User Defined EDI documents, it is recommended that you select the AN data type. The type is a code indicating the purpose of the data element according to EDI standards. These codes are pre-loaded into for each data element and should not need to be defined when building an EDI profile. Standard EDI specs should also have these types attached to each data element.

-   AN \(String\)

-   ID \(Unique identifier\)

-   DT \(Date\) or TM \(Time\): See [Date/Time data type](r-atm-DateTime_data_type_05826c0b-8b49-4d8f-94a5-9ce7c15d64d0.md). You must select a date/time format.

-   N \(Numeric\), N0 \(Numeric\), or R \(Decimal number\): See [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md). You can select a **Number Format**, indicate if it uses **Signed** values, and set **Implied Decimals**, which affects decimal point positioning.


**Data Type \(for HL7\)**   
Used to define the simple data type of the data element as defined by the HL7 standard.

-   ST \(String\)

-   ID \(Coded value for HL7-defined tables\)

-   DTM or DT or TM \(Date/time values\): See [Date/Time data type](r-atm-DateTime_data_type_05826c0b-8b49-4d8f-94a5-9ce7c15d64d0.md). You must select a date/time format.

-   NM \(Numeric\) or SI \(Sequence ID\): See [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md). You can select a **Number Format**, indicate if it uses **Signed** values, and set **Implied Decimals**, which affects decimal point positioning.

-   FT \(Formatted text\)

-   GTS \(General timing specification; a string\)

-   IS \(Coded value for user-defined tables\)

-   SNM \(String of telephone number digits\)


**Data Type \(for Tradacoms\)**   
Used to define the simple data type of the data element as defined by the Tradacoms standard.

-   AN \(String\)

-   N \(Numeric\): See [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md). You can select a **Number Format**, indicate if it uses **Signed** values, and set **Implied Decimals**, which affects decimal point positioning.


**Purpose**   
Used for identifying the business meaning of a data element. The value of the Purpose field appears when you pause on a data element in the tree.

**Comments**   
Used for adding a comment on the use of the data element.

Set Repeat Type   
-   N/A
-   Constant

-   Repeated


**Composite**   
Used to specify that this element definition is a composite or sub-composite of a data element.

-   N/A
-   Composite Start: Indicates that this is the first composite of a data element.

-   Composite: Indicates that this is a composite of a data element, but not the first composite.

-   Sub-Composite Start: Indicates that this is the first sub-composite of a composite, but not the first sub-composite of a data element.

-   Sub-Composite Start \(Data Element\): Indicates that this is the first sub-composite of both a composite and a data element.

-   Sub-Composite: Indicates that this is a sub-composite of a composite, but not the first sub-composite.


**Write Rule**   
Used to specify that the entire segment should only be written when this element’s contents are non-zero or non-null.

-   N/A
-   Not Null: Use in destination profile to prevent output of entire segment when contents of this field are `<blank\>`.

-   Not Zero: Use in destination profile to prevent output of entire segment when contents of this field are 0.


**Auto-Generate Option**   
Refer to the topic about auto-generate options to understand the implementation of these options, most specifically for the X12 856 document type.

-   N/A
-   Hierarchical Level I

-   Hierarchical Level II

-   Hierarchical Level - Summary


**Escape Option \(for the MSH02 element in an HL7 profile\)**   
**Do Not Escape Data**   
If selected, delimiters are not escaped when writing the MSH02 element and escape characters are ignored when reading the MSH02 element.

-   This option is selected by default in a new HL7 profile.

-   This option is cleared by default in an HL7 profile created prior to the January 2019 release.


**Qualifiers**   
Text qualifiers for the data element identify values that can be used in instance identifiers. For each qualifier, the table shows the Value and Description. Clicking a value opens the Edit Qualifier dialog, which is used to edit the **Value** and **Description**.

The check boxes in the table are used with the **Remove Selected** and **Remove All** actions — see below. Clicking **Remove ![](../Images/main-ic-trashcan-gray-16_607066a6-af16-43bb-b12e-6ac8ad67304e.jpg)** initiates a request to remove the qualifier from the element. This action requires confirmation.

The **Actions** menu items are as follows:

-   **Import from Standard** — opens the Import Qualifiers from Standard dialog, which is used to import qualifier values to the element from an EDI standard.

    :::note
    
    The **Import from Standard** action is available only for elements for which values are defined in the standard.

    :::

-   **Add** — opens the Add Qualifier dialog, which is used to add a qualifier value to the element. **Value** is required. A **Description** can optionally be included in the qualifier definition. Adding qualifiers is recommended only when the **Import from Standard** action is unavailable.

-   **Remove Selected** — initiates a request to remove selected qualifiers from the element. In the confirmation dialog, clicking **OK** executes the request; clicking **Cancel** cancels the request.

-   **Remove All** — initiates a request to remove all qualifiers from the element. In the confirmation dialog, clicking **OK** executes the request; clicking **Cancel** cancels the request.