---
sidebar_position: 1
---

# API Marketplace

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a72a1354-5ffa-4d35-9402-53bdf73dec30"/>
</head>

After you build, test and deploy your API Management APIs, you can package them into a plan (dimension) and sell the plan as a Software as a Service (SaaS) product listing through an online store, such as AWS Marketplace. For subscribers of your API Management API product offering, the online store (AWS Marketplace) bills these customers directly, and credits your account.

In order for API Management to be able to manage your AWS Marketplace assets, you'll need to set up IAM roles, policies and relationships for API Management. The IAM role gives permissions for API Management to query for information about your AWS Marketplace assets; the IAM Trust Relationship with the API Management AWS account allows API Management's IAM role to assume your IAM role.

Once this is set up, the **API Marketplace** page (**Manage>API Marketplace**) allows you to configure your listing, which joins together Packages and Plans you create within API Management, along with the listing you have created on the AWS Marketplace.
