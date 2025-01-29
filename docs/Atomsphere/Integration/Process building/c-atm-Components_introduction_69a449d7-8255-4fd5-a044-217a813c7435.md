# Working with Components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-69a449d7-8255-4fd5-a044-217a813c7435"/>
</head>


Components are reusable configuration objects that include various elements such as APIs, certificates, connections, connector operations, cross-reference tables, document caches, maps, map functions, processes, process properties, process routes, profiles, queues, and trading partners. These appear in the Component Explorer.

## Key Features of Components
- Reusability: Create components once and reference them in multiple processes.
- Simplified Maintenance: Update a component in one place, and changes are reflected everywhere it is used.

## Managing Components
- Creating Components: You can create components in various ways. Remember, saving the component is the last step.

- Editing Components: You can edit components, and changes take effect after saving.

- Deleting Components: You can delete components through the Component Explorer, but note that:
    - You cannot delete processes deployed to Atoms or environments.
    - You cannot delete published processes shared with account groups.

:::note
Removing a component from a process does not delete it from your account; it remains in the Component Explorer for future use.
:::

## Important Considerations
- Component Dependencies: Before deleting a component, consider that it may be used in multiple processes or by other components.
- Data Integrity: Ensure that any changes made do not disrupt existing integrations or workflows.
