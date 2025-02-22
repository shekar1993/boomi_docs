# API design

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3046F76B-CED6-47C7-BC20-397C5F3FBEBF"/>
</head>


Each API endpoint configured in an API Service component must have an independently deployed linked process that uses a Web Services Server connector operation to listen for and act upon API requests. You can link the same process to any number of endpoints.

You can define endpoints in these ways:

-   Select existing processes and generate the endpoints to which the processes are linked.

-   Add endpoints individually and link processes to them.

-   Simultaneously generate both a process and endpoints to which the process is linked.

-   Import a WSDL for an external SOAP-based API. Simultaneously generate processes and SOAP endpoints to which the processes are linked to serve as proxies for operations enabled by that API.

:::note

The WSDL SOAP binding must be in the document style and have a literal use — that is, the Document/literal style/use model; WSDLs whose bindings are in [other style/use models](http://www.ibm.com/developerworks/library/ws-whichwsdl/) are not supported. WSDLs containing element definitions having the form attribute with a value of “unqualified” are also not supported.

:::


You can also generate SOAP endpoints analogous to existing REST endpoints and vice versa.

The default settings for an endpoint’s specified operation are derived from its linked process’ connector operation. By using the capability to define overrides for the operation’s default settings, you can expose different sets of endpoints for use by different customers or partners.

Another way to customize an API Service component’s SOAP API is by assigning unique service names and namespaces.

You should not deploy API Service components that specify objects for which a profile type conflict exists. A conflict occurs when multiple referenced XML profiles include the same type and namespace or when multiple referenced JSON profiles have the same root name. You can resolve conflicts by standardizing on one profile. Profile conflicts are identified as you configure an API Service component and lets you resolve conflicts before you finalize configuration.

API Service components do not directly include linked processes when deployed. Rather, requests to endpoints invoke the currently deployed versions of linked processes.

Similarly, copying an API Service component from one account to another does not also copy the component’s linked processes. The following actions, done in order, will result in a deployable copy of an API Service component in a target account:

1.  Copy the linked processes to the target account.

2.  Copy the API Service component to the target account.

3.  In the target account, link the copies of the processes to the copy of the API Service component.


Processes linked to API endpoints generated by importing an external API’s WSDL are not bound to that WSDL. If you deploy a proxy API generated in that manner and the owner of the external API changes the WSDL, you have two alternatives:

-   Reimport the WSDL in the API Service component, and regenerate the corresponding endpoints and the processes to which the endpoints are linked. Then redeploy both the new processes and the API Service component.

or

-   Revise the processes and affected dependent components to reflect the WSDL changes, and redeploy the revised components. 