# Default legacy player

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-1ec7b998-bb39-4296-9857-949eb1dd5680"/>
</head>


You can continue to use the default legacy player to run your flows.

:::warning

We recommend you to use the default player over the legacy player for an effective and seamless experience. The new player is fast-paced and a lighter version of the legacy player.

:::

## Overview

The default legacy player is based on the 'paper' Bootstrap 3 theme. See [Player themes](c-flo-Players_Themes_c08a4544-961f-478d-b949-a833634034b0.md).

![Theme preview](../Images/img-flo-Theme-paper_4730fe70-c875-48d7-9c60-16c7428b2cf3.png)

-   The default legacy player offers a responsive, mobile-friendly experience when viewing a flow in a browser or on a mobile device, and can be used as a base from which to develop your own custom players.

-   Changes cannot be made to the default legacy player; if you wish to extend the functionality and styling of the default legacy player, you will need to create a custom player. See [Creating a custom player](t-flo-Players_Create_New_8c9d70c8-3d56-42ac-b988-927e60e5c4db.md).


The main player HTML sections are as follows:

## Favicon links

The `<link>` references contained in the `<head>` section load a favicon for the web application across browser/device environments. Change these links in a custom player to display a different favicon for yourweb application, for example your company logo or branded favicon.

![Favicon links in the default player](../Images/img-flo-Player_Default_favicon_b51d2f81-a499-46da-939f-cef8fb832321.png)

## Title

The `<Title>` tag sets the browser page title to 'Boomi Flow'. Change this in a custom player to display a different browser page title for your flow.

![Title in the default player](../Images/img-flo-Player_Default_title_6ba4a7f6-fb41-4307-94a1-ff59f2ebbfdb.png)

## Flow loading spinner

The inline CSS within the `<Style>` tag configures the default spinner that is shown when a flow is loading/waiting.

![Loading spinner in the default player](../Images/img-flo-Player_Default_spinnerconfig_457f6e9e-af9e-4b31-85ac-821161bee14b.png)

The inline CSS layer within the `<Body>` tag displays the default spinner shown when a flow is loading/waiting.

![Loading spinner in the default player](../Images/img-flo-Player_Default_spinnerdisplay_d5a3b8aa-4918-4429-be2a-82a866c502ee.png)

**Note:** Change this code in a custom player to set a different flow spinner, for example to use your company branding or logo. See [Customizing the loading spinner](t-flo-Players_spinner_7343ec9c-c2d7-497e-bf8d-b1b4c36b2878.md).

## Flow User Interface framework bundles

The Flow User Interface framework is split into discrete bundles of functionality that are loaded independently; together they form the complete User Interface framework. Each bundle is a collection of related resources \(JavaScript, CSS, images etc\). The default legacy player defines which bundles are loaded using the `requires` property.

Bundles are loaded via the `requires` property on the root `manywho` object in the player, with the following supported bundles also loaded by the default legacy player:

-   **Core**: The `Core` bundle includes core services that handle the ‘backend’ modelling.

-   **Bootstrap3**: The `Bootstrap3` bundle includes the [Bootstrap 3](http://bootstrapdocs.com/v3.0.3/docs/getting-started/) implementation of supported components.


![User interface bundles in the default player](../Images/img-flo-Player_Default_bundles_d8f6de64-f2a5-4dab-9661-0edaa7790f32.png)

**Note:** The `Offline` bundle can also be loaded into a custom offline player here if offline flows functionality is required. See [Configuring an offline flow](c-flo-Offline_Creating_Offline_Flow_97f8fffa-7576-4682-8999-69b6f55f59ac.md).

## Settings

The default legacy player supports various settings that can be specified when the player initializes.

You can customize any of the settings by passing them into `manywho.settings.initialize({})` in a custom player. See [Default legacy player settings](r-flo-Players_settings_87ccbabe-0f52-4395-954c-86e9340770d6.md).

![Settings in the default legacy player](../Images/img-flo-Player_Default_settings_7745a5d2-63e5-4dca-87db-4aef62ec796b.png)

## Options

The default legacy player supports various options that allow you to modify the behaviour of the player.

You can customize these options as required in a custom player. See [Default legacy player options](r-flo-Players_Default_Options_8bfa7e4b-12e1-4b69-81de-40c9b40f5765.md).

![Options in the default legacy player](../Images/img-flo-Player_Default_options_20f26422-86fa-430c-9b81-d230848b68e4.png)