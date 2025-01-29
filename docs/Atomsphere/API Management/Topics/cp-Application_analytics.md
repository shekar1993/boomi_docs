# Application Analytics

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-80ef3de1-9e42-4959-b43c-390967895d3e"/>
</head>

## Overview

The Analytics dashboard is carefully arranged to present crucial metrics and data visualizations that detail the Applications’ performance metrics. 

![Administration Portal - Applications - Analytics](../Images/img-cp-admin_portal_applications_analytics.png)

## Hits by Response Codes

On the upper left side of the analytics dashboard, there's a donut chart labeled "Hits by Response Codes." This visual tool displays the volume of API hits according to the HTTP response status codes they generated. Each segment is color-coded, corresponding to a different response code—200 (green), 400 (orange), 403 (orange), and 500 (purple)—allowing users to gauge at a glance the proportion of successful requests versus different classes of client and server errors.

## Hits Over Time

Adjacent to the donut chart is a line graph titled "Hits over time". This graph offers a temporal view, plotting the count of API hits over the course of a single day, broken down by hour. Each line represents a different response code, color-matched to the segments in the donut chart. This allows for a detailed analysis of traffic patterns and potential response issues as they fluctuate throughout the day.

## Latency Over Time

Below the "Hits over time" graph, there is another chart focusing on "Latency over time" measured in milliseconds (ms). It employs a bar-and-line hybrid style to communicate two key pieces of information: the average latency is represented by the line graph, while the range between minimum and maximum latencies for given times is depicted by the shaded bars. This dual representation provides a clear visualization of both the average performance and the volatility of response times.

 

 