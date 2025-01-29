# Setting up a local runtime HTML5 player for an individual flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0b9ba784-8897-4b63-a998-6f0477b9fdf0"/>
</head>

A local runtime player can be set up to be used with only a specific local runtime flow.

With this approach, a local 'default.html' file based on the Boomi Flow default player is created in a folder and hosted on the local runtime machine. It is configured to render only a specific local runtime flow in a browser.

:::note

You will need to create and publish the local runtime flow that you would like to deliver using the local player, as the tenant-id and flow-id of the published flow is required. See [Publishing flows to a local runtime](c-flo-MC_Using_Runtimes_9e275eed-016b-4f58-a4c5-35d2249603e8.md).

:::

1. In Boomi Flow, open up the default player in the **Players** tool.

2. Copy the entire player HTML code onto the clipboard.

3. Create a new 'default.html' file where you wish to store your local player. For example, this could be on the same machine as the local runtime, within a web server folder.

4. Paste the contents of the default player into this new file.

5. Edit the `uri` platform setting and specify the platform uri to match the `BASE_URL` value that is used for the local runtime environment. For example:

   ```
   manywho.settings.initialize({
     platform: {
        uri: 'http://localhost:2294',
     },
   })
   ```

6. Identify and copy the tenant-id and flow-id of the local runtime published flow.

   - For example, the flow-id can be found in the flow url as the '&flow-id=' parameter.
   - For example, the tenant-id can be found in the **Account** menu in Boomi Flow.

7. Edit the engine initialization Url parameters at the bottom of the pasted HTML; initialization of the flow requires a few parameters that by default are usually fetched from the url query string. This will ensure that your player communicates with the correct flow.

   ![Url parameters](../Images/img-flo-Players_embed_0df6ab3d-6aec-4c3f-8eb8-ffb0e4281822.png)

   - To start the latest activated version of a flow, enter the tenant-id and flow-id parameters.
   - To start a specific version of a flow, enter the tenant-id, flow-id and flow-version-id parameters.
   - To join a flow, enter the tenant-id and join parameters.

   For example, if your flow tenant-id was '07f799a4-af7c-449b-ba7c-f1f526f70b' and your flow-id was 'c6b211f0-b342-4f67-b7b1-b8b62868bb', your player code would be:

   ```
   manywho.engine.initialize(
   **'07f799a4-af7c-449b-ba7c-f1f526f70b',
    'c6b211f0-b342-4f67-b7b1-b8b62868bb'**,
    'main',
    queryParameters['join'],
    queryParameters['authorization'],
    options,
    queryParameters['initialization']);
   ```

8. Save the new player file.

9. View your locally hosted player file in a browser; the flow will run and be displayed as if it were using the default Boomi Flow hosted player.

## The Flow Run URL

The exact Flow Run URL will depend on how you have configured/located your local runtime player, but typically uses the following format:

`[local_runtime_player]`

Where `[local_runtime_player]` is your hosted/local runtime player location.

For example, if your local runtime player was hosted locally, the Flow Run URL would be:

`http://localhost/default.html`
