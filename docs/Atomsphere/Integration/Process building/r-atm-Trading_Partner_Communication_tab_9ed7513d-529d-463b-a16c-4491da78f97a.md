# Trading Partner Communication tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9ed7513d-529d-463b-a16c-4491da78f97a"/>
</head>

The Communication tab is where you define the communication method to use to send and receive documents with trading partners.

The My Company component contains the communication/connections settings to use when paired with one or more partners that you trade with. If you use a VAN or central location to manage sending and receiving data for all trading partners, you can set them all in one place. You can configure individual communication settings for each trading partner in the trading partner component. Or, you can define a Communication Channel component and reuse the communication settings across multiple Trading Partner components.

The settings for My Company are different than partners that you trade with. You can define one or more methods in either trading partner type. The field settings are the same as those you define in the corresponding connector.

The available communication methods for B2B integration are:

- AS2
- Disk
- FTP
- HTTP
- MLLP
- SFTP

You can define each communication method once. When you add a communication method, the **Edit Configuration** panel opens. For Trading Partner components that are set to “my company,” you must configure the communication method settings manually. For Trading Partner components that are set to “partners that I trade with,” you can accept the default settings specified in the “my company” trading partner, specify unique settings to this partner, or use a shared Communication Channel component.

The table on the Communication tab identifies the communication methods that you have and, for “partners that I trade with,” the settings used.

To add additonal communication methods, click **Add Communication Method** and select one from the list. Once you have added each communication method once, the option to add additional methods is removed.

## “My company” settings

The settings that are required to be configured for a “My Company” trading partner differ based on the communication method.

### AS2 communication method

Use the AS2 Client connector for sending and the AS2 Shared Server connector for listening. To use the AS2 communication method with trading partners, configure:

- **Identification Information** - Set the ID, and select encryption, signing, and MDN signing certificates. No other identification information is needed for your company because all inbound listen communication is managed by the Atom’s shared web server.

- **Default Partner Send Settings** - Specify the URL and select SSL certificates as defaults for trading partners configured to use default AS2 communication settings. Additionally, specify the default authentication type — None or Basic — and, for Basic authentication, the default credentials. You can also specify whether the sender verifies the hostname.

:::caution

Only private certificates are eligible for importing as the default client SSL certificate.

:::

- **Default Partner Identification Information** - Specify the AS2 ID and select encryption, signing, MDN signing, and client SSL certificates as defaults for trading partners configured to use default AS2 communication settings. The SSL certificate is used only with trading partners that require client authentication in addition to the standard SSL certificate handshake.

 The option to reject duplicate messages by default is also available&mdash;associated with that option is a setting for the number of messages to check for duplicate IDs.

 The IP filtering option is also available&mdash;associated with that option is a list of IP addresses, ranges, and patterns from which access is allowed.

 :::caution

 Only private certificates are eligible for importing as the default encryption, signing, or MDN signing certificate.

 :::

- **Default Partner Listen Options** - The option is available to enforce Basic authentication on endpoints configured to use Basic authentication.

- **Message Disposition Notification (MDN) Options** - Define message and MDN options for all outbound communication to your trading partner.

- **Data Processing Options** - Add, delete, or reorder the processing steps.

For a paired trading partner configured to use custom AS2 communication settings or AS2 settings in a Communication Channel component, the default partner send and identification settings are overridden.

:::note

If you want trading partners that use AS2 to use Atom workers, set the **Default AS2 Workload** property on the Attachment Quotas tab in the Cloud Management page (**Manage** \> **Cloud Management**) to `Low_Latency_Debug`.

:::

### Disk communication method

To use the Disk communication method with trading partners, configure:

- **Get Options** - Define default connection directory and disk get operation settings.

- **Send Options** - Define default connection directory and disk send operation settings.

For a paired trading partner configured to use custom Disk Get and/or Send settings, or Disk settings in a Communication Channel component, the default settings are overridden.

### FTP communication method

To use FTP communication with trading partners, configure:

- **Settings** - Define default host connection and log-in credentials.

- **Get Options** - Define default FTP Get operation settings.

- **Send Options** - Define default FTP Send operation settings.

For a paired trading partner configured to use custom general, Get, and/or Send FTP settings, or FTP settings in a Communication Channel component, the default settings are overridden.

### HTTP communication method

To use HTTP communication with trading partners, configure:

- **Settings** - Define default host connection and log-in credentials.

- **SSL Options** - Define default options related to SSL authorization and certificate usage.

- **Advanced** - Define default options for connection timneout, read timeout, and cookie scope.

- **Listen Options** - Define the default operation and credentials.

- **Get Options** - Define default HTTP Get operation settings.

- **Send Options** - Define default HTTP Send operation settings.

For a paired trading partner configured to use custom HTTP communication, Listen, Get, and/or Send settings, or HTTP settings in a Communication Channel component, the default settings are overridden.

### MLLP communication method

Use the MLLP Client connector communication for sending to HL7 or X12 trading partners; use the MLLP Server connector for listening. There are no Listen settings because all inbound listen communication is managed at the Atom level. Configure the following MLLP Send settings:

- **Host**
- **Port**
- **Send Timeout**
- **Receive Timeout**
- **Max Retry**
- **Fail on Timeout**
- **Use Persistent Connections**
- **Use Trusted SSL Certificate**
- **Use Client SSL Authorization**

### SFTP communication method

To use the SFTP communication method with trading partners, configure:

- **Settings** - Define default host connection and log-in credentials, and configure file protection.

- **SSH Options** - Define default options related to private and Known Host key usage.

- **Get Options** - Define default SFTP Get operation settings.

- **Send Options** - Define default SFTP Send operation settings.

For a paired trading partner configured to use custom general, Get, and/or Send SFTP communication settings, or SFTP settings in a Communication Channel component, the default settings are overridden.

## “Partners that I trade with” settings

In the **Communication Settings** list, the following selections are available:

- **Use All Defaults** - This partner uses the settings configured in whichever My Company that it is paired with on a Start or Trading Partner step.

- **Configure Specific Settings** - The settings are used whenever this partner appears in a Start or Trading Partner step for the specified communication method.

- **Use Shared Communication** - This partner uses the settings configured in the selected **Connection**, which is a Communication Channel component.
