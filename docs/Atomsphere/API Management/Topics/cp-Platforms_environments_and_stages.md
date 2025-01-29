# Platforms, Environments, and Stages

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a0bd5e47-a4df-4643-b968-73d3a2ba478f"/>
</head>

## Platforms
A platform represents a type of runtime. Supported platforms currently are: 

### Runtimes
- Boomi API Gateway
- Kong Community 
- WSO2
- Gravitee.io 
- Amazon Web Services API Gateway
- Azure API Gateway
- Broadcom Layer7 
- Google Apigee

## Environments

An environment is one or a group of gateways of any given platform. You might have a set of synchronized gateways in your on-prem data centers and another set of synchronized gateways in your private cloud. In this case you would create two environments within the API Control Plane. 

These different environments may support different functions. This difference in functionality between the environments is represented by 'Environment Capabilities'. It is important to use the correct agent version, because the functionality of an environment differs depending on the agent version. Therefore, the latest agent should always be used.

For more details on environments see [Environments](../Topics/cp-Environment_capabilities.md). 

## Agents
Every environment needs an agent. This agent transmits and translates all commands from the Boomi API Control Plane to your gateways.

The agent runs as a Docker container where you want it, on your machine in the cloud.

You can learn how to start up such an agent here. [Connect your Environments](../Topics/cp-Connect_your_environments.md) 

The minimum recommended requirements for production are as follows:

- 512MB RAM
- 1 CPU
- 5G Disk

## Stages

Stages are an element of an API’s lifecycle. During development you might run the same API in different versions in different stages. So, you might run version 1.0 in production and 1.1 in development. The API Control Plane at this time has built-in support for production and non-production (aka development) stages. Every environment is assigned to a life-cycle stage. This means it is not possible to create an environment that spans two stages. 