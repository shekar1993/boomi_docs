# Environment variables

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-9bce8c2a-9182-46a9-8efa-2d9debb0c16b"/>
</head>


You can define environment specific variables to manage common values across environments.

## Overview

Create environment variables to apply and manage common values that can be changed for each environment.

For example:

-   Insert an "environment" variable value into a page map element to show which environment a flow is being run in.

-   If you are using a custom connector, create variables that insert different connector configuration values for each environment.

-   If you are using a identity providers, insert a "Client Secret Key" variable value into the **Client Secret** field of an OIDC identity provider, which you can change for each environment.


## Creating an environment variable

When you create a variable in an environment, a variable with the same name is also added to all other environments, but with a blank value.

-   [Creating an environment variable](flo-Environments-creating-variables_c02db626-21cf-4e10-aaf9-31f6a39e738b.md)


## Inserting an environment variable

Once you have created an environment variable, you can insert the contents of the variable into a number of areas, such as in an existing value, or into the content of a map element.

-   [Inserting an environment variable](flo-Environments-inserting-variables_41ec9999-8d52-4d1e-8f65-ffaf6f59f296.md)