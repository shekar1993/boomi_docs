# Directory Structure

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-657c9b78-0275-4865-8505-282206a4567c"/>
</head>

## assets

Contains images or other static elements 

## components

Contains vue components used in the different views.

### app

Contains overarching components for the application such as the shell, navigation or breadcrumbs.
     
### other directories

Components that are related to certain domain objects are placed in a directory with the name of this domain object (i.e. environments or apis) 

## helper

A collection of static functions.

## routers

Contains the routes for the application 

## services

This directory contains the services the frontend uses to communicate with the backend. The services are broken up into their corresponding domain model (i.e. environments, apis, …). This corresponds roughly with the controllers in the backend. 

## stores

Contains the global stores of the application. The store is used for caching and to synchronize different components within the frontend, that are not in a parent `<>` child relationship with each other. 

## types

This directory contains all custom types (interfaces) used in the frontend. This corresponds to the DTOs in the backend. 

## views

This directory contains the pages of the application. The pages are oganized based on the domain object they are related with (i.e. environments or apis) 