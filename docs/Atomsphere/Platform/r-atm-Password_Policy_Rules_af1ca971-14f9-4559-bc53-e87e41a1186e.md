# Password policy rules

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-386542E1-E2C2-459B-86FA-64BA5BCFA604"/>
</head>

Some rules for passwords are fixed by Boomi, while other rules are at the account owner’s discretion.

As we look to strengthen user trust in how handles personal and sensitive information, we are broadening the number of compliances and certifications that we claim. As part of our effort to achieve Trusted Cloud status with TRUST, we have added the following password requirements.

:::note

Custom password policy rules are available only to FedRAMP and SAML SSO administrators.

:::

## Default password policy rules

These rules are managed by account owners. The next time that a user changes their password, they will have to choose a password that complies with these rules:

- Passwords must have a minimum length of eight \(8\) characters.

- Passwords cannot consist solely of a sequence \(such as 12345678 or abcdefgh\), a repeated character \(such as 11111111 or aaaaaaaa\), or a keyboard pattern \(such as qwertyui\). However, you can have a password that consists of a mixture of upper and lower case characters in a sequence.

- Passwords cannot be common passwords, such as password, password123, changeme, administrator, etc.

- If you receive a system-generated password, you must change it the first time that you sign in.

## Optional password policy rules

An account owner can set or edit any or all of the following additional password policies for an account:

- (Required) Passwords must have a minimum length. The default is set to 8. To edit the rule, select a number from 8-18.

   Until the account owner changes the rules on an account, the following legacy aspects for minimum character length rules still apply:

   - If a minimum length restriction was not previously set, a minimum length restriction of 8 characters will take affect.
   - If the minimum length restriction was previously outside the range of 8-18, the value will be honored until the account owner explicitly sets the new policy within the 8-18 range.

       :::note
    
       The next time that a user changes their password, they will have to choose a password that fulfills the newest set character minimum.

       :::

- Passwords must not match any of the previous *n* passwords. Select a number from 1-120.

- Users can reset passwords at maximum five times every 24 hours.

- Passwords must expire. Select a number from 1-90 to define the period of time \(in days\) that a password can be used before a user is required to change it.

- Passwords must contain characters from at least two, three, or four of these groups: uppercase, lowercase, numeric, and special characters. previously enforced a password policy of two of three groups: alpha, numeric, and special characters.

   If the password policy is set to contain three or more groups, users are prompted to change their password to comply with this policy the next time they attempt to sign in. The following examples show passwords that would or would not comply with a policy set with three groups:

   - password1- this password contains characters from lowercase and numeric groups, and fulfills only two of three groups. Therefore, this password would fail and requires a reset.
   - Password1- this password contains characters from uppercase, lowercase, and numeric groups. This password meets three group requirements, and therefore complies.

- Passwords must not contain more than two consecutive sequences from the user ID.

- Passwords must not include repeated sets of two or more characters in sequence, such as a12x12.

For additional information on which roles can set and edit user management policies, refer to [User roles and privileges](c-atm-User_roles_and_privileges_5a1c8a1a-4d58-4e7d-a6b6-b684a0c6d672.md).
