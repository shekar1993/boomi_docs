# Creating a new value

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8f17a05f-fff5-44b4-af66-a810ebf4b8d2"/>
</head>


You can create new values from the **Values** page.

## Creating a new value

A new value can be created directly on the **Values** page, or at various points when prompted whilst building your flow. Once a value is created, it becomes available to use in any flow within the tenant.

1.  Click **New Value** on the **Values** page, or **Create a New Value**, or **Select or create a New Value** when building your flow \(for example, when inserting a value into a map element on the flow canvas\).
2.  The **Value** page is displayed ready for you to configure.
3.  **Name**: Enter a name for the value. See [Value naming conventions](/docs/Atomsphere/Flow/topics/c-flo-Value_Naming_Conventions_217e78cd-f068-43e3-85d2-5da28a110dcb.md).
4.  **What kind of Value is this?**: Select the type of value that you wish to create. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).
5.  **Access**: Specify how the value is accessed externally by a flow:
    -   **Private - No external access**: Private values can only be assigned data whilst inside a flow - these values cannot be used as **Input** or **Output** components on a page layout as they cannot be accessed externally. The value cannot be set as the flow initializes. The value is also not included in the ‘Done’ response from the platform API when the flow ends.

    -   **Public - Value is automatically passed to and from subflows**: Values of this type are global tenant values that are automatically passed between subflows, without having to be specified as either input or output values when setting up subflows. See [Passing values using subflows](/docs/Atomsphere/Flow/topics/c-flo-Subflows_passing-values_8a94d936-7c7c-4e50-8706-6652dcf1e0c9.md).

    -   **Input - Value can be initialized when the flow starts**: The value can be initialized when the flow starts, and will allow inputs directly from outside integrations.

    -   **Output - Value is returned from the flow**: The value will be included in the ‘Done’ response from the platform API when the flow ends.

    -   **Input & Output - Value is set as both**: The value is set to be both an Input & Output type of value. The value can then be passed from one flow to another \(for example by using a query string, passed between subflows, the Runtime for subflows or via message actions such as the [Twilio webhook](https://www.twilio.com/docs/glossary/what-is-a-webhook)\).

6.  **Change** \| **The Value should be versioned**: Select this checkbox to specify that the value should be versioned. Versioning values gives us the choice to change/not change the default data in the value.

    If you do not version a value, changing the default content of a value would mean the new data is respected even if someone were launching an older version of the flow. *In-flight* older versions of the flow would continue to work with the old default value.

7.  **Change** \| **The Value is a secret**: Select this checkbox to specify that the value should be masked. On selecting this, the value will not be visible at designtime or runtime.

8. **Comments about this Value:** This optional field allows you to insert information about the value that can then be viewed by other flow users. These comments are not visible in the flow to runtime users.

9. Click **Save Value** to save and create the new value.