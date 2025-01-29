# Hypatos.ai - Partner changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bb9fe46f-ea73-4aac-bcbf-865d69995354"/>
</head>


## Changelog

**2024-08 (Version 13, Current)**

- Audience authorization parameter is no longer required to be passed as an Access Token Parameter when creating an OAuth2.0 connection.

- `X-Hy-Meta-Internal-Company_Id` parameter is no longer required to be
provided for the following connector operations:

  - `deleteApprover`
  - `deleteCompany`
  - `deleteCostCenter`
  - `deleteCustomer`
  - `deleteGLAccount`
  - `deleteInvoice`
  - `deletePurchaseOrder`
  - `deleteSupplier`
  - `insertApprover`
  - `insertCompany`
  - `insertCostCenter`
  - `insertCustomer`
  - `insertGLAccount`
  - `insertInvoice`
  - `insertPurchaseOrder`
  - `insertSupplier`
  - `uploadFile`

- The following connector operations have been added: 

  - `companiesGetById` - to be used for retrieving details of a Hypatos Studio company.
  - `companiesList` - to be used for listing companies configured in Hypatos Studio.
  - `projectsGetById` - to be used for retrieving details of a particular project in Hypatos Studio.
  - `schemasGetByProjectId` - to be used for retrieving the configured schema of a particular project in Hypatos Studio.
  - `projectsList` – to be used for retrieving details of Hypatos Studio projects that meet the provided search criteria.
  - `projectsCreate` – to be used for creating a project under a particular Hypatos Studio company.
  - `emailsContentGetByDocumentId` – to be used for retrieving the merged content of the email (email body + attachments) that was sent to Hypatos.

- The following connector operations have been modified:

  - Updated request model of `insertInvoice` operation so it supports additional accounting attributes and withholding tax information.
  - Updated request model of `insertPurchaseOrder` operation so it supports additional accounting attributes information.
  - Updated request model of `insertSupplier` operation so it supports default GL Account Code information.


**2023-11 (Version 4)**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).

**2023-09 (Version 4)**

Initial GA release of connector.