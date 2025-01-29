# Adding an HTTP Client connection that uses OAuth 1.0

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d0b2e4e4-3fdd-474b-849d-d3e842912c9a"/>
</head>


By adding an HTTP Client connection that uses OAuth 1.0, you can send or retrieve messages with HTTP-enabled servers using the HTTP or HTTPS protocols with the OAuth protocol.

## Procedure

1.  Create an HTTP Client Connection component.

2.  Enter the URL.

3.  Set the **Authentication Type** to OAuth.

4.  Enter the Request Token URL.

5.  Enter the Access Token URL.

6.  Enter the Authorization URL.

7.  Enter the Consumer Key.

8.  Enter the Consumer Secret.

9.  Do one of the following:

    -   If an access token and token secret are required by the web site or application, continue to the next step.

    -   If they are not required, skip to step 15.

10. Next to Access Token, click **Generate**.

    The Generate OAuth Access Tokens dialog opens.

11. The page referenced by the link in this dialog should automatically open a new browser window. If the browser does not allow popups, open the link manually.

12. On the external application's page, enter your login credentials.

    Once you have entered the login credentials, it should provide you with a PIN.

13. Copy the PIN from the external application into the PIN field in the Generate OAuth Access Tokens dialog.

14. Click **Next**.

    The Access Token and Token Secret fields are populated.

15. **Optional:** If you do not want a blank access token and token secret in the OAuth header, select **Suppress Blank Access Token**.

16. Enter the Realm.

17. **Important:** Boomi recommends that if the service you are connecting to supports SHA256 in OAuth 1.0, update the **Signature Method** in your connections to use HMAC-SHA256 instead of SHA1. You should also consider switching to OAuth 2.0. If that is not possible, the recommendation is to use SHA256 in OAuth 1.0. For more information about NetSuite's HMAC-SHA1 signature deprecation, impact, and the steps you need to complete, see the Boomiverse article [NetSuite HMAC-SHA1 Signature Deprecation Update](https://community.boomi.com/s/article/NetSuite-HMAC-SHA1-Signature-Deprecation-Update).

Select a Signature Method.

18. Click **Save**.