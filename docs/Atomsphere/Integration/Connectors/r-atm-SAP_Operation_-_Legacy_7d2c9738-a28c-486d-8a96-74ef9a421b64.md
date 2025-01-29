# SAP operation – legacy 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7d2c9738-a28c-486d-8a96-74ef9a421b64"/>
</head>


The SAP – legacy operation defines how to interact with the SAP application, specifically which remote function module \(RFM\), BAPI, or IDoc to invoke.

**Note:** The SAP – legacy connector is no longer available for use by customers who have not previously used it. If you are using this connector, you can continue to do so. However, you are encouraged to take advantage of the new functionality provided by the SAP connector.

Use the Import Wizard to browse the BAPIs available in your system's Business Object Repository by specific object, or by specifying the specific RFM or BAPI to use. The wizard automatically generates the request and response XML profiles for the function or IDoc, representing the input and output parameters for the function call. Create a separate operation for each RFM, BAPI or IDoc call required for your integration.

## Profiles tab 

Use the SAP Legacy Operation's Import Wizard to select the object with which you want to integrate. The wizard automatically generates the request and response XML profiles.

  
 

**Business Object Name**    
 Name of the business object including hierarchy path.

**Function Name**    
 Name of the RFC, BAPI, or IDoc Base Type.

**Request Profile**    
 The auto-generated request XML Profile.

**Response Profile**    
  The auto-generated response XML Profile.

## Options tab 

  
 

**IDoc Extension Type**    
  Name of IDoc Extension Type if applicable.

**Is IDocument?**    
  Checked if the imported object is an IDoc.

**Expand IDocument?**    
 If checked, the IDoc Segment field is expanded in the request/response Profiles.

**Trace?**    
 If checked, each SAP call will generate a trace log written to the `..\<atom_installation_directory>\bin` directory.

**Commit Transaction?**    
  If checked, a BAPI\_TRANSACTION\_COMMIT is called after a successful BAPI invocation. This is required for some transactional BAPIs such as the Sales Order Create BAPI.