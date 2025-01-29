---
sidebar_position: 6
---

# Testing your API

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e872f688-083a-4817-bb3c-277a45b5910c"/>
</head>

## Procedure

1. Go to the Developer Portal URL: `http://evalXXXX.mashery.com` and click **IO Docs**, or directly go to `http://evalXXXX.mashery.com/interactive-documentation`. **Acme API** is automatically selected from the API list. 

2. Select your API from the drop-down list if you have more than one API definition.

    :::info
    - If you followed the instructions in this document, you should have your API Key in the `App/Key`list (navigate to **My Account>My Applications>View keys**). 

    - For unregistered users or users without the key, you just see a text box (To see the text box, click the **Manually provide key** information link).
 

    :::

4. In the **Default** section, with **Starter App** `App/Key` selected,

    a. Open up the **GET exampleMethod** (it may be a different name if you optionally change it).
    
    b. Click **Try It out** to test the API.

5. You can see the sample request URI at `http://evalXXXX.api.mashery.com/acme/v1/product?api_key=your-api-key`. You
can try this directly using your favorite client (for example, Curl, Postman, REST Client, SoapUI) or even add it into your browser. You can also change the URL by replacing the product with the order, as this is another method available on this API. 

## Results 

This completes the basic tasks involved in publishing your first API.
