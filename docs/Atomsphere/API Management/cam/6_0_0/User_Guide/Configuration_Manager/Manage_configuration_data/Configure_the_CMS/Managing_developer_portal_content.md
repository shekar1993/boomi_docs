---
sidebar_position: 3
---

# Managing Developer Portal Content

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-94756221-fb83-4898-b66c-fd97e96565fe"/>
</head>

On the **Content Management System** page, the content that is placed in the **Documentation** folder renders an automatically generated navigation menu of all of the content under that folder. 

## Disabling the Navigation Menu Feature

You can turn this navigation menu off by setting `docsNav` to false in your `configurations.js` file. 

```
portal.settings({
docsNav: false
});
```

## Styling the Documentation Navigation Menu

The navigation menu and content are wrapped in an element with the `.docs-wrapper` class. The navigation menu itself lives inside an element with the `.docs-nav class`, while the content is in an element with the `.docs-content` class. 

```xml
<div class="docs-wrapper">
<div class="docs-nav">
<!-- Nav menu -->
</div>
<div class="docs-content">
<!-- Content -->
</div>
</div>
```

The navigation menu itself has a class of `.docs-nav-list`. Individual items in the navigation have a `.content-nav` class, as well as a unique ID. Items with a nested navigation below them have a `.content-nav-sublist` class. 

## Adding a Heading

You can add a heading above the documentation navigation menu by adding a translation to your customizations.js file. The view is `page`, and the id is `navTitle`. 

`portal.addTranslation('page', 'navTitle', 'In the Docs', 'en');`

## Adding an Image

You can add an image on CMS pages by providing a complete URL (for example, `https://dev.acme.com:10443/admin/assets/illustration_cms.png`) which is internally converted to its relative path and stored as `../../assets/illustration_cms.svg`.

:::note

You must add the complete URL and not the relative path.

:::
