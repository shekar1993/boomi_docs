# Boomi Labs 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-14b7dba9-9fe4-4d92-8212-7ae8fd435b0f"/>
</head>

## Spaces

**Caveat:** This release launches the pilot phase for an installation scenario that features a single OAuth Connector (QuickBooks Online Connector), a single process, and a single environment. The upcoming release will expand to cover additional scenarios, incorporating different combinations of processes, connectors, and environments for single-multiple combination configurations.

**We added these features:**

* **OAuth 2.0 implementation**:  This release integrates OAuth 2.0 into Spaces, enabling you to generate access tokens directly within the Spaces UI while configuring extensions on an integration pack. The enhancement facilitates seamless integration with third-party identity providers to authenticate the QuickBooks Online Connector when accessing cloud-based services. (SPACES-498)

  * Client secret encryption: You can now secure client secrets by clicking the **Encrypt Client Secret** button. After encryption, the button changes to **Reset Client Secret**. (SPACES-725) 

  * Connection configuration parameters: The connection configuration includes tables for both authorization parameters and access token parameters, featuring columns for key, value, and action (with a delete option). (SPACES-721, SPACES-761)
  
  * Authorization token generation: You can now generate an authorization token by clicking the new **Generate Token** button for connections associated with OAuth. (SPACES-591, SPACES-605). After generating a token, the button updates to **Re-Generate Token**, allowing you to regenerate the token as needed. (SPACES-722 , SPACES-764)

      :::note

      The **Generate Token** button is implemented exclusively for QuickBooks Online connections. Though the button will be visible in all connectors with OAuth, its functionality is currently implemented in QuickBooks.

      :::

  * Guided token generation process: You now receive step-by-step pop-up messages guiding them through the token generation process. (SPACES-707, SPACES-499)

  * Token generation status messages: The system displays a success or failure message at the end of the token generation process.  (SPACES-672)

* **Scheduler enhancements:** The process scheduler now includes the following enhancements: 

  * Minute - The minute option with a start time and end time that allows a time range from 00 to 59 minutes. Additionally, the scheduler includes a minute interval component for the process to run ranging from 1 to 59. (SPACES-684)

  * Hour - The hour option with a start time and end time that allows a time range from 00 to 23 hours. Additionally, the scheduler includes an hour interval component for the process to run ranging from 1 to 23.  (SPACES-685)

  * Day - The day option to select from the schedule type drop-down. (SPACES-745)

* **Tile view option:** Introduced a tile view option for Spaces within the Spaces UI. Admins can now switch between list and tile views using the toggle button in the top right corner of the listing section, enhancing navigation and usability. (SPACES-356)

## Submissions

**We added these features:**

For Partners:

* The Submissions user interface now features a card layout with pagination for viewing submissions. This enhancement enables partners to navigate and review submissions efficiently. (UNI-4316)

* We introduced a **Search** button that allows partners to search submissions across all the tabs and states of submissions. This improvement helps partners to easily locate the required submissions, streamlining their workflow and improving efficiency in managing submissions. (UNI-4000)

* Partners can now view the data of published submissions to gain insights into their submission history. By clicking the **Details** button on the Published Submissions cards, partners are redirected to view the approved information for each submission (UNI-4405). Partners can also check the notes on published submissions to remain informed about collaboration history. Clicking the **View** button on the published submission cards takes partners to a read-only view of the specific submission, including access to associated notes. (UNI-4424)

* We added a **Support** page in the process to help partners provide support documents for their recipes. This page prompts partners to download and complete a required support form, which they can then upload or link using a URL or file upload radio button. UNI-3798, (UNI-4091)

* A new **Delete** icon is available in the card view for each submission, enabling partners to delete draft submissions directly from the dashboard. This feature helps maintain a clutter-free workspace while managing submissions efficiently. Partners will receive notifications for any errors that occur during the deletion process. (UNI-4430, UNI-4429, UNI-4400)
