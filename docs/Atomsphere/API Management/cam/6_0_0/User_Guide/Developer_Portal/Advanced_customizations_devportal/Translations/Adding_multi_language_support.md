---
sidebar_position: 4
---

# Adding Multi-Language Support

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-670feca7-8f33-4411-aed2-fd67b7c66648"/>
</head>

With translations, you can add support for multiple languages and switch between them with a language picker. Here's how to do that. 

1. Add your translations. For example, to add support for both French and Spanish, first add translations for both of those languages. 

```
// Add translations for French
portal.addTranslations('fr', {
signin: {
title: 'Se connecter',
submit: 'Se connecter',
submitActive: 'Connectez-vous...',
// The rest of the string IDs...
},
// The rest of the views...
});
```

```
// Add translations for Spanish
portal.addTranslations('es', {
signin: {
title: 'Registrarse',
submit: 'Registrarse',
submitActive: 'Iniciando sesión...'
// The rest of the string IDs...
},
// The rest of the views...
});
```

2. Set your default language. If you want your default language to be any language other than English, use the `portal.setLang()` method to set it. 

```
// Set the default language to French
portal.setLang('fr');
```

3. Add a language picker to your HTML template to allow users to select their own language. The most common place to do this is in the header or footer. 

```xml
<label for="language-picker">Select Your Language</label>
<select id="language-picker">
<option id="en">English</option>
<option id="fr">Français</option>
<option id="es">Español</option>
</select>
```
You can use the portal.getLang() method to get the current language and update the label text. 

4. Detect language changes and update the UI. Use the portal.on() method to listen for changes to the `#language-picker` menu. 

```
// Detect changes to the #language-picker menu
portal.on('change', '#language-picker', function (event) {
// Someone changed the language selection
});
```

   When that happens, use `portal.setLang()` to update the language, save the selection to `localStorage` for subsequent page loads, and use the `portal.render()` method to update the UI. 

  ```
  // Detect changes to the #language-picker menu
   portal.on('change', '#language-picker', function (event) {

   // Update the language
   portal.setLang(event.target.value);

   // Save their selection to localStorage
   localStorage.setItem('portalLanguage', event.target.value);

   // Render a new UI
   portal.render();
   });
   ```

5. Override the default language on subsequent views. Users should not have to reselect their language on each page. You can get the user's selected language from `localStorage`, and hook into the `prerender` event to update the language before the UI renders. 

```
portal.on('prerender', '#app', function () {

// Get the selected language from localStorage
var lang = localStorage.getItem('portalLanguage');

// If a language was chosen, use it
if (lang) {
portal.setLang(lang);
}
});
```