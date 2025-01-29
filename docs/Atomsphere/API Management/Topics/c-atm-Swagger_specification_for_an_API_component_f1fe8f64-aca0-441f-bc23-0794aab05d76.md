# OpenAPI specification file for an API component

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f1fe8f64-aca0-441f-bc23-0794aab05d76"/>
</head>


An OpenAPI specification file \(formerly Swagger\) is a JSON document describing REST APIs and how to access them.

An OpenAPI specification file is automatically generated for each of an Atom’s deployed API Service components in which REST resources and routes are defined. An API Service component’s OpenAPI specification file serves as interactive documentation for the API’s REST resources and routes and input to [tools for automating generation of client SDKs and test cases](http://smartbear.com/news/news-releases/swagger-2-0-plug-in-for-soapui-pro/).

An OpenAPI specification file can be optionally imported into an API Proxy component for use with the API Management service. If an API Proxy component has an OpenAPI specification file, the file is used by the API Gateway for routing requests and as API user documentation in the API Developer Portal in API Management.

## About OpenAPI specification

[OpenAPI](https://www.openapis.org/) is a specification and complete framework implementation for describing, producing, consuming, and visualizing RESTful APIs.

Generated OpenAPI specification files for API Service components are based on v3.0, but v2.0 Swagger files can also be generated.

OpenAPI specification files imported into API Proxy components must be v2.0 compliant and in JSON or YAML format.

## OpenAPI specification URLs

The URL for an API Service component’s OpenAPI specification file is derived as follows:

-   The host and port, set in the Shared Web Server panel \(**Manage** \> **Atom Management**\),

-   The **REST URL Path**, visible in the API Service component’s **General** tab \(this path contains the **Base URL** set in that same tab\), and

-   The filename is `openapi.json`

    :::note
    
    2.0 Swagger files can also be generated and the filename is `swagger.json`.

    :::


For example, an API Service component with a **REST URL Path** of `/ws/rest/MyCompany/MyApp` \(**Base URL** MyCompany/MyApp\) that is deployed to an Atom in the USA East Integration Cloud. The component’s OpenAPI specification file’s URL would be:

`https://c01-usa-east-integrate.boomi.com/ws/rest/MyCompany/MyApp/openapi.json`
