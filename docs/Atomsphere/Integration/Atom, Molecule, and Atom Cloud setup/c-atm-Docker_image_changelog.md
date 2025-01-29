# Docker image changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-17cf892b-a5af-4345-8f22-eb679d6144c7"/>
</head>

## Changelog

### Version 5 (Current Major Version)

#### 5.1.0 - July 12, 2024
- Images are updated to Java version 11.0.23.9.1
- Alpine images are updated to Alpine version 3.20.0
- RedHat image are updated to RHEL 9.4-949.1716471857

#### 5.0.3 - April 16, 2024
- Images are updated to Java version 11.0.22.7.1
- Alpine images are updated to Alpine version 3.19.1
- RedHat image are updated to RHEL 9.3-1552

#### 5.0.2 - January 31, 2024
- RUN-5987 Provide updated Docker image for Alpine (V5)

#### 5.0.1 - January 25, 2024
- RUN-5871 Update Docker images to Java 11u21

#### 5.0.0 - November 10, 2023
- RUN-5793 Provide updated Docker image for RedHat UBI 9 Minimal
    - Add numerous security updates
    - Add support for cgroups v3
    - Add support for SAP and SAP JCo V2 connectors

### Version 4

#### 4.3.6 - January 25, 2024
- RUN-5871 Update Docker images to Java 11u21

#### 4.3.5 - September 13, 2023
- RUN-5884 Update Docker images to Java 11u20
- RUN-5889 Upgrade Alpine linux in docker image

#### 4.3.4 - July 12, 2023
- RUN-5493 Upgrade Alpine linux in docker image
- RUN-5528 Update Docker images to Java 11u19

#### 4.3.3 - March 15, 2023
- RUN-4848 Update Docker images to Java 11u18

#### 4.3.2 - February 16, 2023
- RUN-3973 Update Rust from 1.56.1 to 1.63.0
- RUN-4551 Update Docker images to Java 11u17

#### 4.3.1 - September 27, 2022
- RUN-4019 Update Docker images to Java 11u16
- RUN-4136 Update base image from Alpine 3.14.0 to 3.16.2

#### 4.3.0 - July 6, 2022
- RUN-1674 Add proxy configuration for basic authentication to docker images

#### 4.2.1 - May 23, 2022
- RUN-3703 Update Docker images to Java 11u15

#### 4.2.0 - April 22, 2022
- RUN-3429 The scaledown script does not wait for the pod to be offboarded in Kubernetes

#### 4.1.2 - March 22, 2022
- RUN-3184 Update Docker images to Java 11u14

#### 4.1.1 - February 17, 2022
- RUN-2932 Update Docker images to Java 11u13

#### 4.1.0 - February 3, 2022
- RUN-3104 Error thrown when upgrading from an old installation to Docker image 4.0.0

#### 4.0.0 - December 10, 2021

- Images no longer require privileged mode to operate, nor do they require mounting to the host's cgroup. Docker images now run as a non-root user, addressing concerns pertaining to running applications with escalated privileges. (RUN-1672)
- To provide greater monitoring flexibility, images are configured by default (via the [Enable Standard Output and Error Logging property](../Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md)) to enable logging to `stdout` and `stderr` in addition to the container log. 
- To better facilitate timely readiness of deployed runtime containers, the runtime property, [Force Start Shared Web Server](../Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md), allows the Shared Web Server to always be started, even when no listeners have been deployed to the runtime. 
- To better assess the status, two new API operations are available to return information for the [readiness and liveness probes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/). 
    - The liveness operation, `GET <sharedWebServerUrl>:<sharedWebServerPort>/_admin/liveness`, returns HTTP status code 200 (OK) if the container is running.
    - The readiness operation, `GET <sharedWebServerUrl>:<sharedWebServerPort>/_admin/readiness`, returns HTTP status code 200 (OK) if the container is ready to start accepting traffic.
- To facilitate greater portability, image sizes have been reduced by roughly 60% (down from ~500MB to ~200MB) by switching to the Alpine Linux base image.
- For improved awareness, the image version is now available as a [runtime startup property](../Integration%20management/r-atm-Startup_Properties_panel_289292e3-6746-48b8-ab81-38c9c1e8a3ad.mdIntegration%20management/) in the platform UI.

<!-- OLDER VERSIONS (DON’T PUBLISH)
3.2.15 - July 12, 2023


3.2.14 - March 16, 2023


3.2.13 - February 16, 2023


3.2.12 - September 27, 2022


3.2.11 - May 23, 2022
3.2.10 - March 22, 2022
3.2.9 - February 17, 2022
3.2.8 - September 13, 2021
RUN-2612 Docker probes not working in version 3.2.7
3.2.7 - September 10, 2021
RUN-2423 Update Docker images to Java 11u12
RUN-1953 Pod does not start back up on AKS when liveliness probe fails: unknown signal "SIGRTMIN+3"
3.2.6 - June 24, 2021
RUN-1993 Update Docker images to Java 11u11
RUN-2080 Probes in Docker not working when using Java 11
3.2.5
RUN-1834 Update Docker images to Java 11u8
3.2.4 - March 15, 2021
RUN-1684 Update Docker images to Java 1.8u281
3.2.3 - January 27, 2021
RUN-1644 Docker installation (for 3.2.2) is unsuccessful because the permissions are not being properly set for the /usr/local/bin directory.
3.2.2 - January 11, 2021
RUN-1418 Update Docker images to Java 1.8u271
3.2.1 - November 5, 2020
RUN-1010 Permissions of files changing on certain systems during installation.
3.2.0 - September 12, 2020
RUN-604 Added BOOMI_ENVIRONMENTID environment variable.
RUN-604 Allow attaching a docker container to an environment during installation.
RUN-969 Update to Java 8u261
RUN-923 Docker installer should finish the installation successfully without setting optional environment variables.
3.1.2 - July 21, 2020
RUN-958 Kubernetes probes failing in Docker Images 3.1.1
3.1.1 - July 13, 2020
RUN-795 Update to Java 8u251
RUN-683 Unable to set nonProxyHosts containing pipe | character in Docker container properties
RUN-821 Remove support for docker installer script
3.1.0 - June 15, 2020
Initial changelog tracking
Kubernetes support version.
3.0.0 - May 21, 2020 -->

