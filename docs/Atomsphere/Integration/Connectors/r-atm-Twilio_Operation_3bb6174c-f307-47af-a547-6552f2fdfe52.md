import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Twilio operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3bb6174c-f307-47af-a547-6552f2fdfe52"/>
</head>


The Twilio operation defines how to interact with your Twilio account and represents a specific action \(Query, Create, etc.\) to be performed against a specific Twilio object type.

Create a separate operation component for each action/object combination required for your integration. Not all objects are available for each action.

The following list provides some generalities and specifics:

-   For all inbound operations, unique parameters are required at run-time to request data.
-   For all outbound operations, send request XML data into the connector that corresponds with the defined XML profile. Request documents are typically the destination output of a map. Some outbound actions on particular objects result in the manipulation of Twilio account data and in the execution of a tangible action.

-   Review the Parameter values topic to understand how to statically or dynamically define values in a process for run-time.

-   Twilio specifies phone numbers in [E.164](http://en.wikipedia.org/wiki/E.164) format, for example `+13115556789`. A raw caller ID string in a response means Twilio was unable to normalize the incoming caller ID to E.164.
-   Twilio specifies timestamps as GMT in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format. For example, 6:13:42 PM PDT on September 17, 2012, is specified as `Mon, 17 Sep 2012 01:13:42 +0000`.


## Get 

The inbound Get action retrieves a single record from the Twilio object as defined in the Get operation by its Twilio system ID \(Sid\). You can enter only one Sid.

You can retrieve the Conference Participant object with multiple Sid values delimited by a colon. For example, `Conference Sid:Participant Sid`.

To retrieve a record owned by another account for which your account has permission, such as a secondary account, include the other account’s Sid as a prefix. For example, `Account Sid:Object Sid` \(in the case of Conference Participant: `Account Sid:Conference Sid:Participant Sid`\).

## Query 

The inbound Query action retrieves zero-to-many records from the Twilio object defined in the Query operation based on zero or more filters.

The bottom half of the operation component page contains configuration options to choose the fields to return and to add filters to limit the results.

To filter by date/time using the operator Before, On, or After, specify the timestamp parameter as a static value in the connector action’s **Parameters** tab. For example, `YYYY-MM-DD HH:MM:SS`.

## Create 

The outbound Create action creates new records in the Twilio object defined in the Create operation. The internal Sid value is generated automatically for each document sent to the operation. You can use a Create operation on an Account object to create a secondary account. Executing a Create operation on a Call object initiates a phone call. Executing a Create operation on an SMS Message object initiates transmission of a text message.

## Delete 

The outbound Delete action deletes an existing record in the Twilio object defined in the Delete operation. Conference Participant objects, when deleted, drop the specified participant from the conference. In either case, you must supply the Twilio system ID \(Sid\) for the record. If the Sid is not readily available in your source data, you can use a Query operation to retrieve data.

Specify the following objects using multiple Sid values delimited by a colon:

-   Conference Participant — `Conference Sid:Participant Sid`

-   Notification — `Call Sid:Notification Sid`

-   Recording — `Call Sid:Recording Sid`


To delete a record owned by another account for which your account has permission, for example a secondary account, include the other account’s Sid as a prefix. For example, `Account Sid:Object Sid` \(in the case of Conference Participant: `Account Sid:Conference Sid:Participant Sid`\).

## Update 

The outbound Update action updates an existing record in the Twilio object defined in the Update operation. Supply the Twilio system ID \(Sid\) for the record. If the Sid is not readily available in your source data, you can use a Query operation to retrieve data. These are some additional uses for Update:

-   On an Account object to update a secondary account or the Friendly Name property of a primary account.
-   On a Call object to redirect or terminate a phone call. You can mute or unmute a participant using an Update operation on a Conference Participant object.


Update cannot be performed in bulk — each Update is processed individually.

## Options tab 

Click **Import Operation** to use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions:

<TrackingDir />

**Request Profile**\(Create, Delete, Update\) -
  The XML profile definition that represents the XML structure that is being returned to the connector by Twilio. During the creation of the operation, this field is not visible until the selected object is imported.

**Response Profile**\(Get, Query, Create, Update\) -
 The XML profile definition that represents the XML structure returned to the connector by Twilio. During the creation of the operation, this field is not be visible until the selected object is imported.

<ReturnErrRes />

<OperationEnd />