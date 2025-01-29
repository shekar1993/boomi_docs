# Building a REST request in RESTClient

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4bba6a54-d46a-41d4-8072-6a25618576a0"/>
</head>


Using RESTClient, configure a REST request by entering your information into the request.

## Procedure

1.  In the **URL** field, type the endpoint URL for the request.

2.  In the **Method** tab, select the **HTTP Method** for the request.

3.  If you set **HTTP Method** to **POST** or **PUT**, select the **Body** tab and type the request body in the box.

4.  If you are using Basic authentication or are connecting to a Atom Cloud or Test Atom Cloud, select the **Auth** tab and do the following:

    1.  In the **Auth Type** section, turn on **BASIC**.

    2.  In the **Username** field, type your user ID \(email address\).

    3.  In the **Password** field, type your password.

5.  Click **![](../Images/other-bt-wiztools-restclient-go_5fe8ebfe-a2f3-4c59-8895-37f7fb2416cd.jpg) Go**.

    RESTClient sends the request to the endpoint.

6.  In the **HTTP Response** panel, review the **Status** returned from the endpoint, examine the returned HTTP headers in the **Headers** tab, and, if applicable, review the response body in the **Body** tab.

7. **Optional:** To save the request for repeat use, select **File** \> **Save Request** and in the Save Request dialog, specify the disk location for the request \(.rcq\) file.