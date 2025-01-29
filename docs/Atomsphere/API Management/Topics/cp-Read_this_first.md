# Read this first

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-447417fb-4d91-41b6-a3a1-32955394197f"/>
</head>

To access the code from the Developer portal, please follow the steps outlined [here](../Topics/cp-Fork_the_developer_portal.md).

In summary, the developer project is built using the [Vue 3 framework](../Topics/cp-Technologies.md) with a focus on [TypeScript](../Topics/cp-Technologies.md) development language. We adopt a component-driven development approach which is based on the Vue 3 'composition API' schema. In addition to the Vue 3 framework the project incorporates two other core frameworks: [Vue Components](../Topics/cp-Vue_components_library.md) and [API Helper](../Topics/cp-API_helper.md).

[Vue Components](../Topics/cp-Vue_components_library.md) contains all our HTML components. This framework is based on Tailwind, which provides html components as well as css classes for the style.

[API Helper](../Topics/cp-API_helper.md) is the base for our http client and is based on [axios](https://github.com/axios/axios).
As global store we use [Pinia](../Topics/cp-Technologies.md), which is integrated in API-Helper directly as well as in the developer portal project.

General information can be found in [this section](../Topics/cp-General_information.md). Here you can find all the used [technology](../Topics/cp-Technologies.md), [project structure](../Topics/cp-Directory_structure.md), [coding guide](../Topics/cp-Coding_guidelines.md) among other important information.