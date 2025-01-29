# Important Information

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0ae39a63-1395-44f1-ad44-6ff689342ba7"/>
</head>

## Global Components

The Base* components as well as the layouts and its core elements are loaded globally in main.ts. There is no need to import these in the other components. Custom components used in only a few other components must not be added to the global components. 

## Sidebar/Router/index.css

Since we set up the router so that the first page is always displayed directly, it also always gets the class "router-link-active", because it would then be permanently active, it is set to inactive in the frontends via the class "first-of-type". By a direct click ("router-link-exact-active") it can still become active.
This becomes a problem if the sidebar has only one page and this page has a subpage. Then the element in the sidebar becomes inactive when reaching the subpage.

## Set environment variables

Vite creates a static page when building the image. It is not possible to adjust any values afterward.

However, in these static files, you can replace the strings with the content of our environment variables.

The default values in `config.ts` are replaced by the environment variables with `setEnvVarsOnContainerStartup.sh` when the container is started. If a standard value changes, it must also be changed in `setEnvVarsOnContainerStartup.sh`.
