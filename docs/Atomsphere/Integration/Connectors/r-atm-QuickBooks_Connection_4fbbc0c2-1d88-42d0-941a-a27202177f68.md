# QuickBooks connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4fbbc0c2-1d88-42d0-941a-a27202177f68"/>
</head>


The QuickBooks connection contains details about the physical location of the QuickBooks company data file or online account.

To configure the QuickBooks connection, you must have administrator rights to the QuickBooks Desktop file or Online account. If you have multiple company files to integrate, you need a separate connection for each company.

## Settings tab 

**QuickBooks Edition** - 
Choose the type of edition to connect to:

 -   Local QuickBooks Desktop Edition — If you are using this edition, see the topic Authorizing Boomi Integration to connect to the Desktop edition.

 -   QuickBooks Online Edition — If you are using this edition, see the topic Generating an Application Connection Ticket.

 -   QuickBooks Online REST API 2013 — If you are using this edition, see the topics Authorizing Boomi Integration with QuickBooks and Adding a QuickBooks Online REST API connection.


**Application Name** \(Desktop\)  
  Used by QuickBooks to identify the client attempting to connect — that is, Boomi Integration. If you do not specify the application, QuickBooks adds one at run-time.

**Company File Name \(Full Path\)** \(Desktop\)  
The full path and name of the company file \(for example, C:\\Program Files\\Intuit\\My Company File.QBW\). You can easily find the path from within QuickBooks. Open a company file, press **F2**, then copy and paste the entire value from **Company File** \> **Location**.

 If not set, the connector attempts to connect to the *Open Session*. If QuickBooks is open, the connector connects to the company file with which you are working. If QuickBooks is not open, you get a connection error.

**File Mode** \(Desktop\)    
 Sets the way Boomi Integration opens the company file. Select the same mode that your QuickBooks client uses:

 -   Single-User Mode

 -   Multi-User Mode

 -   Auto Detect \(recommended\)


 The following table provides information about file modes:

 | Who started QuickBooks   | Mode        | Who can obtain access                                                                                          |
|--------------------------|-------------|----------------------------------------------------------------------------------------------------------------|
| Integrated Application   | Single-user | All other integrated applications = access                                                                      |
| Integrated Application   | Multi-user  | QuickBooks users on same machine = no access<br />All other integrated applications = access<br />QuickBooks users on other machines = access |
| QuickBooks User          | Single-user | QuickBooks user signed in. Only one integrated application = access                                            |
| QuickBooks User          | Multi-user  | QuickBooks users = access<br />Integrated applications = access                                                  |


**Application Connection Ticket** \(Online\)  
  QuickBooks generates an authentication key to permit Boomi Integration to access your account. Click **Get Connection Ticket**. See the instructions for generating the ticket.

**Consumer Key** \(Online REST API\)  
  A value used by the consumer to identify yourself to Intuit. Obtain this key from your Intuit developer account on the Intuit Partner Platform site.

**Consumer Secret** \(Online REST API\)  
 A secret used by the consumer to establish ownership of the consumer key. Obtain this secret from your Intuit developer account on the Intuit Partner Platform site.

**Generate** \(Online REST API\)  
 Used to generate an access token, token secret, and token expiration date. The **Generate OAuth Access Tokens** dialog opens with the following fields:

 -   **Link** — A link to a page from Intuit where you can provide sign-in credentials.

 -   **PIN** — A field to enter the PIN from Intuit.


**Access Token** \(Online REST API\)  
 A value used by the consumer to gain access to the protected resources on behalf of the user instead of using the user's Intuit credentials.

**Token Secret** \(Online REST API\)  
  A secret used by the consumer to establish ownership of a given token.

**Token Expiration Date** \(Online REST API\)  
  The expiration date for the access token.

**Company ID** \(Online REST API\)  
Your QuickBooks Online company ID. Intuit assigns the ID when you get your PIN \(sometimes called the Realm ID\).