# Developer Portal Publishing category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4043638a-257f-4a84-8eab-3caddeb3b7c9"/>
</head>


The Developer Portal Publishing category of operations is used to publish a Developer Portal and retrieve details about a Developer Portal.

## Supported operations 

The Developer Portal Publishing categoryis supported in the following operations:

| Operation               | QUERY      | MUTATION     |
|-------------------------|------------|--------------|
| Developer Portal        | ✅ Supported | X Not supported |
| Update Developer Portal | X Not supported | ✅ Supported    |


Currently, there is no support for fields for use as QUERY filters for the Developer Portal Publishing object.

## Query syntax 

```
devportal(Id: String!) {DevPortal}
```

## Mutation syntax 

```
devPortalUpdate(id: ID!, devPortalInput: DevPortalInput!): DevPortalUpdateResult!
```

## Input and return fields syntax 

Update Developer Portal Mutation input syntax

```
input DevPortalInput {
   internalName: String
   theme: DevPortalThemeInput
   environments: [EnvironmentInput]
   environmentFilterEnabled: Boolean
}
```

Update Developer Portal Theme Mutation input syntax

``` 
input DevPortalThemeInput {
   text: DevPortalTextInput
   colors: DevPortalColorsInput
   logo: ImageInput
}
```

Update Developer Portal Message Mutation input syntax

``` 
input DevPortalTextInput {
   publishedName: String
   welcomeMessage: String
}
```

Update Developer Portal Colors Mutation input syntax

``` 
input DevPortalColorsInput {
   siteFrameworkColor: String
   contentBackgroundColor: String
   borderColor: String
   primaryTextColor: String
   linkColor: String
   selectedItemColor: String
   headingColor: String
}
```

Update Developer Portal Logo Details Mutation input syntax

``` 
input ImageInput {
   content: String
   type: String
   altText: String
}
```

Update Developer Portal Environment Mutation input syntax

``` 
input EnvironmentInput {
   id: ID!
   publishedName: String
}
```

Return fields syntax

```
type DevPortal {
   id: ID!
   internalName: String
   theme: DevPortalTheme
   environmentFilterEnabled: Boolean
   gateway: Gateway
}
```

|Field|Type|Description|
|-----|----|-----------|
|id|*ID*|The ID of the API Gateway.|
|internalName|*string*|The Developer Portal's internal name.|
|theme|*DevPortalTheme*|The Developer Portal's theme.|
|environmentFilterEnabled|*boolean*|Identifies whether the environment filter is enabled or not.|
|gateway|*Gateway*|The API Gateway onto which the Developer Portal attaches.For details about the type Gateway input parameters, see [Gateway category](/docs/Atomsphere/API%20Management/Topics/api-Gateway_category_b41f3ab2-2ce5-45c6-805e-0293a0f73ce3.md).



``` 
type DevPortalTheme {
   text: DevPortalText
   colors: DevPortalColors
   logo: Image
}
```

|Field|Type|Description|
|-----|----|-----------|
|text|*DevPortalText*|The welcome message associated with your Developer Portal.|
|colors|*DevPortalColors*|The custom colors associated with your Developer Portal.|
|logo|*image*|The logo associated with your Developer Portal.|

``` 
type DevPortalText {
   publishedName: String
   welcomeMessage: String
}
```

|Field|Type|Description|
|-----|----|-----------|
|publishedName|*string*|The Developer Portal's published name.|
|welcomeMessage|*string*|The Developer Portal's welcome message.|

``` 
type DevPortalColors {
   siteFrameworkColor: String
   contentBackgroundColor: String
   borderColor: String
   primaryTextColor: String
   linkColor: String
   selectedItemColor: String
   headingColor: String
}
```

|Field|Type|Description|
|-----|----|-----------|
|siteFrameworkColor|*string*|The hex color code for the site framework of your Developer Portal.|
|contentBackgroundColor|*string*|The hex color code for the content background color of your Developer Portal.|
|borderColor|*string*|The hex color code for the border color of your Developer Portal.|
|primaryTextColor|*string*|The hex color code for the primary text on your Developer Portal.|
|linkColor|*string*|The hex color code for link text on your Developer Portal.|
|selectedItemColor|*string*|The hex color code for selected items on your Developer Portal.|
|headingColor|*string*|The hex color code for the heading on your Developer Portal.|

``` 
type Image {
   content: String
   type: String
   altText: String
}
```

| Field    | Type   | Description                                                                                                                         |
|----------|--------|-------------------------------------------------------------------------------------------------------------------------------------|
| content  | *string* | The logo image used for your Developer Portal. Your site logo is limited to 50 pixels in height and 200 pixels in width. The maximum file size is 1MB in the .jpg, .png, or .svg format. |
| type     | *string* | The type of image used for your Developer Portal. Accepted image types are .jpg, .png, or .svg formats.                             |
| altText  | *string* | The alternative text for the logo image used for your Developer Portal.                                                             |


```
type DevPortalUpdateResult {
    status: DevPortalUpdateStatus!
    warnings: [DevPortalUpdateWarning]
}

```

```
enum DevPortalUpdateStatus{
    SAVED,
    SAVED_WITH_WARNINGS,
    FAILED_VALIDATION,
    ERROR
}
```

|Field|Type|Description|
|-----|----|-----------|
|status|*DevPortalUpdateStatus*|Used to identify the status of the request.|
|warnings|*DevPortalUpdateWarning*|Identifies warnings in publishing the Developer Portal.|

```
type DevPortalUpdateWarning {
    entityIds: [String]
    errorCode: DevPortalUpdateErrorCode
    message: String
    severity: ErrorSeverity
}

```

```
type DevPortalUpdateErrorCode {
    ILLEGAL_ELEMENT
    ILLEGAL_ATTRIBUTES
    ATTRIBUTES_BAD_OR_MISSING
    ATTRIBUTES_MAX_LENGTH
    ATTRIBUTES_MIN_LENGTH
    ILLEGAL_STYLE
    HEADING_OUT_OF_ORDER
    IMG_ALT_TEXT_EMPTY
    GATEWAY_ID_EMPTY
    GATEWAY_NOT_FOUND
    INTERNAL_NAME_EMPTY
    INTERNAL_NAME_TOO_LONG
    PUBLISHED_NAME_EMPTY
    PUBLISHED_NAME_TOO_LONG
    WELCOME_MESSAGE_TOO_LONG
    SITE_FRAMEWORK_COLOR_EMPTY
    SITE_FRAMEWORK_COLOR_INVALID
    CONTENT_BACKGROUND_COLOR_EMPTY
    CONTENT_BACKGROUND_COLOR_INVALID
    BORDER_COLOR_EMPTY
    BORDER_COLOR_INVALID
    PRIMARY_TEXT_COLOR_EMPTY
    PRIMARY_TEXT_COLOR_INVALID
    LINK_COLOR_EMPTY
    LINK_COLOR_INVALID
    SELECTED_ITEM_COLOR_EMPTY
    SELECTED_ITEM_COLOR_INVALID
    HEADING_COLOR_EMPTY
    HEADING_COLOR_INVALID
    COLOR_CONTRAST_INVALID
    LOGO_EMPTY
    LOGO_NOT_BASE64
    LOGO_TOO_LARGE
    LOGO_IMAGE_TYPE_EMPTY
    LOGO_IMAGE_TYPE_UNSUPPORTED
    LOGO_ALT_TEXT_TOO_LONG
    LOGO_ALT_TEXT_EMPTY
    LOGO_ALT_TEXT_NULL
    ENVIRONMENT_NOT_FOUND
    ENVIRONMENT_NOT_ON_GATEWAY
    ENVIRONMENT_PUBLISHED_NAME_INVALID
    PUBLISHED_NAME_ALREADY_USED_ON_GATEWAY
    INPUT_CONTAINS_DUPLICATED_PUBLISHED_NAMES
}

```

```
type ErrorSeverity {
    WARNING,
    ERROR
}
```

| Field     | Type          | Description                                                                                                                                                                    |
|-----------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityIds | *string*        | The ID of the fields that failed validation. For example, if there is an error in the welcome message's heading order, it identifies the elements within the heading that caused the error. |
| errorCode | *ErrorSeverity* | Identifies the type of the error.                                                                                                                                               |
| message   | *string*        | The error message.    |
| severity   | *ErrorSeverity*     |  The error severity of *WARNING* or *ERROR*.    |


## GraphQL implementation

-   **QUERY operation**

    The following example queries the Developer Portal title and content on the home page.

    Each of the fields within the query are optional, based on the data that you want to return. For instance, you can query on `internalName` only, if you only want to return the Internal Name of the Developer Portal.

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following header: `X-Account accountId`

    Request:

    ```
    query {
        devportal(id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>") {
            internalName,
            publishedName,
            welcomeMessage
        }
    }
    ```

    JSON response:

    ```
    {
      "data": {
         "devportal": {
    "internalName": "BizCo Developer Portal",
    "publishedName": "Business Company, Inc. Developer Portal",
    "welcomeMessage": "<p>Welcome to the developer portal for Business Company, where you can sample and subscribe to our APIs.<p>"
        }
      }
    }
    ```

-   **updateDeveloperPortal operation**

    The following example updates a Developer Portal's title and home page.

    For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following header: `X-AccountaccountId`

    :::tip 
    
    If you modify the welcome message using any HTML tag that we do not support, the Developer Portal rejects the API call with an error message.

    :::

    Request:

    ```
    mutation {
        devPortalUpdate(
            id: "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            devPortalInput: {
                internalName:"BizCo Developer Portal",
                publishedName: "Business Company, Inc. Developer Portal",
                welcomeMessage: "<p>Welcome to the developer portal for BizCo, where you can sample and subscribe to our APIs.<p>"
            }
            ) {
                status,
                warnings {
                entityIds,
                errorCode,
                message,
                severity
            }
        }
    }
    ```

    JSON response:

    ```
    {
        "data": {
            "devPortalUpdate": {
                "status": "SAVED",
                "warnings": []
            }
        }
    }
    ```


## Audit log usage 

``` 
{
  "QueryFilter" :
    {
      "expression" : {
          "operator" : "and",
          "nestedExpression" : [
            {
              "argument" : ["admin@boomi.com"],
              "operator" : "EQUALS",
              "property" : "userId"
            },
            {
              "argument" : ["api-portal_publishing"],
              "operator" : "EQUALS",
              "property" : "type"
            },          
            {
              "argument" : ["2021-03-28T00:00:00Z","2021-03-29T23:59:59Z"],
              "operator":"BETWEEN",
              "property":"date"
            }
          ]
        }
    }
}
```
