---
sidebar_position: 3
---

# API Plan Designer

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-00e49c64-6920-4279-a6f9-c47200eb4c0c"/>
</head>

The **API Plan Designer** tab allows you to link the API definition, endpoint, and method to a plan. The API Plan Designer tab displays the available API definitions. You need to associate the endpoint definition and the method definition. After the association is established, you can set the rate limit and the response filter from the **Plan Contents** tab. 

In the following screenshot, the **0707R3Api** definition, the **End1** endpoint defined under this API definition, and NewPack method defined under the EP endpoint are selected. This selection means that the selected API, endpoint, and method can now be accessed by the developers who have access to the Plan **May12**. 

## To design a Plan

1. Select an API service from the **API Definitions** column. 

2. Click the arrow ![](../../../Images/navigation.jpg) to view the endpoints defined under that API Definition. 

3. Select the endpoints from the **Endpoint Definitions** column. 

4. Click the arrow ![](../../../Images/navigation.jpg) to view the methods defined under the **Method Definitions** column. 

5. Select the methods from the **Method Definitions** column. The selected service, endpoints, and methods are now assigned with the Plan. 

:::note 

- Click the ![](../../../Images/arrow.jpg) icon to view the endpoints or methods. 

- Click the ![](../../../Images/edit.jpg) icon to: 

  - Link or unlink an endpoint or method. To link or unlink an endpoint or method, click the icon, and then select **Link** or **Unlink**.

  - Allow or not allow an undefined method for an endpoint. To allow an undefined method for the endpoint, click the icon, and then select **Allow undefined methods** or **Don't allow undefined methods**.


:::

