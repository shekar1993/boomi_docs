# Temporary data purging schedule

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-ee36fe5a-14c5-4070-88b4-a0aa1d74436f"/>
</head>


For repositories hosted on a Boomi Hub Cloud, temporary data is purged on a schedule:



|For this type of temporary data|Purging occurs daily|
|-------------------------------|--------------------|
|Batch and entity details|60 days after the completion of batch processing|
|Batch entities not resulting in an operation on a golden record|14 days after completion of batch processing|
|Bulk processing requests|30 days after creation|
|Delivery details|60 days after delivery occurs|
|Resolved quarantine entries except where superseded|14 days after resolution|
|Superseded quarantine entries|7 days after resolution|
|Transactions not resulting in an operation on a golden record|60 days after transaction’s end|
|Transactions resulting in the creation, updating, or end-dating of a golden record|6 months after transaction’s end|