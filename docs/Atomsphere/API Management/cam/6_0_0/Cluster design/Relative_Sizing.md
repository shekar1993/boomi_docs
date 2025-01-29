# Relative Sizing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0942d2b2-6ccd-4159-a05a-91b1d147b18e"/>
</head>

The following section describes relative (T-Shirt) sizing topologies and corresponding configurations. 

The value for k8s\_node\_size varies according to cloud environment. t2.xlarge is for 4 core CPU and 16 GB memory machines in AWS. The equivalent machine would be n1-standard-4 in GCP and D4s\_v3\_standard in Azure. 

|**Topology** |**Kubernetes Configuration** |**Pod Configuration** |
|----|----|----|
|Xtra Small |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **1**</p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 1, </p><p>tml\_cache\_count: 1, </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 1, </p><p>tml\_nosql\_count: 1, </p>|
|Small |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **2**</p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 3, (max 2 per node) </p><p>tml\_cache\_count: 2, (1 per node) </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 1, </p><p>tml\_nosql\_count: 1, </p>|
|Small-2 |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **2**, **(1 node dedicated to 1 TM)**</p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 1, </p><p>tml\_cache\_count: 1, </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 1, </p><p>tml\_nosql\_count: 1, </p>|
|Medium-1 |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **3**, </p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 10, (max 4 per node) </p><p>tml\_cache\_count: 3, (1 per node) </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 2, (max 1 per node) </p><p>tml\_nosql\_count: 3, (1 per node) </p>|
|Medium-2 |medium-2 cluster of 3 nodes with 10 TMs (same as medium-1). Here, nodes are 8 core and 30 GB. | |
|Medium-3 |<p>medium-2 cluster of 3 nodes with 3 TMs (same as medium-1). Here, each node is 2 core and 30 GB. </p><p>This test has been done to get number for licensing for total of 6 core. </p>|tml\_cm\_count: 1, tml\_tm\_count: 3, (max 1 per node) tml\_cache\_count: 2, (1 per node) tml\_sql\_count: 1, tml\_log\_count: 2, (max 1 per node) tml\_nosql\_count: 3, (1 per node) |
|Large-1 |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **5**, </p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 20, (max 4 per node) </p><p>tml\_cache\_count: 3, (max 1 per node) </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 5, (max 1 per node) </p><p>tml\_nosql\_count: 3, (max 1 per node) </p>|
|Large-2 |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **6 (3 Dedicated for TM)**, </p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 15, (max 5 per node) </p><p>tml\_cache\_count: 3, (max 1 per node) </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 2, (max 1 per node) </p><p>tml\_nosql\_count: 3, (max 1 per node) </p>|
|Xtra Large-1 |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **8**, </p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 40, (max 5 per node) </p><p>tml\_cache\_count: 5, (max 1 per node) </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 3, (max 1 per node) </p><p>tml\_nosql\_count: 5, (max 1 per node) </p>|
|Xtra Large-2 |<p>k8s\_master\_count: 1, </p><p>k8s\_master\_size: "t2.medium", </p><p>k8s\_master\_volume\_size: 32, </p><p>k8s\_node\_count: **10 (5 dedicated for TM)**, </p><p>k8s\_node\_size: "**t2.xlarge**", </p><p>k8s\_node\_volume\_size: 32, </p>|<p>tml\_cm\_count: 1, </p><p>tml\_tm\_count: 40, (max 8 per node) </p><p>tml\_cache\_count: 5, (max 1 per node) </p><p>tml\_sql\_count: 1, </p><p>tml\_log\_count: 3, (max 1 per node) </p><p>tml\_nosql\_count: 5, (max 1 per node) </p>|

