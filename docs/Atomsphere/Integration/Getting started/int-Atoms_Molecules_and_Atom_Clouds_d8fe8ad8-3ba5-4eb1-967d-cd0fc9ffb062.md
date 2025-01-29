# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d8fe8ad8-3ba5-4eb1-967d-cd0fc9ffb062"/>
</head>

Boomi provides a cloud-based integration platform. It supports two deployment models: an in-the-cloud deployment model used when all the integration endpoints are cloud-based, and an on-premise deployment model used when any integration endpoints are within a corporate network.

- If you use the cloud model, you can deploy your integration processes to a Atom Cloud.

- If you use an on-premise model, provides the Atom, a lightweight Java application deployed on a host with internet access.

- If you use the on-premise model and any of the following applies, consider utilizing a Molecule:

  - Providing a high availability, load-balanced solution
  - Change the Atom's process time or handling
  - Concerned that the Atom's process might not run because of an outage

- If you need a multi-tenant solution to accommodate multiple customer accounts, consider setting up your own private Atom Cloud.

## Atom, Molecule, and Atom Cloud terminology

If you work with Atoms, Molecules, and Atom Clouds, become familiar with the following terminology:

- Process – An integration process.
- Execution – An instance of a process running on an Atom. It is single-threaded.
- JVM – A single operating system process, running on the Java platform.
- Cluster – One or more JVMs working together as a logical Molecule or Cloud.
- Node – A single Molecule or Cloud JVM running as part of a cluster.
- Atom – A single-tenant, single-node runtime engine.
- Molecule – A single-tenant, multiple-node runtime engine.
- Cloud – A multiple-tenant, multiple-node runtime engine.
- Forked Execution – A separate, special-purpose JVM running a single process.
- Computer – A single computer, which can be a physical or virtual machine.
- CPU – A processor in a computer, including physical, not virtual, cores.
- Memory or RAM – The transient working memory available for the CPU.
- Hard Disk or Storage – The persistent, long-term data storage available on the computer.
- Heap – The transient working memory for a JVM. A subset of memory is owned and managed by a Java process.
- Garbage Collection – The algorithm used by Java to manage the Heap usage, constantly running in the background.
- Thread – An running code path within a JVM.

## Features comparison

Atoms, Molecules, and Atom Clouds use the same basic technology but there are important differences between them. A Molecule is an Atom with multiple nodes. An Atom Cloud is a Molecule that is available to multiple tenants. The following table shows the features available in each:

| Features | Atom | Molecule | Private Atom Cloud | Boomi Atom Cloud |
| --- | --- | --- | --- | --- |
| Multi-tenancy, which multiple accounts can use | Not Supported X | Not Supported X | Supported ✅ | Supported ✅ |
| Disk space monitoring | Not Supported X | Not Supported X | Supported ✅ | Supported ✅ |
| Forked execution (disabled by default on Molecules) | Not Supported X | Supported ✅ | Supported ✅ | Supported ✅ |
| Multiple nodes providing load balancing and failover support | Not Supported X | Supported ✅ | Supported ✅ | Supported ✅ |
| Supports integrations that generate and receive high volume | Not Supported X | Supported ✅ | Supported ✅ | Supported ✅ |
| Available to customers | Supported ✅ | Supported ✅ | Supported ✅ | Supported ✅ |
| Available to Boomi partners | Supported ✅ | Supported ✅ | Supported ✅ | Supported ✅ |
