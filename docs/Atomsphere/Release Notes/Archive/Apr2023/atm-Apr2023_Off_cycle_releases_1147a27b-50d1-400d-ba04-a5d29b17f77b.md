# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-1147a27b-50d1-400d-ba04-a5d29b17f77b"/>
</head>





The following off-cycle releases occurred subsequent to an April 2023 release:

| Date      | Description          | Key              | Release note                                                                                                                                      |
|-----------|----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 04-25-2023| Atom installer patch | RUN-5442, REL-8641| The fix implemented in RUN-4975 in the March 2023 release prevented all Atoms, Molecules, and Atom Clouds from upgrading from Java 8 to Java 11. This issue is resolved with the Atom installer patch.<br /><br />Before upgrading to Java 11, ensure that the Java Home property on the Startup Properties panel matches the pref_jre.cfg location.<br /><br /> :::note    When upgrading from Java 8 to Java 11 or if the runtime is using an external JDK, Windows multi-node runtimes can be upgraded only by using the script. All nodes must be brought down before you run the upgrade script. ::: |


