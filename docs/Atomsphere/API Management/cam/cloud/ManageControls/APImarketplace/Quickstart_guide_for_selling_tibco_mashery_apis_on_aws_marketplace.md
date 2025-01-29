---
sidebar_position: 2
---

# Quickstart Guide for Selling API Management APIs on AWS Marketplace

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2fd2a59d-a901-45a1-a0ad-868fa2d9d220"/>
</head>

To sell your API Management APIs on AWS Marketplace: 

1. Define a API Management package and plan(s) that you want to sell. 

2. Define an AWS Marketplace Listing representing that package/plan. 

3. Run the [API Management Trust Cloud Formation](http://docs.mashery.com/tibco-mashery-aws-mp-trust-v5.0-rc.json) template (if first this is your first listing). 
   
   <!-- Comment from Deepak: These URLs work, but we need to evaluate and posisbly change them if they are also being hosted somewhere on Boomi. -->
   
4. Run the [API Management ProductCode Cloud Formation](http://docs.mashery.com/tibco-mashery-aws-mp-new-product-code-v5.0-rc.json) template.

5. Define a API Management **API Marketplace** Listing + Dimensions in API Management Control Center (uses outputs from Steps #2 and #3). 

6. Create test subscriptions in AWS Marketplace for each Dimension defined in your AWS Marketplace listing. 

7. Verify the subscriptions are confirmed (green checkmarks in the **Listings** page of **API Marketplace**). 

8. Verify all rate limits, throttles, quotas, etc. are aligned between the two (AWS Marketplace + API Management Plan). 

9. Click the **Publish Your Listing** button. 

For more detailed instructions, refer to the subsequent pages. 
