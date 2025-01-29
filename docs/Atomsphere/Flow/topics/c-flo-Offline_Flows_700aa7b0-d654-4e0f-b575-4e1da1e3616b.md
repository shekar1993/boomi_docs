# Offline flows

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-700aa7b0-d654-4e0f-b575-4e1da1e3616b"/>
</head>


Flows can be configured to work 'offline' in certain scenarios.

## Overview

Although Boomi Flow is designed and optimized for use in an online environment, it is possible to configure a flow to work 'offline' in certain scenarios.

Normally, a flow will communicate with the online flows environment at all times, however in certain customer environments there may be a need to have a flow work even when in an offline environment.

For example, if you require a member of your mobile roaming workforce to run a flow app on a mobile device to collect data in situations where there is no internet connectivity, the flow may be configured as 'offline' so that it will cache the user data until internet access again becomes available and then synchronize this data back into the online flows engine.

To get started with setting up an offline flow see [Configuring an offline flow](c-flo-Offline_Creating_Offline_Flow_97f8fffa-7576-4682-8999-69b6f55f59ac.md).