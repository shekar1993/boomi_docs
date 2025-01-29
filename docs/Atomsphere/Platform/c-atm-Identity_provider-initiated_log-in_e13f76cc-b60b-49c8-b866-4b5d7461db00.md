# Identity provider-initiated sign in

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-e13f76cc-b60b-49c8-b866-4b5d7461db00"/>
</head>

Identity provider-initiated sign in for single sign-on ensures a user is authorized to access the Boomi Enterprise Platform.

When a user signs on to their identity provider, clicks a link to a service provider \(the \), and is redirected to the platform page, the following occurs:

1. If the user does not have a valid local security context at the identity provider, the user will be challenged to supply their credentials to the identity provider site, `idp.example.org`.

2. The user provides valid credentials and a local log-on security context is created for the user at the identity provider.

3. The user selects a menu option or link on the identity provider to request access to a service provider web site, in our case, `platform.boomi.com`. This causes the identity provider's Single Sign-On Service to be called.

4. The Single Sign-On Service builds a SAML assertion representing the user's log-on security context. The platform accepts a SAML `<Response\>` message from the identity provider if:

    - The assertion is digitally signed and then placed within a SAML `<Response\>` message, or
    - The assertion is not signed but the SAML `<Response\>` message is, or
    - The assertion is signed and placed within a SAML `<Response\>` message AND the SAML `<Response\>` message is also signed.

    The \<Response\> message is then placed within an HTML form as a hidden form control named "SAMLResponse". The requested platform resource URL is also encoded into the form using a hidden form control named "RelayState" unless a Relay State URL is configured for the user in the identity provider, in which case that URL is instead used as the RelayState value.

    The Single Sign-On Service sends the HTML form back to the browser in the HTTP response. For ease-of-use, the HTML form typically contains script code that will automatically post the form to the destination site.

5. The browser, due either to a user action or execution of an "auto-submit" script, issues an HTTP POST request to send the form to the platform. The platform's Assertion Consumer Service obtains the \<Response\> message from the HTML form for processing. The digital signature on the SAML assertion must first be validated; if the assertion signature does not exist, the digital signature on the response message is validated instead. 

   Then the assertion contents are processed to create a local log-on security context for the user within the platform. When this processing completes, the platform retrieves the RelayState data \(if any\) to determine the desired application resource URL and sends an HTTP redirect response to the browser directing it to access the requested resource.

6. An access check is made to establish whether the user has the correct authorization to access the resource.

7. The resource is then returned to the browser.

For more information about POST Bindings, see section 5.1.4 and Figure 14 at this Web site: [http://www.oasis-open.org/committees/download.php/27819/sstc-saml-tech-overview-2.0-cd-02.pdf](http://www.oasis-open.org/committees/download.php/27819/sstc-saml-tech-overview-2.0-cd-02.pdf)

## Sample Identity Provider SAML \<Response\> Message

In this sample, `"http://your.identity.provider"` is the identity provider service.

```java
<samlp:Response Destination="https://platform.boomi.com/sso/your-sso-account-id/saml"	
   ID="..." IssueInstant="2012-04-11T19:27:04Z"
	Version="2.0" xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
	<saml:Issuer xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">http://your.identity.provider</saml:Issuer>
	<samlp:Status xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
		<samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"
			xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
		</samlp:StatusCode>
	</samlp:Status>
	<saml:Assertion ID="..."
		IssueInstant="2012-04-11T19:27:04Z" Version="2.0"
		xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">
		<saml:Issuer>http://your.identity.provider</saml:Issuer>
		<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
			<ds:SignedInfo>
				<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
				<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
				<ds:Reference URI="...">
					<ds:Transforms>
						<ds:Transform
							Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
						<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#" />
					</ds:Transforms>
					<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
					<ds:DigestValue>...</ds:DigestValue>
				</ds:Reference>
			</ds:SignedInfo>
			<ds:SignatureValue>
				...
			</ds:SignatureValue>
			<ds:KeyInfo>
				<ds:X509Data>
					<ds:X509Certificate>
						...
					</ds:X509Certificate>
				</ds:X509Data>
			</ds:KeyInfo>
		</ds:Signature>
		<saml:Subject>
			<saml:NameID Format="urn:oasis:names:tc:SAML:2.0:nameid-format:transient"
				NameQualifier="http://your.identity.provider" SPNameQualifier="https://platform.boomi.com/sso/your-sso-account-id/saml">...
			</saml:NameID>
			<saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
				<saml:SubjectConfirmationData
					NotOnOrAfter="2012-04-11T19:37:04Z" Recipient="https://platform.boomi.com/sso/your-sso-account-id/saml" />
			</saml:SubjectConfirmation>
		</saml:Subject>
		<saml:Conditions NotBefore="2012-04-11T19:17:04Z"
			NotOnOrAfter="2012-04-11T19:37:04Z">
			<saml:AudienceRestriction>
				<saml:Audience>https://platform.boomi.com/sso/your-sso-account-id/saml
				</saml:Audience>
			</saml:AudienceRestriction>
		</saml:Conditions>
		<saml:AuthnStatement AuthnInstant="2012-04-11T19:17:56Z"
			SessionIndex="...">
			<saml:AuthnContext>
				<saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
				</saml:AuthnContextClassRef>
			</saml:AuthnContext>
		</saml:AuthnStatement>
		<saml:AttributeStatement>
			<saml:Attribute Name="FEDERATION_ID">
				<saml:AttributeValue xmlns:xs="http://www.w3.org/2001/XMLSchema"
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">YOUR_FEDERATION_ID
				</saml:AttributeValue>
			</saml:Attribute>
		</saml:AttributeStatement>
	</saml:Assertion>
</samlp:Response>
```
