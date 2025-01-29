# Receiving outbound messages from Salesforce

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ea6daf51-4728-4582-8686-375c72f19218"/>
</head>

Configure your Atom’s shared web server to properly set up to receive messages from Salesforce.

Complete the following steps in to receive outbound messages from Salesforce:

1.  Configure your Atom’s shared web server.

    -   Because Salesforce does not allow authentication for their web service call, you must include the `boomi_auth` parameter in the operation’s endpoint URL. For more information and examples, see the API security topic. Write down the endpoint URL because you need it to complete the outbound messaging setup in Salesforce.
    -   If you will deploy your web service process to a local Atom, configure its shared web server to require client certificates \(two-way SSL/TLS\) to validate the identity of the Salesforce server when it takes the role of client to your server. Then, download the Salesforce client certificate from Salesforce. This is the client certificate that Salesforce sends with each outbound message for authentication.
2.  Build an initial request/response web service listener process to receive data from Salesforce and return an acknowledgment.

    :::note
    
    Salesforce requires that web services return an acknowledgment message \(defined by the outbound messaging WSDL\) before returning documents. To do this, include a Return Documents step in your listener process.

    :::

3.  Deploy the web service listener process.


## Testing the data flow from Salesforce to Integration

After completing the setup in and Salesforce, complete these steps to test the data flow:

1.  Trigger a test outbound message in Salesforce to connect to the custom authentication URL you configured.

2.  Inspect the raw data received by the web service listener process to build the XML profile to use for mapping \(via XML profile import\).


## Additional resources

[Understanding Outbound Messaging](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_understanding.htm)