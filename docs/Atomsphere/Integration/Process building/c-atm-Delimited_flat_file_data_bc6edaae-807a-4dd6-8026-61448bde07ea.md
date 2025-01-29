# Delimited flat file data

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bc6edaae-807a-4dd6-8026-61448bde07ea"/>
</head>


Delimiting files adheres to parsing rules for using white space, text qualifiers, and escape characters.

In delimited flat file data sets, each element is separated by some specific character, such as a comma, asterisk, or pipe. Elements can be variable in length. Delimited data must be interpreted, or parsed, before it can be processed. For information about specifying the characteristics of your flat file data, see the Flat File profile’s Options Tab topic.

## Upgrading delimited flat file profiles

Flat file profiles were updated in May 2016 to support additional parsing functions for delimited flat file data. When you open a profile that was created prior to May 2016, you are prompted to upgrade the profile to the new format. recommends that you upgrade and save your flat file profiles to take advantage of the enhanced parsing capabilities. If a flat file profile that you upgraded is used in a deployed process, you must redeploy that process.

:::note

Because of parsing differences between new flat file profiles and legacy profiles, you should perform regression tests on the upgraded profiles to ensure compatibility.

:::

## Parsing rules for delimited flat file data

For delimited flat file profiles that were created or upgraded after the May 2016 release, the following parsing rules are applied:

-   White space

    -   A row that consists of one or more white space characters is considered an empty row.

    -   White space around strings that are not text-qualified is preserved.

    -   White space inside the qualifiers of text-qualified strings is preserved. White space outside of the text qualifiers is trimmed.

-   Text qualifiers

    -   An opening text qualifier character is recognized only if it has one or more leading white space characters. Other leading characters cause the text qualifier to be treated as a normal character.

    -   Line breaks are supported within text-qualified fields.

    -   Text qualifiers are removed from returned fields.

-   Escape characters

    -   The Text Qualifier Escape character can be the same as the Text Qualifier character \(single or double quote\).

    -   If no Text Qualifier Escape character is specified, the Delimiter Escape character is used for both delimiters and text qualifiers.

    -   The Delimiter Escape character can be the same as the Escape for Escape character.

    -   The Escape for Escape character applies only to the Delimiter Escape, not to the Text Qualifier Escape.

    -   Escape characters are removed only if the Remove Escape option is enabled.

    -   Escape characters can be multi-character sequences.


:::note

Support continues for both flat file profile formats; the appropriate parser is used for a given profile.

:::