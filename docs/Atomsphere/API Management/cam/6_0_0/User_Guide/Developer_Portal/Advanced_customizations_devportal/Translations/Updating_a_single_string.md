---
sidebar_position: 3
---

# Updating a Single String

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b3151bff-89b0-4760-8d04-53b409fd608f"/>
</head>

While translation strings are useful for translating your Developer Portal into other language, they can also be used to change words or phrases in the Developer Portal from one set of English words to another. 

For example, let's say you wanted to change the phrase **Sign In** on the *signin* view to **Log In**. 

The `portal.addTranslation()` method allows you to specify a translation for a single string in a specific view. Pass in the view, string id, its desired value, and the `lang` as arguments. Optionally, also include a boolean for rtl if the language is right-to-left. 

```
/**
* Add a translation for a single string
* @param {String} view The view to add a translation to
* @param {String} id The string ID
* @param {String} value The string value
* @param {String} lang The language
* @param {Boolean} rtl If true, language is right-to-left
*/
portal.addTranslation(view, id, value, lang, rtl);
```

Here's an example. 

```
// Translate a single string
portal.addTranslation('signin', 'title', 'Log In', 'en');
```

Even though your translations are still in English, you must run the `setLang()` method. This is because the default language ID for the Developer Portal is actually `default`, and you cannot write translations to that ID. 

```
// Set the default language
portal.setLang('en');
```
