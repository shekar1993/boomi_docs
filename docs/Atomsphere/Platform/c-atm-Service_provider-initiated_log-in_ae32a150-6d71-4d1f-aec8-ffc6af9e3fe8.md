# Service provider-initiated sign in

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-ae32a150-6d71-4d1f-aec8-ffc6af9e3fe8"/>
</head>

Service provider-initiated sign in for single sign-on provides seamless access to the Boomi Enterprise Platform.

When a user browses to the platform \(the service provider\) via a URL specifying a single sign-on-enabled account, they are redirected to the identity provider's sign-on page. After signing in, they are redirected to the specified platform URL and they gain access to the platform without having to log in a second time.

This is the process \(assuming the user is not signed in to the platform and does not have a valid session\):

1. The user attempts to access a single sign-on-enabled account on the platform. The destination application is either Integration, Boomi DataHub, or API Management. For example:

    - Integration — `https://platform.boomi.com/AtomSphere.html#build;accountId=<accountID>`

    - Boomi DataHub — `https://platform.boomi.com/MdmSphere.html#mdm_repositories;accountId=<accountID>`

    - API Management — `https://platform.boomi.com/ApiSphere.html#api_dashboard;accountId=<accountID>`

2. The platform sends an HTML form back to the browser in the HTTP response \(HTTP status 200\). The HTML form contains a SAML `<AuthnRequest>` message \(which has been signed\) encoded as the value of a hidden form control named "SAMLRequest". See the SAML `<AuthnRequest>` Message below.

    ```java
    <saml2p:AuthnRequest AssertionConsumerServiceURL="https://platform.boomi.com/sso/your-sso-account-id/saml"	Destination="http://your.identity.provider/SAML2/SSO/POST"	ID="..." IssueInstant="2012-04-11T19:14:28.125Z"
    	ProtocolBinding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
    	Version="2.0" xmlns:saml2p="urn:oasis:names:tc:SAML:2.0:protocol">
    	<saml2:Issuer xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion">https://platform.boomi.com/sso/your-sso-account-id/saml
    	</saml2:Issuer>
    	<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    		<ds:SignedInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    			<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"
    				xmlns:ds="http://www.w3.org/2000/09/xmldsig#" />
    			<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"
    				xmlns:ds="http://www.w3.org/2000/09/xmldsig#" />
    			<ds:Reference URI="#_07686622ff96ba90836b585c20080bba"
    				xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    				<ds:Transforms xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    					<ds:Transform
    						Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"
    						xmlns:ds="http://www.w3.org/2000/09/xmldsig#" />
    					<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"
    						xmlns:ds="http://www.w3.org/2000/09/xmldsig#" />
    				</ds:Transforms>
    				<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"
    					xmlns:ds="http://www.w3.org/2000/09/xmldsig#" />
    				<ds:DigestValue xmlns:ds="http://www.w3.org/2000/09/xmldsig#">...
    				</ds:DigestValue>
    			</ds:Reference>
    		</ds:SignedInfo>
    		<ds:SignatureValue xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
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
    	<saml2p:NameIDPolicy
    		Format="urn:oasis:names:tc:SAML:2.0:nameid-format:transient" />
    	<saml2p:RequestedAuthnContext Comparison="exact">
    		<saml2:AuthnContextClassRef xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion">urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport
    		</saml2:AuthnContextClassRef>
    	</saml2p:RequestedAuthnContext>
    </saml2p:AuthnRequest>
    ```

    - The requested platform resource URL is also included in the HTTP form encoded as the value of a hidden form control named "RelayState".

    - The HTML form is accompanied by script code that will automatically post the form to the destination site \(the identity provider\). The browser, due to either a user action or the execution of an "auto-submit" script, issues an HTTP POST request to send the form to the Identity provider's single sign-on service \(SSO service\).

        ```java
        POST /SAML2/SSO/POST HTTP/1.1
        Host: your.identity.provider
        Content-Type: application/x-www-form-urlencoded
        Content-Length: nnn
        
        SAMLRequest=request&RelayState=token
        ```

3. The SSO service determines whether the user has an existing log-on security context with the identity provider that meets the default or requested \(in the `<AuthnReques\>`\) authentication policy requirements. If not, the identity provider interacts with the browser to challenge the user to provide valid credentials.

4. The user provides valid credentials and a local log-on security context is created for the user at the identity provider.

5. The identity provider SSO service builds a SAML assertion representing the user's log-on security context. The platform accepts a SAML `<Response>` message from the identity provider if:

    - The assertion is digitally signed and then placed within a SAML `<Response>` message, or

    - The assertion is not signed but the SAML `<Response>` message is, or

    - The assertion is signed and placed within a SAML `<Response>` message AND the SAML `<Response>` message is also signed.

    The `<Response>` message is then placed within an HTML form as a hidden form control named "SAMLResponse". If the identity provider received a RelayState value from the platform, the identity provider must return it unmodified to the platform in a hidden form control named "RelayState". The SSO service sends the HTML form back to the browser in the HTTP response. For ease of use, the HTML form typically is accompanied by script code that will automatically post the form to the destination site \(the platform\).

    ```java
    <form method="post" action="https://platform.boomi.com/sso/your-sso-account-id/saml" ...>
        <input type="hidden" name="SAMLResponse" value="response" />
        <input type="hidden" name="RelayState" value="token" />
        ...
        <input type="submit" value="Submit" />
    </form>
    ```

    -   The value of the SAMLResponse parameter is the base64 encoding of the following `<samlp:Response>` element:

        ```java
        <samlp:Response Destination="https://platform.boomi.com/sso/your-sso-account-id/saml"	ID="..." InResponseTo="..."
        	IssueInstant="2012-04-11T19:15:03Z" Version="2.0"
        	xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
        	<saml:Issuer xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">http://your.identity.provider</saml:Issuer>
        	<samlp:Status xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
        		<samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"
        			xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
        		</samlp:StatusCode>
        	</samlp:Status>
        	<saml:Assertion ID="..."
        		IssueInstant="2012-04-11T19:15:03Z" Version="2.0"
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
        				NameQualifier="http://your.identity.provider">...</saml:NameID>
        			<saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
        				<saml:SubjectConfirmationData
        					InResponseTo="..." NotOnOrAfter="2012-04-11T19:25:03Z"
        					Recipient="https://platform.boomi.com/sso/your-sso-account-id/saml" />
        			</saml:SubjectConfirmation>
        		</saml:Subject>
        		<saml:Conditions NotBefore="2012-04-11T19:05:03Z"
        			NotOnOrAfter="2012-04-11T19:25:03Z">
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

6. The browser, due to either a user action or the execution of an "auto-submit" script, issues an HTTP POST request to send the form to the platform.

    ```java
    POST /sso/your-sso-account-id/saml HTTP/1.1
    Host: platform.boomi.com
    Content-Type: application/x-www-form-urlencoded
    Content-Length: nnn
    
    SAMLResponse=response&RelayState=token
    ```

    - Where the values of the SAML Response and RelayState parameters are taken from the HTML form of Step 5, the platform obtains the `<Response>` message from the HTML form for processing. The digital signature on the SAML assertion must first be validated; if the assertion signature does not exist, the digital signature on the response message is validated instead. Then the assertion contents are processed to create a local log-on security context for the user within the platform. When this processing completes, the platform retrieves the RelayState parameter, the value of which is the originally requested resource URL. The platform then sends an HTTP redirect response to the browser directing it to access the originally requested resource.

7. An access check is made to establish whether the user has the correct authorization to access the resource. If the access check passes, the resource is then returned to the browser.

For more information about Redirect/POST Bindings, see section 5.1.2 and Figure 12 at this Web site: [http://www.oasis-open.org/committees/download.php/27819/sstc-saml-tech-overview-2.0-cd-02.pdf](http://www.oasis-open.org/committees/download.php/27819/sstc-saml-tech-overview-2.0-cd-02.pdf)