# Typography CSS

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-1b271022-08bb-4ad4-b96f-2ae94b22b7c7"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize general typographic elements.

## Default player CSS

You can use the following main classes/selectors to apply additional CSS styling to headings and body text in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.flow`|The main class for the basic page formatting elements within a flow, such as the page color, default font-size and color, and so on.<br/><br/>For example, to change the default color and size for body text:<br/>`.flow {color: red;font-size:1.3em}`|
|`.flow h1``.flow .h1`<br/>`.flow h2`<br/>`.flow .h2`<br/>`.flow h3`<br/>`.flow .h3`<br/>`.flow h4`<br/>`.flow .h4`<br/>`.flow h5`<br/>`.flow .h5`<br/>`.flow h6`<br/>`.flow .h6`|The basic heading classes used for HTML headings within a flow.<br/><br/>HTML headings `<h1>` to `<h6>` are available. `.h1` to `.h6` classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.<br/><br/>For example, to change the color of all flow top-level h1 headings:<br/>`.flow h1, .flow .h1 {color: red;}`|
|`.flow p`|The class used for basic paragraph elements within a flow.<br/><br/>For example, to change the color of all paragraph text within flow presentation components:<br/>`.flow p {color: blue;}`|
|`.flow a`|The class used for basic hyperlink elements within a flow.<br/><br/>For example, to change the color of all hyperlink text within flow presentation components:<br/>`.flow a {color: orange;}`|
|`.flow blockquote`|The class used for inline `<blockquote>` elements within a flow.<br/><br/>For example, to change the background color of quoted text within flow presentation components:<br/>`.flow blockquote {background-color: #cccccc}`|
|`.flow code`|The class used for inline `<code>` elements within a flow.<br/><br/>For example, to change the background color of coded text within flow presentation components:<br/>`.flow code {background-color: #cccccc}`|
|`.flow ol`|The main class applied to ordered lists.<br/><br/>For example, to change the type of list-item marker in ordered lists to roman numerals:<br/>`.flow ol {list-style-type:upper-roman}`|
|`.flow ul`|The main class applied to unordered lists.<br/><br/>For example, to change the type of list-item marker in unordered lists to squares:<br/>`.flow ul {list-style-type:square}`|
|`.flow pre`|The class used for inline ``` elements within a flow.<br/><br/>For example, to change the background color of pre-formatted text within flow presentation components:<br/>`.flow pre {background-color: #cccccc}`|



## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to headings and body text in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs`|The main class for the basic page formatting elements within a flow, such as the page color, default font-size and color, and so on.<br/><br/>For example, to change the default color and size for body text:<br/>`.mw-bs {color: red;font-size:1.3em}`|
|`.mw-bs h1``.mw-bs .h1`<br/>`.mw-bs h2``.mw-bs .h2`<br/>`.mw-bs h3``.mw-bs .h3`<br/>`.mw-bs h4``.mw-bs .h4`<br/>`.mw-bs h5``.mw-bs .h5`<br/>`.mw-bs h6``.mw-bs .h6`|The basic heading classes used for HTML headings within a flow.<br/><br/>HTML headings `<h1>` to `<h6>` are available. `.h1` to `.h6` classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.<br/><br/>For example, to change the color of all flow top-level h1 headings:<br/>`.mw-bs h1, .mw-bs .h1 {color: red;}`|
|`.mw-bs p`|The class used for basic paragraph elements within a flow.<br/><br/>For example, to change the color of all paragraph text within flow presentation components:<br/>`.mw-bs p {color: blue;}`|
|`.mw-bs a`|The class used for basic hyperlink elements within a flow.<br/><br/>For example, to change the color of all hyperlink text within flow presentation components:<br/>`.mw-bs a {color: orange;}`|
|`.mw-bs blockquote`|The class used for inline `<blockquote>` elements within a flow.<br/><br/>For example, to change the background color of quoted text within flow presentation components:<br/>`.mw-bs blockquote {background-color: #cccccc}`|
|`.mw-bs code`|The class used for inline `<code>` elements within a flow.<br/><br/>For example, to change the background color of coded text within flow presentation components:<br/>`.mw-bs code {background-color: #cccccc}`|
|`.mw-bs ol`|The main class applied to ordered lists.<br/><br/>For example, to change the type of list-item marker in ordered lists to roman numerals:<br/>`.mw-bs ol {list-style-type:upper-roman}`|
|`.mw-bs ul`|The main class applied to unordered lists.<br/><br/>For example, to change the type of list-item marker in unordered lists to squares:<br/>`.mw-bs ul {list-style-type:square}`|
|`.mw-bs pre`|The class used for inline ``` elements within a flow.<br/><br/>For example, to change the background color of pre-formatted text within flow presentation components:<br/>`.mw-bs pre {background-color: #cccccc}`|