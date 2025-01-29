# Session security

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-055DAC99-3064-4199-8EC9-3DE5278436AE"/>
</head>

The Boomi Enterprise Platform includes several features designed to ensure the security of user sessions and prevent potential attacks.

## Multi-session sign out

When users sign out of the Boomi Enterprise Platform, they have a choice — sign out of the current session only or all sessions to which they signed in. The sign-in page appears in the session where they initiated the sign-out. If they sign out of all sessions, users receive a prompt to sign in again the next time they resume activity in a given session.

:::note  

When multiple tabs are open in the same browser, it is considered a single session. Therefore, users must sign in to the platform only once per browser. When a user signs in to the platform from two different browsers or devices, this creates multiple sessions. These differences explain why a user logs out of all tabs open to the Boomi Enterprise Platform in the same browser, not only their current tab.

:::

## Automatic sign out after password changes

Users can change their password voluntarily or must change it to comply with a password policy. In either case, when users change their password, they immediately sign out of the Boomi Enterprise Platform. Then, they must sign in to the platform with the new password. All sessions sign out if a user is signed in to multiple sessions when they change their password.

## Locking and ending inactive sessions

:::caution

Session time-out may not work for some laptops with the touchscreen functionality enabled.

:::

When an administrator enables session lock and termination on an account in the **Settings > Account Information and Setup** > **Security Options > Security** page, user sessions lock out after 15 minutes of inactivity and ends after 30 minutes of inactivity. The system determines user inactivity based on mouse and keyboard interactions with the Boomi Enterprise Platform.

When a user is inactive for 15 minutes, the platform temporarily locks and the user must authenticate again using their password credentials to extend their session. Users can also opt to manually end a session from the lock screen.

If a user does not respond to the lock screen after an additional 15 minutes (30 minutes of user inactivity), the account session ends, and the user signs out automatically from the Boomi Enterprise Platform. When the session ends, the platform does not save any changes.

After changing the session time-outs setting and click **Save** on the **Account Security** page. Users experience the changes the next time they sign in to the Boomi Enterprise Platform.

:::note  

When using the session locks and termination feature on browsers that run tabs in separate processes, users will experience inconsistent behavior between tabs. For instance, each tab can erroneously act as individual sessions and lock at differing times. For this functionality to work as intended, disable the multiprocess feature or web local storage in your browser. If disabling the feature on your browser is not possible, Boomi recommends users to opt out of using this feature. Refer to **Additional Resources** for more information.

:::

**Reauthentication using Single Sign On \(SSO\)**

To unlock an inactive session, SSO users receive a prompt to authenticate through the identity provider (IdP) using their sign-in credentials. Some IdPs may or may not support attempts to reauthenticate when using SSO with the lock and terminate security feature, in which the following situations can occur:

- If the IdP supports authenticating again, the user is able to manually unlock the session by entering their sign-in credentials.
- If the IdP supports reauthentication but does not require users to sign in again, the inactive session unlocks automatically for the user.
- If the IdP does not support reauthentication, the user is unable to unlock the session and must close the browser or tab or sign out to reenter the platform.

## Session concurrency

Boomi administrators have the option to enable account-level session concurrency restrictions in the **Settings** \> **Account Information and Setup** \> **Account Security** page, which limits account users from signing in to more than two sessions at one time. A user creates multiple sessions when they simultaneously sign in to an account under different browsers.

If a user attempts to open three sessions on concurrency-enabled accounts, a prompt appears to end a session to remain below the threshold. The prompt includes details of each session a user has open, such as device type, operating system, and other browser-related information to help users make their choice. A user can also manually close the appropriate number of sessions to clear the prompt.

If a user attempts to switch into an account with session concurrency enabled and more sessions are open than allowed, the user can choose to cancel the account switch or continue by selecting a session to end.

:::note

After toggling on the session concurrency setting and clicking **Save** on the **Settings** \> **Account Information and Setup** \> **Account Security** page, users experience changes the next time they sign in to the Boomi Enterprise Platform.

:::

## Session time-out feature

If you enable the session time-out feature for an account, active session users sign out of that account automatically after four hours.

The session clock starts when a user signs in to any account. For example, assume Account A has the session time-out feature enabled and Account B does not. The enforces the session time-out in the following ways:

- If a user is signed in to Account A and reaches the 4-hour limit, they are signed out of the session whether or not they are active.

- If a user is signed in to Account B for four hours or more and then attempts to switch to Account A, they are signed out.

- If a user is signed in to Account A for less than four hours and then switches to Account B, enforcement of the session time-out does not occur unless the user attempts to return to Account A after four hours or more.

An audit log entry indicates when a user is logged out as a result of the session time-out feature.

:::note

Session time-out is an optional account feature. To enable this feature in your account, contact your sales representative.

:::

## Account security for CORS

Cross-Origin Resource Sharing (CORS) rules govern the handling of cross-server, JavaScript-powered, RESTish API requests under an account. For more information about account security for CORS, see Related references.
