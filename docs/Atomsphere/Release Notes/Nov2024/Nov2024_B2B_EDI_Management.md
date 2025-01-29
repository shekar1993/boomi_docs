# B2B/EDI Management November 2024 Release Notes

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-cd9213f2-42c7-409a-b3fa-3f5fec29442e"/>
</head>

**We added this feature:**

- You can control whether special character escaping is applied for reading and writing data elements of an HL7 profile. This behavior can be configured as a global profile option or individually for specific data elements when the global option is not enabled. (B2B-4491)

  To learn more about this feature, refer to [EDI profile's Options tab](../../Integration/Process%20building/r-atm-EDI_Profiles_Options_tab_6261e4ab-3523-482c-807e-89c033f8fc19.md) and [Using enhanced composites](../../Integration/Process%20building/int-Using_enhanced_composites.md).

**We fixed these issues:**

- After receiving data on an MLLP server port previously configured for client SSL authentication before SSL was disabled, an authentication failure response is no longer returned. (B2B-4576)

- After receiving EDI data, the MLLP server no longer returns both the auto-acknowledgment and the response of the Return Documents step when key-based routing is configured with auto-acknowledgment enabled. (B2B-4574)

- After receiving non-EDI data, the MLLP Server Connector no longer fails to return a response when key-based routing is configured with the MLLP Listen operation auto-acknowledgment flag and the Return Documents step is used in the same process. (B2B-4573)

- The MLLP listener returns the correct error response when it receives a message on a port that doesn't match any identifier routes on a newly installed Atom. (B2B-4534)

- On the MLLP Server Settings page, sorting the ports by the **Ports** column correctly shows the ports in ascending order on all pages. (B2B-4507)

- An inoperable delete icon no longer shows for ports when you view the MLLP Server Settings page for an Atom. (B2B-4506)

- On the MLLP Server Settings page, when you filter the ports by **Require Client SSL?**, the results show only ports that have SSL configured regardless of whether Client SSL was previously enabled on a port. (B2B-4435)
