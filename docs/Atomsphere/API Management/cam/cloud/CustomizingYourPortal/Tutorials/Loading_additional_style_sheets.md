---
sidebar_position: 3
---

# Loading Additional Stylesheets

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2f6577a2-6c82-4c2b-90ed-1fc4ea389601"/>
</head>

The Portal only allows you to load a single stylesheet by default under **Manage > Portal > Portal Settings** in the API Control Center.

There are two techniques you can use to load additional stylesheets.

1. Load additional stylesheets using the [m$.loadCSS() method](../LayoutandDesign/JavaScript_api.md) and an appropriate [event hook](../LayoutandDesign/Event_hooks.md).

2. Load it synchronously by posting the following hack into the **Head JavaScript** field of the Inline JavaScript section under **Manage > Portal > Portal Settings** in the API Control Center.

   ```</script>    <link rel="stylesheet" href="/files/your-stylesheet.css" media="all">    <script>```
