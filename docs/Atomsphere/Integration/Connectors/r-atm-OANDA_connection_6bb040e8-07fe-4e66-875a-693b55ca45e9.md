import TestConnection from './_TestCon.md'

# OANDA – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6bb040e8-07fe-4e66-875a-693b55ca45e9"/>
</head>


The OANDA – Partner connection represents a single connection to the OANDA API made with a specific API key.

## Connection tab 

**Base URL** - 
 The base URL used to query the exchange rate data through the OANDA API. By default, it populates the URL with the following:

`https://web-services.oanda.com/rates/api/v1/`

**API Key** - 
 The API Key to authenticate the connection. You can find your API Key by signing in to your account at [https://subscriptions.oanda.com/](https://subscriptions.oanda.com/pages/index.php) and reviewing the **OANDA API Key** field. If you need further assistance, contact the OANADA Customer Experience Team at `webservices@oanda.com`.

<TestConnection />