# Publishing flows to a local runtime

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-9e275eed-016b-4f58-a4c5-35d2249603e8"/>
</head>

Once you have set up your local runtime, you can run and publish flows within it.

To publish a flow to a local runtime:

1. Build a flow in the Boomi Flow cloud as normal.
2. Select **Publish** from the right-hand menu on the flow canvas.
3. The **Publish Flow** form is displayed.

   - Select the local runtime environment that you wish to publish the flow to from the drop-down menu.
   - Enter a comment if required to provide information about this published version of the flow.

4. Click **Publish** to publish the flow.
5. The **Publish Flow** form updates once the flow has published successfully.

   - The configuration values of the published flow that are required for building the Flow Run URL are displayed and will need to be copied and used to construct the Flow Run URL used to view the flow in a web browser.
   - The Flow Run URL will depend on your local runtime player configuration, see [Local runtime HTML5 player setup](c-flo-MC_Players_f418374c-f634-42a0-8d7a-b330c69107d5.md).

6. Click **Close** to close the **Publish Flow** form.

:::note

Only tenant Administrators can publish a flow to a local runtime using the **Publish** Form; Standard users do not have the local runtime environment drop-down available.

:::
