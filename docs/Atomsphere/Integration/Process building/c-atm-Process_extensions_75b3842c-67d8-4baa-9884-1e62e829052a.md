# Process extensions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-75b3842c-67d8-4baa-9884-1e62e829052a"/>
</head>


Use extensions to define configuration settings within a single process but specify different settings for each location when deploying that process to multiple environments.

:::note

Extensions are available only in the Professional and Enterprise Editions of Integration. Contact a Boomi Sales Representative for more information.

:::

## Working with process extensions

Process extensions are defined within the Process component. You can define extensions for a number of types of settings:

-   Connection settings

-   Operation settings

-   Trading Partner settings

-   Dynamic process properties

-   Process properties

-   Data maps

-   Cross reference tables

-   PGP certificates


After the extensions are defined, you need to set values for those extensions. You set values during deployment but you can also set extension values for Test Mode. When a process is executed with extension values set, those values extend or override any values that might be configured in the underlying components.

## Using process extensions in parent/child processes 

If your process contains subprocesses, you need to understand how extensions work in parent/child processes. In general, extensions are applied to the highest level *deployed* process. So how extensions work in the main process depends on how the subprocesses are called — by a Process Call step or by a Process Route step.

With a Process Call step, the subprocesses that are called are deployed as part of the parent process.

-   If you define extensions in the parent process, the extensions are applied to both the parent process and any subprocesses.

-   If you define extensions in a subprocess, the extensions are not applied during execution of the parent process.

    However, if the subprocess is also deployed independently, the extensions would be applied when that process executes independently of the parent process.


With a Process Route step, the subprocesses that are called are *not* deployed as part of the parent process. The parent process, the Process Route component, and the subprocesses must all be deployed independently.

-   If you define extensions in the parent process, the extensions are applied only to the parent process; they are not applied to any subprocess that is called by the Process Route.

-   If you define extensions in a subprocess, the extensions are applied only to that subprocess; they are not applied to the parent process or to any other subprocess.

:::note

Process properties are an exception to this behavior because they have execution scope, meaning that once a property is accessed or set it remains in effect for the duration of the current process execution. With a Process Route step, once a process property value is accessed or set, all default or extended values for that property in any process or subprocess are ignored. The only way to change that process property is with:

-   the Set Properties step

-   the Set Process Property map function

-   a custom scripting step or custom scripting map function

:::


## Use cases for process extensions

The following are cases in which you might want to use process extensions:

-   Multiple environments — The most common use case involves connection information and multiple environments. In more formal development cycles, there are often multiple instances of the applications to which you are connecting, such as Test and Production instances. For example, assume you have a process that connects to a database server. The Test and Production instances of that database server probably have different host names, user names, passwords, and maybe even ports. Within the process, you can define the settings that vary per environment as extensions, and then provide the Test credentials when deploying to the Test environment and the Production credentials when deploying to the Production environment.

-   Integration packs — Integration packs are packaged integration solutions. Each deployed integration pack instance needs to have its own connection information and process property values. You can define extensions for this information in the underlying process configuration to enable integration pack users to customize the packaged processes for their individual needs by setting extension values. You can optionally configure integration packs to allow multiple installs, thereby enabling users to use the same processes with different extension values.