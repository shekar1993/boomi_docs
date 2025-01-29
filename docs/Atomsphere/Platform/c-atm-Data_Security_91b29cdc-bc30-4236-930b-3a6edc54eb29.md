# Data security

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-91b29cdc-bc30-4236-930b-3a6edc54eb29"/>
</head>

Understanding data security is an important part of Boomi Enterprise Platform. Our data center is built to be extremely secure. The Boomi Enterprise Platform has gone through certification processes with our various partners (Salesforce, NetSuite, Intacct, and so on) to meet their security standards.

Additionally, the Boomi infrastructure is deemed SSAE 18 compliant as per the audit requirements of the American Institute of Certified Public Accountants' Service Organization Control (SOC) reporting framework.

Data that processes through a local Atom never flows through the Boomi data center. The data storage is behind the firewall on a customer server where you deployed the Atom. The data transports directly to either the SaaS or local application through a connector configured by the user. See the [Atoms](../Integration/Getting%20started/c-atm-Atoms_aa350919-15e5-4ec5-a11a-ee308fddd087.md) topic for more information about the Atom's architecture.

The Boomi Enterprise Platform also provides you the ability to import and generate certificates for the specific communication protocols that require security and a secure way to store encrypted passwords.

In addition, to prevent malicious data from compromising your integrations, all files uploaded to the platform are automatically scanned for viruses.

There are four main areas of security in Boomi Enterprise Platform. Boomi recommends reviewing the topics in this section carefully to understand the extensive security measures that Boomi implemented in the Boomi Enterprise Platform to keep your company and data secure.
