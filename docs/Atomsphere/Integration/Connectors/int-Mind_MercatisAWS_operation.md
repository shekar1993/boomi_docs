import OperationEnd from './_operationEnd.md'
import ReturnErrRes from './_ReturnResponse.md'
import TrackingDir from './_TrackingDirection.md'

# Mind-Mercatis AWS - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3bec1ddb-2cde-43de-b571-aefee83b1384"/>
</head>

Mind-Mercatis AWS – Partner Operation defines how to call most of the Amazon APIs in order to perform many actions (eg. automate VMs provisioning, query services status, etc.)

The Mind-Mercatis AWS – Partner operation supports the following actions:
* **Execute Amazon AWS Command** — Send a request to an AWS Service to elaborate the response.

## Options tab

Click **Import Operation**, then use the Import wizard to select the Service to integrate. A selection window will appear with the following fields:
* **Atom** (required): Select the Atom/Molecule
* **Connection** (required): Select the Mind-Mercatis AWS – Partner Connector component to be used
* **Service** (required): Select a service from the API list (e.g. EC2, RDS, Managed Blockchain, etc...)
* **Path** (optional): Some AWS services will require to specify a path with context information (usually REST-style). This parameter can be overridden with a Connector’s Document Property (e.g. via a Process Property step).
* **Filter** (optional): The number of returned objects can be reduced by using filters with wildcard characters (* or ?).

The next step is selecting the **Object Type**:
* **Object Type** (required): Filter and select an Object Type to import the appropriate request and response profiles. See the AWS service API documentation for further details https://docs.aws.amazon.com/.

After completing the **Import Operation** wizard the Operation is created. The only non read-only field is:

<ReturnErrRes />

## Execute Amazon AWS Command operation
Execute retrieves an object from an action. Before you begin, verify that the Access Keys user has the correct read permissions to access the objects. Also, check the syntax of the request and its required parameters. Otherwise, an error will be thrown.

This operation calls an AWS API and retrieves the API response. Parameters depend on the API which you want to call. Some AWS APIs require a JSON as the request body (e.g. Polly). Other APIs require parameters on the URL (e.g. EC2).

### APIs requiring JSON as the request body
See the respective AWS service API documentation for further details https://docs.aws.amazon.com/.

### APIs requiring parameters on the URL
Some AWS APIs require parameters on the URL, while Boomi thinks in terms of documents. The Mind-Mercatis AWS connector has been designed to use JSON as input format, using the following notation.

**Plain JSON**
Use the EC2 service to start a virtual machine.

According to the [EC2 StartInstances documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html), the URL should include the following parameter:

`InstanceId.1=your-instance-id`

This translates to sending a JSON document as input, such as:

```
{ 
"InstanceId.1": i-abcdefgh123456789"
}
```

**JSON with arrays**
Use the EC2 service to start two virtual machines.

According to the [EC2 StartInstances documentation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html), the URL should include the following parameters:
`InstanceId.1=your-instance-id1`
`InstanceId.2=your-instance-id2`

This translates to sending a JSON document as input, such as:

```
{ 
"InstanceId": [        	
"i-abcdefgh123456789",           	
"i-2bcdefgh123456789"
]
}
``` 

As an alternative, the following format is also supported:
```
{
"InstanceId.1":"i-abcdefgh123456789",
"InstanceId.2":"i-2bcdefgh123456789"
}
```

<OperationEnd />