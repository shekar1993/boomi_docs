# Boomi terminology changes

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-792a8568-4aed-49b7-b759-d84a38cf7aa9"/>
</head>

In the March 2025 Platform release, Boomi will update some of the terminology for our services. This is to make Boomi-specific terms more intuitive, better align with common industry concepts, and provide more specificity as our platform evolves. Starting on March 9, 2025, you will see the terms below updated throughout the application and documentation. The new terminology will be incorporated into training content and other assets over time.

## Why are we making this change?

We are transitioning from the terms “atom” and “molecule” to the more intuitive term “runtime” to enhance clarity and reduce proprietary language.

These changes aim to improve consistency and eliminate ambiguity. For example, “atom” was previously used to refer to both a specific non-clustered runtime and a general term for all runtimes. We will now consistently use “runtime” instead of alternating between “atom” and “container”.

Additionally, to align with our ongoing product innovation, we need more precise terminology. For instance, with the introduction of multiple hosted runtime cloud options, the term “Boomi Cloud” requires further clarification.

## What terms are changing?

These changes are primarily for Integration runtimes, including the types of runtimes, Boomi's hosted runtime options, and the various related user interfaces and features.

| Old term(s) | New term | Definition |
| --- | --- | --- |
| Boomi AtomSphere Platform<br/>Boomi AtomSphere<br/>AtomSphere | Boomi Enterprise Platform<br/>Boomi Platform | A cloud-native, multi-tenant platform that lets you intelligently integrate applications, databases, and devices; securely manage your data; design, secure, and scale APIs; extend connectivity; and build automated workflows. |
| AtomSphere Go | Boomi Pay-As-You-Go | A self-service, usage-based platform edition. |
| Atom (generic),<br/>Container | runtime | Generic term for the self-contained engines that execute integration process logic. |
| Atom | basic runtime | A non-clustered, single-tenant runtime. Basic runtimes are highly performant but do not provide high availability. |
| Molecule | runtime cluster | A clustered, single tenant runtime that provides high availability and horizontal scalability. |
| Atom Cloud | runtime cloud | A runtime cloud is a multi-tenant runtime that can be shared securely across multiple Boomi platform accounts. |
| Cloud Molecule | runtime cloud cluster | The physical cluster that powers a runtime cloud. A runtime cloud contains one or more cloud clusters. |
| Cloud Atom | cloud attachment | A virtual runtime or tenant within a runtime cloud. Cloud attachments are assigned to a specific cloud cluster within the cloud. |
| Boomi Cloud,<br/>Public Atom Cloud,<br/>Public Cloud | public runtime cloud | One of the share, multi-tenant runtime clouds hosted by Boomi as part of the Public Cloud Service. |
| | Public Cloud Service (PCS) (new) | Boomi's commercial offering for self-service, Boomi-hosted multi-tenant runtime offerings, including Base, Tier 1, and Tier 2. When you subscribe to Boomi's Public Cloud Service, you can deploy your integrations to one of Boomi's Public Runtime Clouds in the region of your choice. Public Runtime Clouds are multi-tenant, and your integrations will run securely during runtime alongside integrations from other customers. |
| Private Atom Cloud,<br/>Virtual Private Cloud | private runtime cloud | A runtime cloud is created, hosted, and managed by customers or partners. |
| Local,<br/>On-premises/on-prem,<br/>Private,<br/>Self-hosted,<br/>Customer-hosted | local | The various runtime options that can be installed and managed by customers. |
| Atom Management | Runtime Management | The Boomi Enterprise Platform page where you create, configure, and manage local runtimes and attachments to clouds shared with your accounts. |
| Atom Worker | execution worker | Type of worker responsible for handling real-time, low latency executions within the runtime. |
| | runtime worker (new) | Generic term for all specialized, persistent workloads within a runtime, separate from the cloud nodes. |

## What's not changing

Some usages of the previous terms will remain unchanged for backward compatibility. Generally speaking, any usage that could break scripting or external client applications will not change.

- Platform API endpoint names, request/response structures, and field values
- Platform event types (such as `ATOM.STATUS`)
- Connector SDK interfaces, methods, and variables
- Custom scripting interfaces, methods, and variables
- Runtime installer files, installation directory paths, and any local configuration files
- Runtime container property keys and values (although user interface labels will be updated)

If you have any questions, contact Boomi Support.
