# Boomi Enterprise Platform process in ABAP Proxy

<head>
  <meta name="guidename" content="Boomi for SAP"/>
  <meta name="context" content="GUID-f6d6a970-56c0-4923-838d-22a1daccd68d"/>
</head>

Boomi for SAP communicates with Boomi in two different ways, depending on which system initiates the communication.

1. **Sending data from Boomi to ABAP Proxy**

Boomi connects to ABAP Proxies using the Boomi for SAP Connector.

- **Browsing for the proxy**

The Boomi for SAP Connector supports browsing for ABAP proxies using the Import Wizard. You can filter the name of the proxy you need, but if no filter is applied, the Import Wizard will display the first 500 proxies. From the list, select the proxy you need and the connector will generate the request and response profile of the proxy when running Boomi for SAP 1.6.

- **Manually downloading the XSD**

If you are are running Boomi for SAP 1.5 or earlier, the generated request and the response profiles might not be correct. A URL to download the XML Schema Definition(XSD) file will be displayed, allowing you to manually upload the correct profile.

  1. Copy the URL and open a new tab in your browser. 
  2. Paste the URL, right-click on the page and select **view page source**. 
  3. Press **CTRL+S** to *Save As* a`.xsd` file name, and specify the *Format* as *Webpage, HTML Only* (\*.html;*.htm).

- **Dynamic Properties**

When using the `ABAP_PROXY_SEND` operation, set the mandatory properties using the **set properties step**.  

`ProxyReceiverService` is a mandatory property. However, if you are running 1.5 or earlier, it is mandatory to also include the `ProxyQualityOfService` property.

- `ProxyReceiverService`: Should be set to `[sId]_[sapClientId]` of the receiving system.

- `ProxyQualityOfService`: Should be set to *BestEffort(BE)* for synchronous proxies and *ExactlyOnce(EO)* for asynchronous proxies.
 
In addition to the two mandatory document properties, you can also set the following properties:

- `ProxyPreBodyMultipartOverwrite`: Used to override the multipart that comes before the message body.

- `ProxyPostBodyMultipartOverwrite`: Used to override the multipart that comes after the message body. 

- `ProxySenderService`: Used to override the sender service property of the multipart. It is set to be Boomi by default. 

- **Send**

Once the operation contains the correct request, the response profiles, and the mandatory properties, you can send it to the proxy.
In the **Connector step** go to the **Parameters** tab and press the **+** to add a value to an element of the message. 

2. **Receive ABAP Proxy data in Boomi from SAP**

REST services are created in Boomi using the standard Boomi Web Services component. Boomi is configured to send ABAP Proxy data to the Boomi REST service.