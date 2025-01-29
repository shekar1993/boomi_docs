---
sidebar_position: 2
---

# Getting Started - Modifying Templates and Layouts

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1f583d85-5281-4043-8704-a2e15601c127"/>
</head>

You can use the `portal.setTemplate()` method to override the default template for any view in the Portal. 

Pass in the ID of the view that the template is for, and the template itself. The template must be either a markup string, or a function that returns a markup string. 

For example, here is the default template for the overall page layout. 

```
// Overall layout
portal.setTemplate('layout', function () {
return `
<div id="skip-nav-wrapper" data-mashery="skip-nav"></div>
<div id="nav-user-wrapper" data-mashery="nav-user"></div>
<div id="nav-primary-wrapper" data-mashery="nav-primary"></div>
<div id="notifications-wrapper" data-mashery="notifications"></div>
<div id="main-wrapper" data-mashery="main"></div>
<div id="footer-wrapper" data-mashery="footer"></div>`;
});
```

If you wanted to move the user navigation *below* the primary navigation, you would do this 

```
// Overall layout
portal.setTemplate('layout', function () {
return `
<div id="skip-nav-wrapper" data-mashery="skip-nav"></div>
<div id="nav-primary-wrapper" data-mashery="nav-primary"></div>
<div id="nav-user-wrapper" data-mashery="nav-user"></div>
<div id="notifications-wrapper" data-mashery="notifications"></div>
<div id="main-wrapper" data-mashery="main"></div>
<div id="footer-wrapper" data-mashery="footer"></div>`;
});
```
