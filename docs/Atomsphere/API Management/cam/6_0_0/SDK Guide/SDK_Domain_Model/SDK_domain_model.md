---
sidebar_position: 1
---

# Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3ae4adbc-e5e6-4a98-95bd-f2713253156c"/>
</head>

The TrafficManager domain model defines the elements of the Traffic Manager runtime. 

The following table highlights some of the key elements:

## User

- A user or member subscribing to APIs and accesses the APIs. 

- Usage: `com.mashery.trafficmanager.model.User`

## API

- An API represents the service definition. A service definition has endpoints defined for it. 

- Usage: `com.mashery.trafficmanager.model.API`

## Endpoint

-  An endpoint is a central resource of an API managed within Local Edition. It is acollection of configuration options that defines the inbound and outbound URIs, rules, transformations, cache control, security, and so on, of a unique pathway of your API. An endpoint is specialized as either an API endpoint or a Plan endpoint. This specialization provides context to whether the endpoint is being used as part
of a plan or not.

- Usage:

  - Generic endpoint entity representation: 

    `com.mashery.trafficmanager.model.Endpoint`

  - API endpoint entity representation: 

    `com.mashery.trafficmanager.model.APIEndpoint`

  - Plan endpoint entity representation: 

    `com.mashery.trafficmanager.model.PlanEndpoint`

## Method

- A method is a function that can be called on an endpoint and represents the method currently being accessed or requested from the API request. A method could have rate and throttle limits specified on it to dictate the volume of calls made using a specific key to that method. A method is specialized as either an API method or a Plan method. The specialization provides context to whether the Method belongs to a plan.

- Usage:

  - Generic method entity representation: 

    `com.mashery.trafficmanager.model.Method`

  - API method entity representation: 

    `com.mashery.trafficmanager.model.APIMethod`

  - Plan method entity representation: 

    `com.mashery.trafficmanager.model.PlanMethod`

## Package

- A package is a mechanism to bundle or group API capability allowing the API Manager to then offer these capabilities to customers/users based on various access levels and price points. A package represents a group of plans. 

- Usage: `com.mashery.trafficmanager.model.Package`

## Plan

- A Plan is a collection of API endpoints, methods, and response filters to group functionality so that API Product Managers can manage access control and provide access to appropriate Plans to different users.

- Usage: `com.mashery.trafficmanager.model.Plan`

## API Call

- The API Call object is the complete transaction of the incoming request received by the Traffic Manager and the outgoing response as processed by the Traffic Manager. It provides an entry point into all other entities used in the execution of the request. 

- Usage: `com.mashery.trafficmanager.model.core.APICall`

## Key

- A key is an opaque string allowing a developer to access the API functionality. A key has rate and throttle controls defined on it and dictates the volume of calls that can be made to the API by the caller. A key can be specialized as an API key or Package key. This specialization provides context to whether the key provides access to an API or a specific plan in a package.

- Usage:

  - Generic key entity representation: 

    `com.mashery.trafficmanager.model.Key`

  - API key entity representation: 

    `com.mashery.trafficmanager.model.APIKey`

  - Package key entity representation: 

    `com.mashery.trafficmanager.model.PackageKey`

## Application

- An application is a developer artifact that is registered by the developer when he subscribes to an API or a package.

- Usage: `com.mashery.trafficmanager.model.Application`

## Rate Constraint

- A Rate Constraint specifies how the amount of traffic is managed by limiting the number of calls per a time period (hours, days, months) that may be received.

- Usage: `com.mashery.trafficmanager.model.RateConstraint`

## Throttle Constraint

- A Throttle constraint specifies how the velocity of traffic is managed by limiting the number of calls per second that may be received. 

- Usage: `com.mashery.trafficmanager.model.ThrottleConstraint`

## Customer Site

- A customer-specific area configured through the developer portal.

- Usage: `com.mashery.trafficmanager.model.CustomerSite`
