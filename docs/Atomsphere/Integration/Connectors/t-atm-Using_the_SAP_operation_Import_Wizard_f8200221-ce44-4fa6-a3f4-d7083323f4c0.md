# Importing with the SAP Import Wizard 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f8200221-ce44-4fa6-a3f4-d7083323f4c0"/>
</head>


By using the SAP Import Wizard, you define the web service object you are integrating based on a specified action.

## Procedure

1.  Select a connector action:

    1.  **Get** — Set up a connector operation associated with a BAPI or RFM.

    2.  **Send** — Set up a connector operation to send IDocs to SAP.

    3.  **Listen** — Set up a connector operation to receive IDocs from SAP.

2.  Click the **Import** button.

3.  Choose the Atom and the SAP Connection component that connects to the SAP server instance.

    You must deploy an Atom before browsing the interfaces.

4.  Complete one of the following options that corresponds to the connector action selected in step 1.

5.  If you selected the **Get** action:

    1.  Select **Business Object** or **BAPI/RFM**.

    2.  If you selected **Business Object**, in the **Filter** field enter the Business Object. This is the Object Name as defined in the Business Object Repository \(BOR\). You can use wildcards.

        If you use the **Business Object** option and elect to use a wildcard in the filter, the performance associated with your BAPI retrieval can be impacted as all the released BAPIs for the associated objects is retrieved for preview and available for selection. If it returns multiple objects, you can expand the level associated with each object to view the available BAPIs.

    3.  If you selected **BAPI/RFM**, in the **Filter** field enter the **BAPI**, which is the BAPI or RFM name. This must be the exact name.

    4.  Click **Next**.

    5.  Review and click **Finish**.

        After completing the import of XML profiles and setting up the connector, your imported XML profiles appear on the **Options** tab.

    6.  Review the BOR documentation in SAP associated with the specific BAPI to see if it requires a *Commit Transaction* as part of the BAPI call. If required, turn on the **Commit Transaction?** check box on the **Options** tab.

6.  If you selected the **Send** action:

    1.  It sets the **Type** field to **IDoc**.

    2.  Specify the IDoc **Base Type** to import into the connector operation.

    3.  Specify the IDoc **Extension** to import into the connector operation.

    4.  Click **Next**.

    5.  Review and click **Finish**.

7.  If you selected the **Listen** action:

    1.  It sets the **Type** field to **IDoc**.

    2.  Specify the IDoc **Base Type** to import into the connector operation.

    3.  Specify the IDoc **Extension** to be imported into the connector operation.

    4.  Click **Next**.

    5.  Review and click **Finish**.

    6.  On the **Options** tab, specify the **Program Id** as set up in SAP in transaction SM59 as the Registered Server Program.

        Review your SAP ALE configuration for setup prerequisites on sending IDocs from SAP to create a Registered Server Program.

    The Listen operation must be the first step in your process.

8.  Click **Save**.