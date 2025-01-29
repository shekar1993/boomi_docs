# Custom player themes

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8c249fc3-56eb-460f-8cc4-a0fa8af27be7"/>
</head>


You can create your own themes to use with the default legacy player.

Themes provide a way to easily “skin” the default legacy player and the design elements contained within any flow that uses the default legacy player, such as colours, fonts, background colour, button styles and so on. Applying a different theme will change the way the default legacy player renders a flow to the end user.

You can create your own themes as follows:

1.  Create your CSS file containing your theme styles.
2.  Namespace the CSS to **.mw-bs**. The easiest way to do this is to wrap it in a [Less file](https://en.wikipedia.org/wiki/Less_(stylesheet_language)), for example:

    `.mw-bs{ @import (less) "mytheme.css";}`

3.  Upload the CSS file with the namespace to a publicly available URL.
4.  Create a new custom player based on the default legacy player. See [Creating a custom player](t-flo-Players_Create_New_8c9d70c8-3d56-42ac-b988-927e60e5c4db.md).
5.  Add the following JavaScript code to the top of the **initialize function** just before **manywho.settings.initialize** in the new custom player.

    `manywho.theming.custom('Theme CSS URL goes here');`

6.  Save the player and apply it to your flows as required.

**Note:** Custom themes need to be [Bootstrap 3](https://getbootstrap.com/docs/3.3/) compatible.