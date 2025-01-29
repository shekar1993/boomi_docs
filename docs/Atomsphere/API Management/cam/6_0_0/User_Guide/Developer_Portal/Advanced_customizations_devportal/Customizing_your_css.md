---
sidebar_position: 2
---

# Customizing your CSS

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3ff566fa-a360-4913-a135-b8a52c8a5634"/>
</head>

The CSS in your Developer Portal follows a consistent, predictable structure. 

## Loading Custom Style sheets

You can load custom style sheets into your Developer Portal using the `portal.loadCSS()` method. 

Pass in the path of the CSS file as an argument. Add the following to your `customizations.js` file. 

```
// Load a custom CSS file
portal.loadCSS('/path/to/your/file.css');
```

If you prefer, you can inline CSS directly into the document using the `portal.inlineCSS()` method. Pass in your custom CSS as a string. 

```
// Custom CSS
var css =
'p {' +
'font-weight: bold;' +
'}';
// Inline CSS into the document
portal.inlineCSS(css);
```

## Classes and IDs

Components of the same type share one or more classes that can be used to style them all in the same way. Individual elements or components also have a unique ID that can be used to target that item specifically. For example, here is the markup for the `/signi`n page. 

```xml
<main class="main" id="main">
<h1>Sign In</h1>
<form id="signin-form" data-mashery="signin-form" action="">
<label class="label label-required" id="label-username" for="username">
<span class="label-text">Username</span>
<input class="label-input" type="text" name="username" id="username" required>
</label>
<label class="label label-password label-required" id="label-password" for="password">
<span class="label-text">Password</span>
<input class="label-input" type="text" name="password" id="password" required>
</label>
<p class="form-actions">
<button class="btn btn-primary" id="signin-form-submit">Sign In</button>
</p>
</form>
<p id="signin-recover">Forgot your credentials? <a href="/lost-password">Recover your
password</a> or <a href="/lost-username">recover your username</a>.</p>
<p id="signup-link">Don't have an account? <a href="/register">Sign up</a>.</p>
</main>
```

If you wanted to style the labels for all required elements to look the same, you could target the `.label-required `class. 

If you wanted to target just the password field, you could target the `#label-password` ID. 

For example: 

```
/* Make all required labels red */
.label-required .label-text {
color: red;
}
/* Make the password field label bold */
#label-password .label-text {
font-weight: bold;
}
```

## Button Classes

Buttons and action-based links (for example, to cancel an action on a page) include a common set of classes you can target for styling. 

|**Class** |**Applied to** |
| -------- | ----- |
|`.btn`|All buttons and action-based links. |
|`.btn-primary`|The button that controls the primary action on the page. |
|`.btn-secondary`|Buttons that control secondary actions on the page. |
|`.btn-delete`|Buttons that cause apps, keys, or accounts to be deleted. |

Every button also has a unique ID that you can use to override these general button styles. 

## Floating Labels

Your portal uses a UI convention known as [floating labels](https://css-tricks.com/float-labels-css) by default. You can turn this feature off by setting floatingLabels to false with the `portal.settings()` method. Add this to your `customizations.j`s file. 

```
// Turn off floating labels
portal.settings({floatingLabels: false});
```
