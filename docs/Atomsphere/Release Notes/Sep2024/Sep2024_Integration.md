# Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-965dac56-8d9d-4c2a-82eb-86f82c8dd3ef"/>
</head>

**We added these features:**

:::info

As part of an ongoing effort to simplify Boomi's terminology, shapes are renamed to steps. For example, the Start shape is now the Start step.

:::

- License Enforcement is a new account feature added to the Features page that is accessible to account administrators. It can also be enabled/disabled via UI or the Account Features API. By default, this feature is OFF. 

  - When the feature is ‘OFF/false,’ it disables deployment locking when the account has met the license usage count limit for performing the additional deployments.

  - When the feature is ‘ON/true,’ it enables deployment locking when the account has met the license usage count.
 
  (INT-12170, INT-12178)

- When the License Enforcement feature is OFF and:
  - If you have reached the available connection license count, you can perform additional deployments for 5x times the provisioned connections for a specific connector class.
  - If you have completed 5x additional deployments and try to perform additional deployments again, an error message is displayed on the UI and the API response. 
  (INT-12226)

- When the License Enforcement feature is OFF, the ‘Available’ column in the Licensing page is marked in red as -1, -2, -3, etc., according to the number of additional deployments performed for the respective connector class. (INT-12224)

- When the License Enforcement feature is OFF for users with 'Licensing' privileges, after exceeding the available connection limit, each additional deployment made from the 'Process Canvas,' 'Packaged Components,' or 'Deployments' pages display the enhanced or updated 'Deployment Successful' message, with the number of exceeded connections.'.(INT-12205)

- For users with ‘Licensing’ privilege, a new `<message>` tag is returned in the response of the create Deployed Package object API and Deployment API to notify the number of connections exceeded after performing successful additional deployments. (INT-12802)

- Audit log entries are captured when the License Enforcement feature is ON/OFF via UI and API. If there are deployment failures, they are also captured. (INT-12972)

- When the Licensing Enforcement feature is OFF and the connection usage limit exceeds the available limit for at least one of the connector classes, a warning is displayed at the top of your account's ‘Licensing’ page. (INT-12188)

- When the account has reached the connection license usage count, deployments are allowed or blocked using the License Enforcement toggle ON/OFF button. (INT-12247)

- A new attribute, `overDeployed` is added to the `account object` API to notify if the account has performed any additional deployments or not after exceeding the connection licenses usage count. (INT-12227)

:::note

Branch and Merge is currently being rolled out in phases and will be made available to all users by the end of the year.

:::

- You can create, manage, and merge development branches in the Boomi Enterprise Platform. Create branches and merge requests from the Build canvas or Branch Management. You can also create branches from specific versions of packaged components. (INT-12585)

  To learn more about this feature, refer to [Parallel Development with Branch and Merge](../../Integration/Process%20building/int-Branch_merge_overview.md), [Creating branches](../../Integration/Process%20building/int-Creating_branches.md), [Merging branches](../../Integration/Process%20building/int-Merging_branches.md), and [Branch and Merge FAQ](../../Integration/Process%20building/int-Branch_and_merge_FAQ.md).

- You can create and merge branches with the Branch object and Merge Request object. Use the Branch object to create, update, or delete branches and the Merge Request object to merge them. (INT-12596)

  To learn more about this feature, refer to [Branch object](https://developer.boomi.com/api/platformapi#tag/Branch) and [Merge Request object](https://developer.boomi.com/api/platformapi#tag/MergeRequest).

- A component’s revision history is now specific to your current working branch and can trace back to the first revision from the current version on your branch. (INT-12595)

  To learn more about this feature, refer to [Viewing a Component's Revision History](../../Integration/Process%20building/r-atm-Components_Revision_History_dialog_23affb25-b8a8-4d5c-aa4e-99db5e3d65ed.md).

- You can use the Integration Pack Instance API Query operation to retrieve the details of the processes associated with the single or multi-install integration pack(s) instance. (INT-12494)

  :::note
  
  Subsequent to the September 2024 Runtime release, this feature for the September platform release is postponed and will be rescheduled.
  
  :::

**We fixed these issues:**

- A null pointer exception no longer occurs if you add the Notify and Program Command steps to the process canvas using the plus icon. (INT-11508)

- Incorrect object mapping caused a parsing error with Atomsphere APIs yaml (`openapi.yaml`). (INT-10881)
