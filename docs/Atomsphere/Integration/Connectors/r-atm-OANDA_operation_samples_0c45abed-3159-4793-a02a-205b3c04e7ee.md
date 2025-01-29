# OANDA –Partner connector operation samples 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0c45abed-3159-4793-a02a-205b3c04e7ee"/>
</head>


The OANDA –Partner connector operation samples highlight the use of Remaining Quotes, Currencies, and Rates.

The specific Rate is similar to the more general Rates, except you do not need to set the base currency.

## Query Remaining Quotes 

Follow these steps to set up a simple Query Remaining Quotes operation.

1.  Create a process with the OANDA –Partner connector.
2.  Create the operation and use the **Import Wizard** on the **Operation** page to import the profile.
3.  In the **Import Wizard**, specify the Atom, Connection.
4.  Select the **Object Type** as Remaining Quotes.
5.  On the **Operation** page, add the filter flag to indicate if the step should continue if there is an error Remaining Quotes Query or not.
6.  In the process page, specify the filter parameters for the previous flag.

## Query Currencies 

Follow these steps to set up a simple Query Currencies operation.

1.  Create a process with the OANDA –Partner connector.
2.  Create the operation and use the **Import Wizard** on the Operation page to import the profile.
3.  In the **Import Wizard**, specify the Atom, Connection, and data set \(optional\). Then, select the **Object Type** as **Currencies**.
4.  On the **Operation** page, add the filter for the data set if necessary.
5.  In the process page, specify the parameters for the data set if you added the filter.

## Query Rates 

Follow these steps to set up a simple Query Rates operation.

1.  Create a process with the OANDA –Partner connector.
2.  Create the operation and use the **Import Wizard** on the **Operation** page to import the profile.
3.  In the **Import Wizard**, specify the Atom, the connection, and data set \(optional\). Then, select the **Object Type** as **Rates**.
4.  On the **Operation** page, add the filter for the base currency \(required\) and optionally for quotes or additional parameters such as the date.
5.  On the **Operation** page, select the data to return by the response \(if available\) by selecting the fields.
6.  On the **Process** page, specify the parameters for the added filter.