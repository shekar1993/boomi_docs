# x-flow-save

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-23a21a77-88be-4ddf-a807-5b23f36ef1b3"/>
</head>


This extension allows you to perform save operations using your OpenAPI document.

## Example

```
1  x-flow-save:
2    path: /users/{user_id}/playlists
3    operation: Post
4    parameters:
5      user_id: $User.UserID
```

## Properties

|Property|Description|
|--------|-----------|
|path|The path representing the relative endpoint called to perform the save operation.|
|operation|The HTTP method used to make the request.|
|parameters|The parameters included in the request. In this example, a special feature is being used where the same format of `$User.UserID` is used to request that the user ID passed from should be mapped to the `user_id` required in the URL.The following parameters are supported:

```
1   "$user.userid" => UserId,
2   "$user.email" => Email,
3   "$user.firstname" => FirstName,
4   "$user.lastname" => UserId,
5   "$user.directoryid" => DirectoryId,
6   "$user.directoryname" => DirectoryName,
7   "$user.primarygroupid" => PrimaryGroupId,
8   "$user.primarygroupname" => PrimaryGroupName,
9   "$user.roleid" => RoleId,
10   "$user.rolename" => RoleName
```

|