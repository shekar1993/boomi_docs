# AI Chat Component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d308380f-9c92-4b9f-938a-24b047db483f"/>
</head>

## General settings

Configure the general settings for this component.

| Setting                                | Description                                                                                                                                                                                                                                          |
|:---------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                               | Enter a name for the select component.                                                                                                                                                                                                                               |
| **Label**                              | Enter a label for the select component. The **Label** is displayed above the component by default. Do not enter a label if you do not require this text to be shown.                                                                                                                     |
| **Placeholder**                       | Insert the text to assist you understand the functionality of each field.         |
| **Help information about this component**                       | Display help text directly below the component, for example to provide further information on how to use the component.      |
| **Which connector do you want to get data from?**                     | Select the connector from which you want to retrieve the data.         |
| **The Type of the data** | Select the type of data that you wish to retrieve. The default value is $Chat Message.                                                                                                                                                            |

## State

Select the value that you wish to save the user input data into.

- Save the component state into: **Click Select or create a new value** to select an existing value or create a new value.
Values must be of the 'string' content kind. See [Value Content Kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

::note

- To capture the chat messages with AI, set the **State** to a list of $Chat Message typed values.
- A new object of type **$Chat Message** is added to the State value list when a prompt is run. Here is an example:
  - User Property: ‘USER’
  - Content Property: ‘prompt string goes here’
  - Prompt Property: ‘prompt string goes here’


## Styles

Apply additional CSS styling to the component.

-  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).


## Attributes

Add attributes to the component.

1. Click **Add Attribute**.
2. Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).

:::note

- The **assistantLabel** property lets you edit the wording of the label, which defaults to Assistant, for each label above the assistant answer.
- The **userLabel** property lets you edit only the content used for User inputs.

:::

## Important Information

The following AI Chat UI Component behaviors are useful to understand.

- The runtime user views the content value of the **Prompt** property in the UI, whereas AI receives the content value of the **Content**.

- If the list value connected to the **State** of the AI Chat UI component contains chat messages prior to the component's first rendering, they will be shown and dispatched with the following message. This allows you to continue a previous chat session.

- If the last message in that list has a Role of **User** when the chat component is initially rendered it will immediately make a request to AI with all the messages in the list.

- If a Submit outcome is associated with the AI Chat UI component, pressing **Enter** will execute the outcome rather than streaming a response from the connector.
