# Using SAML (Deprecated) connector HTTP POST binding

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3e3ed05c-509c-49b4-a519-e1d50ae785a6"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

Although HTTP-Redirect \(GET\) is the default method used by the for flow authentication requests, you can also use HTTP-POST binding if this is required by your identity provider.

The authentication request can also be communicated through HTTP-POST.

-   Using HTTP POST allows SAML protocols to be sent within an HTML form, using an HTTP user agent as an intermediary.

-   HTTP POST uses a self-posting form when establishing a trusted session between your identity provider and in a browser.


This method can be applied by editing a player to include self-posting form authentication code.

1.  Open the player that you want to use for HTTP-POST authentication. See [Players](c-flow-Players_931f82a8-0725-4dc3-b965-f606330dc5a6.md).

2.  Insert your HTTP-POST authorization code immediately before the `manywho.engine.initialize()` section in the player.

    For example:

    ```
    manywho.authorization.invokeAuthorization = function(response, flowKey, onAuthenticated) {
                        if (response.authorizationContext != null && response.authorizationContext.directoryId != null) {
                            if (manywho.utils.isEqual(response.authorizationContext.authenticationType, 'oauth2', true)) {
                                window.location.href = response.authorizationContext.loginUrl;
                                return;
                            }
                            if (manywho.utils.isEqual(response.authorizationContext.authenticationType, 'oauth', true)) {
                                window.location.href = response.authorizationContext.loginUrl;
                                return;
                            }
                            if (manywho.utils.isEqual(response.authorizationContext.authenticationType, 'saml', true)) {
                                var loginUrl = response.authorizationContext.loginUrl.substr(response.authorizationContext.loginUrl.indexOf('?') + 1);
                                var params = manywho.utils.parseQueryString(loginUrl);
                                var data = {
                                    SAMLRequest: decodeURIComponent(params.SAMLRequest),
                                    RelayState: decodeURIComponent(params.RelayState)
                                }
                                var form = document.createElement('form');
                                document.body.appendChild(form);
                                form.method = 'post';
                                form.action = 'https://(your IDP login URL)';
                                for (var name in data) {
                                    var input = document.createElement('input');
                                    input.type = 'hidden';
                                    input.name = name;
                                    input.value = data[name];
                                    form.appendChild(input);
                                }
                                form.submit();
                                return;
                            }
                            manywho.state.setLogin({
                                isVisible: true,
                                directoryId: response.authorizationContext.directoryId,
                                directoryName: response.authorizationContext.directoryName,
                                loginUrl: response.authorizationContext.loginUrl,
                                stateId: response.stateId,
                                callback: onAuthenticated,
                            },             flowKey);
                        }
                    }
    ```

    :::note
    
    The code provided is for example purposes, and may not meet your specific installation requirements.

    :::

3.  In the code, update `form.action = 'https://(your IDP login URL)';` with your identity provider login URL.

4.  Click **Save** to save the player and apply your changes.

5.  Run your flow and select the player to test your authentication.