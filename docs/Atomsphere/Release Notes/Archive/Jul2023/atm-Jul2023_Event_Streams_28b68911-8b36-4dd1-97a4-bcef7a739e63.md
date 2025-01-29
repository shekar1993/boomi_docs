# Event Streams 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-28b68911-8b36-4dd1-97a4-bcef7a739e63"/>
</head>

**Features**:

-   We improved the performance of the connector Produce operation that increases publish throughput by 5x. \(ES-1394\)

**Fixes**:

-   We corrected an issue where topics from deleted environments appeared in the Dashboard without a named environment. All topics now display the appropriate environment data. \(ES-1410\)
-   We updated the Event Streams page titles to match the standard Boomi naming convention. \(ES-1457\)
-   We corrected an issue that caused the Dead Letter Backlog Summary to reset to zero when the time interval changed. It now displays the correct count without the need to refresh. \(ES-1528\)