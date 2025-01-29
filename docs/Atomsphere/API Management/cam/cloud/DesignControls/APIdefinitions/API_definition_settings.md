---
sidebar_position: 6
---

# API Definition Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f381c0a1-30a6-4fde-9775-1dd26cf313c6"/>
</head>

General settings such as API description, API version, cross-domain and robots policies can be defined on the **API Definition Settings** page.

:::note

After entering the policy and other details, click **Save** to save the changes. 

:::

The following table describes the fields on the API Definition Settings page. 

|**Field** |**Description** |
| ------ | ------ |
|Name|An API name that is displayed while creating Packages and Plans, and while generating reports. |
|Description|API description that states the purpose the API. |
|Version|API version helps to identify a particular instance of the API. This field is defined for administration purpose, and it assists in the management of multiple versions of your API. API version is a metadata that can further describe the particular API definition. |
|QPS Limit Overall |Maximum number of calls handled per second (QPS) across all developer keys for the API. This setting is used to protect your backend systems surfaced through the API endpoints and in circumstances when traffic spikes beyond planned capacity are expected. Most customers do not set a value for this particular setting. |
|RFC 3986 Encoded |RFC 3986 is a specification for URL syntax. The % syntax for escaped characters in a URL is an example of RFC 3986 specification. API Management provides an option to use this specification for query parameters. By default, API Management uses more restricted encoding according to the older RFC 1738. |
|Select one organization or group to own this API. |<p>Select an Organization or group to own the API Definition. </p><p>:::note</p><p>Only users with API permissions in this organization will be able to edit this API definition.</p><p>::: </p><p>Click **Change** to change the Organization ownership of the API. </p><p>Click **View all APIs in this Organization** to view all the API owned by a specific Organization. </p>|

|**Field** |**Description** |
| ------ | ------ |
|Cross-Domain Policy for API Access via Flash |The XML file that enables the Traffic Manager to pass an API call from a flash-based application to the client's API servers and then receive the response. You can enter the domain of the flash-based application in the `<allow-access-from domain="*"/>` tag.| 

For example,

```xml
<?xml version="1.0"?>
<!DOCTYPE cross-domain-policy SYSTEM "
{+}http://macromedia.com/xml/dtds/cross-domain-policy.dtd\+">
<cross-domain-policy>
<allow-access-from domain="www.flashwidget.com"/>
</cross-domain-policy>
```

|**Field** |**Description** |
| ------ | ------ |
|Robots Policy (Default allows full access) |The Robots Policy tab allows you to specify the instructions that are entered in a Robots.txt file. When a request comes in for a Robots.txt file, the instructions mentioned in the Robot Policy field are sent|

For example,

Example 1: The following example directs a Googlebot not to view `index.html` file and the images directory. This way you can restrict robots from accessing multiple areas.

```
User-agent: Googlebot
Disallow: /index.html
Disallow: /images/
```

Example 2: The following example directs all robots starting with Y, not to view the contents in the `cgi-bin` directory.

```
User-agent: Y*
Disallow: /cgi-bin/
```
