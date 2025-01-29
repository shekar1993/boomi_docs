#  Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cb04dc3d-d365-47cd-adef-b1dc32881714"/>
</head>


**We added this feature:**

-   Master Data Hub now indicates when updated models are available on the repository Summary tab. The Update Available tag appears after you edit and publish a new model version. In the Summary tab, you can click the **Version**number to deploy a new version. \(HUB-721\)

    To learn more, see the topic [Deploying a Model to a Repository](https://help.boomi.com/bundle/hub/page/t-mdm-Deploying_a_model_to_a_repository.html)


**We fixed these issues:**

-   Incorrect quarantine error messages for data quality process errors. \(HUB-313\)
-   Incorrect reference field values in golden records that occurred when you unlinked a source entity ID from a referenced record and reused it in another record. \(HUB-2101\)
-   Incorrect Model Size Limit errors when creating models with the Platform API Create Model endpoint that did not exceed the size limit. \(HUB-2822\)
-   Master Data Hub allowed a field’s maxLength to be null or 0 when you created models with the Platform API. \(HUB-2857\)