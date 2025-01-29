---
sidebar_position: 6
---

# Call Log Stream FAQ

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-76d19dc6-17ea-4923-9b9b-5050e921f821"/>
</head>


The following are frequently asked questions for the Call Log Stream feature. 

**Q: What is the Call Log Stream feature, and what does it do?**

**A:** A Call Log Stream is a WebSocket-based, streaming API that provides real-time, enriched API transaction details on a call by call basis with a JSON payload. Example data points include Source IP, Latency, Package/Plan/Service information, and API Key. A full field list can be found on the documentation for [Enriched Call Log Export](http://docs.mashery.com/analyze/ecle-frequently-asked-questions.xml). 

**Q: What is a WebSocket API?**

**A:** First referenced in the HTML 5 spec, WebSockets provide a full-duplex communication channel over TCP. As opposed to the request/response pattern of API standards such as REST or SOAP, WebSockets is a persistent connection to which data is pushed. For more information, see `https://en.wikipedia.org/wiki/WebSocket`. 

**Q: How does Call Log Stream differ from Call Log Export?**

**A:** The **Call Log Export** feature has a 1-1.5 hour delay, providing the same information as **Call Log Stream**, but in a CSV file delivered to S3. Call Log Export is great for more traditional data warehousing and is ideal for more traditional long-running analytics/queries. Whereas Call Log Stream was conceived to provide real-time, fine-grained traffic data, which would likely be used for more of an operational view of traffic health and status. 

**Q: Can I create multiple channels?**

**A:** Currently, one channel per customer is supported and one token per channel can be active at any time. 

**Q: Do Call Log Streams work with API Management's Organizational Management feature (DAPI)? Can I create a channel exclusively for my organization?**

**A:** No, currently Channels are Area-wide and there is no organizational distinction. 

**Q: Who can set up a Call Log Stream profile?**

**A:** Area administrators are the only people who have access to create channels or view the configuration. 

**Q: My connection to the Channel has disconnected, what do you recommend?**

**A:** As a best practice, we recommend adding auto reconnect to your client. There are many factors that might impact the stability of your connection. Network issues, client issues, and so on., can all play a part. We have also found that ensuring you are running the latest version of your client library can solve connection issues. We also have implemented the *Ping-Pong* feature of the WebSocket protocol, so should you have a low traffic set of APIs, enabling ping-pong on your client can ensure that the connection is not shut down due to inactivity. 

**Q: If the connection is disconnected do I lose data?**

**A:** The Call Log Stream feature does not currently queue data or provide an offset feature, therefore you receive data when you are connected, and data that was in the stream when you were disconnected is not be available. 

**Q: I am a Local Edition user; I have found that the logs in the Call Log Stream are not real time. Is Call Log Stream compatible with Local Edition ?**

**A:** Call Log Stream provides call data in near real time from the moment the data is received in the API Management infrastructure. For API Management customers, we manage that delivery and can therefore control the delivery timeline. For Local Edition customers, the latency is dependent on how frequently logs are synchronized with API Management. For customers on Local Edition 5.x, we recommend utilizing the Log Service in place of Call Log Stream for access to Call Log data. 

**Q:How many active connections per channel are allowed?**

**A:**You can have up-to five active connections per channel.
