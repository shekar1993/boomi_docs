# Setting up the REST Service Locator

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d180e7c1-081b-4325-832e-0995748f23cd"/>
</head>


For the Oracle EBS V2 connector to use the REST Service Locator, the REST Service locator API must be deployed, and appropriate security grants must be defined in the Oracle Integration Repository.

## Before you begin

Only users with the Integration Administration role can access the Integration Repository.

## Procedure

1.  Deploy the **REST Service Locator**:

    1.  Log in to Oracle E-Business Suite and navigate to the **Integration Repository**.

    2.  Click **Search** to access the main Search page and select the Interface Type as “Java”.

    3.  Click the **Show More Search Options** link.

    4.  Use the following search criteria:

        -   **Category** -  Interface Subtype
        -   **Category Value** -  Java Bean Services
    5.  In the Search results, click the **Rest Service Locator** interface name link “oracle.apps.fnd.rep.ws.service.EbsRestLocator” to open the interface details page.

    6.  In the **REST Web Service** tab, enter the following information.

        -   **Service Alias** -  The alias will be displayed as the service endpoint in the WADL and schema for the selected method or operation.
        -   Select Desired Service Operations: In the **Service Operations** region, HTTP method check boxes are preselected. Make sure the **GET** check box is selected for the 'getRestInterface' service operation.

            **Note:** If a Java method is deployed with a specific HTTP method, then the corresponding HTTP method check box is preselected. The administrator can change the HTTP method check box selection before deploying the service. For more Java Bean Services annotation guidelines, see [Annotations for Java Bean Services](https://docs.oracle.com/cd/E26401_01/doc.122/e20927/T511473T545912.htm#appendixjrest).

    7.  Click **Deploy**. Once the **Rest Locator service** has been successfully deployed, 'Deployed' appears in the **REST Service Status** field along with the **View WADL** link. Click the **View WADL** link to view the deployed service WADL description.

2.  Create a Security Grant

    For more information, see the [Using Java APIs as REST Services](https://docs.oracle.com/cd/E26401_01/doc.122/e20927/T511473T634173.htm) - Oracle® E-Business Suite Integrated SOA Gateway Developer's Guide.

    1.  Log in to Oracle E-Business Suite and the navigate to the **Integration Repository**.

    2.  Search to locate the deployed **Rest Service Locator** API.

    3.  In the interface details page, click the **Grants** tab.

    4.  Select the **getRestInterface** service operation check box and then click **Create Grant**.

    5.  In the **Create Grants** page, select "**All User**" as the **Grantee Type** and click **Create Grant**. This grants the selected service operation access privilege to all Oracle EBS users.