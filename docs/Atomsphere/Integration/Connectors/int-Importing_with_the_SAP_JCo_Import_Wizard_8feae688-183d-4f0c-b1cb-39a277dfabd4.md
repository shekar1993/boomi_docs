# Importing with the SAP JCo V2 Import Wizard

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8feae688-183d-4f0c-b1cb-39a277dfabd4"/>
</head>


By using the SAP JCo V2 Import Wizard, you define the web service object you are integrating based on the specified action.

## Procedure

1.  Select a connector action:

    1.  **Execute** — Set up a connector operation to execute a BAPI or RFM where the connector makes a request and the SAP application responds with the data from the selected SAP application.

    2.  **Send** — Set up a connector operation to send IDocs to SAP.

    3.  **Listen** — Set up a connector operation to receive IDocs from SAP.

2.  Click the **Import** button.

3.  Choose the Atom and the SAP connection that connects to the SAP server instance.

    An Atom/Molecule must meet the SAP JCo library prerequisites to establish an RFC connection to SAP.

4.  Complete one of the following options corresponding to the connector action selected in step 1.

5.  If you selected the **Execute** action:

    1.  Select **Function Type** as **Business Object** or **BAPI/RFM**.

        If **Business Object** is selected, enter the value of the Business Object in the **Function Filter** field. This is the Object Name as defined in the Business Object Repository \(BOR\). If a wildcard is entered in the **Function Filter** field, all the released BAPIs for the associated object are retrieved for preview and available for selection as the Object Type. If you select all Objects using wildcard \(\*\), the connector only provides the first 500 BAPI entries as option.

        If **BAPI/RFM** is selected, enter the exact name of the BAPI or RFM in the **Function Filter** field. There is no option listed to select as Object Type, except the name of the BAPI or RFM is provided. If an invalid BAPI name is entered, an error occurs immediately after clicking **Next**.

    2.  Click **Next**.

    3.  Review the Object Type \(if **Business Object** is selected\), the request and response profiles created, and click **Finish**.

        Once the import of the XML profiles and the setup of the connector operation has completed, your imported XML profiles are populated in the **Options** tab.

    4.  Review SAP's BOR documentation associated with the specific BAPI to see if it requires a "Commit Transaction" as part of the BAPI call. If required, select the **Commit Transaction?** check box on the **Options** tab.

6.  If you selected the **Send** action:

    1.  Select **Function Type** as **IDoc**.

    2.  Specify the IDoc **Base Type** to be imported into the connector operation. If valid, it is displayed as a selectable Object Type. If not valid, an error occurs and you cannot complete the import.

    3.  Optionally specify the IDoc **Extension**, **Segment Release**, and **Application Release** to be imported into the connector operation. If an invalid IDoc Base Type/Extension/Segment Release /Application Release is entered, an error occurs after clicking **Next**.

    4.  Click **Next**.

    5.  Review the IDoc selected, the response profile is created, and click **Finish**.

        Once the import of the XML profiles and the setup of the connector operation has completed, your imported XML profiles are populated in the **Options** tab. When sending multiple IDocs in a batch, to return a single transaction ID as a consolidated operation output for all the IDocs sent, use the **Consolidate Outbound Documents?** option.

7.  If you selected the **Listen** action:

    1.  Select **Function Type** as **IDoc**.

    2.  Specify the IDoc **Base Type** to be imported into the connector operation. If valid, it is displayed as a selectable Object Type. If not valid, an error occurs and you cannot complete the import.

    3.  Optionally specify the IDoc **Extension**, **Segment Release**, and **Application Release** to be imported into the connector operation. If an invalid IDoc Base Type/Extension/Segment Release /Application Release is entered, an error occurs immediately after clicking **Next**.

    4.  Specify the **Program ID** as set up in the SAP system. This ID can also be entered directly in the **Program ID** field in the **Options** tab after import.

    5.  Click **Next**.

    6.  Review the Object Type selected, the request and response profiles created, and click **Finish**.

        Once the import of the XML profiles and the setup of the connector operation has completed, your imported XML profiles are populated in the **Options** tab.

    7.  If not specified, specify the **Program Id** as set up in SAP in transaction SM59 as the Registered Server Program in the Options tab.

        One IDoc Listener can handle one or more IDoc Type. Although the Listen operation is associated with an IDoc Type, this information is not used by the IDoc listener. To determine the appropriate IDoc profile to be used by the listener, you should inspect the Tracked Properties IDoc Type and use it to determine the XML request profile. You can create additional IDoc types using either Listen or Send operations.

8.  Click **Save**.