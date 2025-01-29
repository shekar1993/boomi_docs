# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-955a0b1a-638c-4047-a3b3-720495b8058a"/>
</head>


## Connector SDK

**We added these features:**

- A new method is exposed in the listener framework so that connector developers have the ability to know when a container where the listeners are running is shutting down. (CON-9461)

- A new optional attribute, **strictClassLoading**, for the `connector-config.xml` file. The options are `true` and `false`; the default value is `false`. This attribute allows the target class loader mode to be configured. (CON-8217)




