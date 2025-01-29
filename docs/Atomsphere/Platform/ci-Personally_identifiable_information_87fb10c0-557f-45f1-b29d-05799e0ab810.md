# Personally identifiable information (PII)

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-87fb10c0-557f-45f1-b29d-05799e0ab810"/>
</head>

Personally identifiable information (PII) is any data that can be used to identify a specific individual. Social security numbers, email addresses, and phone numbers are commonly considered PII. As technology expands, PII can also include IP addresses, login IDs, and geographical locations.

## Challenge

To keep pace with business demand, the number of business applications that organizations connect to have increased exponentially with data being shared between the applications. It is becoming increasingly challenging to keep track of all these data movements between applications, especially when it is exchanged across organization boundaries and/or with third parties. A data movement may go unnoticed from a data security perspective. As privacy laws have evolved, these data movements can cause difficulties and complications for the business if/where you cannot keep track of the data.

## Solution

Boomi has a feature, working in tandem with our built-in data intelligence and machine learning, providing valuable insights into potential personally identifiable information (PII) within a Boomi account. The benefits of this solution are:

- Ability to identify and classify potential PII within the user-developed integration solution.

- Find and provide insights across all user-developed integration solutions handling potential PII. You can choose to investigate the details of what Boomi is detecting.

- Ability to track the movement of potentially sensitive PII between applications and across geographical boundaries.

  :::caution

  Tracking the movement of potentially sensitive PII is not available in Early Access.

  :::

Our intelligence will identify potential PII based on the names of the attributes discovered in the profiles and maps, and not on the actual data values. For example, if you decide to store a social security number in the person number field, our intelligence cannot identify it as PII.

## Capabilities

This product offering is available as the [Get Potential Privacy Data By Account API](https://help.boomi.com/bundle/atomsphere_platform/page/ci-Get_potential_privacy_data_by_account_api.html) in Integration, enabling you to provide the data into data visualization tools and create valuable dashboards. The accompanying Flow-based solution demonstrates the API usage and how it can be utilized to create dashboards.

The initial capabilities focus on the following:

- PII identification: Identify business applications (connected to Integration) containing potential PII.
- PII classification: Tag and classify potential PII for both potential PII identification and potential PII movement to audit and quickly assess the impact of a data breach from an application.

If the field names, for example, indicate that there is PII, Boomi can help you to identify and classify that. However, if PII is not revealed by the field name, Boomi does not guarantee the lack of PII inside your system. Boomi does not read exchanged data to know what each data stream says.

## Privacy and personal data

The [Get Potential Privacy Data By Account API](./ci-Get_potential_privacy_data_by_account_api_4a911c15-44c4-4646-8b0b-170667c47973.md) uses Artificial Intelligence (AI) and Machine Learning (ML) models to identify, classify, and track potential PII within connected applications/data objects and surfaces it for consumption by data visualization applications. Security is very important to Boomi, and it is critical to our business, as we know it is critical to yours. Boomi takes pride in securing customer data and takes stringent security measures to help protect the information. Boomi ensures customer data is only viewable by authorized personnel in the customer organization.

Contextual information is provided in terms of the processes defined in Integration. Doing so helps determine why certain potential PII is moved from one application to the other. The API gathers the recommendation based on the integration metadata captured within Integration. Customer data is not captured or consumed by the API.
