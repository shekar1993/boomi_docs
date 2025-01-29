---
sidebar_position: 2
---

# API Plan Contents

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cad6ecf9-a54b-4587-b654-58e6909648da"/>
</head>

The **Plan Content** page displays the API Definition, endpoint definitions, and the method definitions linked with the plan, for which you can set the rate limits and the response filters. This allows you to set the rate limits at the method level. After the response filter is selected, the content in the response is displayed accordingly. 

You can add the Plan contents from the [API Plan Designer](API_plan_designer.md) page. 

The following table describes the fields on the Plan page. 

|**Field** |**Description** |
| ------- | -------- |
|Name|Name of the API, endpoint, and method. |
|Rate Limits|Set the Rate limit parameters such as Throttle, quota and quota period for a method. |
|Response Filter |Select the Response filter to filter the content in the response. |
|Remove from Plan |<p>Removes the API, Endpoint, or Method from the plan. </p><p>- Removing the API will not allow the developers with keys to the plan to access API and the all its Endpoints and methods. </p><p>- Removing the Endpoint will not allow the developers with keys to the plan to access the Endpoints and all the methods in it. </p><p>- Removing the Method will not allow the developers with keys to the plan to access the method. </p>|

