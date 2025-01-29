import PartnerSupport from './_PartnerSupport.md'

# Files.com - Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-233ee8d5-7738-4ed7-86a1-37c85563592c"/>
</head>

<PartnerSupport />

Files.com provides a cloud-based Managed File Transfer (MFT) automation platform. Over 6,000 companies trust Files.com to automate and secure their business-critical transfers.

We obsess about security, compliance, reliability, and performance so that your critical business processes work every time. Easily manage any transfer flow without writing scripts or code, and onboard workloads and partners effortlessly.

We support standard file transfer protocols, such as FTP, SFTP, and AS2, for communicating with external partners and we also provide native apps for high performance file transfers.

As a fully Cloud-Native SaaS solution, there are no servers for you to buy or maintain. There is no installation required, and high availability and redundancy are built in.

Out-of-the-box integrations include Microsoft \(Azure, SharePoint, OneDrive, Active Directory & Office\), AWS \(S3 & SNS\), Google \(Cloud & Drive\), Box, Dropbox, Zapier, and dozens of others. Developers can leverage our SDKs, API, and CLI App to build custom integrations.

## Benefits

Integrating Files.com with your business processes allows you to implement secure file transfers with your partners, applying data security and help you to meet regulatory compliance standards, such as SOC2, HIPAA, GDPR, and CCPA.

Files.com can help you implement data sovereignty. Choose where data resides, using any of Files.com’s seven geographic storage regions, or store data in your preferred storage solution using our pre-built integrations with Amazon S3, Microsoft Azure, Google Cloud, BackBlaze B2, Rackspace Cloud Storage, Wasabi Cloud Storage, Microsoft SharePoint, Box, Dropbox, Microsoft OneDrive, Google Drive, our on-premise Agent, and more.

Gain more engagement from your partners, customers, vendors, and suppliers by allowing them to connect with you using the standards and methods that they prefer.

Improve partner onboarding times and shorten the time taken to implement secure file transfers. The Files.com platform is always on, always available, and ready for use. As a SaaS solution, there’s no server or infrastructure setup time, allowing you to get your business partner connections up and running in less time.

Files.com provides web-based administration for easy-to-use management of your connections and integrations, as well as RESTful APIs for programmatic integration with your business systems.

Files.com stays up to date, performing continuous upgrades, and applying the latest security configurations, allowing you to free up your IT resources for other tasks.

## Connector configuration 

The Files.com connector step requires a connection, an action, and an operation to be specified for its use.

The connection defines the Files.com account which will perform the actions. It requires a Files.com API Key to authenticate and authorize the actions. Connections can be re-used in as many connector steps as needed.

The action defines the action to be performed on Files.com by the connector step. Available actions include the creation and management of files, folders, share links, users, and groups.

File-related actions allow you to list, download, upload, copy, move, and delete files on your Files.com site. You can download a file's contents into your Boomi process for further processing and routing. Data from your Boomi processes can be uploaded to your Files.com site for delivery to, or pickup by, your trading partners and users.

Folder-related actions allow you to list, create, copy, move, and delete folders and the
results can be used to further traverse your Files.com folder structure, to determine a
file to download, or to determine a target folder location for a file upload.

Share link-related actions allow you create and manage Share links. Share links provide secure downloads to recipients, can provide automated notifications of share link usage, and can provide tracking information.

User-related actions allow you to create, manage, and delete user accounts in your Files.com site.

Group-related actions allow you to create, manage, and delete user groups in your
Files.com site.

Each operation defines a specific configuration for the chosen action, allowing you to specify folder paths and file names for the operation. You can define as many operations as required. Operations can be re-used in as many connector steps as needed.

## Prerequisites

The Files.com connector requires an API Key, which represents the Files.com user account that will be performing the connector’s actions.

Ask your Files.com administrator to [provide an API Key](https://www.files.com/docs/features/api-keys).

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.