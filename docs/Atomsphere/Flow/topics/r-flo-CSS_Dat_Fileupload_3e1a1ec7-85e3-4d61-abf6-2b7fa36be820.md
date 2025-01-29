# File upload component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3e1a1ec7-85e3-4d61-abf6-2b7fa36be820"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize file upload components.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to file upload components in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.page-component-file-upload`|The main class applied to the entire file upload component in a flow.<br />For example, to increase the padding around all file upload components in a flow:<br />`.page-component-file-upload {padding:15px}`|
|`.file-input-drop-target`|The main class applied to the **File Upload** area of the component.<br />For example, to set the height of the **File Upload** area:<br />`.file-input-drop-target {height:400px}`|
|`.file-input-file-list`|The main class applied to the file list area of the component.<br />For example, to increase the padding around the file list area:<br />`.file-input-file-list {padding:15px}`|


## Default legacy player CSS 
You can use the following classes/selectors to apply additional CSS styling to file upload components in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .dropzone`|The main class applied to the **File Upload** area of the component.<br />For example, to set the height of the **File Upload** area:<br />`.mw-bs .dropzone {height:400px}`|
|`.mw-bs .files-progress`|The main class applied to the **File Progress** area of the component that displays the progress of a file as it is being uploaded.<br />For example, to set the background of the **File Progress** area:<br />`.mw-bs .files-progress {background:#cccccc}`|
|`.mw-bs .progress-bar`|The main class applied to the progress bar in the **File Progress** area.<br />For example, to set the background progress bar:<br />`.mw-bs .progress-bar {background:#cccccc}`|