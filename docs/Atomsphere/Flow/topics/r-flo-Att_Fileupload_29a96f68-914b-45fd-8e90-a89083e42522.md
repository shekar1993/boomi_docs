# File upload component attributes

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-29a96f68-914b-45fd-8e90-a89083e42522"/>
</head>


You can customize file upload components by applying attributes.

## Default player runtime

No attributes are supported for the default player with this component.

## Default legacy player runtime

You can apply the following attributes when running flows with the default legacy player.

| Key            | Value     | Description |
|----------------|-----------|-------------|
|`classes`<br/>Page builder: `Space delimited css classes` | `string`   | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character.  See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md). <br/><br/>For example, if a custom `".mw-bs .myChosenClassName"` style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value `'myChosenClassName'`. |
|`isAutoUpload`| `boolean` | Indicates if the component should auto-upload files when they are dropped onto the component by the user, or require a user to click an **Upload** button. <br/><br/> `true`: The file upload component will automatically begin uploading a file once it is dropped onto the component. The **Upload** button and progress bar are not displayed.<br/><br/>`false`: The file upload component will only begin uploading a file once the user clicks the **Upload** button. A progress bar displays the file upload progress. |

## Metadata example

This metadata example uses the default legacy player runtime.

```
"attributes": {
  "isAutoUpload": true
}
```