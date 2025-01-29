# Using Open Interface/Java \(Java Beans Services\) APIs for QUERY operations

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ef7cb2f8-4cf6-451f-8f75-db4ce8afab2a"/>
</head>


To use Open Interface, Java \(Java Bean Services\) APIs for QUERY operations, make sure the API is deployed and configured with the GET HTTP method, and appropriate security grants has been defined in the Oracle Integration Repository.

## Procedure

1.  Log in to Oracle EBS and navigate to **Integration Repository**.

2.  Click **Search** to access the main Search page.

3.  Use the search criteria to filter APIs of the required interface type. For example:

    -   **Open Interface** -  Select the **Interface Type** as “Open Interface”.
    -   **Java** -  Select the **Interface Type** as “Java”. Click the **Show More Search Options** link and use the search criteria and corresponding value. For example, **Category** as the Interface Subtype, and set the **Category Value** to: Java Bean Services.
4.  Execute the search and in the Search results, click the required interface name link to open the interface details page.

5.  In the **REST Web Service** tab- **Service Operations** section, all applicable Service Operations and the supported HTTP method check boxes will be displayed. Those service operations with GET HTTP method check box selected are the Queryable APIs.

    If a Java method is annotated with a specific HTTP method, then the corresponding HTTP method check box is preselected. The administrator can change the HTTP method check box selection before deploying the service.

6.  Click **Deploy** \(if the API not deployed already\).

7.  Create the security grants \(if not defined\). Refer to the Oracle Help topic “[Creating a Security Grant](https://docs.oracle.com/cd/E18727_01/doc.121/e12065/T511473T634173.htm#T634188)”