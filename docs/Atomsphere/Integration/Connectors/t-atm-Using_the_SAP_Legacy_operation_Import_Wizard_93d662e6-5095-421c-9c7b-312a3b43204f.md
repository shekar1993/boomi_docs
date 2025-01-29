# Importing with the SAP - legacy Import Wizard

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-93d662e6-5095-421c-9c7b-312a3b43204f"/>
</head>

By using the SAP Import Wizard, you define the web service object you are integrating based on the action you specified.

**Note:** If you did not use the the SAP - legacy connector previously, you cannot use this connector because it is no longer available. If you are using this connector, you can continue to do so. However, encourages you to take advantage of the new functionality provided by the SAP connector.

## Procedure

1.  Click the **Import** button.

2.  Choose the connection and Atom to connect to the SAP server and click **Next**.

    You must deploy An Atom before browsing the interfaces.

3.  After the tree loads, expand the **BAPI - SAP BAPIs** node to show the **Application Components**.

4.  To find the BAPI methods, open the **Application Components**, **Function Groups**, and **Business Objects**.

5.  Choose a BAPI or IDoc and click **Next**.

    This hierarchy mirrors the BAPI hierarchy displayed in SAP transaction *BAPI*. To appear in the hierarchy, you must assign a function to the business object and assign a component to the business object's Development Class.

6.  Review and click **Finish**.

    It generates the request and response profiles automatically.