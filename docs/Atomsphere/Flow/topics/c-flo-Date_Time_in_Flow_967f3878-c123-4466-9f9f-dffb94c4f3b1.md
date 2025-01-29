# Formatting date and time values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-967f3878-c123-4466-9f9f-dffb94c4f3b1"/>
</head>


Date/Time values can be formatted in Boomi Flow in a number of ways.

## Overview

-   Date/Time values in Boomi Flow are stored using the ISO 8601 notation, the internationally accepted way to represent dates and times, as defined by the International Organization for Standardization. See [ISO 8601 Date and Time Format](https://www.iso.org/iso-8601-date-and-time-format.html).

-   The exact format used in Boomi Flow is **ISO 8601 format + timezone**. For example:

    2018-09-04T10:52:25+00:00

    The data is also sent to Boomi Flow using this format.

-   The [i18next](https://www.i18next.com/) framework can be used to change how a Date/Time value is displayed. I18next is an internationalization-framework written in and for JavaScript.

-   When using Date/Time values with Input components on a Page Layout, the format is governed by two attributes - **dateTimeFormat** and **dateTimeLocale**. By default the date picker \(only enabled with DateTime Content Types\) does not display the time or allow users to specify a time; when selecting a date the time component will default to "now". Add these attributes to the Input component to enable time values to be specified and masked for the user.


## Format Strings

-   **Standard format strings** are supported for Date/Time values in Boomi Flow. See [standard format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings) on the Microsoft documentation site.

-   **Custom format strings** are also supported for Date/Time values in Boomi Flow. See [custom format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) on the Microsoft documentation site.

-   Date/Time values formats can also be modified via the **Advanced \| Presentation** option on the **Value** page, or by using the **Date/Time** Property on a Type.

## Server-side/client-side formatting

-   When a Date/Time value is referenced in a Step map element or a Presentation component in a Page Layout, the Date/Time value will be always formatted server-side before reaching the browser. Date/Time values displayed in other component types \(for example table columns\), will also be formatted server-side by default. To disable this behavior change the **formatValues** Tenant setting to 'false' via the API.

-   Date/Time values can be formatted client-side by enabling the **formatting** setting in a custom Player. This means dates and times will be displayed using the user's client timezone settings. See [Default legacy player settings](/docs/Atomsphere/Flow/topics/r-flo-Players_settings_87ccbabe-0f52-4395-954c-86e9340770d6.md).