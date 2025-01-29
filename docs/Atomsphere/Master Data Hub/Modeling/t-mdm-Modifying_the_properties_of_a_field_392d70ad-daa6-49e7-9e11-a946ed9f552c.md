# Modifying the properties of a field 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-392d70ad-daa6-49e7-9e11-a946ed9f552c"/>
</head>


You can modify the properties of a field in a model in response to changes in requirements.

## Procedure

1.  In the **Fields** tab, click the field name.

    The Modify Field Properties dialog appears and takes focus.

2.  To change the field’s name, type the new name in the **Name** field.

3.  To change the field’s type, which is permitted only if the field is not in a published version of the model, select the new type in the **Type** list.

4.  \(Enumeration fields only\) To add a value to the **Allowable Values** list, type the value in the field above the list and click **![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add allowable value**.

5.  \(Enumeration fields only\) To delete a value in the **Allowable Values** list, click **![](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) Delete this value** adjacent to the value in the list.

6.  To require the field to have a value in records, select Required — **Yes**. Otherwise, select Required — **No**.

7.  \(Text fields only, not applicable to Long Text fields\) To set or change validation options for the field, click **Validation Options** and do any or all of the following. Incoming entities having one or more fields that fail validation will be quarantined.

    1.  To require validation of a minimum number of characters, in the **Minimum Text Length** field, type that number \(or, if applicable, edit the previously specified minimum\).

    2.  To require validation of a maximum number of characters, in the **Maximum Text Length** field, type that number \(or, if applicable, edit the previously specified maximum\). Setting the Maximum Text Length to a value lower than the previously published value will generate a dialog in which you can opt to truncate existing field data to the new saved value.

    3.  To require validation using pattern matching, in the **Regular Expression** field, type the regular expression specifying the pattern against which to match \(or, if applicable, edit the previously specified regular expression\). See the [regular expression syntax](http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html) for help on how to build regular expressions.

8.  \(Reference fields only\) To change the model to which the field refers, which is permitted only if the field is not in a published version of the model, select the new model in the **Refers To Model** list.

9.  \(Reference fields only\) To ensure the enforcement of referential integrity with respect to the field for entity contributions, select Reference Integrity — **Enforce Inbound**. Otherwise, turn it off.

10. \(Reference fields only\) To ensure the enforcement of referential integrity with respect to the field for channel update requests, select Reference Integrity — **Enforce Outbound**. Otherwise, turn it off.

11. **Optional**: If the field will contain sensitive data, apply data masking to field values. Read [Setting up user accounts and access](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/r-mdm-User_Management_5f47b2da-d5cc-4c88-bdfd-0a255d69323a.md) to learn more. Select an option from the **Mask** drop-down:
    - **All** - hides entire data. Not available for Reference data types. 
    - **Partial Mask** - hides a portion of the data. Not available for Boolean and Reference data types. 
    - **Partial Show** - reveals a portion of the data. Not available for Boolean and Reference data types. 
    - **None** - reveals entire data.


12. To change the field’s repeat options, select the **Repeat Options** tab and do the following. Otherwise, skip to step 12.

    ![](../Images/Models/mdm-ds-add-field-repeatable_ac3c02df-95ee-4176-85c8-2201515d7297.jpg)

    1.  To make the field repeatable, select **Can Repeat**. Otherwise, turn it off and skip to step 12.

    2.  To set or change the collection name, in the **Collection Name** field, type the new collection name.

    3.  To set or change the method by which collection items in incoming entities are matched with collection items in golden records, select the desired **Identify By** option:

        -   To enable matching based on order of occurrence, select **Occurrence**.

        -   To enable matching by key field values, select **Key**.

13. Click **Save**.

    The dialog closes, and the list entry for the field updates to reflect the changes.