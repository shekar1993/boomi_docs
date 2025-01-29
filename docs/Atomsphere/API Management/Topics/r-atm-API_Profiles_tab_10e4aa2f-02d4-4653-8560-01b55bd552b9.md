# API Service Profiles tab

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-10e4aa2f-02d4-4653-8560-01b55bd552b9"/>
</head>


The API Service **Profiles** tab is used to review JSON and XML profiles referenced in API endpoint definitions and resolve profile type conflicts.

![API Profiles tab containing sample profile information.](../Images/build-ps-api-profiles_7f98199b-8d91-4abc-a019-e2db9e0afff4.jpg)

## Objects list

Objects are categorized by profile type \(JSON or XML\). Objects with XML profiles are additionally categorized by namespace. Selecting an object populates the usage list to the right.

In the tree structure:

-   ![Profile type node.](../Images/main-ic-box-yellow-16_88f32def-be6c-47d6-aa43-f2aef572647e.jpg) represents a profile type node.

-   ![XML namespace node.](../Images/main-ic-box-blue-16_fafcab14-ca59-4937-b547-a4c8b9faa987.jpg) represents an XML namespace node.

-   ![Profile type conflict does not exist.](../Images/main-ic-sphere-green-shiny-16_2353f896-fb37-469e-a298-e0f86e86c240.jpg) represents an object for which a profile type conflict does not exist.

-   ![Profile type conflict exists.](../Images/main-ic-box-red-16_33f7bc2e-c20a-42cb-a7b8-f75822eee3d3.jpg) represents an object for which a profile type conflict exists. The object name is highlighted in red.


## Usage list

For the selected object, the profiles referenced in endpoint definitions are listed. For each listed profile, the manner in which it is referenced is listed as follows:

-   type of usage — INPUT or OUTPUT

-   resource name and route URL \(REST endpoints\)

-   operation name \(SOAP endpoints\)


For usage shown in black type, the profile is configured as an override. For usage shown in gray type, the profile is the default derived from the linked process.

An API Service component should not be deployed if it specifies objects for which a profile type conflict exists. A profile type conflict exists if multiple referenced XML profiles include the same type and namespace or if multiple referenced JSON profiles have the same root name. You can resolve a conflict by standardizing on one profile:

**Name**   
**Description**

**Standardize on this profile**   
Initiates a request to resolve a profile type conflict. In the confirmation dialog:

-   Click **OK** and then **Save** to update the endpoint definitions.

-   Click **Cancel** to cancel the request.