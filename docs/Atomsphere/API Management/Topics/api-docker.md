# Container Gateway Deployment

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-41ba44ca-741d-4835-b59e-f79d2921c9a1"/>
</head>

The Gateway Docker image is a powerful tool for streamlining integration processes. It includes a minimal base image (Alpine or Red Hat UBI), the latest Boomi-supported version of Java, and code to retrieve, set up, and invoke the Gateway 64-bit installer. This image is ideal for developers and IT professionals who need a reliable and efficient way to manage their integration environments.

The Gateway Docker image simplifies the deployment and management of Gateway nodes within a Docker environment. It supports various configurations and ensures compatibility with Boomi's integration platform.

## Versioning
The Gateway Docker image follows the `MAJOR.MINOR.PATCH` versioning.
- `MAJOR` version - This version specifies major image changes, such as modifying the base image to run in your environment. 
- `MINOR` version - This version specifies enhancements and major defect fixes that should be backwards compatible. 
- `PATCH` version - This version specifies security updates, embedded Java version updates, and minor defects.

The Boomi Docker image supports:
- Image version tagged with “Release”.
- Alpine 5.x.x OS version and above.
- Red Hat UBI 5.x.x version and above.

To obtain latest published image, Boomi recommends you to use the `release` or `release-rhel` version when installing your containers.

### Version Support
Boomi supports the latest `release` and `release-rhel` tag for the current major version. If you are experiencing any issues, update to the latest release to verify the issue before contacting the support.

**Important**: After releasing a new major version, the previous major version will be deprecated. The deprecated version will continue to support and it will be maintained (for example, quarterly Java updates, security patches, critical defects, but not minor defects nor enhancements) until its retirement date. After a minimum of six months, the previous major version will be retired after which it will no longer be supported or maintained.

Refer to the [Boomi feature deprecation process](https://help.boomi.com/docs/Atomsphere/Platform/atm-Boomi_feature_deprecation_process_policy_e4547744-664f-4539-bd23-b91676bcbd8a) for more information.

### Current Version
   The current major version is 5.

### Changelog
See Runtime [Container Image Changelog](./api-docker_changelog.md).

:::note

You must update the changelog link as per our release.

:::

## Installation
### Installing the Initial Node
To install the initial node, use the following Docker run command with appropriate environment variables:

```
docker run -p 8077:8077 -h <nodeId> -e BOOMI_USERNAME=<user> -e BOOMI_PASSWORD=<pwd> -e BOOMI_ACCOUNTID=<accountId> -e BOOMI_ATOMNAME=<atomName> -e ATOM_LOCALHOSTID=<nodeId> --name <atomName><nodeId> -v <hostDirectory>:/mnt/boomi:Z -d boomi/gateway:<version>
```

This command pulls the image automatically, if you do not already have a local copy. After running the command, the installer connects to the Boomi platform to authenticate your credentials, creates the Runtime, and installs the necessary files. The Runtime starts as a daemon thread.

### Installing Additional Nodes
To install additional cluster nodes, update the `nodeId` value for each new node:

```
docker run -h <nodeId> -e BOOMI_ATOMNAME=<atomName> -e ATOM_LOCALHOSTID=<nodeId> --name <atomName><nodeId> -v <hostDirectory>:/mnt/boomi:Z -d boomi/gateway:<version>
```

Ensure the `BOOMI_ATOMNAME` and `<hostDirectory>` values match those specified for the initial cluster node.

## Configuration
### Environment Variables
You can adjust the configuration of your local Runtime by passing environment variables on the Docker run command line. Key environment variables include:
- `BOOMI_USERNAME`: Specifies your Boomi username.
- `BOOMI_PASSWORD`: Specifies the password associated with the Boomi user.
- `INSTALL_TOKEN`: An alternative to `BOOMI_USERNAME` and `BOOMI_PASSWORD`.
- `BOOMI_ACCOUNTID`: Specifies your Boomi account ID.
- `BOOMI_ATOMNAME`: Specifies the name of the Gateway you are installing.
- `ATOM_LOCALHOSTID`: Specifies a unique local host ID.
- Additional optional variables for proxy settings, local paths, and validation settings.
- (Optional) `BOOMI_ENVIRONMENTID`: Specifies your environment name. If not explicitly specified, the Gateway appears in the Unattached Atoms list in Atom Management.
- (Optional) `ATOM_VMOPTIONS_OVERRIDES` A | (pipe): Specifies a list of VM options to set on a new installation.
- (Optional) `CONTAINER_PROPERTIES_OVERRIDES` A | (pipe): Specifies a list of container properties to set on a new installation.
- (Optional) `LOCAL_PATH`: Specifies the local file path (rather than the network file system). The local path must be consistent among all cluster nodes.
- (Optional) `LOCAL_TEMP_PATH`: Specifies the local temporary file path used in Java for temporary storage. The local temporary path must be consistent among all Gateway nodes.
- (Optional) `PROXY_HOST`: Specifies the proxy's host name.
- (Optional) `PROXY_USERNAME`: Specifies the proxy's username.
- (Optional) `PROXY_PASSWORD`: Specifies the proxy's user's password.
- (Optional) `PROXY_PORT`: Specifies the proxy's port number.
- (Optional) `VALIDATE_MOUNT_ACCESS`: Specifies whether permissions are validated for the mounted path. The default value is `true`.
- (Optional) `UPDATE_MOUNT_PERMISSIONS`: Specifies whether permissions of the mounted path are updated, if needed. 

### Running the Image via Docker-Compose
You can create a `docker-compose.yml` file to run the image with multiple nodes:

```
Gateway Docker Image v0.1

x-gateway: &gateway
  image: boomi/gateway:<version>
  volumes:
    - <hostDirectory>:/mnt/boomi:Z
  environment: &env
    BOOMI_ATOMNAME: <atomName>
  restart: unless-stopped
services:
  node-0:
    <<: *gateway
    container_name: <atomName><node0_Id>
    hostname: <node0_Id>
    environment:
      <<: *env
      ATOM_LOCALHOSTID: <node0_Id>
      BOOMI_USERNAME: <user>
      BOOMI_PASSWORD: <pwd>    # Use the INSTALL_TOKEN or BOOMI_USERNAME and BOOMI_PASSWORD.
      BOOMI_ACCOUNTID: <accountId>
    ports: [8077:8077, 18077:18077]
    healthcheck:
      test: ["CMD", "wget", "-S", "https://localhost:8077/_admin/status", "-O", "/dev/null"]
      interval: 5s
      start_period: 120s
      retries: 5
  node-1:
    <<: *gateway
    container_name: <atomName><node1_Id>
    hostname: <node1_Id>
    environment:
      <<: *env
      ATOM_LOCALHOSTID: <node1_Id>
    depends_on:
      node-0:
        condition: service_healthy
  node-2:
    <<: *gateway
    container_name: <atomName><node2_Id>
    hostname: <node2_Id>
    environment:
      <<: *env
      ATOM_LOCALHOSTID: <node2_Id>
    depends_on:
      node-0:
        condition: service_healthy
```

Create a docker compose file and update the fields. Common environment variables across all nodes can be placed in yaml anchor `&env` and then run the following command to start the services:

`docker-compose -f compose.yml up`

### Known Issues
- If you encounter an error about access to the mounted path after using the Docker run command, ensure the mounted host directory has read, write, and execute permissions to UID 1000. Then, rerun the command with `VALIDATE_MOUNT_ACCESS` set to `false`.

### Links
- [Official Boomi Docker Repository](https://bitbucket.org/officialboomi/docker-images/src/main/)
- [Official Boomi Runtime Containers Reference Architectures](https://bitbucket.org/officialboomi/runtime-containers/src/master/)


