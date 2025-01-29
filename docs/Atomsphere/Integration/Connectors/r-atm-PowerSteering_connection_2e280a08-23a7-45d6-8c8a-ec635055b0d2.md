import TestConnection from './_TestCon.md'

# PowerSteering – Partner connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2e280a08-23a7-45d6-8c8a-ec635055b0d2"/>
</head>


The PowerSteering – Partner connection represents a single PowerSteering account including sign-in credentials.

If you have multiple accounts, you need separate connection for each one and configure the URL accordingly. Pair a single connection with a different PowerSteering –Partner operation to perform unique actions on a PowerSteering account.

## Connection tab 

The PowerSteering – Partner connector uses Basic access authentication `<username>:<password>` for authentication and authorization. In addition, provide the URL to access the PowerSteering API service endpoint, and the API Version.

The following fields appear on the **Connection** tab.

**URL** - 
 The URL for the PowerSteering REST API service endpoint. Enter the base path up to `/rest`. This URL is the same one used to sign in to the PowerSteering web interface.

**Username** - 
  The user name for logging in to the PowerSteering web interface. You must have Administrator permissions.

**Password** - 
 The password for signing in to the PowerSteering web interface.

**API Version** - 
 The PowerSteering REST API version, currently `v1`.

<TestConnection />