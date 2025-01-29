# Custom scripting

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-35340a9d-a236-403a-9f53-1563fceb61a5"/>
</head>


Custom scripting allows you to perform custom manipulations and logic within a process to accomplish unique and advanced requirements that fall outside the native functionality of Boomi Integration. Custom scripting is available within a custom scripting step of a Data Process step or a custom scripting map function.

You can implement custom scripting in one of two ways:

-   Insert an inline script for one-time use.

-   Create a Scripting component that can be reused across processes or maps.

-   Cross links to data process step and map function.


## Scripting language support

Integration supports two common scripting languages: JavaScript and Groovy. JavaScript and Groovy share many similarities in syntax. Both allow you to perform string manipulations and numeric calculations and to implement conditional logic. Therefore, deciding which to use often comes down to personal preference.

JavaScript is a common lightweight scripting language and is used for browser and non-browser development. In the context of Boomi Integration, it can be used for sophisticated data value manipulation and conditional logic. The JavaScript version that you use is dependent upon the version of Java on which your Atom is running.

The Atom Clouds use a JavaScript engine that supports ECMAScript version 5.1. For complete information about JavaScript, see the [Mozilla JavaScript Reference](https://developer.mozilla.org/en/JavaScript). In addition, W3Schools provides a popular [JavaScript Tutorial and Reference Guide](http://www.w3schools.com/js).

:::note

When using JavaScript, you do not have access to the Scripting API or to any custom developed classes included in the Atom.

:::

:::note

Java version 1.8.0\_241 upgrades now impose a limit of 32767 capture groups that can be defined in a Javascript custom script.

:::

Groovy is very similar to Java, with looser variable typing and a few syntax differences regarding looping and method declaration. It is a more full-featured language than JavaScript and provides many more objects and methods for performing advanced manipulations. Groovy scripts do not need to be compiled before executing.

Integration supports Groovy language versions 2.4.13 and 1.5.8. When using Groovy, you have access to all the classes in the Java runtime JAR. You can reference standard Java classes to use in your script just like a Java class by including `import` statements at the beginning of your script. This also includes the JDOM classes for working with XML data. For complete information about Groovy, see the [Groovy documentation](http://www.groovy-lang.org/documentation.html). For information about the Java API, see the [Java JSE 7 Javadoc](http://docs.oracle.com/javase/7/docs/api/) or the [Java JSE 8 Javadoc](http://docs.oracle.com/javase/8/docs/api/) or the [Amazon Corretto 11](https://github.com/corretto/corretto-11) repository.

## Custom script libraries

To support custom scripting, you can reference custom Java classes that were developed outside of Integration by placing the packaged JAR file\(s\) in the userlib/script directory. You can do that in one of two ways:

-   Upload JAR files into your account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud \(including the Atom Clouds\), or environment.

    :::note

    Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

    :::

    For JAR files that support custom scripting, you create a Custom Library component with a type of Scripting. When you deploy the component, the JAR files that it references are deployed to the userlib/script directory. If the userlib/script directory does not exist, it is created.

-   Load JAR files manually into the appropriate directory of a local Atom, Molecule, or private Atom Cloud. After you load the JAR files, a restart is required.

    To avoid runtime conflicts with other connector classes, load your JAR file\(s\) into the `/<installation_directory>/userlib/script` directory. Account-specific JAR file\(s\) must be loaded into the `/<installation_directory>/accounts/<account_name>/userlib/script` directory. If the userlib/script directory does not exist, you must create it.

For additional information and examples, see topics: [Custom scripting function examples](c-atm-Custom_scripting_function_examples_bfe0ee1f-a973-43cb-8e69-defca3f6d1c2.md) and [Custom scripting step examples](c-atm-Custom_scripting_step_examples_95ef0cff-52bb-4d37-86b4-352ce1e89e12.md)

## Referencing external libraries with your scripts

Sometimes scripts need to reference additional code libraries or JARs (Java ARchive files) to help them do what they need to do. This could include utility libraries from external providers like Apache to perform common actions like text parsing, or custom logic developed by your organization outside of Boomi.

You can reference external Java libraries and classes by adding those libraries to your account. You can do that in one of two ways:

- Use Custom Library Components - STRONGLY RECOMMENDED. This involves uploading JAR files into your account's library and then creating and deploying a Custom Library component for that file to your tuntime. This approach lets you completely manage and deploy JARs remotely through the UI, without needing access to the Atom server. See [Working with custom libraries](c-atm-Working_with_custom_libraries_96f10864-334e-4eba-ac3f-f52b4e65fdb2.md)

- Directly place libraries in the local runtime directory - In certain situations, it may be necessary to place library files directly in the runtime’s /userlib directory instead of using Custom Library components. 
<!--See [Manual installation](new topic)-->

### External library usage considerations

- Use Custom Library components to deploy external libraries to your runtime whenever possible.

- To access Boomi-specific functionality, Boomi provides the [ExecutionUtil API](r-atm-com_boomi_execution_ExecutionUtil_7727f7f7-f8b9-43e1-b39d-8ac28fa11fb5) that contains a number of helpful Boomi-related functions to use with your scripts. This is the only officially supported scripting API and is guaranteed to be backward compatible.

- Your scripts can reference core Java classes within the Java JRE/JDK used by the Atom. However, be mindful of your usage when updating your runtime’s Java version.

- Do not directly reference classes within the core Boomi libraries (com.boomi.* packages) located in the runtime’s /lib directory, other than the Boomi Scripting API mentioned above. Referencing any other internal Boomi classes should be avoided and is not supported. Boomi regularly updates these libraries without notice which can break your scripts. Backward compatibility is NOT guaranteed.

- Do not directly reference third party libraries and classes located in the runtime’s /lib directory. Boomi regularly updates these libraries without notice which can break your scripts. Backward compatibility is NOT guaranteed.

    - For example, the runtime contains popular XML and JSON parsing libraries such as Jackson, jdom, and json. If you want to parse data in your script with one of these libraries, do not directly reference and rely on the runtime’s copy and version. Instead, obtain your own copy and version to use with your script and upload and deploy the library via a Custom Library component.

See [Working with custom libraries](c-atm-Working_with_custom_libraries_96f10864-334e-4eba-ac3f-f52b4e65fdb2.md) for more information. 
For additional information and examples, see topics: [Custom scripting function examples](c-atm-Custom_scripting_function_examples_bfe0ee1f-a973-43cb-8e69-defca3f6d1c2.md) and [Custom scripting step examples](c-atm-Custom_scripting_step_examples_95ef0cff-52bb-4d37-86b4-352ce1e89e12.md)

## Understanding precedence of libraries

To avoid conflicts, it’s important to understand the precedence for how the runtime loads and uses custom libraries:

- First and more importantly, all /userlibs are completely isolated from Boomi’s core libraries including third party libraries included in the runtime (that is, libraries in the /lib). For example, if you deploy to your userlib/script a different version of a JAR that also exists in the core runtime, your script will use the version you deployed while the runtime will continue to use its version.

- /script and /conn are isolated from one another.

- However /userlib will overrule /script and /conn.

- What about cloud tenant vs. global?





