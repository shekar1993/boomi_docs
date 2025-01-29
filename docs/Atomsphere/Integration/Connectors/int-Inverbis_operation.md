# Inverbis Analytics - Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-784a911c-14ff-4b1f-ab7b-c56e23a63c8f"/>
</head>

The Inverbis Analytics — Partner operations defines how to interact with your Inverbis Analytics account. The operation represents a specific action (**Get**, **Register**) to be performed. Create a separate operation component for each action/object combination that your integration requires.

## Get

Get is an inbound action to obtain information from the specified element. The following operations are available: 

- **getUserOrganizations** - To retrieve user organizations. You must specify the following in the options tab:
  - Path tenant : To indicate in which tenant is the operation executed.
  - Query limit (optional): To indicate the page size for pagination
  -	Query onlyActive (optional): To choose whether include deleted organizations
  - Query search (optional): To filter by the organization name
  - Query shared (optional): To choose to search for owned or shared organizations.
  - Query start (optional): To indicate the page index for pagination

- **getProjectsByOrganization** - To get the projects available for the organization indicated. You must specify the following in the options tab:
  - Path tenant : To indicate in which tenant is the operation executed.
  - Query organizationUid: To indicate the organization to check.
  - Query limit (optional) : To indicate the page size for pagination
  - Query includeArchived (optional): To choose whether include archived projects
  - Query search (optional) : To filter by the organization name
  -	Query start (optional): To indicate the page index for pagination

-	**getDatasetByProject**:To get the datasets available for the project indicated. You must specify the following in the options tab:
	-	Path tenant : To indicate in which tenant is the operation executed.
	-	Query projectUid: To indicate the project to check.
	-	Query limit (optional) : To indicate the page size for pagination
	-	Query includeArchived (optional): To choose whether include archived datasets
	-	Query search (optional): To filter by the project name
	-	Query start (optional): To indicate the page index for pagination

  ## Register

Register is an outbound action to carry out the different steps required to upload a dataset to the platform. The following operations are available: 

- **registerNewDataset**: To register a new dataset, it receives as payload a JSON message with the following fields:
  -	description: To add a description to the dataset.
  -	name: To indicate the name that will be given to the new dataset.
  -	projectUid: To indicate the id of the project where the dataset will be stored.
  And the user must specify at the options tab:
  -	Path tenant : To indicate in which tenant is the operation executed.

- **generateUploadToken**: To generate an upload token to allow to update the dataset content. You must specify the following in the options tab:
  -	Path tenant : To indicate in which tenant is the operation executed.
  -	Path datasetUid: To indicate the dataset from which generate the token.

-	**uploadDataset**: To upload the dataset content to the Inverbis Analytics platform. You must specify the following in the options tab:
    -	Path tenant : To indicate in which tenant is the operation executed.
    -	Path datasetUid: To indicate the dataset from which generate the token.
    -	Path token: The token to allow the dataset upload
    -	Header fileName: The filename of the dataset file to upload. You must have a dataset prepared as a file with this filename to pass to the connector in this operation.

-	**DatasetConfigurationRegister**: To add a configuration to the dataset, it receives as payload a JSON message with the following fields:
    -	name: To add a name.
    -	activityColumn: To indicate the column of the activities
    -	startTimeColumn: To indicate the column of the start time.
    -	traceColumn: To indicate the column of the traces identification
    -	endTimeColumn: To indicate the column of the end time
    -	Columns: An array of dictionaries to indicate the configuration of each column. Each dictionary has:
        -	name: The name of the column
        -	type: The type of data
        -	format: The format of the data
        -	relevant: To indicate if it is a relevant attribute.

    You must specify the following in the options tab:
    -	Path datasetUid: To indicate the Id of the dataset.
    -	Path tenant : To indicate in which tenant is the operation executed.

-	**postFinishUpload**: To indicate that the dataset upload process is finished. You must specify the following in the options tab:
    -	Path datasetUid: To indicate the Id of the dataset.
    -	Path tenant : To indicate in which tenant is the operation executed.
