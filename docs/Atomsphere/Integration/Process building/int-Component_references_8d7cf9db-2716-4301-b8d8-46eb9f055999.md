# Component references

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8d7cf9db-2716-4301-b8d8-46eb9f055999"/>
</head>



Learn about the different types of references that are created between components.

Components can be created once and used in process steps across multiple processes. This modular design simplifies maintenance because configuration changes can be made once and then instantly applied everywhere the component is referenced. Each time a component uses or is used by another component, a reference \(or in other words, a direct relationship\) is formed between them.

## Types of component references

Depending on the type of component you are using, it can create a **dependent** or **independent** reference to other components it uses or is used by. Knowing the difference between both reference types can help you understand how a component needs to be packaged and deployed.

Most components references are **dependent references**, meaning that the component is automatically included when the process is packaged; they don't need to be packaged and deployed separately. **Independent references** are less common and are defined as components that must be packaged and deployed independently. Independent references allow for greater flexibility in deployment versioning. Independent references include relationships between processes and:

-   API Service components

-   Flow Service components

-   Process Route components

-   Processing Group components

:::note

Although API Proxies, Certificates, and Custom Libraries can be independently deployed, they do not have references to or from other components and therefore are not classified as either dependent or independent. For more information about packaging and deployment, see the [Deployment](../Deployment/c-atm-Deployment_4e723d20-3e2b-41b7-8d57-010dccb940b8.md) section of this User Guide.

:::

## Exploring component references

You can use the [Show Where Used filter](t-atm-Finding_where_a_component_is_used_7f30a40d-1c3e-4b7d-b748-f958cacf1b0f.md) in the user interface or the [Component Reference API object](https://developer.boomi.com/api/platformapi#tag/ComponentReference) to view dependent or independent references between components. The **Show Where Used** filter shows all the parent processes or components where a common child component is used. The **Component Reference object** similarly allows you to find all the parent components that use a common child component or, conversely, to find all the child components that are used in a given parent component. Additionally, you can use this object to query for components by dependent or independent reference type.

## References and deleted components

Upon deleting a component from the Component Explorer, the deleted component is no longer displayed in the Component Explorer and is not returned in the list of Show Where Used filter results. However, keep in mind that though references to and from the deleted component are removed, the component will still display in the process canvas until it is either replaced with an active component or is removed from the process. A deleted component requiring cleanup is indicated by red text on the process canvas.