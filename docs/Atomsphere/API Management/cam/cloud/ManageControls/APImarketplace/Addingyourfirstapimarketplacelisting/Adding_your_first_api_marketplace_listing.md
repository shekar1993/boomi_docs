---
sidebar_position: 1
---

# Adding Your First API Marketplace Listing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c29b9b71-b9a9-41c2-86a3-da4bef162703"/>
</head>

Once you have created the listing, and put the IAM role/policies in place to enable API Management's management of your listing contracts, you can now proceed to associate your targeted API Management Package and Plan(s) as the asset being sold on AWS Marketplace. In order to create this linkage, you will need to provide some data to API Management on the API Marketplace page **(Design > API Marketplace)** so that API Management can properly provision and enforce the connections to the listing. 

When accessing the **API Marketplace** for the first time, the only option available is **Add your first listing**.

## Before you begin

- In the **API Plan Key Properties** page for your API Plan/Package, set **Self-service Key Provisioning** to Disabled (so that the plan is not visible in your Portal), and set the **Maximum Allowable Keys** setting.

- In the **API Plan Rate Limits** page for your API Plan/Package, the **Allow package keys to override throttle settings** should be **Enabled**. The **Rate Limits** page is reached by navigating to **Design > API Packages > *your package* > *your package plan* > Rate Limits**. 

## Procedure

To add an API Marketplace listing:

1. Click **Add your first listing**. 

2. In the AWS Listing Wizard window (1 of 2), enter the following information: 

   - Your **Amazon Resource Name (ARN)**: You can get the ARN of an RDS resource by using the AWS Management Console, AWS Command Line Interface (AWS CLI), or RDS API. For more information, see [ARN topic](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html). 

   - Your A**mazon Trust Relationship ID**: You can get the Trust Relationship ID by referring to the topic [*AWS Authentication and Access Control for CloudFront*](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/auth-and-access-control.html). 

   - Your **AWS product code**: AWS assigns this product code to your API AWS Marketplace listing. 

3. In the **Choose a package** drop-down list, select a API package that will be associated with the API listing, then click **Continue**. For more information about API Management Packages, see the [API Packages](../../../DesignControls/APIpackages/API_packages.md) topic. 

4. In the next **AWS Listing Wizard** window (2 of 2), you will see a summary of information inputted from the previous steps. Use the drop-down list to select the Plan that you want to list on AWS Marketplace, enter the **AWS Dimension Code** (received when creating a listing on AWS), then click + to add the plan. Repeat this step to add additional plans, as needed.

   :::note
   
   You can add more plans later from the Plans page of **API Marketplace**. For more information about API Management API Plans, see the [API Plans](../../../DesignControls/APIpackages/Creatingapiplans/Creating_api_plans.md) topic. 

   :::

5. Click **Save** to finish creating the AWS listing. The AWS listing and its details should now be visible in the **API Marketplace** overview page.

   :::note
   
   The AWS listing exists, but it not yet publishable. As a part of the go-live process, you are required to test your AWS listing before publishing it. For more information, see [Testing Subscriptions to your Plan](../Testing_subscriptions_to_your_plan.md). 

   :::
