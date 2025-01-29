# Dell OpenManage Enterprise – Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-92e9c79e-81d7-482e-ac1b-9ef2ed2f7efd"/>
</head>


The Dell OpenManage Enterprise \(OME\) - Partner operation determines how to interact with the Dell OME account defined in the Dell OME - Partner connection.


:::note

The documentation for this connector is provided by a  partner. The documentation was last updated in September, 2019.

:::

The Dell OME - Partner operation uses JSON format and supports one action:

-   Query — look up alerts from the Dell OME system.
    -   You can filter alerts by ID, based on Severity Type and Timestamp, to limit the results.
    -   If you know the specific alert you want to look up, use the Equal To filter operator and specify the Alert ID. If you do not specify an ID, Query returns all alerts from the Dell OME system.
    -   When filtering alerts by Severity Type, use the Equal To filter operator and specify the exact SeverityType value to look up. See your Dell OME documentation for the value to specify here.
    -   To filter alerts by Timestamp \(date/time\), use the Greater Than Or Equal and Less Than Or Equal operators in the Query operation. Then, configure the Connector step by specifying the timestamp parameter for the operation as a static value in the connector action's **Parameters** tab. For example, `YYYY-MM-DD HH:MM:SS`.

## Options tab

Select the Query action, then use the Import Wizard to select the Alerts object to integrate. The wizard imports the response profile for Query. When you configure an action, the following fields appear on the Options tab.



Response Profile
:   The JSON profile component that represents the JSON structure that is being received by the connector.

Return Application Error Response
:   This setting controls whether an application error prevents an operation from completing:

    -   If cleared, the process aborts and reports the error on the Process Reporting page.
    -   If selected, the process continues and passes the error response to the next component to be processed as the connection output.

## Archiving tab

See the [Connector operation's Archiving tab](http://help.boomi.com/atomsphere/GUID-DEF1615C-B949-41FC-8A1B-2491390F5AF8.html) for more information.

## Tracking tab

See the [Connector operation's Tracking tab](http://help.boomi.com/atomsphere/GUID-2CF3192A-74AF-4863-8289-FC081C07D264.html) for more information.

## Caching tab

See the [Connector operation's Caching tab](http://help.boomi.com/atomsphere/GUID-994A7D4C-7DED-4293-B2AC-1F74C7639AE5.html) for more information.

## Additional resources

[Dell OpenManage Enterprise Version 3.0 documentation](https://www.dell.com/support/home/us/en/04/product-support/product/dell-openmanage-enterprise-v3.0/manuals)

[Dell OpenManage Enterprise RESTful API Guide](https://topics-cdn.dell.com/pdf/openmanage-enterprise-modular-v10001-poweredge-mx7000_api-guide_en-us.pdf)