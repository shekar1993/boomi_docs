# OpenAPI Specification File Reference

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c22e9762-4e86-400f-a87a-3244c780e361"/>
</head>


OpenAPI specification objects in generated OpenAPI specification files are derived from the API Service component’s configuration settings and shared web server settings. Open API objects not mentioned are not returned in generated OpenAPI specification files.

For general information about the JSON schema for OpenAPI specification files, refer to the [Open API v3.0 specification](https://spec.openapis.org/oas/v3.0.0) or [Open API Specification in Github](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md).

## General API metadata

General API metadata is returned in the root document object `openApi`.

`openApi`<br />
`info`<br />
Child object:

`title`
<br />**Published API Title** in the API Service component’s **General** tab.

`description`
<br />**Published Description** in the API Service component’s **General** tab.

`version`
<br />**Published Version** in the API Service component’s **General** tab.

`contact`
<br />Child object:

-   `name` — **Publisher Name** in the Publisher Contact Information section of the API Service component’s **Documentation** tab.
-   `url` — **Publisher URL** in the Publisher Contact Information section of the API Service component’s **Documentation** tab.
-   `email` — **Publisher Email** in the Publisher Contact Information section of the API Service component’s **Documentation** tab.

`license`
<br />Child object:

-   `name` — **License Title** in the License Metadata section of the API Service component’s **Documentation** tab.
-   `url` — **License Information** in the License Metadata section of the API Service component’s **Documentation** tab.

`servers`
<br />  `url` — The address where the API can be called.
-   If there are forwarding headers present on the request, the values from the headers are used. If the `x-request-uri` header is present, the exact value of this header as the server URL is used, unless the value in `x-request-uri` is not a valid and not a valid URL. In this case, it is ignored and the request address is used.
-   If the Atom is behind a Boomi gateway, the address is the gateway address, because the gateway is configured to forward the original request address to the Atom.
-   If the request does not contain forwarding headers, the value is the destination address from the request.

`paths`
<br />Child object — see [paths: REST Route Descriptions](#paths-rest-route-descriptions).

`components`
<br />Child object — see [schemas: Request and Response Profile Schemas](#schemas-request-and-response-profile-schemas).

`security`
<br />A declaration of which security mechanisms can be used across the API.

## paths: REST route descriptions

The Path Item object is generated from each endpoint configured in the API and the Path item contains:

-   `summary` — The **Endpoint Description**.
-   `operation method`— The HTTP method.
-   `operation object`
-   `summary` — Name of the Web Services Server listener **Process** component linked to the operation.
-   `description` — Derived from the endpoint if it is set or from the process.
-   `tags` — A list of tags for API documentation control. Tags are used for logical grouping of operations by resources or any other qualifier.
-   `requestBody` —A `content` entry is added for each supported content type that the operation accepts. If the operation is using input profile, the schema for the `content` entry is generated from the profile.
-   Single Data — `application/binary`
-   Single XML Object — `application/xml`
-   Multiple XML Objects — `application/xml`
-   Single JSON Object — `application/json`
-   Multiple JSON Objects — `application/json`
-   Multipart/form-data — `multipart/form-data`
-   `responseBody`
-   `parameters`

:::note

If multiple REST routes are distinguished only by HTTP headers specified for matching, a Path Item object is returned only for the most recently added route.

:::

Example:

``` 
"paths": {
"/2347ResourcePath": {
"get": {
"tags": [
"2347ResourcePath"
],
}
}
}
"summary": "2347Process",
"description": "2347Endpoint description",
"parameters": 
{
"name": "advacedheader",
"in": "header",
"required": false,
"schema": {
"type": "string"
}
}
```

`responses`
<br />An entry is included for each possible response code for the operation. In the following example, the operation can produce two responses, one with HTTP code 200 and one with HTTP code 405. The JSON object for each of those keys is the [Response Object](https://spec.openapis.org/oas/v3.0.0#response-object).

``` 
"responses": {
"200": {
"description": "Pet updated.",
"content": {
"application/json": {},
"application/xml": {}
}
},
"405": {
"description": "Invalid input",
"content": {
"application/json": {},
"application/xml": {}
}
}
},
```

`parameters`
<br />In this child Parameter Definitions object, each of certain types of the operation’s input parameters is returned as a Parameter object.

A parameter’s type is returned in its `in` field. The following types of parameters are returned:

-   path

-   header


A path parameter object is returned for each URL path parameter — that is, each portion of the operation’s **Resource Path** delineated in braces \{\}.

`name`
<br />The corresponding delineated parameter name in **Resource Path**.

`required`
<br />Returned as “true”.

`type`
<br />Returned as “string”.

A header parameter object is returned for:

-   Each of the operation’s defined **HTTP Headers**. These are the headers defined for routing purposes in the API Service component’s **REST** tab. Header values are not returned in the object because the OpenAPI specification does not provide a means for returning header values.

-   Each of the **HTTP Headers**, defined in the API Service component’s **General** tab, whose values in REST and SOAP requests are potentially passed to the API’s linked listener process execution as dynamic document properties.


`name`
<br />The header name.

`required`
<br />
- If returned as “true”, the header is of the type used for routing purposes.

-   If returned as “false”, the header is of the type used to pass dynamic document properties to the linked process execution.


`type`
<br />Returned as “string”.

`name`
<br />Name of the **Request Profile** component.

`description`
<br />Description of the request profile component.

`schema`
<br />Reference to the Definition object in which the request profile is actually defined — see “`schemas`: Request and Response Profile Schemas” below.

## schemas: request and response profile schemas

The schema of each XML or JSON request and response profile for operations specified for REST routes defined in the API Service component’s **REST API** tab is returned as a Schema object whose name is the profile’s root element or object. If the name of the root element in an XML profile is the same as that of a root object in a JSON profile, “ns\#-” is prepended to the name of the schema returned for the XML profile. To ensure the name of the root element or object is properly returned as the name of the schema, you should URL-encode that name in the profile.

The returned schemas comply with the JSON Schema V4 standard.

In objects describing numeric elements or objects in profiles, the `type` and `format` field values are derived as follows:

**Numeric data type in profile**
**Float \(less than nine digits\)**
<br />
-   `type` — number
-   `format` — float

**Double \(nine or more digits\)**
<br />
-   `type` — number
-   `format` — double

**Integer \(32-bit, less than nine digits\)**
<br />
-   `type` — integer
-   `format` — int32

**Long \(64-bit, nine or more digits\)**
<br />
-   `type` — integer
-   `format` — int64

In objects describing date/time elements or objects in profiles, the `type` and `format` field values are derived as follows:

**Date/time data type in profile** <br />
**Date \(matching the full date format per [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) — YYYY-MM-dd\)**
<br /> 
-   `type` — string
-   `format` — date

**DateTime \(date format not matching the full date format per [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt)\)**
<br />                          
-   `type` — string
-   `format` — date-time

In objects whose **Comments** fields are specified in the profile, the comments are present in the `description` field value.

In objects describing looping and repeating elements in XML profiles, the `minItems` field value is derived from the element’s **Min Occurs** setting.

In objects describing elements and attributes in XML profiles, the XML child object’s fields are derived as follows:

**XML child object field**
`namespace`
<br />Namespace defined in the profile’s **Types** tab.

`prefix`
<br />
Platform -assigned prefix in the form ns\#, where \# corresponds to the matching namespace. Prefix assignments specified in the profile’s **Types** tab are disregarded. If this object’s parent is a reference to another XML element or attribute definition, “nons” \(no namespace\) is prepended to the reference.

`attribute`
<br />Omitted for elements. Returns “true” for attributes.

The `wrapped` field is not returned.

## securitySchemes: Shared Web Server basic authentication

If the Shared Web Server responding to the OpenAPI specification file request is configured to require basic authentication, the following objects are returned:

-   `securitySchemes` — A single definition is returned in this object. The definition name is derived from the **Authentication Type** setting in the **General** tab of the Shared Web Server panel. A value of `basic` is returned in the definition’s `type` field regardless of the **Authentication Type** setting.

:::note

If an Atom is behind an API Gateway, the `securitySchemes` is derived from the authentication method used for the API, which can be `basic`, `oauth2`, or `apiKey`.

:::

-   `security` — The object name — `basic`, `oauth2`, or `apiKey` — This is derived from the Atom port on which the request came from. For example, if an Atom is configured with Basic authentication on port 8083 and None on port 8085, and the request came on port 8083, the `security` field will have an entry for `basic: []`. If the request is received on port 8085, the `security` object will have entry for `no security`, which is `{}` \(emtpy JSON object\).


## Example openapi.json file

``` json
{
  "openapi" : "3.0.1",
  "info" : {
    "title" : "Create REST Endpoint",
    "description" : "Sample Test",
    "version" : "100"
  },
  "servers" : [ {
    "url" : "https://company.com:8090/ws/RegressionEnv/automation"
  } ],
  "tags" : [ {
    "name" : "AUTOREST"
  } ],
  "paths" : {
    "/AUTOREST/ep1" : {
      "post" : {
        "tags" : [ "AUTOREST" ],
        "summary" : "MultipleResponseCodesProcess",
        "parameters" : [ {
          "name" : "customheader",
          "in" : "header",
          "required" : true,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "content" : {
              "text/plain" : {
                "schema" : {
                  "type" : "string"
                }
              }
            }
          },
          "500" : {
            "$ref" : "#/components/responses/500"
          },
          "522" : {
            "$ref" : "#/components/responses/522"
          },
          "401" : {
            "$ref" : "#/components/responses/401"
          },
          "413" : {
            "$ref" : "#/components/responses/413"
          },
          "404" : {
            "$ref" : "#/components/responses/404"
          },
          "503" : {
            "$ref" : "#/components/responses/503"
          },
          "300" : {
            "description" : "300 description",
            "content" : {
              "multipart/form-data" : {
                "schema" : {
                  "$ref" : "#/components/schemas/Root"
                }
              }
            }
          },
          "400" : {
            "description" : "400 description",
            "content" : {
              "text/html" : {
                "schema" : {
                  "type" : "string"
                }
              },
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/Root"
                }
              }
            }
          },
          "505" : {
            "description" : "505 description",
            "content" : {
              "application/xml" : {
                "schema" : {
                  "$ref" : "#/components/schemas/element"
                }
              }
            }
          },
          "default" : {
            "description" : "default description",
            "content" : {
              "application/binary" : { }
            }
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "Root" : {
        "oneOf" : [ {
          "type" : "string"
        }, {
          "type" : "string"
        } ]
      },
      "element" : {
        "minItems" : 1,
        "type" : "array",
        "items" : {
          "type" : "object",
          "properties" : {
            "child1" : {
              "type" : "object",
              "properties" : {
                "child2" : {
                  "type" : "number",
                  "format" : "double"
                }
              }
            }
          }
        }
      }
    },
    "responses" : {
      "default" : {
        "description" : "Unidentified Exception",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "400" : {
        "description" : "Bad Request - There are miscellaneous errors with the request, for example, mismatches between the request and what is allowed for the operation.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "500" : {
        "description" : "Internal Server Error - This generic error message appears when an unexpected condition was encountered and a more specific message is not suitable.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "522" : {
        "description" : "Connection Timed Out - This message is returned to the client when the SOA Worker Maximum Execution Time has been exceeded.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "401" : {
        "description" : "Unauthorized or 403 Forbidden - Authentication errors.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "413" : {
        "description" : "Request Entity Too Large - The request data was too large. This is based on the SOA Input Size quota.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "404" : {
        "description" : "Not Found - Invalid URL path.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      },
      "503" : {
        "description" : "Service Unavailable - The caller has hit a throttle or the request was rejected because the Atom is starting or stopping.",
        "content" : {
          "text/html" : {
            "schema" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "securitySchemes" : {
      "X-API-Key" : {
        "type" : "apiKey",
        "description" : "This API key is optional.",
        "name" : "X-API-Key",
        "in" : "header"
      }
    }
  },
  "security" : [ {
    "X-API-Key" : [ ]
  }, { } ]
}

```
