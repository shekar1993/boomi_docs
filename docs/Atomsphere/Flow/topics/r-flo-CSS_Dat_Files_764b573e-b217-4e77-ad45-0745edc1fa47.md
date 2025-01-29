# Files component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-764b573e-b217-4e77-ad45-0745edc1fa47"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize files components.

## Default player CSS 

The files component is only supported for use with the default legacy runtime.

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to files components in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .dropzone`|The main class applied to the **File Upload** area of the component.<br />For example, to set the height of the **File Upload** area:<br />`.mw-bs .dropzone {height:400px}`|
|`.mw-bs .files-progress`|The main class applied to the **File Progress** area of the component that displays the progress of a file as it is being uploaded.<br />For example, to set the background of the **File Progress** area:<br />`.mw-bs .files-progress {background:#cccccc}`|
|`.mw-bs .progress-bar`|The main class applied to the progress bar in the **File Progress** area.<br />For example, to set the background progress bar:<br />`.mw-bs .progress-bar {background:#cccccc}`|
|`.mw-bs .file-statuses`|The main class applied to the file status shown below the **File Progress** area once a file has been uploaded.<br />For example, to increase the font size of the file status text:<br />`.mw-bs .file-statuses {font-size:24px}`|