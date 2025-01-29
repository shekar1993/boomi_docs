# Off-cycle releases 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-77fa26af-fe11-47a8-9ba7-b550a4e24e63"/>
</head>

The following off-cycle release occurred between the February 2024 Platform release and the March 2024 Runtime release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|February 16, 2024|Oracle E-Business (EBS) connector |CONC-3472, CONC-2483|[Connectivity](../Feb2024/Feb2024_Connectivity.md)|7|

The following off-cycle releases occurred between the February Runtime and February Platform 2024 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|January 31, 2024|Updated runtime Docker images [published](https://hub.docker.com/u/boomi) for Alpine and RedHat OS. This update includes internal-only changes. Additionally, the source code for the V5 images is now available in our [BitBucket repository](https://bitbucket.org/officialboomi/docker-images/src/main/) to enable customizations.|RUN-5987|[Atom, Molecules, and Atom Clouds](../Feb2024/Feb2024_Atoms_Molecules.md)|5.0.2|
|February 7, 2024|The container.properties file will only be updated when the platform side Atom Message Proxy flag is changed to prevent unnecessary network traffic.|PS-3674|[Atoms, Molecules, and Atom Clouds](../Feb2024/Feb2024_Atoms_Molecules.md)|24.02.04| 
|February 7, 2024|A new container property called `com.boomi.container.messageProxy.enabled` was added. This container enables a feature that will be made available in a future release.|PS-3075|[Atoms, Molecules, and Atom Clouds](../Feb2024/Feb2024_Atoms_Molecules.md)|24.02.04| 

:::note Attention

Runtime release 24.02.04 is available immediately (this replaces 24.01.27 that was released on Jan. 27th) containing the changes for PS-3674 and PS-3075 described above.
You can apply this update to your Runtimes immediately. If you do not apply it manually, it will be applied automatically on February 10, 2024 between 3am and 7am EST. Your runtimes will restart with this update. To manually update your runtime, see Applying pending Atom and connector updates.
A new patch 24.02.05 ( with no additional changes) will be applied automatically on February 10, 2023 between 3am and 7am EST. All runtimes will restart with this update during this window.

:::

<!--The following off-cycle release occurred subsequent to the February 2024 release:

|Date|Description|Key|Release note|Release version|
|----|-----------|---|------------|-----|
|  |    |  | |  |-->