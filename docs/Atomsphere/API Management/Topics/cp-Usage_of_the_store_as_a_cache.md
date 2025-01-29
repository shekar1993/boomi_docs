# Usage of the store as a cache

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5beacaad-d12a-4b27-a567-5c17a79e50af"/>
</head>

Each major entity has its own store so that subpages can retrieve data from the store instead of reloading each item from the backend.

The respective store is managed by the entity's service.

- The store is refreshed on the index pages.

     - The getAll method in the service has a force parameter for this.

- Each time a change is made, the respective store is updated and the backend is informed.

     - The service usually takes care of this automatically, but there are complex cases.

- The stores are initially filled at login.