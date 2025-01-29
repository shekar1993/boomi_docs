# Twilio connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f38e23dc-2104-4428-b973-8d686f8f2e79"/>
</head>


Use the Twilio connector to query metadata about a Twilio account, phone numbers, calls, text messages, and recordings, initiate outbound calls, and send text (SMS) messages, in a Boomi Integration process.

:::note  

The component of the Twilio API that provides support for handling incoming calls through TwiML instructions is accessible to a Boomi Integration process through the Web Services Client connector.

:::

## Connection configuration 

To configure a connector to communicate with Twilio, set up two components:

-   Twilio connection

-   Twilio operation


## Prerequisites 

To implement a connection to Twilio from Integration, you must:

-   Have a Twilio account.

-   Establish credentials for use with the connector.

## Supported objects

The following objects are supported by one or more of the Twilio operation actions:

| Twilio Objects               | Get | Query | Create | Update | Delete          |
|------------------------------|:---:|:-----:|:------:|:------:|:---------------:|
| Account                      |  X  |   X   |   X    |   X    |       X         |
| Application                  |  X  |   X   |   X    |   X    |       X         |
| ConnectApp                   |  X  |       |   X    |   X    |                 |
| AuthorizedConnectApp         |  X  |   X   |        |        |                 |
| LocalPhoneNumber             |  X  |       |        |        |                 |
| TollFreePhoneNumber          |  X  |       |        |        |                 |
| Call                         |  X  |   X   |   X    |   X    |                 |
| Conference                   |  X  |   X   |        |        |                 |
| IncomingPhoneNumber          |  X  |   X   |   X    |   X    |       X         |
| LocalIncomingPhoneNumber     |  X  |   X   |        |        |                 |
| TollFreeIncomingPhoneNumber  |  X  |   X   |        |        |                 |
| Notification                 |  X  |   X   |        |        | X (Not Supported)|
| CallNotification             |  X  |       |        |        |                 |
| OutgoingCallerId             |  X  |   X   |   X    |   X    |       X         |
| CallerIdValidation           |  X  |       |        |        |                 |
| ConferenceParticipant       |  X  |   X   |        |   X    |       X         |
| Recording                    |  X  |   X   |        |        |       X         |
| CallRecording                |  X  |   X   |        |        |                 |
| ShortCode                    |  X  |       |        |        |       X         |
| SMSMessage*                  |  X  |   X   |   X    |   X    |                 |
| Transcription                |  X  |       |        |        |                 |
| RecordingTranscription       |  X  |       |        |        |                 |
| Message**                    |  X  |   X   |   X    |   X    |                 |


*SMSMessage is deprecated and is no longer maintained or updated. It is expected to be removed in the future versions of Twilio API.

**Message is added as a replacement for SMSMessage and it is the recommended option to get all the latest features and updates.

## Supported editions 

The Twilio connector supports Version 2010-04-01 of the Twilio REST API.

## Unsupported editions 

The Twilio connector does not support Version 2008-08-01 of the Twilio REST API.

## Tracked properties
This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.
