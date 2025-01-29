# Event Streams REST API 

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-7d5abcb0-683c-4e1a-834b-f946a80238d6"/>
</head> 

The Event Streams REST API enables message production seamlessly for applications relying on HTTP-based operations. 

With the introduction of the REST API, customers can now produce messages with a size of up to 5MB.


## Getting Started 

To use the REST API in Event Streams:

1. Log into the Boomi platform.
2. Navigate to the Event Streams feature by clicking on the Event Stream tile from the dashboard.
3. Locate and click on the Environment tab to view available environments.
4. Drill down to the Topics table for each environment to see the specific topics associated with it.

## Copying REST API URL

Each topic has a unique REST API that allows you to produce messages. To copy the URL:

1. Navigate to the desired topic within the Topics page or Environment Overview page.
2. Click on the View REST link in the connections column of the topic.
    A side drawer will open, displaying the REST URL and other required information.
3. Click on the Copy URL button to copy the URL to your clipboard.
4. A success message (e.g., "Copied to Clipboard") will appear, confirming the action.

![](../Event%20Streams/images/img-es-message_management_Env_Topics.png)
![](../Event%20Streams/images/img-es-Message_Management_Env_Topics_Connection_Details.png) 

## Constructing the API Request

To produce a message, you will need to send an HTTP POST request to the copied REST API URL.

### Message Payload Structure

The request must include a JSON body structured as follows:

```
{
    "messages": [
        {
            "payload": "SampleTestPayload1",
            "properties": {
                "key1": "Value1",
                "key2": "Value2",
                "key3": "Value3"
            }
        }
    ]
}
```

|Parameter|Required?|Type|Description|
|----|-----------|---|------------|
|payload|Yes|String|The actual message payload being sent|
|properties|No|`Map<Sting,Sting>`|Custom properties that can be included as metadata|

**Recommendation:** Avoid using spaces in properties. While creating message properties with spaces will still allow for message production and consumption, they will not be visible on message management.

Multiple messages can be produced in one call by adding more messages to the payload as follows,

```
{
    "messages": [
        {
            "payload": "SampleTestPayload1",
            "properties": {
                "key1": "Value1",
                "key2": "Value2",
                "key3": "Value3"
            }
        },
        {
            "payload": "SampleTestPayload2",
            "properties": {
                "key1": "Value1",
                "key2": "Value2",
                "key3": "Value3"
            }
        }
    ]
}
```

### Authorization

To authenticate the API request, use the Environment Token as a Bearer Token. Be sure to include the token in the Authorization header of your request as shown below.

`Authorization: Bearer YOUR_ENVIRONMENT_TOKEN`

### Using Postman to create an Example Request 

To use Postman to send a message to your topic, follow the instructions below:

1. Open Postman and create a new POST request.
2. Enter the copied REST API URL in the request URL field.
3. In the Headers tab, set the following:
    - Key: Authorization
    - Value: Bearer YOUR_ENVIRONMENT_TOKEN
4. In the Body tab, select raw and choose JSON as the format.
5. Paste the message payload structure from above.
6. Click Send to produce the message.

## Viewing Produced Messages

Once a message has been successfully sent, you can view it in the Message Backlog via the Message Management UI by following these steps.

1. Return to the Event Streams feature.
2. Click on the Message Management section.
3. Select the relevant topic to review incoming messages.

Additionally, after sending a message through a REST client such as Postman, you can confirm successful delivery by checking for an HTTP 200 response code along with a list of message IDs. This indicates that the messages have been acknowledged by the broker. For example:

```
{
  "status": "success",
  "messageIds": "744:7:0,744:8:0,744:9:0,744:10:0"
}
```

## Troubleshooting

If you encounter issues while using the REST API for message production:

- Check Authorization: Ensure that the Environment Token used is correct and has the necessary permissions.
- Validate Payload: Confirm that the JSON body structure is correct and includes all required fields.




