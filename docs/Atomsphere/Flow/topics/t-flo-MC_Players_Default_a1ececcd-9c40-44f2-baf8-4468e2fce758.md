# Setting up a local runtime default HTML5 player

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a1ececcd-9c40-44f2-baf8-4468e2fce758"/>
</head>

A local runtime default legacy player can be set up to be used with all your local runtime flows.

With this approach, a local 'default.html' file based on the Flow default legacy player is created/hosted in a folder on the local runtime machine, and configured to use the local runtime platform URI.

Query parameters are then applied to the Flow Run URL to specify that a flow should use the player.

:::note

You will need to create and publish the local runtime flow that you would like to deliver using the local player, as the tenant-id and flow-id of the published flow is required. See [Publishing flows to a local runtime](c-flo-MC_Using_Runtimes_9e275eed-016b-4f58-a4c5-35d2249603e8.md).

:::

1. In Flow, open up the default legacy player in the **Players** tool.

2. Copy the entire player HTML code onto the clipboard.

3. Create a new 'default.html' file where you wish to store your local player. For example, this could be on the same machine as the local runtime, within a web server folder.

4. Paste the contents of the default legacy player into this new file.

5. Edit the `uri` platform setting and specify the platform uri to match the `BASE_URL` value that is used for the local runtime environment. For example:

   ```
   manywho.settings.initialize({
     platform: {
        uri: 'http://localhost:2294',
     },
   })
   ```

6. Identify and copy the tenant-id of the local runtime published flow. The tenant-id can be found in the **Account** menu for example.

7. Edit the engine initialization Url parameters at the bottom of the pasted HTML; to allow users to join a flow correctly, the tenant-id parameter must be added.

   ![Url parameters](../Images/img-flo-Players_embed_0df6ab3d-6aec-4c3f-8eb8-ffb0e4281822.png)

   - Enter the tenant-id parameter.

   For example, if your flow tenant-id was '07f799a4-af7c-449b-ba7c-f1f526f70b', your player code would be:

   ```
   manywho.engine.initialize(
   **'07f799a4-af7c-449b-ba7c-f1f526f70b',**
    queryParameters['flow-id'],
    queryParameters['flow-version-id'],
    'main',
    queryParameters['join'],
    queryParameters['authorization'],
    options,
    queryParameters['initialization']);
   ```

8. Save the file and check that it can be accessed in a browser. Note that you will receive an error when viewing the file at this point, this is to be expected until the flow is published and the flow parameters have been added.

9. Copy the flow-id of the local runtime published flow that you wish to use the player with. This information can be found on the **Publish Flow** form that is displayed when a flow has been successfully published. See [Publishing flows to a local runtime](c-flo-MC_Using_Runtimes_9e275eed-016b-4f58-a4c5-35d2249603e8.md).

10. View your locally hosted player file in a browser, and use query parameters to build the Flow Run URL that identifies which flow the player will run.

## The Flow Run URL

The exact Flow Run URL will depend on how you have configured/located your local runtime player, but typically uses the following format:

`[local_runtime_player\]?flow-id=[flow-id]`

Where `[local_runtime_player]` is your hosted/local runtime player location, and `[flow-id]` is the flow-id of the flow to run.

For example, if your local runtime player was hosted locally, and the flow flow-id was 'c6b211f0-b342-4f67-b7b1', the Flow Run URL might be:

`<http://localhost/default.html?flow-id=c6b211f0-b342-4f67-b7b1>`

- To start the latest activated version of the flow, enter the flow-id parameter.

- To start a specific version of a flow, enter the flow-id and flow-version-id parameters.

- To join a flow, enter the join parameter.
