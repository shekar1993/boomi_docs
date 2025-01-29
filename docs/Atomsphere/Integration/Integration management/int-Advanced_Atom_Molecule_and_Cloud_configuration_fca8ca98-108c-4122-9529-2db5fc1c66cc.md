# Advanced Atom, Molecule, and Atom Cloud configuration 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fca8ca98-108c-4122-9529-2db5fc1c66cc"/>
</head>


Increase memory settings, invoke the garbage collector, and configure HTTP proxy settings.

-   To process very high volumes of data, you may need to increase the amount of memory available to the Atom or Molecule \(see the help topic Increasing the memory available to an Atom or Molecule\). Also see the Atom System Requirements topic, which includes the minimum hardware requirements for processing high volumes of data.

-   If you use 4GB of memory or higher on your Atom, Molecule or Atom Cloud, recommends invoking the concurrent garbage collector. For more information about memory usage and working with a high volume of data, see the High-volume Troubleshooting topic.

-   You can configure the Atom or Molecule's HTTP Proxy settings after installation. This can include proxy and non-proxy hosts.

    -   If an Atom or Molecule that is configured to connect through a proxy attempts to connect to the but the proxy is unavailable, the Atom or Molecule attempts a direct connection to the platform.

-   If needed, install the Java Cryptography Extension \(JCE\) Unlimited Strength Jurisdiction Policy Files, which are required if you are using PGP encryption. Some connectors may require these files.


## Additional resources 

See [Java documentation](https://cr.openjdk.java.net/~iris/se/11/latestSpec/api/java.base/java/net/doc-files/net-properties.html) for more information about the `http.nonProxyHosts` networking property.