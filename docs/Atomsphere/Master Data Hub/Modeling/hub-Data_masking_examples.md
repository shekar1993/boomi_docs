# Data masking examples 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-d4a4cfd3-6548-4e1c-ac35-dcd3e2434b43"/>
</head>

Before you configure data masking in models, consider the model field's datatype and know the typical character length of field values to make the best masking decision. For example, you may decide to mask all characters in an email address instead of a partial mask since the number of characters in an email address varies greatly.

You can configure the following data masking options when you create or edit model fields:

- **All** - hides entire data. Displays all field values as five asteriks. Available for all data types except Reference. 
- **Partial Mask** - hides a portion of the data. Not available for Boolean and Reference type fields. 
- **Partial Show** - reveals a portion of the data. Not available for Boolean and Reference type fields.
- **None** - reveals entire data

Masked values are visible if you have one of the following user permissions: 
  - **MDM - Privileged Data Steward** role
  - **MDM - Administrator** role
  - **MDM - Reveal Masked Data** privilege
  - **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)

Review the following examples to help you visualize data masking options and make field masking decisions.

## Masking the last characters

1. In the Model > **Fields** page, select **Partial Mask** in the **Mask** drop-down.
2. Select **Last** to mask the last portion of a field value. 
3. Enter a number to indicate how many characters to mask starting from the last character in the field value. For example, you can mask the last 4 numbers in the account number field.

![In the model configuration, Partial Mask is selected and Last checkbox is selected with a number four to indicate 4 characters](../Images/img-hub_partial_mask_last_4_2.png)

In the golden record, the last 4 characters are masked.

![golden record showing the last four characters are masked in the account number](../Images/img-hub_masked_last_four_field_value.png)

For the date datatype, the format includes dashes. 

![Example of date field unmasked for comparison](../Images/img-hub_date_format_example.png)

In this example, the last 4 characters are masked. Therefore, the last three numbers and a dash are masked.

![Example of date field with masked last four characters configured](../Images/img-hub_masked_lastfour_date.png)



## Masking the first characters

1. In the Model > **Fields** page, select **Partial Mask** in the **Mask** drop-down.
2. Select **First** to mask the first portion of a field value. 
3. Enter a number to indicate how many characters to mask starting from the first character (or number) in the field value. For example, you can mask the first 3 characters in the account number field.

![In the model configuration, Partial Mask is selected and First checkbox is selected with a number three to indicate number of characters](../Images/img-hub_partial_mask_first_3.png)

In the golden record, the first 3 characters are masked.

![golden record showing the last three characters are masked in the account number](../Images/img-hub_partial_mask_first_field_value.png)

For the date datatype, the format includes dashes.

![Example of date field unmasked for comparison](../Images/img-hub_date_format_example.png)

In this example, the first 3 characters are masked.

![golden record showing the last three characters are masked in the date field](../Images/img-hub_mask_first3_date_example.png)

## Masking a combination of first and last characters

1. In the Model > **Fields** page, select **Partial Mask** in the **Mask** drop-down.
2. Select **First** to mask the first portion of the field value. 
3. Enter a number to indicate how many characters to mask starting from the first character.
4. Select **Last** to also mask the last portion of the field value. 
5. Enter a number to indicate how many characters to mask starting from the last character.

![In the model configuration, first and last are both selected with Partial Mask option](../Images/img-hub_partial_show_first_3.png)

In the golden record, the first 3 characters and last 4 characters are masked in the account number. 

![golden record showing the first 3 characters and last 4 characters are masked in the account number](../Images/img-hub-mask_first_and_last_example.png)

For the date datatype, the format includes dashes. 

![Example of date field unmasked for comparison](../Images/img-hub_date_format_example.png)

In this example, the first three characters and last 4 characters are masked. Therefore, the last three numbers and a dash are masked.

![golden record showing masked date](../Images/img-hub_masked_firstlast_date.png)

## Showing the first characters

1. In the Model > **Fields** page, select **Partial Show** in the **Mask** drop-down.
2. Select **First** to show the first portion of a field value. 
3. Enter a number to indicate how many characters to show starting from the first character (or number) in the field value. For example, you can show the first 3 characters in the time field.

![In the model configuration, first is selected with Partial Show option](../Images/img-hub_partial_show_first3.png)

For the time datatype, the format includes a colon.

![Example of time field unmasked for comparison](../Images/img-hub_time_example.png)

In this example, the first three characters, including the colon are shown.

![golden record showing first 3 characters in time field](../Images/img-hub_partial_show_first3_timeexample.png)


## Showing the last characters

1. In the Model > **Fields** page, select **Partial Show** in the **Mask** drop-down.
2. Select **Last** to show the last portion of a field value. 
3. Enter a number to indicate how many characters to show starting from the last character (or number) in the field value. For example, you can show the last 4 characters in the account field.

![In the model configuration, last is selected with Partial Show option](../Images/img-hub_partial_show_last_4_2.png)

In the golden record, the last 4 characters in the account number are shown.

![golden record showing last 4 characters](../Images/img-hub_partial_show_last4_example.png)

## Showing a combination of first and last characters

1. In the Model > **Fields** page, select **Partial Show** in the **Mask** drop-down.
2. Select **First** to show the first portion of the field value. 
3. Enter a number to indicate how many characters to show starting from the first character.
4. Select **Last** to also show the last portion of the field value. 
5. Enter a number to indicate how many characters to show starting from the last character.

![In the model configuration, first and last are both selected with Partial Show option](../Images/img-hub_show_first_and_last.png)

In the golden record, the first 3 characters and last 4 characters are shown in the account number. 

![golden record showing the first 3 characters and last 4 characters are shown in the account number](../Images/img-hub_first_and_last_example.png)

## Masking all characters

In the model Field's page, select **All** in the **Mask** drop-down to mask the entire field value as five asteriks. The consistent masked length hides the field values actual character length.

![In the model configuration, All is selected as the masking option](../Images/img-hub_masking_all.png)

In the golden record, the email address is masked. 

![golden record showing all characters are masked](../Images/img-hub_masked_all.png)