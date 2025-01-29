# FHIR Client operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e34dbb17-4eaf-4c11-a003-d22ae75f52f7"/>
</head>

The FHIR client operation defines how you can interact with a healthcare server using the FHIR standard. The following operations are supported. 

* **Get Resource**
* **Create Resource**
* **Update Resource**
* **Delete Resource**
* **Advanced Query Resources**
* **Validate Resource**
* **Retrieve History**
* **Delete History**
* **Get Server Capabilities**
* **Bundles**

:::note Important

The FHIR Client connector supports versions **R3**, **R4**, and **R5** of the FHIR standard; the connector uses **R4** by default. 

The operation documentation below was written with version **R4** utilizing this HAPI server: `http://hapi.fhir.org/baseR4`. The availability of some object types, operations, and operation properties may differ between FHIR versions and servers. See the [HL7 FHIR Specification docs](http://hl7.org/fhir/) to learn more.

:::

### Common Operation object types

The FHIR Client connector operations utilize the following list of resources as **Object Types** for every operation except **Get Server Capabilities** and **Bundles**. This list of **Object Types** may vary depending on which FHIR server you define in the connector’s connection tab.

**Account**  
**ActivityDefinition**  
**AdverseEvent**  
**AllergyIntolerance**  
**Appointment**  
**AppointmentResponse**  
**AuditEvent**  
**Basic**  
**Binary**  
**BiologicallyDerivedProduct**  
**BodyStructure**  
**Bundle**  
**CapabilityStatement**  
**CarePlan**  
**CatalogEntry**  
**Chargeltem**  
**ChargeltemDefinition**  
**Claim**  
**ClaimResponse**  
**ClinicalImpression**  
**CodeSystem**  
**Communication**  
**CommunicationRequest**  
**CompartmentDefinition**  
**Composition**  
**ConceptMap**  
**Condition**  
**Consent**  
**Contract**  
**Coverage**  
**CoverageEligibilityRequest**  
**CoverageEligibilityResponse**  
**DetectedIssue**  
**Device**  
**DeviceDefinition**  
**DeviceMetric**  
**Device Request**  
**DeviceUseStatement**  
**DiagnosticReport**  
**DocumentManifest**  
**DocumentReference**  
**EffectEvidenceSynthesis**  
**Group**  
**GuidanceResponse**  
**HealthcareService**  
**ImagingStudy**  
**Immunization**  
**ImmunizationEvaluation**  
**ImmunizationRecommendation**  
**ImplementationGuide**  
**InsurancePlan**  
**Invoice**  
**Library**  
**Linkage**  
**List**  
**Location**  
**MedicinalProductInteraction**  
**MedicinalProductManufactured**  
**MedicinalProductPackaged**  
**MedicinalProductPharmaceutical**  
**MedicinalProductUndesirableEffect**  
**MessageDefinition**  
**MessageHeader**  
**MolecularSequence**  
**NamingSystem**  
**NutritionOrder**  
**Observation**  
**ObservationDefinition**  
**OperationDefinition**  
**OperationOutcome**  
**RelatedPerson**  
**RequestGroup**  
**ResearchDefinition**  
**ResearchElementDefinition**  
**ResearchStudy**  
**ResearchSubject**  
**RiskAssessment**  
**RiskEvidenceSynthesis**  
**Schedule**  
**SearchParameter**  
**ServiceRequest**  
**Slot**  
**Specimen**  
**SpecimenDefinition**  
**StructureDefinition**  
**StructureMap**  
**Subscription**  
**Substance**  
**SubstanceNucleicAcid**  
**SubstancePolymer**  
**SubstanceProtein**  
**SubstanceReferenceInformation**  
**SubstanceSourceMaterial**  
**SubstanceSpecification**  
**SupplyDelivery**  
**SupplyRequest**  
**Task**  
**TerminologyCapabilities**  
**TestReport**  
**TestScript**  
**ValueSet**  
**VerificationResult**  
**VisionPrescription**

## Get Resource operation

The **Get Resource** operation allows you to access a single/specific resource defined on a FHIR server. When importing the operation, you can choose which **FHIR Version** to use for the operation. 

You will be able to choose any of the defined resources in Common Operation Object Types that support the `read` interaction as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Get Resource operation properties 

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers**: Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

## Delete History operation

The **Delete History** operation allows you to delete historic versions of a resource on a FHIR server. 

When importing the operation, you can choose which **FHIR Version (R3, R4, R5)** to use for the operation. The **Operation Mode** indicates if the connector should delete a single version or all historic versions of a resource. You can use the **Filter** field to reduce the number of returned objects in your query with wildcard characters. 

You will be able to choose any of the defined resources in Common Operation Object Types that support the `delete-history` interaction as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Delete History operation properties 

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Tracking Direction** - The value for this operation is **Input Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

* **Entity ID** - Indicates the ID of the FHIR entity to be deleted.

* **Version ID** - Indicates the version of the FHIR entity to be deleted. This conditional field is displayed when you select **Single Version** as your **Operation Mode** while importing the operation.

## Retrieve History operation

The **Retrieve History** operation allows you to retrieve the historic versions of a resource on a FHIR server. 

When importing the operation, you can choose which **FHIR Version (R3, R4, R5)**  to use for the operation. The **Operation Mode** indicates if the connector should retrieve a **single version** or **all historic versions** of a resource. 

You will be able to choose any of the defined resources in Common Operation Object Types that support the `vread` and `history-instance` interactions as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Retrieve History operation properties 

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

* **Entity ID** - Indicates the ID of the FHIR entity from which to retrieve the history.

* **Version** **ID** - Indicates the version of the FHIR entity to be retrieved. This conditional field is displayed when you select **Single Version** as your **Operation Mode** while importing the operation.

## Delete Resource operation

The **Delete Resource** operation allows you to delete a resource stored on a FHIR server. 

When importing the operation, you can choose which **FHIR Version** to use for the operation. The **Operation Mode** indicates if the connector should perform a **standard delete**, or a **conditional delete** based on determined criteria. 

You can use the **Filter** field to reduce the number of returned objects in your query with wildcard characters. 

You will be able to choose any of the defined resources in Common Operation Object Types that support the ‘delete’ interaction (for **standard delete**) or the ‘delete-conditional-single’ interaction (for **conditional delete**)  as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Delete Resource operation properties 

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

* **Entity ID** - Indicates the ID of the FHIR entity to be deleted.

* **Delete Criteria** -  A conditional field displayed when you select **Conditional delete** as your **Operation Mode** while importing the operation. Enter key/value pairs for the conditions entities must meet to be deleted. This field cannot be blank when **Conditional delete** is selected.

## Create Resource operation

The **Create Resource** operation allows you to create a new resource on a FHIR server. 

When importing the operation, you can choose which **FHIR Version** to use for the operation. The **Operation Mode** indicates if the connector should perform a **standard** or a **conditional** creation based on determined criteria. 

You can use the **Filter** field to reduce the number of returned objects in your query with wildcard characters.

You will be able to choose any of the defined resources in Common Operation Object Types that support the `create` interaction (for **standard**) or the `conditional create` interaction (for **conditional**) as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Create Resource operation properties 

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Request Profile** - The JSON model of the entity to be created.

* **Tracking Direction** -  The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

* **Criteria** -  A conditional field displayed when you select **Conditional** as your **Operation Mode** while importing the operation. Enter key/value pairs for the criteria you want to be validated by the server before creating the entity. This field cannot be blank when **Conditional** is selected.

## Get Server Capabilities operation

The **Get Server Capabilities** operation allows you to return a JSON file with information about a given FHIR server. You can use the **Filter** field to reduce the number of returned objects in your query with wildcard characters.

When importing the operation, you can choose which **FHIR Version** to use for the operation.

### Get Server Capabilities object types 

* **CapabilityStatement** - A **CapabilityStatement** documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.

* **TerminologyCapabilities** - A **TerminologyCapabilities** resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.

### Get Server Capabilities operation properties

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

## Update Resource operation

The **Update Resource** operation allows you to update a resource stored on a FHIR server. 

When importing the operation, you can choose which **FHIR Version** to use for the operation. The **Operation Mode** indicates if the connector should perform a **standard** or a **conditional**  update based on determined criteria. 

You can use the **Filter** field to reduce the number of returned objects in your query with wildcard characters.

You will be able to choose any of the defined resources in Common Operation Object Types that support the `update` interaction (for **standard**) or the `conditional update` interaction (for **conditional**) as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Update Resource operation properties

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Request Profile** - The JSON model of the resource to be updated.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Optimistic Locking** - Indicates whether the connector will supply the `If-Match` header or not in the update request.

* **ETag** - A conditional field displayed when **Optimistic Locking** is selected. Indicates the ETag to provide as value for the **‘If-Match**’ header

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

* **Entity ID** - Indicates the ID of the FHIR entity to be updated. This importable field is displayed when you select **Standard** as your **Operation Mode** during import and cannot be left blank.

* **Criteria** -  A conditional field displayed when you select **Conditional** as your **Operation Mode** while importing the operation. Enter key/value pairs for the criteria you want to be validated by the server before updating the entity. This field cannot be blank when **Conditional** is selected.

## Validate Resource operation

The **Validate Resource** operation allows you to check if a given operation will be successful at changing an entity. 

When importing the operation, you can choose which **FHIR Version** to use for the operation. The **Operation Mode** indicates what action should be validated: **None, Create**, **Update**, or **Delete**. Selecting **None** will perform the most basic validation test. You can implement more advanced validation by using custom validation libraries within a data process step. See the [Working with custom libraries](https://help.boomi.com/docs/atomsphere/integration/process%20building/c-atm-working_with_custom_libraries_96f10864-334e-4eba-ac3f-f52b4e65fdb2/) topic to learn more.

You can use the Filter field to reduce the number of returned objects in your query with wildcard characters. 

You will be able to choose any of the defined resources in Common Operation Object Types that support the `validate` interaction as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Validate Resource operation properties

* **Profile** Indicates the profile URL the server should use to perform the validation.

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Request Profile** - The JSON model of the payload to be validated. It is generated for all operation modes, except for **Delete**.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

  * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.

  * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Error Severity Threshold** - The operation returns an application error if the response is successful and at least one issue is found with the indicated severity or higher. The default value is **Error**.

  * **Warning** 

  * **Error**

  * **Fatal**

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

* **Entity ID** - Indicates the ID of the FHIR entity that the validation will be performed against. This importable field is available for the **Update** and **Delete** operation modes.

## Bundles operation

The **Bundles** operation allows you to perform multiple FHIR operations in one HTTP request.

When importing the operation, you can choose which **FHIR Version** to use for the operation. The **Operation Mode** indicates if the actions should be performed in **Batch** or **Transaction** mode. The connector ignores failed operations and partially executes in **Batch** mode. In **Transaction** mode, if one operation fails, the execution is rolled back and the entire system state is unaffected. 

You must include **Resource Types** in the input profile. The resource names should be typed one by one, comma separated using Pascal Casing. Importing multiple or large object types may surpass the JSON node limit in Platform. 

### Bundles operation properties

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Request Profile** - The JSON model of all the resources indicated during browse time. The user is expected to include only one resource per input document, regardless of the profile containing all of them. The connector then joins all the input documents into a single bundle request and sends it to the server.

* **Tracking Direction** - Select the document tracking direction for the operation, either  **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting**. Start steps always track output documents regardless of your selection.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

  * If **you** clear the setting, the process stops and reports the error on the **Process Reporting** page.

  * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

## Advanced Query Resources operation

The **Advanced Query Resources** operation allows you to perform a query against a FHIR server. Pagination is supported.

When importing the operation, you can choose which **FHIR Version** to use for the operation. You can use the Filter field to reduce the number of returned objects in your query with wildcard characters.

You will be able to choose any of the defined resources in Common Operation Object Types that support the `search` interaction as your **Object Type**. To see what resources are supported by the server, check the server documentation, or see the [Server Capability Statement](https://www.hl7.org/fhir/capabilitystatement.html) topic in the HL7 FHIR documentation.

### Advanced Query Resources operation properties

* **Response Profile** - The profile is automatically generated according to the specification returned by the FHIR server based on the **Object Type** you selected during import. Currently, only JSON profiles are supported.

* **Tracking Direction** - The value for this operation is **Output Documents**.

* **Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

    * If you clear the setting, the process stops and reports the error on the **Process Reporting** page.  
    * If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

* **HTTP Method** - Indicates whether the operation should perform the search request as a GET or a POST. 

  * GET is public and will work for all servers.

  * POST is private, so it may not be supported by your server

* **Search by compartment** - Indicates whether the operation will restrict the search to a particular compartment or not. Server support is required.

* **Compartment Name** - **A** conditional field displayed when **Search by compartment** is selected. Indicates the name of the compartment where the search will be performed.

* **Compartment ID** - A conditional field displayed when **Search by compartment** is selected. Indicates the ID of the compartment where the search will be performed.

* **Page Size** - Indicates the number of results to request to the server per page. If no value is provided, the server will decide the page size. If the value is provided, it must be higher than 0\.

* **Maximum number of results** - Indicates the maximum number of results returned by the operation. If no value is provided, the operation returns all available entries. If the value is provided, it must be higher than 0\.

* **Search Parameters** - Enter key/values pairs to be used as search filters. 

* **Custom Headers** - Indicates a set of key/value pairs to be sent as custom headers in every request to the service.

## JSON Response Types 

Depending on the success of the operation, the connector will return the following types of output documents:

* A successful output document containing the response payload  
* An empty success without an output document  
* An application error containing the response payload

Sample Successful JSON Profile

````
\
{
  "resourceType": "OperationOutcome",
  "id": "allok",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>All OK</p>\n    </div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "text": "All OK"
      }
    }
  ]
}

````

## **Archiving tab**

See the topic [Connector operation’s Archiving tab](https://help.boomi.com/docs/Atomsphere/Integration/Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe) for more information.

## **Tracking tab**

See the topic [Connector operation’s Tracking tab](https://help.boomi.com/docs/Atomsphere/Integration/Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe) for more information.

## **Caching tab**

See the topic [Connector operation’s Caching tab](https://help.boomi.com/docs/Atomsphere/Integration/Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74) for more information.  
