import TrackedProperties from './_TrackedProperties.md'
import PartnerSupport from './_PartnerSupport.md'

# OANDA – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-52d61af2-81e7-4a66-b07a-ae4c4617b2c4"/>
</head>

<PartnerSupport />

The OANDA – Partner connector allows you to query OANDA’s daily exchange rate data through the OANDA Exchange Rates API.

:::info Important

As of the April 2021 release, the OANDA – Partner connector is no longer available for use by customers who have not previously used it. If you utilized this connector prior to the date, you can continue to do so.

:::

You can use this connector to integrate OANDA with SaaS-based applications such as Salesforce, Microsoft Dynamics, Workday, Oracle E-business Suite, and SAP. By integrating OANDA with your Enterprise resource planning \(ERP\) system, you can build sophisticated workflows to automate the data into your system and provide accurate and reliable foreign exchange rate data. Users can obtain daily average foreign exchange rates provided by OANDA for over 38,000 currency pairs, and over 200 currencies, commodities, and precious metals. You can also access exchange rates sourced from 25 central banks and historical currency data back to 1990.

The OANDA – Partner connector supports the Query action to retrieve exchange rate data through the OANDA Exchange Rates API and simplifies the implementation for users by handling details of the connection request headers, error handling and more.

:::caution

A partner provides the documentation for this connector. The last update to the documentation was in March 2018.

:::

## Connector configuration 

To configure the connector to query information from the OANDA API, set up two components:

-   OANDA – Partner connection
-   OANDA – Partner operation

This design provides reusable components for an implementation, which contain connection and operation settings such as Object, Action, and data definitions. After building your connection and operation, set up your connector within a process. When you configure this connector within your process, can map to and from virtually any system using the OANDA – Partner connection to query exchange rate data.

## Supported OANDA API 

The OANDA –Partner connector is designed to connect to the OANDA Exchange Rates API.

## Prerequisites 

To implement a connection to OANDA from :

-   Requires a functional API key.
-   Additional requirements, such as a sufficient Quote Limit, are needed for some operations.

:::note

Get your OANDA API key here with a [30-day trial](https://www.oanda.com/fx-for-business/free-trial?utm_source=dellboomi&utm_medium=documentation). For more information about the requirements, see the [OANDA Exchange Rates API developer documentation](http://developer.oanda.com/exchange-rates-api/).

:::

## Supported objects

The OANDA –Partner connector supports the following objects:

-   Currencies

-   Remaining Quotes

-   Rates

-   Rate \(XXX\)

<TrackedProperties />