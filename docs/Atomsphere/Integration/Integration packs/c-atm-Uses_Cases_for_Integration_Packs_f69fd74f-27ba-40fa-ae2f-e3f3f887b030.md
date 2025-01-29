# Use cases for integration packs

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f69fd74f-27ba-40fa-ae2f-e3f3f887b030"/>
</head>

Design and implement integration packs with your processes to create a standard solution for your business needs.

- When designing the processes for an integration pack, you are building a "one-size-fits-all" integration. Research your industry's best business practices and solicit feedback and requirements from customers and end users to understand common touch points and business rules. The underlying process logic is static and cannot be changed for each customer's implementation. The objects, general workflow, record selection criteria, processing logic, and validations cannot be customized on-the-fly.

- Some configuration settings vary from customer-to-customer, such as connection settings, process properties, schedules, and even field-level mapping. These can be exposed for the end user to configure. Using process extensions, you can create preferences that allow users to determine how the process should execute. Although the underlying configuration is static, you can build logic into the process to conditionally execute certain paths based on user-specified extension values.

    For example, for an integration that syncs Opportunities from a CRM application to a back office accounting system, you could extend a process property that lets the integration pack user choose if those Opportunities should create a Sales Order or an Invoice. The static process configuration would contain a Decision step that evaluates the process property extension value \(“sales order” or “invoice”\) and executes the appropriate logic.

Not every integration is suited for packaging:

- Not all integration scenarios can be effectively be packaged and distributed as integration packs. Because the underlying process configuration and workflow are static, integration scenarios that require customized logic, selection criteria, or processing rules per customer are not good candidates for integration packs. For example, integration scenarios wherein each customer has their own custom objects/record types are not good candidates for integration packs because the process components \(operation, profile, map, etc.\) would not be reusable across implementations. However, that is not to say integration packs cannot be built with custom objects. It is possible to develop an integration pack process that references a custom object under the assumption that custom object is always present — maybe as part of a broader customization module, package, bundle for a given application.

- Integration scenarios that require the usage of tracked fields are not possible with integration packs.
