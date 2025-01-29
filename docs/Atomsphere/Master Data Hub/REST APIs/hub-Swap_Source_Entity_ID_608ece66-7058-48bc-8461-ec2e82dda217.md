# Swap Source Entity ID 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-608ece66-7058-48bc-8461-ec2e82dda217"/>
</head>

The Swap Source Entity ID operation unlinks a golden record from a specific source in a universe \(domain\) under the authenticated account and links that golden record to a different entity for that source.

To perform this operation, send an HTTP POST request with an empty request body to

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/entities/<currentEntityID>/swap/<newEntityID>`

where

*host* is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## Path parameters 

**currentEntityID**  
ID of the source entity from which to unlink the golden record

**newEntityID**  
ID of the source entity to which to link the golden record