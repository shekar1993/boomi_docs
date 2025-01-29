# Files.com - Partner changelog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-09c6c0bb-123c-48af-9790-f89d16516063"/>
</head>

## Changelog

**2025-01 (Version 141), Current**

- The "Return Application Error Responses" behavior is no longer ignored for operations.

**2024-11 (Version 133)**

- Fixed an issue in the **Upload** operation which was slowing uploads that would cause a time out prior to the whole file being delivered.

- Fixed an issue in the **List** operation where the date format was being returned using Unix Epoch Time instead of the UTC time format. The response profile expects UTC format.

**2024-07 (Version 121)**

- A Limit option was added to the List operation. Results can now be limited to the number specified.

- Fixed a defect in the **Per Page** option of the deprecated **List folder items** operation that caused it to be ignored.

**2024-06 (Version 119)**

- Added 9 new actions:
    - Copy
        - File and Folder
    - Create
        - Folder, Group, ShareLink, ShareLinkNotification, ShareLinkRecipient, and User
    - Delete
        - File, Folder, Group, ShareLink, ShareLinkNotification, and User
    - Download
        - File
    - List
        - Folder, Groups, ShareLinks, ShareLinkDownloads, ShareLinkNotifications, ShareLinkRecipients, ShareLinkRegistrations, and Users
    - Move
        - File and Folder
    - Show
        - FileDetails, FolderDetails, GroupDetails, ShareLinkDetails, ShareLinkNotificationDetails, and UserDetails
    - Update
        - Group, ShareLink, ShareLinkNotification, and User
    - Upload
        - File
- Deprecated the 3 original operations, which are still available in this version for backward compatibility.

- Improved connectivity, throughput, and auto-retry capabilities.