# Salesforce acknowledgment XML 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0e0525ca-4f3c-4f88-ae2a-0d312dcee670"/>
</head>


Upon successful completion, your process needs to send an acknowledgment back to Salesforce to close the loop for the outbound message.

You can simply copy and paste the following XML snipet into a Message step before the Return Documents step in your process.

```code-xml
<soapenv:Envelope xmlns:soapenv="http:.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <notificationsResponse xmlns="http://soap.sforce.com/2005/09/outbound">
      <Ack>true</Ack>
    </notificationsResponse>
  </soapenv:Body>
</soapenv:Envelope>
```

For more information, refer to [Message step](../../Process%20building/r-atm-Message_shape_d7f9fd28-857c-4550-ab7d-39d4817c4668.md) and [Return Documents step](../../Process%20building/r-atm-Return_Documents_shape_61192114-0f9d-49d8-bcd0-1c8d6a843db2.md).
