# Flow states

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-32129a7c-a51a-4566-a406-3a66906818c6"/>
</head>


A 'state' refers to the running instance of a flow, and contains useful data such as all the values, and the current step that a user is on in the flow.

-   If the state is still 'in progress' and hasn’t reached it’s final step, it will be available for joining.

-   Once a state has reached it’s final step, it is considered 'done' and after three days will be 'deleted'. This means that all state content is removed \(such as values, user interactions and so on\) but the state record remains and can continue to be historically reported on within , through the [Dashboard](/docs/Atomsphere/Flow/topics/c-flo-Dashboard_4f5270f0-9144-4ab7-8cef-d8007c075190.md) for example.


## State lifetimes

States are persisted in the platform in two ways - ephemerally and permanently, depending on your requirements.

-   **Ephemeral States**: These are created when you **run** a flow. Ephemeral states are states that are stored in the cache, but have no guarantees on their lifetime. They will only be available to join or use until the cache cluster needs to reclaim space for newer states, which could be at any time. This type of state is fine for using while you are building or testing flows, as they are only short-term and will be automatically cleaned up.

    This type of state is recommended for use in development, testing, and staging, but best practice should be to avoid using ephemeral states in production environments.

    If a state is launched with a version ID, isn't the activated version, or is run in debug/debug stepthrough mode, the state has a 14 day expiration lifetime.

-   **Permanent States**: These are created when you **publish** a flow. Permanent states are saved in for longer-term storage than ephemeral states. This type of state is recommended for use in production environments.


## State expiration

States can be set to 'expire' after a set amount of time. Once a state expires, any user who tries to join or progress through it receives a message informing them that “The state with ID 12345 has now expired” and will no longer be able to interact with the flow.

This can be achieved by either editing the flow properties within when creating or editing a flow, or via the API.

For example, to define a flow expiration time for an existing flow:

1.  Open the flow you wish to set the expiration time for.
2.  Click **Properties** in the right-hand menu to open the **Flow Properties** form. See [Flow Properties](/docs/Atomsphere/Flow/topics/c-flo-Flow_Properties_b74d944d-9fec-43da-9ae3-fe0a5a370d00.md).
3.  In the **State** section of the form, enter a value \(in days\) into the **Number of days before the in-flight States should be deleted** field. The default setting is that 'in-flight' states are normally never deleted. For example, if the flow is running and the current element still has outcomes then the data will be held indefinitely.
4.  Save the flow. Once it has been published and run by a user, it will now 'expire' after the amount of time you have defined has passed so that a user will no longer be able to interact with it.

## State expiration due to inactivity

States can also be set to 'expire' after a set amount of time spent inactive. Once a state expires, any user who tries to join or progress through it receives a message informing them that “The state with ID 12345 has now expired” and will no longer be able to interact with the flow.

This can be achieved by either editing the flow properties within when creating or editing a flow, or via the API.

For example, to define a flow inactivity expiration time for an existing flow:

1.  Open the flow you wish to set the inactivity expiration time for.
2.  Click **Properties** in the right-hand menu to open the **Flow Properties** form. See [Flow Properties](/docs/Atomsphere/Flow/topics/c-flo-Flow_Properties_b74d944d-9fec-43da-9ae3-fe0a5a370d00.md).
3.  In the **State** section of the form, enter a value \(in days\) into the **Number of days of inactivity before the in-flight States should be deleted** field. This setting must be defined as a value between 1 - 180 days, where 180 days is the maximum number of days that can be set.
4.  Save the flow. Once it has been published and run by a user, it will now 'expire' if it remains inactive after the amount of time you have defined has passed so that a user will no longer be able to interact with it.

:::note

The default setting for newly created flows is 30 days.

:::