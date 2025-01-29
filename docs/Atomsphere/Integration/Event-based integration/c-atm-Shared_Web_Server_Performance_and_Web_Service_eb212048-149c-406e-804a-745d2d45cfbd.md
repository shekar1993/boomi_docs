# Shared web server performance and web service scalability 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-eb212048-149c-406e-804a-745d2d45cfbd"/>
</head>


To enhance shared web server performance and scalability, you can enable listener processes to run in Low Latency mode on dedicated Atom workers.

Enable Web Services Server listener processes to execute mainly in memory by selecting the Low Latency option for them.

If your web service is deployed to an Atom in an Atom Cloud, dedicate a reserved resource called an Atom worker to processing web service requests for your account. Performance with an Atom worker enabled should rival that of an ordinary Atom or Molecule.