---
sidebar_position: 5
---

# Translation Strings Reference

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f06a9e77-3d1d-4bd8-9627-be6159f97775"/>
</head>

This section contains all of the available views and string IDs, as well as their default English values. 

```xml
portal.addTranslations('en', {
/**
* Global Strings
*/
// The skip navigation link (for accessibility)
skipNav: {
link: 'Skip to main content'
},
// User navigation
navUser: {
applications: 'Applications',
keys: 'Keys',
manageAccount: 'Profile',
logout: 'Log Out',
signin: 'Sign In',
register: 'Register'
},
// The primary navigation menu
navPrimary: {
home: 'Home',
interactiveDocs: 'Interactive documentation'
},
// The footer
footer: {
copyright: `Copyright ${new Date().getFullYear()}. All rights reserved.`,
'nav-privacy': 'Privacy Policy',
'nav-terms': 'Terms of Use',
'nav-contact': 'Contact Us'
},
// The inactivity popup
idle: {
title: 'Still there?',
message: 'For security, you are automatically logged out shortly. Do you want to stay logged
in?',
time: 'seconds',
button: 'Keep me logged in'
},
```


```xml
/**
* View-Specific Strings
*/
// The homepage
'_index': {
title: 'Welcome to our developer program!',
subtitle: 'Discover the world of our APIs.',
btnJoin: 'Join Now',
btnExplore: 'Learn more about our APIs',
registerAccountTitle: 'Register',
registerAccountDesc: 'Get an access key and usage reports for your apps.',
registerAppsTitle: 'Build an app',
registerAppsDesc: 'Define your application behavior and register the keys it uses.',
callTitle: 'Make a Call',
callDesc: 'Use our interactive documentation to make a call and see how it all works.',
supportTitle: 'Get Support',
supportDesc: 'Ask questions and get advice by sending an email to our support team.',
},
// /404
'404': {
title: 'Page not found',
content: 'Sorry, the page you\'re looking for doesn\'t exist.',
homeBtn: 'Go home'
},
// /500
'500': {
title: '500 Internal server error',
content: 'We are unable to process your request! Please try again later.',
homeBtn: 'Go home'
},
// /member/edit
accountManage: {
// Page elements
title: 'Update profile',
cancelBtn: 'Cancel',
submitBtn: 'Update',
changepasswordLabel: 'Password',
changePasswordBtn: 'Change password',
// Form fields
username: 'Username',
firstName: 'First name',
lastName: 'Last name',
displayName: 'Display Name',
email: 'Email',
password: 'New password',
passwordDesc: 'Passwords must contain at least 8 characters and have at least 3 of the
following: number, uppercase, lowercase, and special character.',
oldPassword: 'Current password',
uri: 'Website URL',
phone: 'Phone Number',
company: 'Company',
address1: 'Address Line 1',
address2: 'Address Line 2',
locality: 'City',
region: 'State, Province or Region',
postalCode: 'Zip Code',
countryCode: 'Country',
// Success/error messages
successMsg: 'All changes saved successfully!',
errorTitle: 'Something went wrong'
},
```

```
// /applications/add-apis
appAddApis: {
// Page elements
title: 'Add APIs to {{applicationName}}',
apisTitle: 'Select APIs',
noAPIsContent: 'It looks like you don\'t have any registrable APIs to select from.',
backBtn: 'Go back',
// Form fields
tos: 'I agree to the <a href="/terms-of-service">terms of service</a>.',
submitBtn: 'Add APIs',
// Table
headingAPI: 'API',
headingKey: 'Key',
callsPerSecond: ' calls per second',
callsPerDay: ' calls per day',
selected: 'selected',
registered: 'Registered on ',
noAPIsTitle: 'You\'re all set',
// Messages
successMsg: '{{applicationName}} updated with new apis!',
errorTitle: 'Something went wrong'
},
// /applications/create
appCreate: {
// Page elements
title: 'Create application',
submitBtn: 'Register Application',
callsPerSecond: ' calls per second',
callsPerDay: ' calls per day',
noAPIsContent: 'It looks like you don\'t have any registrable APIs to select from.',
// Form fields
apisTitle: 'Select APIs',
applicationName: 'Name of your application',
applicationNameDesc: 'You can change it later',
summary: 'Please describe what your application can do',
uri: 'Website',
oauthRedirectUri: 'Register OAuth 2.0 callback URL',
usageModel: 'How many people do you anticipate who can use your application?',
selected: 'selected',
notes: 'Notes',
howDidYouHear: 'How did you hear about this API?',
tos: 'I agree to the <a href="/terms-of-service">terms of service</a>.',
// Messages
successMsg: '{{applicationName}} successfully registered!',
errorTitle: 'There was an error creating your application'
},
// /applications/delete
appDelete: {
title: 'Delete Application',
content: 'Are you sure you want to delete {{applicationName}}? All keys associated with this
application are deactivated.',
confirmBtn: 'Yes, delete this application',
cancelBtn: 'No, keep this application',
successMsg: '"{{applicationName}}" successfully deleted!',
errorMsg: 'An error occurred while trying to delete {{applicationName}}.'
},
```

```xml
// /applications/edit
appEdit: {
// Page elements
title: 'Edit Application',
cancelBtn: 'Cancel',
submitBtn: 'Save',
// Form fields
applicationName: 'Name of your application',
summary: 'Please describe what your application can do',
uri: 'Website',
oauthRedirectUri: 'Register OAuth 2.0 callback URL',
usageModel: 'How many people do you anticipate can use your application?',
notes: 'Notes',
howDidYouHear: 'How did you hear about this API?',
tos: 'I agree to the <a href="/terms-of-service">terms of service</a>.',
// Messages
successMsg: '{{applicationName}} successfully updated!',
errorTitle: 'There was an error editing your application'
},
// /applications/summary
appSummary: {
// Page elements
title: 'API registration summary',
infoTitle: 'Application information',
applicationName: 'Name',
selectedAPIsTitle: 'Selected APIs',
backBtn: 'Back to Applications',
addAPIsBtn: 'Add APIs',
editAppBtn: 'Edit',
deleteAppBtn: 'Delete',
// Table headings
headingAPI: 'API Plan & Package',
headingKey: 'Key',
headingSecret: 'Secret',
headingStatus: 'Status',
headingLimits: 'Key rate limits',
// Table cells
uri: 'Website',
oauthRedirectUri: 'OAuth 2.0 callback URL',
appDesc: 'Description',
callsPerSecond: ' calls per second',
callsPerDay: ' calls per day',

},
```

```xml
// /applications
apps: {
// Regular view
title: 'Applications',
createBtn: 'New application',
addAPIsBtn: 'Add APIs',
editBtn: 'Edit',
deleteBtn: 'Delete',
appName: 'Name',
registered: 'Registered on ',
// Tables
headingAPI: 'API',
headingKey: 'Key',
headingSecret: 'Secret',
// No Apps view
titleNoApps: 'You don\'t have any applications yet',
createFirstBtn: 'Register a new application',
},
// /contact
contact: {
title: 'Contact Us',
content: '<p>Add your contact information here.</p>'
},
// /interactive-documentation
interactiveDocs: {
title: 'API Documentation',
apiList: 'Select an API',
download: 'Download',
noDocsTitle: 'No interactive documentation available yet',
homeBtn: 'Go home'
},

// /keys/delete
keyDelete: {
// Page elements
title: 'Delete key',
content: 'Are you sure you want to delete the key {{apiKey}}? Deleting an API key that is
currently in use can most probably break the application it is used in.',
cancelBtn: 'No, keep this key',
confirmBtn: 'Yes, delete this key',
// Messages
successMsg: '{{apiKey}} deleted successfully!',
errorMsg: 'An error occurred while trying to delete {{apiKey}}. Please try again.'
},
},
```

```xml
// /keys
keys: {
// Standard view
title: 'Keys',
callsPerSec: 'calls/second',
callsPerDay: 'calls/day',
deleteBtn: 'Delete',
// Table headings
headingApp: 'Application',
headingAPI: 'API',
headingKey: 'Key',
headingSecret: 'Secret',
headingStatus: 'Status',
headingLimits: 'Key Rate limits',
// Empty view
noKeysTitle: 'You don\'t have any keys yet',
getKeysBtn: 'Get API keys',
},
// /lost-password
passwordRecover: {
// Page elements
title: 'Recover your password',
content: 'Enter your email or username and we\'ll send you a link to recover your password.',
submitBtn: 'Recover',
cancelBtn: 'Cancel',
// Form fields
username: 'Username',
email: 'Email Address',
// Messages
errorTitle: 'Something went wrong'
},
// /lost-password/submitted
passwordRecoverSubmitted: {
title: 'Recover your password',
subtitle: 'Recovery request received!',
content: 'If an account matches the username <strong>{{username}}</strong> and email
<strong>{{email}}</strong>, you should receive an email with instructions on how to reset your
password shortly.',
typo: 'Made a typo? <a href="/lost-password">Try again</a>.',
loginBtn: 'Go back to login'
},
// /password/reset
passwordReset: {
title: 'Reset password',
password: 'Password',
cancelBtn: 'Cancel',
submitBtn: 'Submit',
errorTitle: 'There was an error resetting your password'
},
// /privacy-policy
privacyPolicy: {
title: 'Privacy Policy',
content: '<p>Add your privacy policy here.</p>'
```

```xml
// /register
register: {
// Page Elements
title: 'Register for an account',
submitBtn: 'Register',
// Form fields
username: 'Username',
usernameDesc: 'After you register your username, it can not be changed.',
displayName: 'Display Name',
displayNameDesc: 'This is the name which other users can see',
email: 'Email address',
emailDesc: 'We\'ll send a validation email to this address. Validation is required to complete
registration.',
password: 'Password',
passwordDesc: 'Passwords must contain at least 8 characters and have at least 3 of the
following: number, uppercase, lowercase, and special character.',
firstName: 'First name',
lastName: 'Last name',
company: 'Company',
uri: 'Website URL',
phone: 'Phone Number',
address1: 'Address Line 1',
address2: 'Address Line 2',
locality: 'City',
region: 'State, Province or Region',
postalCode: 'Zip Code',
countryCode: 'Country',
tos: 'I agree to the <a href="/terms-of-service">terms of service</a>.',
// Messages
errorTitle: 'Registration errors'
},
// /register/confirmation
registerConfirm: {
title: 'Email verified!',
signinBtn: 'Sign in',
},
// /register/submitted
registerSubmitted: {

// Page elements
title: 'You\'re almost there!</h1>',
subtitle: 'Just one more step to complete your registration.',
content: 'Please check your <strong>{{email}}</strong> email address for a link to verify your
account.',
resendMsg: 'Didn\'t get your confirmation email? Click the button below to resend it.',
resendBtn: 'Resend Confirmation Email',
// Messages
successMsg: 'Confirmation email has been sent again successfully',
errorMsg: 'You have reached the maximum number of tries.Your request cannot be proceeded
further'

},
```

```xml
// /signin
signin: {
// Page elements
title: 'Sign In',
submit: 'Sign In',
submitActive: 'Signing In...',
recover: ' Forgot your credentials? <a href="/lost-password">Recover your password</a> or <a
href="/lost-username">recover your username</a>.',
signup: 'Don\'t have an account? <a href="/register">Sign up</a>.',
// Form fields
username: 'Username',
password: 'Password',
// Message
errorTitle: 'Sign in errors'
},
// /signout
signout: {
title: 'Signed Out',
content: 'You have successfully signed out. Come back soon!'
},
// /terms
termsOfService: {
title: 'Terms of service',
content: '<p>Add your terms of service.</p>'
},
// /lost-username
usernameRecover: {
// Page elements
title: 'Recover your username',
content: 'Enter your email and we send you a link to recover your username.',
submitBtn: 'Recover',
cancelBtn: 'Cancel',
// Form fields
email: 'Email address',
// Messages
errorTitle: 'There was an issue recovering your username'
},
// /lost-username/submitted
usernameRecoverSubmitted: {
title: 'Recover your username',
subtitle: 'Recovery request received!',
content: 'If an account matches the email <strong>{{email}}</strong>, you can receive an email
from us that contains the username associated with the address you entered.',
typo: 'Made a typo? <a href="/lost-username">Try again</a>.',
loginBtn: 'Go back to login'
}
});
```




