# Code examples

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bc8041a9-f3a9-49a1-85e6-b8c42da46ca4"/>
</head>

We use in combination the framework [Vue](https://vuejs.org/) and the language [Typescript](https://www.typescriptlang.org/). The team is completed with [Tailwind](https://tailwindcss.com/). Here is an example:

[Coding Guidelines | Vue](../Topics/cp-Coding_guidelines.md)

For storage we use [Pinia](https://pinia.vuejs.org/).

```xml

import { defineStore } from 'pinia';
import Plan from '../types/configuration/Plan';
const planStore = defineStore({
  id: 'plan',
  state: () => ({
    plans: [] as Plan[],
  }),
});
export default planStore;

```