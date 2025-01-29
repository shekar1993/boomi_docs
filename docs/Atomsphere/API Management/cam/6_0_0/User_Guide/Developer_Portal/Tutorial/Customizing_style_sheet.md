# Customizing Style Sheet

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2955b677-ac53-43bb-ae13-e6b3ddce3de7"/>
</head>

Following section explains the procedure to customize the style sheet. 

## Before you begin

Upload the custom style sheet to the developer portal using the `portal.loadCSS()` method. The URL must be a string argument. This URL indicates the location of the custom CSS file. 

To customize a style sheet, 

```
/**
* @param {String} url The file to load
*/
portal.loadCSS(url)
```

For example, 

```
// Load a CSS file
portal.loadCSS('/path/to/my/styles.css');
```

To add an inline custom style sheet, add the file directly into the document using the `portal.inlineCSS()` method. Pass this custom style sheet as a string. 

An example of how inline customization can be done is as follows. 

```
// Custom CSS
var css ='p {' +'font-weight: bold;' + '}';
// Inline CSS into the document
portal.inlineCSS(css);
```
