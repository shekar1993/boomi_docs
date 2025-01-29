# Flow

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-a5f36988-63c3-4425-b75a-f3aa4e338f28"/>
</head>

**We added these feature:**

- **Task Automation** - Early Access

We're thrilled to introduce the beta version of Task Automation. Task Automation is a simple solution for business users that does not involve any coding. You may automate your usual procedures with a few clicks and use this simple build technique to begin your desired business process.

- We have made the following behavioral changes to the File Upload page component:
  - When the Multi-select checkbox is unchecked, only single file is added and uploaded in a single upload process. This does not prevent you uploading more files, one at a time.
  - When the Multi-select checkbox is checked, multiple files can be dropped or selected and uploaded in a single upload process. (FLOW-7298)
- In the OpenAPI schema, a default may be defined that will be automatically set on requests utilizing both custom and specification definition. (FLOW-7097)
- Enhanced the Tiles page component by introducing **Multi-Select** field. (FLOW-7221)
- You can select or upload CSS file from Asset Manager for Themes. (FLOW-7306)
- The Page Builder now displays the page editor guidelines and element label information. (FLOW-7325)
- On Environment screen, endpoints are added allowing you to add, edit, and delete additional environments. (FLOW-7330)
- Improved OpenAPI Schema setup by including and utilizing the OpenAPI connection without requiring any specific changes. (FLOW-7334)
- The YAML format now allows you to specify a default request parameter for ``x-flow-save`` or ``x-flow-update``. (FLOW-7096)
- When the runtime authentication token expires, either due to an active or inactive session timeout, you will be redirected to log in again and restart the timers. (FLOW-7351)
- Improved page editor for configuring CSS classes on containers. (FLOW-7350)
- Introducing a new tab in the Environment that displays all Flows that have been deployed in the environment. (FLOW-7366)
- An audit log record is effectively added when you create or remove an environment. (FLOW-7367)

**We fixed these issues:**

- Fixed a bug which now prevents the cursor from moving to the end while entering custom component attribute values. (FLOW-7313)
- Resolved auto scrolling issue when dragging components on page editor. (FLOW-7315)
- Resolved an issue where you can now delete the from Data Load Filter without using *apply filter* action. (FLOW-7317)
- Fixed an issue where you can view and access all the value types in the value picker modal. (FLOW-7324)
- Resolved an issue where the flow allows you to create new values of List or Object for the types bound to the Connector. (FLOW-7326)
- Resolved an issue where the properties dropdown now displays the columns in a table that sources its values from a connector. (FLOW-7327)
- Fixed an issue where the Flow can now delete list items. (FLOW-7341)
