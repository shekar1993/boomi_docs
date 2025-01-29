# REST to SOAP Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6105cdf6-c53c-4abc-9f92-09b3f2b747be"/>
</head>

You can use the `rest-to-soap` policy to expose a SOAP backend service as a REST API. The policy will pass the SOAP envelope message to the backend service as a POST request. SOAP envelopes support [expression language](api-expression_language) to provide dynamic SOAP actions.

For example, a SOAP API `http(s)://GATEWAY_HOST:GATEWAY_PORT/soap?countryName=France` with the following rest-to-soap policy SOAP envelope content will return the ISO country code for France:

```
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope\\\" xmlns:web=\\\"http://www.oorsprong.org/websamples.countryinfo">
   <soap:Header/>
   <soap:Body>
      <web:CountryISOCode>
         <web:sCountryName>{#request.params['countryName']}</web:sCountryName>
      </web:CountryISOCode>
   </soap:Body>
</soap:Envelope>
```


## Timing

|On Request| On Response|
|---|---|
|X||

## Configuration

| Property  |Required   |Description     | 
|---|---|---|
|SOAP Envelope|yes|SOAP envelope used to invoke WS (supports [expression Language](api-expression_language)).|
|SOAP Action|no|`SOAPAction` HTTP header sent when invoking WS.|
|Charset|no|This charset will be appended to the Content-Type header value.|
|Preserve Query Parameters|no|Whether the query parameters are propagated to the backend SOAP service.|

## Example 1: REST to SOAP Policy for processing a payment

JSON request:

```json
{
   "PaymentID": "P12345",
   "Amount": 100.06,
   "Currency": "USD",
   "PaymentMethod": "CreditCard",
   "CardDetails": {
      "CardNumber": "4111111111111111",
      "ExpiryDate": "12/26",
      "CVV": "123"
   },
   "Message": {
    "en":"Your payment has been successfully processed.",
    "fr": "Votre paiement a été traité avec succès.",
    "cn": "您的支付已成功处理."
  }
}
```

SOAP Envelope configuration:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:example="http://www.example.com/service">
   <soapenv:Header/>
   <soapenv:Body>
      <example:ProcessPayment>
         <example:PaymentID>{#jsonPath(#request.content, '$.PaymentID')}</example:PaymentID>
         <example:Amount>{#jsonPath(#request.content, '$.Amount')}</example:Amount>
         <example:Currency>{#jsonPath(#request.content, '$.Currency')}</example:Currency>
         <example:PaymentMethod>{#jsonPath(#request.content, '$.PaymentMethod')}</example:PaymentMethod>
         <example:CardDetails>
            <example:CardNumber>{#jsonPath(#request.content, '$.CardDetails.CardNumber')}</example:CardNumber>
            <example:ExpiryDate>{#jsonPath(#request.content, '$.CardDetails.ExpiryDate')}</example:ExpiryDate>
            <example:CVV>{#jsonPath(#request.content, '$.CardDetails.CVV')}</example:CVV>
         </example:CardDetails>
        <example:PaymentMessage-Fr-FR>{#jsonPath(#request.content, '$.Message.fr')}</example:PaymentMessage-Fr-FR>
        <example:PaymentMessage-Cn>{#jsonPath(#request.content, '$.Message.cn')}</example:PaymentMessage-Cn>
      </example:ProcessPayment>
   </soapenv:Body>
</soapenv:Envelope>
```

SOAP output:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:example="http://www.example.com/service">
    <soapenv:Header/>
    <soapenv:Body>
        <example:ProcessPayment>
            <example:PaymentID>P12345</example:PaymentID>
            <example:Amount>100.06</example:Amount>
            <example:Currency>USD</example:Currency>
            <example:PaymentMethod>CreditCard</example:PaymentMethod>
            <example:CardDetails>
                <example:CardNumber>4111111111111111</example:CardNumber>
                <example:ExpiryDate>12/26</example:ExpiryDate>
                <example:CVV>123</example:CVV>
            </example:CardDetails>
            <example:PaymentMessage-Fr-FR>Votre paiement a été traité avec succès.</example:PaymentMessage-Fr-FR>
            <example:PaymentMessage-Cn>您的支付已成功处理.</example:PaymentMessage-Cn>
        </example:ProcessPayment>
    </soapenv:Body>
</soapenv:Envelope>
```

## Example 2: JSON as an array

JSON input:

```json
[
   {
      "CustomerID": "C12345",
      "Name": "John Doe",
      "Email": "john.doe@example.com",
      "Phone": "+1234567890",
      "Address": "123 Elm St, Springfield"
   },
   {
      "CustomerID": "C12346",
      "Name": "Jane Smith",
      "Email": "jane.smith@example.com",
      "Phone": "+0987654321",
      "Address": "456 Oak St, Shelbyville"
   }
]
```

SOAP Envelope configuration:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:crm="http://www.crmlegacy.com/service">
   <soapenv:Header/>
   <soapenv:Body>
      <crm:CreateCustomer>
         <!-- Customer 1 -->
         <crm:Customer>
            <crm:CustomerID>{#jsonPath(#request.content, '$[0].CustomerID')}</crm:CustomerID>
            <crm:Name>{#jsonPath(#request.content, '$[0].Name')}</crm:Name>
            <crm:Email>{#jsonPath(#request.content, '$[0].Email')}</crm:Email>
            <crm:Phone>{#jsonPath(#request.content, '$[0].Phone')}</crm:Phone>
            <crm:Address>{#jsonPath(#request.content, '$[0].Address')}</crm:Address>
         </crm:Customer>
         <!-- Customer 2 -->
         <crm:Customer>
            <crm:CustomerID>{#jsonPath(#request.content, '$[1].CustomerID')}</crm:CustomerID>
            <crm:Name>{#jsonPath(#request.content, '$[1].Name')}</crm:Name>
            <crm:Email>{#jsonPath(#request.content, '$[1].Email')}</crm:Email>
            <crm:Phone>{#jsonPath(#request.content, '$[1].Phone')}</crm:Phone>
            <crm:Address>{#jsonPath(#request.content, '$[1].Address')}</crm:Address>
         </crm:Customer>
      </crm:CreateCustomer>
   </soapenv:Body>
</soapenv:Envelope>
```

SOAP XML output:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:crm="http://www.crmlegacy.com/service">
   <soapenv:Header/>
   <soapenv:Body>
      <crm:CreateCustomer>
         <!-- Customer 1 -->
         <crm:Customer>
            <crm:CustomerID>C12345</crm:CustomerID>
            <crm:Name>John Doe</crm:Name>
            <crm:Email>john.doe@example.com</crm:Email>
            <crm:Phone>+1234567890</crm:Phone>
            <crm:Address>123 Elm St, Springfield</crm:Address>
         </crm:Customer>
         <!-- Customer 2 -->
         <crm:Customer>
            <crm:CustomerID>C12346</crm:CustomerID>
            <crm:Name>Jane Smith</crm:Name>
            <crm:Email>jane.smith@example.com</crm:Email>
            <crm:Phone>+0987654321</crm:Phone>
            <crm:Address>456 Oak St, Shelbyville</crm:Address>
         </crm:Customer>
      </crm:CreateCustomer>
   </soapenv:Body>
</soapenv:Envelope>
```

