# SSL protocols and cipher suite values 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0724018a-0c30-4185-923d-1a0dee6aba95"/>
</head>


View and compare HTTP SSL protocols and cipher suites that is created on startup, if you enable debug logging in your Atom.

You can compare this list to what the Java SSLEngine handles to see which protocols are available.

Boomi suggests using a tool that queries SSL services like SourceForge’s SSLScan to determine the ciphers that are supported. SSLScan does not support protocols higher than TLSv1. Note that JDK7 and JDK8 have different protocols and ciphers.

## Additional resources 

[SSLScan](http://sourceforge.net/projects/sslscan/)