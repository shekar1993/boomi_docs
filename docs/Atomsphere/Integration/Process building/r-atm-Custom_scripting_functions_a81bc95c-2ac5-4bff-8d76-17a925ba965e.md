# Custom scripting functions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a81bc95c-2ac5-4bff-8d76-17a925ba965e"/>
</head>


Custom scripting functions are a type of map function that enable you to perform sophisticated field-level transformations and conditional logic.

You can configure a custom scripting function in one of two ways:

-   Insert an inline script for one-time use.

-   Reference a Map Scripting component that is available for reuse.


| Name                   | Parameters/Fields                                                                      | Description                                                                                                                                                                                                                                                   |
|------------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Scripting (inline)     | • Use Inline Script<br />• Language<br />• Script to Execute<br />• Inputs<br />• Outputs| Insert inline custom scripting to perform field-level transformations and conditional logic using JavaScript, Groovy v2.4, or Groovy v1.5 syntax.<br />You can add a custom scripting map function step directly to a map or within a user-defined function. Putting custom scripting steps (even simple ones) within a user-defined function allows you to reuse them. This also allows you to remove the scripting step from a map temporarily without having to recreate the entire step later.<br />Adding input and output parameters declares them as variables to use in your script. Blank/omitted/null inputs and outputs are treated as empty strings (""). |
| Scripting (component)  | • Use Scripting Component<br />• Map Script                                            | Reference a Map Scripting component to perform field-level transformations and conditional logic.<br />You can choose an existing Map Scripting component or create a new one.                                                                                               |

:::note

Watch the video to see [inline custom scripting functions](http://bcove.me/16ncxm38) in action.

:::