# Loading SAP Java connector libraries into an Atom or Molecule

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ec6e3d6a-29d5-4d20-805e-7bab737ba640"/>
</head>


The SAP JCo V2 connector requires SAP Java Connector libraries to be loaded into the Atom/Molecule.

1.  Download the SAP Java Connector files from the SAP Support Portal \(either SAP JCO 3.0 or 3.1\) \([https://support.sap.com/en/product/connectors/jco.html](https://support.sap.com/en/product/connectors/jco.html)\). Download the SAP JCo ZIP file associated with your OS/Hardware combination which applies to your Atom. Refer to your SAP documentation or contact your SAP administrator to gain access to the SAP Support Portal with a valid S-user ID with the appropriate authorization to download the ZIP file.

2.  Copy the relevant SAP Java Connector files into the Atom installation using a Custom Library.

    1.  In your account, go to Setup \> Account Libraries.

    2.  Upload to Account Libraries. This includes SAP JCo jar file sapjco3.jar, sapidoc3.jar, and the relevant JDBC driver for the TID management table in the database.

    3.  To Receive IDocs from the SAP system in Listen operations, the SAP JCo V2 connector requires access to a database in which it will create a table to track SAP generated Transaction IDs \(TIDs\) that the connector receives and processes. To enable TID management, make sure the Atom can access a database using a JDBC driver.

    4.  Go to the **Build** tab and create a new Custom Library.

    5.  Select the Custom Library Type \> Connector, and select SAP JCo V2 as the connector type.

    6.  Add the JAR files which you have previously uploaded to this Custom Library and Save/Close.

    7.  Go to the **Deploy** tab and select **Custom Libraries** in the drop-down menu from the process which you have created.

    8.  Deploy the Custom Library to the Environment which contains your Atom/Molecule.

    9.  At the operating system level, move the specific files such as the DLL or .so files directly into the \[AtomRoot\]/userlib/officialboomi-X3979C-jcov2s-prod sub-directory. For example: sapjco3.dll \(Windows\) and libsapjco3.so \(Linux\)

    10. Restart the Atom.