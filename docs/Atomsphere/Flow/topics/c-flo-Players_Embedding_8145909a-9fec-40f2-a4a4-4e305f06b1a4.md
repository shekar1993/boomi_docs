# Embedding players

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8145909a-9fec-40f2-a4a4-4e305f06b1a4"/>
</head>


Flow HTML5 players can be embedded into existing web pages without requiring the use of an iframe \(although embedding flows using an iframe is supported\).

## Embedding a player

To embed a flow player into a web page:

1.  Open the default player.
2.  Copy the player HTML code beginning from the first `<style>` tag directly after the `<Title>` tag, up to and including the last `<script>` tags that reference the loader.min.js.
3.  In the web page, paste this HTML wherever you wish the flow player to be embedded.
4.  Edit the engine initialization Url parameters at the bottom of the pasted HTML; initialization of the flow requires a few parameters that by default are usually fetched from the url query string.

    ![Url parameters](../Images/img-flo-Players_embed_0df6ab3d-6aec-4c3f-8eb8-ffb0e4281822.png)

    -   To start the latest activated version of a flow, enter the tenant-id and flow-id parameters.

    -   To start a specific version of a flow, enter the tenant-id, flow-id and flow-version-id parameters.

    -   To join a flow, enter the tenant-id and join parameters.

5.  Save and view the web page to check the flow player is working as desired.

**Note:** The HTML5 default player's CSS is namespaced to the `.mw-bs` class so it should not conflict with any existing styles used on your web page.

## Url parameter types

|Name|Description|
|:---|:----------|
|tenant-id|The GUID of the tenant that the flow belongs to.|
|flow-id|The GUID of the flow that you wish to embed on the web page. This can be found in the flow url as the '&flow-id=' parameter.|
|flow-version-id|The GUID for the specific version of the specified flow. This can be found in the flow url as the '&flow-version-id=' parameter.|
|join|The GUID of the state of a running flow.|
|mode|The debugger can be displayed by adding this parameter and setting it to either 'DEBUG' or 'DEBUG_STEPTHROUGH'.|