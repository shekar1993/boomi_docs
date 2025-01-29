---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-98c8979d-0d94-4bb1-8c3f-b7b6ddd5932f"/>
</head>

This section includes examples of how to use the REST Connector. All examples have an endpoint key of tp84zg4yfqjj3f3p597rqf4r.

## Examples

| Request Headers | Request Payload | Pre-Input Config | Response Headers | Cache TTL | Response Payload | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| Content-Type: application/xml | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` |     | Content-Type: application/json | For pre-input<br/><br/>cache_ttl: 5 | `{"iata_number": "12345678"}` | Caching: Yes<br/><br/>If the second request comes within 5 minutes of the same endpoint with the same request payload, the response is retrieved from the cache. |
| Content-Type: application/xml | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` |     | Content-Type: application/zip |     | Zip file attached in the response. | Caching: No<br/><br/>Caching will not be performed for binary responses. |
| Content-Type: application/json | `{"first-name": "Jane","last-name": "Doe","address": "Paris","phone-number": "123456"}` | -   | Content-Type : application/xml | For pre-input<br/><br/>cache_ttl: 10 | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` | Caching: Yes<br/><br/>If the second request comes within 10 minutes of the same endpoint with the same request payload, the response is retrieved from the cache. |
| Content-Type: application/soap + xml | `<?xml version="1.0" encoding="UTF-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee></soap:Body></soap:Envelope>` | -   | Content-Type : application/json |     | `{"first-name": "Jane","last-name": "Doe","address": "Paris","phone-number": "123456"}` | Caching: No<br/><br/>Caching is only performed for the REST request. |
| Content-Type: text/xml | `<?xml version="1.0" encoding="UTF-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee></soap:Body></soap:Envelope>` |     | Content-Type: application/json |     | `{"first-name": "Jane","last-name": "Doe","address": "Paris","phone-number": "123456"}` | Caching: No<br/><br/>400 Bad Request will be thrown as request payload contains SOAP message. |
| -   | `{"first-name": "Jane","last-name": "Doe","address": "Paris","phone-number": "123456"}` | -   | Content-Type: application/xml |     | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` | Caching: No<br/><br/>Caching is not performed as the Content-Type is not defined for request. |
| Content-Type: application/xml | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number></employee>` | -   |     |     | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number>` | Caching: No<br/><br/>Caching is not performed as the Content-Type is not defined for response. |
| Content-Type: application/xml | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number>` |     | Content-Type: application/json |     | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number>` | Caching: No<br/><br/>400 Bad Request will be thrown as request payload contains invalid XML. |
| Content-Type: application/json | -   | -   | Content-Type: application/json |     | `<?xml version="1.0" encoding="UTF-8"?><employee><first-name>Jane</first-name><last-name>Doe</last-name><address>Paris</address><phone-number>123456</phone-number>` | Caching: No<br/><br/>Caching is not performed as the request's payload is empty. |
