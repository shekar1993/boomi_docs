---
sidebar_position: 2
---

# Getting Started - Translations

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4964d7ac-9429-481d-a9cf-3a0071c2a0aa"/>
</head>

## Adding Your Translations

Use the `portal.addTranslations()` method to add translations for any view in the UI. It accepts three arguments: the language *(lang)*, an object of translations *(translations)*, and whether or not the language is right-to-left *(rtl)*. 

```
/**
* Add translations for a language
* @param {String} lang The language ID
* @param {Object} translations The translations object
* @param {Boolean} rtl If true, the language is right-to-left (optional)
*/
portal.addTranslations(lang, translations, rtl);
```

Each view that you want to translate in the UI should be a key in the `translations` object. Each view should contain an object of string IDs, and the desired text to use for them. 

For example, here's the default English for the `signin` view. 

```
var english = {
signin: {
// Page elements
title: 'Sign In',
submit: 'Sign In',
submitActive: 'Signing In...',
recover: ' Forgot your credentials? <a href="/lost-password">Recover your password</a> or <a
href="/lost-username">recover your username</a>.',
signup: 'Don\'t have an account? <a href="/register">Sign up</a>.',
// Form fields
username: 'Username',
password: 'Password',
// Message
errorTitle: 'Sign in errors'
}
};
```

To translate that into French, you would do this: 

```
portal.addTranslations('fr', {
signin: {
// Page elements
title: 'Se connecter',
submit: 'Se connecter',
submitActive: 'Connectez-vous...',
recover: ' Oublié vos informations d\'identification? <a href="/lost-password">Récupère ton mot
de passe</a> ou <a href="/lost-username">récupérer votre identifiant</a>.',
signup: 'Vous n\'avez pas de compte? <a href="/register">S\'inscrire</a>.',
// Form fields
username: 'Nom d\'utilisateur',
password: 'Mot de passe',
// Message
errorTitle: 'Erreurs de connexion'
}
});
```

You can find a full list of available views and string IDs in the [Translation Strings Reference](../../Advanced_customizations_devportal/Translations/Translation_strings_reference.md) at the end of this section. 
