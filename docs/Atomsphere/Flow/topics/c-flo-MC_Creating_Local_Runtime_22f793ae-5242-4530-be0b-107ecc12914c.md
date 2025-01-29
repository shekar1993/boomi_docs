# Setting up a local runtime

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-22f793ae-5242-4530-be0b-107ecc12914c"/>
</head>

This topic provides an overview of the steps involved in setting up a Flow local runtime.

## Installing a local runtime

Local runtimes are installed and set up using a Flow Docker image. The Docker local runtime packages up the local runtime installation into a single easily-installable image.

- [Local runtime system requirements](c-flo-MC_Docker_Installation_Requirements_562c280a-8be7-4410-8d37-52534da080af.md)

- [Local runtime Docker installation](c-flo-MC_Docker_Installation_of_Local_Runtime_a41696e4-46ca-4d8d-a96e-06bd31b568e5.md)

- [Local runtime Docker setup](c-flo-MC-Docker_Setup_5aa5e759-efb7-4b14-befc-70b18d607116.md)

:::caution

The local runtime Flow Docker image must be installed on a 64–bit Linux machine. The minimum supported Docker version is 19.03.8. Installation on a Windows Operating System is not supported.

:::

## Setting up a local runtime HTML5 player

Once you have set up a local runtime, your local runtime player configuration needs to be defined in order to allow users to view local runtime flows in a web browser. As the local runtime does not access the Flow cloud, a local HTML5 player needs to be created and configured so that the local runtime can access the player and use it to render your local runtime flow(s) in a web browser.

- [Local runtime HTML5 player setup](c-flo-MC_Players_f418374c-f634-42a0-8d7a-b330c69107d5.md)

:::note

A local runtime HTML5 player is not a requirement when using local runtimes if your flows will not be run in a web browser, as your Organization may deliver flows using the API, a custom user interface, or a connector such as Twilio for example.

:::

## Upgrading local runtimes

Upgrading to a new version of a local runtime can be performed by changing the version number in your deployment manifests, and then performing a restart of all runtime instances.

- [Upgrading local runtimes](t-flo-MC_Upgrading_a_Runtime_f05f9ac3-07b1-48cc-89b6-c1b4aafa344c.md)

## Runtime health checking

A health API endpoint can be used to monitor the general system health of a runtime.

- [Runtime health checking](c-flo-MC_Health_1965b30e-de6b-4f47-b300-bd009148e211.md)

## Runtime observability

Observability data can be exported for runtime environments. As well as basic error logging, more detailed system-level OpenTelemetry data can be exported from a runtime environment and sent to an OpenTelemetry Protocol (OTLP) endpoint/APM system.

- [Observability](flo-Observability_e3ebeb63-f184-4c13-88a5-e20b9115ae10.md)

- [Observability for Multi-cloud runtime environments](flo-Observability_MC_133943ce-340c-4be1-a401-2f8a3e3741e9.md)
