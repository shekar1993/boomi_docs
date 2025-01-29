---
sidebar_position: 3
---

# Creating Filters

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8605a379-0bb1-4c23-b5ef-ba86c26f9baa"/>
</head>

Filters are created on the **Response Filter** page. The method to which you want to add a filter must have an associated sample response schema setup. The schema can be added from the **Definitions** tab.

## To create a filter

1. Click **New Filter**. 

2. Complete the following fields: 

   |**Field**|**Description**|
   | ------ |---- |
   |Name|Filter name. |
   |Notes|Filter purpose and description. |

3. Select the API service from the **Service** drop-down. 

4. Select the endpoint from the **Endpoint** drop-down. 

5. Select the method from the **Method** drop-down. 

6. Select the **JSON** or the **XML** tab to view the respective schema. If the selected method does not have one of those response types defined in its sample schema definition, then the display will be empty. 

7. Select the elements in the left panel to exclude them from the response. 

   :::note
   
   The excluded elements are removed from the Filtered Response panel. This panel displays a preview of how the responses will look to the developers making a call to this particular method under a Plan to which this filter is applied. 

   :::

   :::note
   
   The response filter does not handle elements with namespace prefix. So, remove namespace prefixes from the elements in the sample response xml. 

   For example, a sample response XML would look like the following: 

   ```xml
   <table>
   <tr>
   <td>Organization</td>
   <td>Employee</td>
   </tr>
   </table>
   ```

8. Click **Save**. 

## Cloning Filters

Cloning a filter creates a copy of that filter. Both the filter criteria and the method associated with the filter are copied in the cloned filter. 

**To clone a filter:**

1. Click an existing filter.

2. Click **Clone**. 

A copy of the filter gets created and saved with the following name format - **Copy of (filter name)**.

## Testing Responses

A response can be tested while creating a new filter. While testing the response, the elements in the **Filter Criteria** do not change, only the filtered response gets updated. You can enter different sample responses in the **Static Response** field and preview the filtered response. 

**To test a response:**

1. On the filter details page, click **Static Test Response**. The **Static Response** dialog box is displayed.

2. Enter the response that you want to test. 

3. Click **Update**. 
