# Business Rules step dialog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-68e8232b-c413-406a-ba6f-a9281cc4a263"/>
</head>


The *Business Rules step* dialog is used to configure a *Business Rules* step in a process.

- **Add Rule** - Used to add a business rule to the *Business Rules* step.

- **Change Profile** - Opens the **Business Rule step Options** dialog, which is used to set a display name for the Business Rules step or to select or create a profile representing the structure of the document coming into the Business Rules step.

  - **Display Name** - User-defined name to describe the *Business Rules* step. It might be helpful to phrase the name as a question that applying the business rule will answer, such as “US destination?” If you do not specify a display name , the step will not have a label.

  - **Profile Type** - Selects the profile type — either Database, EDI, Flat File, XML, or JSON.

  - **Profile** - Selects the profile. The profiles available for selection are of the selected **Profile Type**. As an alternative to selecting an existing profile, clicking **![icon](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create** enables you to create a profile of the selected type.

  - **OK** - Saves the changes, closes the dialog, and returns focus to the *Business Rules step* dialog.

  - **Cancel** - Closes the dialog without saving the changes and returns focus to the *Business Rules step* dialog.

:::note

The Business Rules step Options dialog also opens when a Business Rules step is dragged to the process canvas.

:::

- **Add a Field** - Used to add a field for single output.

- **Alias** - An alternative field name for referencing in conditions or the Error Message window.

- **Field** - Used to select a field input definition from the profile.

- **Add a Function** - Used to add a functions for variable output. Choose a standard or user-defined function from the library to manipulate one or more field inputs from the profile.

- **Alias** - Alternative name for function reference for ease of use when defining function output\(s\).

- **Default values** - Optional text boxes next to input definitions where you can set static values in the event that the input value is blank.

- **Top Level Operator** - Operator in the main condition that determines if group clause\(s\) should use AND or OR.

- **Add a Condition** - Link that generates another comparison line where you can specify:

  - Static value
  - Single field output
  - Single function output

- **Add a Group** - Link that generates another top-level group where you can create one or more nested conditions.

- **Group Level Operator** - Operator in sub-group that determines if condition\(s\) should use AND or OR.

- **Insert Value** - Used to select fields and functions from the Inputs list.

The following operators are available when building conditions for business rules. The operators **contains**, **does not contain**, **starts with**, **is empty**, and **is not empty** perform string comparisons. They should not be used for numeric comparisons.

- `=` - Equal To
- `!=` - Not Equal To
- `<` - Less Than
- `>` - Greater Than
- `<=` - Less Than or Equal To
- `>=` - Greater Than or Equal To

- **contains** - Input field contains value defined in second input definition. \(Special syntax for comparison against Static value is not required.\)

- **does not contain** - Input field *does not* contain value defined in second input definition. \(Special syntax for comparison against Static value is not required.\)

- **starts with** - Input field begins with value defined in second input definition. \(Special syntax for comparison against Static value is not required.\)

- **is empty** - Input field is not populated with any value. Use this operator in place of a blank static value to simulate the Decision step's comparison against NULL.

- **is not empty** - Input field is populated with a value.
