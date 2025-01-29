# License Enforcement

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-dd90f447-6cc1-4ec2-b73c-970080a5a9e8"/>
</head>

The License Enforcement feature allows users to enable or disable deployment locking when the account has met license usage count limit for performing the additional deployments. ONLY administrators possess the authority to manage these deployments, enabling/disabling them to either permit or block them by toggling the feature ON or OFF.

## Feature Overview

- **Default State (OFF)**
  - Additional deployments are permitted for both existing and new accounts.
  - You can still perform additional deployments up to five times (5x) the provisioned connections per connector class.
  - No further deployments are permitted once the limit of five times additional deployments is reached.
  
- **When Enabled (ON)** 
  - Deployments are restricted once the available connection count is reached.

## Overdeployed State
- If the available connections are utilized and one or more successful additional deployments are performed, the account enters an "Overdeployed" state.
- A banner appears on the 'Licensing' page to alert users of this state.

:::note

- You can refer to the [Licensing](./c-atm-License_management_7f3b0031-d80a-49a4-a744-e8878108cd38.md) page to get an exact count of the ‘available’ and ‘deployed’ connections.
- Audit log entries are captured when the feature is ON/OFF via UI and API.

:::

:::info

- For users with 'Licensing' privileges, when the License Enforcement feature is OFF and after exceeding the available connection limit, for every additional deployment performed from the ‘Process Canvas,’ ‘Packaged components,’ and ‘Deployments’ pages, the ‘Deployment Successful’ pop-ups are updated to display the number of exceeded connections.

- Users without 'Licensing' privileges cannot view the message with details about exceeded connections. They will only see the pop-up and its content after the deployments are successful.

:::

## Example 

Below table shows the calculation for the licenses and the deployed/available connections when the License Enforcement feature is ON/OFF:

| Toggle | Connector Class | Purchased | 5x | Deployed Connections | Available Connections | Allowed Additional Deployments |
|--------|-----------------|-----------|----|----------------------|-----------------------|--------------------------------|
| OFF    | Standard        | 5         | 25 | 5                    | 20                    | 20                             |
| ON     | Standard        | 5         | 5  | 5                    | 0                     | 0                              |

- When the feature is OFF, up to 25 connections can be deployed.
- When the feature is ON, deployments are blocked once the purchased connections (5 in this example) are fully utilized.

:::note
The calculation in the table is consistent across different connector classes and environments (Production and Test), based on the number of connections purchased for a specific connector class.
:::

