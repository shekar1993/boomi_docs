# Off-cycle releases

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-3964d714-99e0-4590-acaa-bbcb8df041b1"/>
</head>

The following off-cycle release occurred subsequent to the January 2024 release:

| Date | Description | Key | Release note | Release version |
| --- | --- | --- | --- | --- |
| January 20, 2024 |Master Data Hub now links staged entities to source entities correctly. Patch 24.01.4 is relevant to public Boomi Hub clouds only.| HUB-3600 |[Master Data Hub](/docs/Atomsphere/Release%20Notes/Jan2024/Jan2024_Hub.md) and [Atoms, Molecules, and Atom Clouds](/docs/Atomsphere/Release%20Notes/Jan2024/Jan2024_Atoms_Molecules_Clouds.md)  |24.01.4 |
| January 24, 2024 | Fixed an issue that was causing a Gateway to throw a ``JOSE header typ (type) at+jwt not allowed`` error. Patch 24.01.5 should be applied if you receive any errors regarding the value of the ``JOSE header typ``. |APIM-12334| [API Management](/docs/Atomsphere/Release%20Notes/Jan2024/Jan2024_API_Management.md)| 24.01.5|
| January 24, 2024 | An error message no longer displays when you attempt to view environment extensions for a process. |INT-10927 | [Integration](./Jan2024_Integration.md) | |