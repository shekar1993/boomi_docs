# Deploying a local runtime

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-2c294aa4-1068-468c-aee1-2ea610deaf00"/>
</head>

Deployment and configuration of a local runtime typically involves the following steps.

:::caution

Before beginning deployment, review the [Local runtime system requirements](c-flo-MC_Docker_Installation_Requirements_562c280a-8be7-4410-8d37-52534da080af.md) and ensure that your deployment system setup is configured, as the token generated when creating a local runtime connection in expires 24 hours after generation.

:::

- [Creating a local runtime connection in Boomi Flow](c-flo-MC_Creating_Local_Runtime_in_Flow_9569e2be-f4fe-4284-9559-58b5b9036b52.md)

  To connect a local runtime to the Flow platform, you will need to set up a local runtime connection in your Flow Organization. This is the local runtime entity in the Flow cloud that you can use to perform actions in a local runtime, such as deploying flows and viewing metrics.

- [Setting up a local runtime](c-flo-MC_Creating_Local_Runtime_22f793ae-5242-4530-be0b-107ecc12914c.md)

  Local runtimes are installed and set up using a Flow Docker image. The Docker local runtime packages up the local runtime installation into a single easily-installable image.

- [Publishing flows to a local runtime](c-flo-MC_Using_Runtimes_9e275eed-016b-4f58-a4c5-35d2249603e8.md)

  Once you have set up your local runtime, you can run and publish flows within it.
