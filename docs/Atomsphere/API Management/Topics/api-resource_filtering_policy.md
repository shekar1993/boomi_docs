# Resource Filtering Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6a9175c1-5503-4556-a410-e88aa6c0b0b7"/>
</head>

The Resource Filtering policy allows you to control access to a specific REST resource.

This policy is used to limit subscriber access to specific resources only.

A typical usage would be to allow access to all paths `(/**)` but in read-only mode (`GET` method).


    :::note

    You can’t apply the allow list and deny list to the same resource. The allow list takes precedence over the deny list.

    :::


## Timing

| On Request | On Response| 
|---|---|
|X||

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`whitelist`|no|List of allowed resources.|array of resources||
|`blacklist`|no|List of restricted resources.|array of resources||

A resource is defined as follows:

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`pattern`|yes|Ant-style path patterns [(Apache Ant)](https://ant.apache.org/).|string||
|`methods`|no|List of HTTP methods for which filter is applied.|array of HTTP methods|All HTTP methods|

## Example


``` json
"resource-filtering" : {
"whitelist":[
 {
 "pattern":"/**",
 "methods": ["GET"]
 }
], 

"blacklist": [
    {
      "pattern": "",
      "methods": ["POST"]
    }
  ]
}
```


**Ant style path pattern**

URL mapping matches URLs using the following rules:

- `?` matches one character

- `*` matches zero or more characters

- `**` matches zero or more directories in a path


## Errors

HTTP status codes

|Code|Message|
|---|---|
|`403`| Access to the resource is forbidden according to resource-filtering rules.|
|`405`| Method not allowed while accessing this resource.|
