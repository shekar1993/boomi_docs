---
sidebar_position: 3
---

# Configurations and Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-02add055-d5d4-4790-b9c0-ab0e3bba5c80"/>
</head>

Blackbeard includes smart defaults out-of-the-box. But if you want to customize things, you can adjust many of the options and settings.

To add your configuration settings:

1. Log in to the API Control Center.

2. Go to **Manage > Portal** and click **Portal Settings**.

3. Add your settings under the **Inline Javascript** section in the **Body JavaScript** field.

## The Configuration Settings

Default values are shown below.

```xml
/**
* Ajax page loads
* Whether to load pages async or with a page reload
*/
// If true, use Ajax
portalOptions.ajax = true;
// Selectors to ignore if clicked.
// Accepts any valid CSS selector.
// Use comma separated list for multiple selectors.
portalOptions.ajaxIgnore = null;
// Text to display in title while loading page
portalOptions.ajaxLoading = 'Loading...';
/**
* Active Page Class
* Class for links that point to the current page. This is applied to links in the primary, secondary, and
user navigation menus, as well as the documentation submenu on documentation pages.
*/
portalOptions.currentPageClass = 'current-page';
/**
* Blog Excerpt Length
* How long the excerpts on the "All Blog Posts" pages should be.
*/
portalOptions.excerptLength = 250;
/**
* Favicon
* Add a favicon/tab icon for your Portal.
*/
// If true, inject a favicon
portalOptions.favicon = false;
// The favicon URL
portalOptions.faviconURL = '/files/favicon.ico';
// The favicon sizes
portalOptions.faviconSizes = '16x16 32x32';
/**
* Logo
* Add a custom logo. Accepts any markup as a string (`<img src>`, `<svg></svg>`, etc.).
*/
portalOptions.logo = null;
/**
* Markdown
* If true, enable markdown on docs and custom pages.
*/
portalOptions.markdown = true;
/**
* Tooltips
* If true, activate mashtip tooltips on certain Account page elements.
*/
portalOptions.mashtips = true;
/**
* Password Strength
* If true, provide a password strength indicator on registration and password change pages.
*/
portalOptions.passwordStrength = true;
/**
* Responsive Design
* If true, include the viewport resizing meta tag required for responsively designed sites.
*/
portalOptions.responsive = true;
```

