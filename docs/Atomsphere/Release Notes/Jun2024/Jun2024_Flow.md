# Flow 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-57dffb7c-cfc9-41c1-9105-0642e73284a6"/>
</head>

**We added these features:**

- Added the ability to get the last item from a list value in an operation. [FLOW-7537]

- Enhanced the flow to prevent the runtime URL from being replaced with join URL. [FLOW-7417]

   :::note
   After authentication

  - The state is preserved when refreshing the browser tab.
  - The state is not preserved when bookmarking or sharing the URL.

   :::

- Introduced a new option, ``allowLocationControl``, in Customizing Default Player. [FLOW-7480]

**We fixed this issue:**

- Fixed an issue where the runtime prevented navigating to other flows through the same browser tab. [FLOW-7515]
