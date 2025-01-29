# Custom library deployment considerations

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7fccfe31-e438-4fa6-bab0-7f395eef5fe3"/>
</head>


Custom Library components must be deployed independently — they are not referenced by processes or any other components. You can deploy Custom Library components to any Atom, Molecule, Atom Cloud, or environment, including the Atom Clouds.

When you deploy a Custom Library component its type determines where the JAR files are deployed:

:::note

For General type components, a restart is also required if you want to undeploy the component and its JAR files.

:::

If the same JAR file is deployed to `/userlib` *and* `/userlib/script` or `/userlib/<connType>`, the file in /userlib takes precedence.

If the appropriate directory does not exist, it is created.

If an existing JAR file is found with the same name but different content in the target directory, the existing file is flagged for deletion and the new JAR file is deployed as `<fileName_guid>.jar` to avoid a naming conflict.

When you undeploy a Custom Library component, the JAR files that it references are flagged for removal from the directories where they were deployed. The files are physically removed the next time the Atom, Molecule, or Atom Cloud is restarted.

:::note

If you attach new Atoms to an existing environment that includes deployed JAR files, the Atoms inherit the current JAR file deployments.

:::

You should not delete JAR files from your account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\) if those files are referenced in a Custom Library component:

-   If the component is deployed, you are prevented from deleting any files that the component references.

-   If the component is not deployed, you receive a warning message if you try to delete files that the component references.

-   If you proceed with deleting files that a Custom Library component references, you can no longer deploy or copy that component.