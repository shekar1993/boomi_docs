#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-a80dcb0b-4458-4275-b53d-5954eabe47ae"/>
</head>


## Process building 

Features:

-   A new Japanese Character Conversion map function allows you to convert field values between Katakana and Hiragana alphabets. \(INT-3887\)

    To learn more about this feature, see topics: [Map Function Components](/docs/Atomsphere/Integration/Process%20building/r-atm-Map_Function_components_d209f3e8-3094-42de-a504-2f2dc33ab15c.md) , [Map step](/docs/Atomsphere/Integration/Process%20building/r-atm-Map_shape_a481eb4d-739a-46fb-b062-866d9d13f21a.md), [Language functions](/docs/Atomsphere/Integration/Process%20building/int-Language_functions_ccdc2b4d-4da8-4ffe-a58f-1185d2bbf6c7.md), [Understanding Japanese character conversion](/docs/Atomsphere/Integration/Process%20building/int-Understanding_japanese_character_conversion_902c226b-ce58-480a-96bc-b2ba62c6c46f.md)

-   When creating an XML profile component by importing an XSD file, the date formats for date and time fields are automatically configured with the standard XSD formats. \(INT-5614\)

-   We improved accessibility and streamlined keyboard navigation of the **Create New** component menu.\(INT-5456, INT-5651\)

    To learn more about this feature, see topics: [Creating a component using the Create New button](/docs/Atomsphere/Integration/Process%20building/int-Creating_a_component_using_the_Create_New_button_94753d64-9efa-427d-af06-65e4c9851dc5.md) , [Build page layout](/docs/Atomsphere/Integration/Process%20building/c-atm-Build_page_layout_e1655cb0-e4da-47cf-bf55-11cc37f0b32f.md)

-   The Recents component list on the **Start** tab now refreshes more frequently to stay up to date with your most recent activity. \(INT-5911\)

-   The expanded or collapsed states of the process canvas step palette and Component Explorer are now remembered for the next time you open a process or revisit the Build page. \(INT-5966, INT-5967\)

-  The process canvas’ inline step menu is enhanced with a number of usability improvements. The menu now includes recent connectors as well as the ability to search for a specific connector to add as the next step. The full list of steps are grouped by Execution and Logic categories for organization. Keyboard navigation of the menu is streamlined as well. Lastly, the next step plus button is now larger and permanently displayed to make it easier to click. (INT-6012)

    To learn more about this feature, see topic: [Adding steps to a process](/docs/Atomsphere/Integration/Process%20building/t-atm-Adding_shapes_to_a_process_e3e49675-225a-4591-b5c9-a559aa4c045a.md)


Fixes:

-   You can no longer configure a property in a Process Property component without a label. Label values must be between 1 and 255 characters. \(INT-541\)

-   SEVERE messages are now logged only when the component actually fails to load. \(INT-5891\)

-   The incorrect process version was being deployed to the target environment from the source environment when using the legacy `deployProcess` operation. \(INT-7398\)


