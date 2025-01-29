# Connectivity 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-c22f930c-64cd-47fd-bddf-3a1ea9003cb1"/>
</head>


## Approve Listener Bypass 

**Fix:**

-   Some listeners run on the main JVM on the Atom cloud so they cannot utilize concurrent executions when running in low latency mode. To bypass listeners running in clouds and in the Atom worker, add the custom container property `com.boomi.container.listen.worker.connectors` and set the property value to a comma-separated list of connector types. \(CON-8043\)


## Connector Operation import and browse 

We improved the connector operation import/browse function to ensure consistency across all SDK connectors by providing a Getting Started experience similar to other platform components.

**Features:**

-   Introduced a [Getting Started Connector Operation page](../../Integration/Process%20building/c-atm-Connector_Operation_components_106fbc54-b0eb-45aa-91df-d2a401b5a952.md) to facilitate an operation import where browse is supported. \(CON-7510\)

-   Introduced a [User Preference feature flag](../../Platform/atm-Preferences_8755af68-ec6f-4f6d-8c03-416e654cf479.md) that allows a user to enable or disable the Getting Started screen for connector operations. \(CON-7324\)

-   Renamed the **Import** button to **Import Operation** and moved the button to be inline with the rest of the Operation page. \(CON-7346\)

-   Added the **Action** field to the [Import Operation wizard](t-atm-Using_an_operation_components_Import_Wizard_06a221cf-becb-485b-8067-fae1f8aeeed0.md), which you can use to create a brand new operation in the wizard. \(CON-7151 and CON-7364\)

-   Updated fields that are scoped to both operation and browse in the descriptor now populate into browse after the initial import. Additionally, replacement fields will populate their values into the new fields. \(CON-7153\)


## HTTP PATCH Client connector 

**Feature:**

-   With the GA release of the REST Client connector, we changed the HTTP PATCH Client connector’s visibility to HIDDEN for those accounts that have never saved a component with that connector. The [REST Client connector](../../Integration/Connectors/int-REST_Client_connector_686f3452-ce89-4a04-bf73-2dfd603ae3f7.md) should now be used for PATCH functionality. \(CON-7899\)


To learn more about this feature, see [HTTP PATCH Client connector](r-atm-Patch_connector_e0d03b26-9201-4b0d-9a6e-c68ffe42d71b.md).

## Hypatos.ai - Partner connector 

**Deferred:** Subsequent to the August 2023 Runtime Release, this connector release was postponed and will be rescheduled.

**Feature:**

-   New connector release to support the integration between Boomi and Hypatos.ai - a deep learning automation hub for enterprise. \(CON-8144\)


## REST Client connector 

**Feature:**

-   Added OAuth JWT Bearer Token authentication method. \(CON-7974\)

To learn more about this feature, see [REST Client connection](int-REST_Client_connection_367e5540-3a08-44bd-a20b-ae3a93f62833.md).

## RutterKey Procore - Partner connector 

**Feature:**

-   New connector release to support the integration between Boomi and RutterKey Procore - a cloud-based construction management software platform. \(CON-8145\)


To learn more about this connector, see [RutterKey Procore - Partner connector](int-RutterKey_Procore_connector_81f12fcf-0d8a-4538-9af0-41bc61251d1a.md).

## Solace PubSub+ - Partner connector 

**Features:**

-   Added support for OAuth authentication. \(SOL-79830\)

-   Added HTTP Content Encoding, HTTP Content Type and Sequence Number as tracked and dynamic properties. \(SOL-63238\)


To learn more about these features, see [ Solace PubSub+ – Partner connector](int-Solace_PubSub_connector_b38dbd64-539a-40f5-854b-1efd40b4477d.md).

## Technical Debt resolved 

The following safeguards were removed in this release:

-   One that was introduced as part of the development of storing an extended client secret on an Atom and then having to re-enter the client secret when generating an extended access token. The access token client secret field now works as expected. \(CON-2668\)

-   One that was introduced as part of the extensibility support for the CustomProperty field type. \(CON-1242\)

-   One that was introduced as a security enhancement around audit logs. \(CON-2707\)