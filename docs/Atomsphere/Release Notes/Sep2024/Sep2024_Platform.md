#  Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-b148fc0a-ae96-4e38-a3cc-f07cf4ce9c2b"/>
</head>

**We made this change:**

- The platform was updated to use Java version 8u422c. (PS-5004)

**We added these features:**

- Removed the **Usage** section for trial users. (UU-7192, UU-7191, UU-7188, UU-7187)

- Added a questionnaire pop-up for new users about how they use the Boomi Enterprise Platform. (UU-8225)

**We fixed this issue:**

- Implemented retry logic for API calls using OIDC to prevent rate limiting errors. (PS-4850)