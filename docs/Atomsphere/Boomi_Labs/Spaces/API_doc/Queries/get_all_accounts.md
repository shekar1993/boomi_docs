---
sidebar_position: 8
---
# Get All Accounts 

<head>
  <meta name="guidename" content="Spaces"/>
  <meta name="context" content="GUID-fed559e8-b067-478f-b225-a0c4feac85de"/>
</head>


This API query retrieves a list of accounts associated with the Space for which you have valid Space Account access. By default, the API retrieves a list of all the accounts. Additionally, you can search for a specific account by specifying the optional **Criteria** Object in the request.

To perform this API operation, send an HTTP POST request to *platform.boomi.com/graphql*

Sample Request URL: [https://platform.boomi.com/graphql](https://qa.boomi.com/graphql)

| Key           | Value            |
| ------------- | ---------------- |
| SPACE_GUID    | `<The Space guid>` |
| Authorization | Bearer`<Token>`    |
| Accept        | application/json |

#### Get All Associated Accounts

To get all the accounts associated with the user, you can make spaceAccount graphql call.

**Request Payload**

```
query spaceAccounts
{
  spaceAccounts
  {
     id
     name
  }
}
```

**Sample Response**

```
{
  "data": {
    "spaceAccounts": [
      {
        "id": "name-1accounta-WU8VYK",
        "name": "Name-1-Account-A"
      },
      {
        "id": "name-2accounta-V41CJX",
        "name": "Name-2-Account-A"
      },
      {
        "id": "name-3accounta-7MVN0U",
        "name": "Name-3-Account-A"
      }
    ]
  }
}
```

#### Search for Specific account(s)

To search for a specific account, you can pass an additional Criteria object in the request payload. **Criteria** object accepts two mandatory parameters, operator and argument. The query returns all accounts that match the search string sent in the request.

**Request Payload**

```
query spaceAccounts
{
  spaceAccounts(criteria:{
    operator: CONTAINS,
    argument: "test"
  })
  {
     id
     name
  }
}
```

| Field    | Type          | Description                                                  | Required/Optional |
| -------- | ------------- | ------------------------------------------------------------ | ----------------- |
| operator | enum Operator | The parameter to indicate the type of search. Possible values are: CONTAINS \| STARTSWITH | Required          |
| argument | string        | Contains the search string. The argument supports empty string search (For example - argument: "") or search with any content (For example - argument: "test"). | Required          |

**Sample Response**

```
{
  "data": {
    "spaceAccounts": [
      {
        "id": "TestAccountA-WU8VYK",
        "name": "Test-Account-A"
      }
    ]
  }
}
```

#### Success Codes

Response Code: 200

**Sample Response**

```
{
  "data": {
    "spaceAccounts": [
      {
        "id": "name-1accounta-WU8VYK",
        "name": "Name-1-Account-A"
      },
      {
        "id": "name-2accounta-V41CJX",
        "name": "Name-2-Account-A"
      },
      {
        "id": "name-3accounta-7MVN0U",
        "name": "Name-3-Account-A"
      }
    ]
  }
}
```

#### Error Codes

400: Validation error

**Sample Response**

```
{
  "data": null,
  "errors": [
    {
      "message": "Syntax Error: Unexpected \"}\".",
      "locations": [
        {
          "line": 6,
          "column": 3
        }
      ],
      "extensions": {}
    }
              ]
  
}
```

401: Unauthorized

**Sample Response**

```
{
  "data": null,
  "errors": [
    {
      "message": "Downstream Execution Error: Unauthorized",
      "path": [
        "spaceAccounts"
      ],
      "extensions": {}
    }
  ]
}
```

500: Server error

**Sample Response**

```
{
  "data": null,
  "errors": [
    {
      "message": "Downstream Execution Error: Server Error",
      "path": [
        "spaceAccounts"
      ],
      "extensions": {}
    }
  ]
}
```