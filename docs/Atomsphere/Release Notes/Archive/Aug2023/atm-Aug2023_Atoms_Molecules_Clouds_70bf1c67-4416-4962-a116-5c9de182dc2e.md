# Atoms, Molecules, and Atom Clouds 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-70bf1c67-4416-4962-a116-5c9de182dc2e"/>
</head>


**Features**:

-   You can download Atom version 23.08.1 to address an issue with the classloading framework released during the Runtime Release. This patch reverts all runtimes to the legacy class loader by default. If you are on a previous version of the Atom and encounter class loader exceptions, apply this patch to your runtime. \(RUN-5956\)
-   We enhanced the Atom classloading framework to provide more flexibility and reduce dependencies and conflicts when adding or upgrading new libraries within Atoms, scripts, plugins, and connectors. Classloaders default to RELAXED mode, which has the same functionality as the legacy framework, with no restrictions on access to core libraries. We will introduce additional modes in future releases. To revert back to the legacy method of classloading, you can add the property `com.boomi.container.legacyClassLoader` to the Properties panel's Custom tab under **System Properties** and set it to true or manually add the system property `Dcom.boomi.container.legacyClassLoader=true` to the **atom.vmoptions** file. \(RUN-5295, RUN-5294, RUN-5360, RUN-5359, RUN-5358, RUN-5802\)

    **Important:** If you use a custom proc script, you must update to the latest version of the Boomi-managed scripts located in the bin folder of the container's install directory or add the `"-Dcom.boomi.container.legacyClassLoader=${BOOMI_LEGACY_CLASS_LOADING}"` environment variable to your existing script files.

-   If your Molecule or Atom Cloud uses a CUSTOM security policy, a warning displays in Atom Management with a deprecation notice and a link to instructions on how to convert to a HIGH policy. For more information, see the deprecation notice [Custom Security Policy File deprecation for private Atom Clouds](https://community.boomi.com/s/article/Custom-Security-Policy-File-deprecation-for-private-Atom-Clouds).