# Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-e9c9e9fd-ccd4-4348-be0b-b204ae340e56"/>
</head>





## Atom management 

Feature:

-   All container properties are logged when an Atom, Molecule, or Atom Cloud starts up except for the following:

    -   Attachment quotas

    -   Account properties

    -   Any private data, such as properties related to passwords

    \(RUN-2906\)

    To learn more about this feature, see the topic [Properties panel](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_6dcdbe36-55bc-4e39-acad-c938d6b653b0.md).


Fix:

-   This fix resolves an issue where, after setting a different port number in the Shared Queue Server panel, the new port number was not saved after the plugin restarted. (RUN-2977)






