---
sidebar_position: 15
---

# Translations

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1d9c2e49-db04-47fe-b8d9-422e47fc0086"/>
</head>

Methods for internationalizing the portal. 

- **addTranslation()**

Adds a translation for a specific view and string in the UI.

**Syntax**

```
/**
* @param {String} view The view for the translation string
* @param {String} id The translation string ID
* @param {String} value The value for the string
* @param {String} lang The translation language
* @param {Boolean} rtl If true, language is RTL [optional]
*/
portal.addTranslation(view, id, value, lang, rtl)
```

**Example**

```
// Add a Spanish version of the "title" string on the "newPage" view
portal.addTranslation('newPage', 'title', 'Hola Mundo', 'sp');
// Add an Arabic version of the "title" string on the "newPage" view with RTL
support
portal.addTranslation('newPage', 'title', 'بالعالم مرحبا',' sp', true);
```

- **addTranslations()**

Adds multiple translations for one or more views in the UI.

**Syntax**

```
/**
* @param {String} lang The translation language (use `null` for the default
language)
* @param {Object} translations The translations
* @param {Boolean} rtl If true, language is RTL
*/
portal.addTranslations(lang, translations, rtl)
```

**Example**

```
// Translations
var translations = ;
// Add the translations
portal.addTranslations('sp', {
newPage: {
title: 'Hola Mundo',
greeting: '¡Bienvenido!'
},
docs: {
title: 'Documentación',
greeting: 'Aprenda cómo funciona nuestro programa'
}
});
```

- **setLang()**

Sets the current language for the portal. If the portal UI is rendered, you may want to run portal.render() to render a fresh version of the UI in the new language.

**Syntax**

```
/**
* @param {String} lang The language (use `null` to revert to default)
*/
portal.setLang(lang)
```

**Example**

```
// Set the language to Spanish
portal.setLang('sp');
```

- **getLang()**

Gets the current language for the portal.

**Syntax**

```
/**
* @return {String} The language
*/
portal.getLang()
```

**Example**

```
// Get the current language
var lang = portal.getLang();
```

- **getTextDirection()**

Checks if the current portal language is RTL or LTR.

**Syntax**

```
/**
* @return {String} The text direction for the current
language
*/
portal.getTextDirection()
```

**Example**

```
// Get the current text direction
var direction = portal.getTextDirection();
```

- **translate()**

Gets the text in the current language for a specific view and string.

**Syntax**

```
/**
* @param {String} view The view for the translation string
* @param {String} id The translation string ID
* @return {String} The translated value
*/
portal.translate(view, id);
```

**Example**

```
// Get the "title" for the "newPage" view
var title = portal.translate('newPage', 'title');
```


