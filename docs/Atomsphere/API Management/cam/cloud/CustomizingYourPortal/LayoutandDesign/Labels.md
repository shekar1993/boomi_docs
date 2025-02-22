﻿---
sidebar_position: 4
---

# Labels

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-15f0205c-b0e4-4668-a7b7-e3311764482f"/>
</head>

Labels make it easy for you to change headlines, labels, and messages in your Portal without modifying the entire layout.

## Procedure

To customize labels:

1. Log in to the **API Control Center**.

2. Go to **Manage > Portal** and click **Portal Settings**.

3. Add your labels under the **Inline Javascript** section in the **Body JavaScript** field.

## The Labels

Default values are shown below.

```xml
// My Apps
// The page displaying a users registered applications.
portalOptions.labels.accountApps: {
heading: 'My Apps', // heading
noApps: 'You don\'t have any apps yet.', // The message to display when a user has no apps
};
// My Account: Email
// The page where users can change their Mashery email address.
portalOptions.labels.accountEmail: {
heading: 'Change Email' // The heading
};
// My Account: Email Success
// The layout for the page confirming email change was successful.
portalOptions.labels.accountEmailSuccess: {
heading: 'Email Successfully Changed', // the heading
main: '<p>An email confirming your change has been sent to the address you provided with your
username. Please check your spam folder if you don\'t see it in your inbox.</p>' // The main content
};
// My Keys
// The page displaying a users API keys.
portalOptions.labels.accountKeys: {
heading: 'My API Keys', // The heading
noKeys: 'You don\'t have any keys yet.', // The message to display when a user has no keys
noPlanKeys: 'You have not been issued keys for this API.', // The message to display when a user
has no keys for a specific plan
};
// My Account
// The page where users can manage their Mashery Account details.
portalOptions.labels.accountManage: {
heading: 'Manage Account', // Heading
subheading: 'Account Information' // The "Account Information" subheading
};
// Account Navigation
// Labels for the account navigation menu.
portalOptions.labels.accountNav: {
// Navigation Labels
keys: 'Keys', // The account nav label for "My Keys"
apps: 'Applications', // The account nav label for "My Applications"
account: 'Manage Account', // The account nav label for "Manage Account"
changeEmail: 'Change Email', // The account nav label for "Change Email"
changePassword: 'Change Password', // The account nav label for "Change Password"
viewProfile: 'View My Public Profile', // The account nav label for "View My Profile"
removeMembership: 'Remove Membership from {% raw %}{{mashery.area};}{% endraw %};' // The
account nav label for "Remove Membership"
};
// My Account: Password
// The page where users can change their Mashery password.
portalOptions.labels.accountPassword: {
heading: 'Change Password' // The heading
};
// My Account: Password Success
// The layout for the page after users have successfully changed their password.
portalOptions.labels.accountPasswordSuccess: {
heading: 'Password Successfully Changed', // The heading
main: '<p>An email confirming your change has been sent to the address you provided with your
username. If you use this account on other Mashery powered portals, remember to use your new
password.</p>' // The main content
};
// Add App APIs
// Add APIs to an application.
portalOptions.labels.appAddAPIs: {
heading: 'Add APIs to this Application',
application: 'Application:',
created: 'Created:',
api: 'API:',
key: 'Key:',
subheading: 'Add APIs'
};
// App Add APIs: Success
// API keys successfully added to an app.
portalOptions.labels.appAddAPIsSuccess: {
heading: 'New API Keys Issued', // The heading
// The message
main: '<p>An email has been sent to you with your key and application details. You can also view
them at any time from the <a href="{% raw %}{{path.keys};}{% endraw %};">My Account</a>
page.</p>' +
'<p>To get started using your API keys, dig into <a href="{% raw %}{{path.docs};}{% endraw
%};">our documentation</a>. We look forward to seeing what you create!</p>',
};
// Delete App
// The page to delete an application.
portalOptions.labels.appDelete: {
heading: 'Delete Your Application',
application: 'Application:',
created: 'Created:',
api: 'API:',
key: 'Key:',
subheading: 'Confirm Deletion',
main: '<p><strong>Are you sure you want to delete this application and all of its
keys?</strong></p>',
confirm: 'Are you really sure you want to delete this application?'
};
// App Edit
// The edit application page.
portalOptions.labels.appEdit: {
heading: 'Edit Your Application',
main: '<p>Edit your details using the form below.</p>'
};
// App Registration
// The page to register an application.
portalOptions.labels.appRegister: {
heading: 'Register an Application', // The heading
main: '<p>Get a key and register your application using the form below to start working with our
APIs.</p>' // The message shown above the form
};
// App Registration Success
// The page shown after an app has been successfully registered.
portalOptions.labels.appRegisterSuccess: {
heading: 'Your application was registered!', // The heading
// The message
main: '<p>An email has been sent to you with your key and application details. You can also view
them at any time from the <a href="{% raw %}{{path.keys};}{% endraw %};">My Account</a>
page.</p>' +
'<p>To get started using your API keys, dig into <a href="{% raw %}{{path.docs};}{% endraw
%};">our documentation</a>. We look forward to seeing what you create!</p>',
};
// Blog: All Posts
// The page displaying all of your blog posts.
portalOptions.labels.blogAll: {
blogTitle: 'The {% raw %}{{mashery.area}}{% endraw %} Developer Blog', // The title of the blog
area
readMore: 'Read more' // The "read more" link for excerpts
}
// Contact
// The contact form page.
portalOptions.labels.contact: {
heading: 'Contact Us', // The heading
main: '<p>Contact us using the form below.</p>' // The message shown above the form
};
// Contact Success
// The page shown after a contact form is successfully submitted.
portalOptions.labels.contactSuccess: {
heading: 'Thanks for your submission!', // The heading
main: 'Your message will be forwarded to the appropriate group.' // The message
};
// Documentation
// The layout for API documentation.
portalOptions.labels.docs: {
subheading: 'In the Docs'
};
// 404
// The 404 page.
portalOptions.labels.fourOhFour: {
heading: 'Unable to find this page', // The heading
main: '<p>We\'re unable to find this page. Sorry! Please check the URL, or contact us to report a
broken link.</p>' // The message
};
// IO Docs
// The IO Docs page.
portalOptions.labels.ioDocs: {
heading: 'Interactive API', // The heading
main: '<p>Test our API services with IO-Docs, our interactive API documentation.</p>' // The
message displayed before the content
};
// Join
// The page shown to existing Mashery users signing in to a new area.
portalOptions.labels.join: {
heading: 'Join {% raw %}{{mashery.area};}{% endraw %};', // The heading
main: '<p>Since you already have a Mashery account you don\'t have to register again, but we
would like to know a little more about you. Please fill out the additional information below.</p>' //
The message shown above the form
};
// Join: Success
// The page shown after an existing Mashery user successfully joins a new area.
portalOptions.labels.joinSuccess: {
heading: 'Registration Successful', // The heading
main: '<p>You have successfully registered as {% raw %}{{content.main};}{% endraw %};. Read
our <a href="/docs">API documentation</a> to get started. You can view your keys and
applications under <a href="{% raw %}{{path.keys};}{% endraw %};">My Account</a>.</p>' // The
success message
};
// Key Activity
// The page to view key activity reports.
portalOptions.labels.keyActivity: {
heading: 'Key Activity',
api: '{% raw %}{{content.api};}{% endraw %};',
application: 'Application:',
key: 'Key:',
secret: 'Secret:',
status: 'Status:',
created: 'Created:'
};
// Delete Key
// The page to delete an API key.
portalOptions.labels.keyDelete: {
heading: 'Delete Your Key',
api: '{% raw %}{{content.api};}{% endraw %};',
application: 'Application:',
key: 'Key:',
secret: 'Secret:',
status: 'Status:',
created: 'Created:',
subheading: 'Confirm Deletion',
main: '<p><strong>Are you sure you want to delete this key?</strong></p>',
confirm: 'Are you really sure you want to delete this key?'
};
// Logout Success
// The page shown after a user successfully logs out of the Portal.
portalOptions.labels.logout: {
heading: 'Signed Out', // The heading
main: 'You have successfully signed out. Come back soon!' // The message
};
// Logout Fail
// The page shown when a logout was unsuccessful.
portalOptions.labels.logoutFail: {
heading: 'Sign Out Failed', // The heading
main: 'Your attempt to sign out failed. <a href="{% raw %}{{path.logout};}{% endraw %};">Please
try again.</a>' // The message
};
// Lost Password Request
// The page to request a password reset.
portalOptions.labels.lostPassword: {
heading: 'Recover Your Password', // The heading
main: '<p>Enter the email address and username that you registered with and we will send you a
link to reset your password.</p>' // The message shown above the form
};
// Lost Password Reset
// The page shown after a password reset email is sent to the user.
portalOptions.labels.lostPasswordReset: {
heading: 'Email Sent', // The heading
main: 'An email has been sent to the address you provided. Click on the link in the e-mail to reset
your password. Please check your spam folder if you don\'t see it in your inbox.' // The message
};
// Lost Username Request
// The page to request a username recovery.
portalOptions.labels.lostUsername: {
heading: 'Recover Your Username', // The heading
main: '<p>Enter the email address you used to register and we will send you an email with your
username.</p>' // The message shown above the form
};
// Lost Username Reset
// The page shown after a username reset email is sent to the user.
portalOptions.labels.lostUsernameReset: {
heading: 'Email Sent', // The heading
main: 'An email has been sent containing your username details. Please check your spam folder if
you don\'t see it in your inbox.' // The message
};
// Remove Membership
// The page for users to remove their membership from this Portal.
portalOptions.labels.memberRemove: {
// Content
heading: 'Remove membership from {% raw %}{{mashery.area};}{% endraw %};', // The heading
main: 'Removing membership disables your account and you will not be able to register again
using the same username. All your keys will be deactivated.', // The message
// Labels
confirm: 'Remove Membership', // The "confirm remove membership" button label
cancel: 'Cancel', // The "cancel removal" button label
popup: 'Please confirm that you wish to permanently disable your membership with this service.' //
The message to display on the "confirm removal" popup modal
};
// Remove Membership Success
// The page shown after a user successfully removes their membership.
portalOptions.labels.memberRemoveSuccess: {
heading: 'Your account has been removed.', // The heading
main: 'Enjoy the rest of your day!' // The message
};
// No Access
// The page shown when user doesn't have access to the content.
portalOptions.labels.noAccess: {
heading: 'You don\'t have access to this content', // The heading
main: '<p>If you\'re not logged in yet, try <a href="{% raw %}{{path.signin};}{% endraw %};">logging
in</a> or <a href="{% raw %}{{path.register};}{% endraw %};">registering for an account</a>.</p>'
// The message
};
// Primary Navigation Menu
// The primary navigation menu.
portalOptions.labels.primaryNav: {
toggle: 'Menu'
};
// User Profile
// The user profile page.
portalOptions.labels.profile: {
// Headings
heading: '{% raw %}{{mashery.username};}{% endraw %};', // The primary heading
headingUserInfo: 'User Information', // The "User Information" subheading
headingActivity: 'Recent Activity', // The "User Activity" subheading
// Content
userWebsite: 'Website:', // The user website label
userBlog: 'Blog:', // The user blog label
userRegistered: 'Registered:' // The label for the date the user registered
};
// User Registration
// The user registration page.
portalOptions.labels.register: {
// Primary Content
heading: 'Register for an Account', // The heading
main: '<p>Register a new Mashery ID to access {% raw %}{{mashery.area};}{% endraw %};.</p>',
// The message above the form
privacyPolicy: '', // A custom privacy policy link or message [optional]
// The sidebar content
sidebar: '<h2>No Spam Guarantee</h2>' +
'<p>We hate spam. We love our users. We promise to never sell or share any of your private
information.</p>',
// Labels
submit: 'Register' // The submit button text @todo: does not work yet
};
// User Registration: Email Sent
// The registration email confirmation page.
portalOptions.labels.registerSent: {
heading: 'Registration Almost Complete' // The heading
};
// User Registration: Email Resend
// The page to request a new registration confirmation email.
portalOptions.labels.registerResend: {
heading: 'Resend Your Confirmation Email', // The heading
main: '<p>Enter your username and email address to have your registration confirmation email
resent to you.</p>' // The message above the form
};
// User Registration: Email Resent
// The page after a registration confirmation email was successfully resent.
portalOptions.labels.registerResendSuccess: {
heading: 'Success', // The heading
main: 'Your confirmation email was resent.' // The message
};
// Search
// Search form and results content.
portalOptions.labels.search: {
// Search form
button: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32
32"><title>Search</title><path d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-
2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12
12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907
1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>', // The search
for button text
placeholder: 'Search...', // The search form placeholder attribute text
// Search results
heading: 'Search Results for "{% raw %}{{content.query};}{% endraw %};"', // The search results
page heading
headingNew: 'Search',
meta: 'Showing {% raw %}{{content.first};}{% endraw %}; to {% raw %}{{content.last};}{% endraw
%}; of {% raw %}{{content.total};}; results for "{% raw %}{{content.query};}{% endraw %};"', // The
meta data to show above search results
noResults: 'Your search for "{% raw %}{{content.query};}{% endraw %};" returned no results.', //
The message to display when no results are found
pagePrevious: '&larr; Previous Page', // The previous page link
pageNext: 'Next Page &rarr;', // The next page link
pageDivider: ' | ' // The divider between the previous and next page links
};
// Reveal Key Secret
// The page to request that key secrets are shown.
portalOptions.labels.showSecret: {
heading: 'Email Sent',
main: '<p>An email has been sent to the email address associated with your account. Click on the
link in the email to display all of your shared secrets for 30 days. Please check your spam folder if
you don\'t see it in your inbox.</p>'
};
// Reveal Key Secret: Success
// The page to confirm key secrets have been displayed.
portalOptions.labels.showSecretSuccess: {
heading: 'Your shared secrets are now visible',
main: '<p>Shared secrets will be visible for the next 30 days. After 30 days, they will be hidden
again for PCI compliance.</p>'
};
// Reveal Key Secret: Already Visible
// The page shown when key secrets are already visible.
portalOptions.labels.showSecretError: {
heading: 'Your shared secrets are already visible',
main: '<p><a href="{% raw %}{{path.keys};}{% endraw %};">Click here</a> to view them.</p>'
};
// Sign In
// The sign in page.
portalOptions.labels.signin: {
// Content
heading: 'Sign In', // The heading
main: '<p>Sign in to {% raw %}{{mashery.area};}{% endraw %}; using your Mashery ID.</p>', // The
message above the sign in form
// The sidebar content
sidebar: '<h2>Register</h2>' +
'<p><a href="{% raw %}{{path.register};}{% endraw %};">Create an account</a> to access
stagingcs9.mashery.com. Your account information can then be used to access other APIs on the
Mashery API Network.</p>' +
'<h2>What is Mashery?</h2>' +
'<p><a href="http://mashery.com">Mashery</a> powers APIs of leading brands in retail, media,
business services, software, and more. By signing in to a Mashery powered portal, you can gain
access to Mashery\'s base of API providers. All with a single Mashery ID.</p>' +
'<p><a class="btn btn-user-register" id="btn-user-register" href="{% raw %}{{path.register};}{%
endraw %};">Register a Mashery ID</a></p>',
// Labels
submit: 'Sign In', // The submit button text @todo: does not work yet
};
// Title Attribute
// Displayed in the web browser tab.
portalOptions.labels.title: '{% raw %}{{mashery.title};}{% endraw %}; | {% raw %}{{mashery.area};}
{% endraw %};';
// User Navigation
// The navigation menu where users sign in, register, view their account, and log out.
portalOptions.labels.userNav: {
// Logged Out
signin: 'Sign In', // "Sign In" link
register: 'Register', // "Register" link
// Logged In
account: 'My Account', // "My Account" link
dashboard: 'Dashboard', // "Dashboard" link (for admins only)
signout: 'Sign Out', // "Sign Out" link
};
```



