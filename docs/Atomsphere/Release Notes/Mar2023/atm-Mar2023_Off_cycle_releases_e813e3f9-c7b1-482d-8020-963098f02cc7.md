# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-e813e3f9-c7b1-482d-8020-963098f02cc7"/>
</head>





The following off-cycle releases occurred subsequent to a March 2023 release:

|Date|Description|Key|Release note|
|----|-----------|---|------------|
|17 Mar 2023|Java Rollback|RUN-5423|We fixed the issue where the Java rollback was not possible when the container used the jre\_backup directory, now making it possible to do so. However, if the container is being rolled back from a non- managed Java, you may need to manually update the `Java Clas Path Prepend`and `Java Library Path` properties. **Note:** If you notice any inconsistencies or discrepancies in the [Java Information panel](/docs/Atomsphere/Integration/Integration%20management/int-Java_information_panel_f3d5ead4-d23a-4420-a649-5178a2417fdf.md), you should update your atom version to 23.03.3|
|17 Mar 2023|Document Cache|RUN-5428|We fixed the issue where the document cache's performance was poor when a trading partner step was used in the process. Now it performs appropriately; however, you should not have the `com.boomi.container.enableOnlySharingDocumentsIfNeeded` property enabled if you are using a trading partner step.|

