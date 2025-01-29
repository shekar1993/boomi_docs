# Data center security

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-bc537e9b-23bb-4a23-895c-15c13c5e891e"/>
</head>

The Boomi data center stores a set of configuration and management information for all client accounts that allows for centralized control and distribution of integrations from any location even when a specific Atom is not running.

The following list identifies the stored information. It is important to note that this list does not include actual customer data processed through production integrations in an on-premise Atom to ensure data security and international data compliance.

- Integration Setup

  - Process definitions
  - Data maps
  - Connector configurations
  - Connector passwords if extensions are not used

- Extensions

  - Non-password field setup stored on server side

- Account Administration Info

  - Users — user name and password \(hashed, unable to decrypt\)
  - User role definitions

- Process Reporting

  - Process run records and statistics
  - Connector record statuses and tracked fields
  - Errors and stack traces

- Atom Management

  - Atom web server settings
  - Atom host name
  - IP address \(not visible to users\)
  - Up or down status
  - Operation system information
  - Version information
  - Startup properties

- Integration Alerts

  - Run errors
  - User notifications
  - Atom statuses

- Connector SDK

  - Private connector descriptor
  - Private connector implementation
  