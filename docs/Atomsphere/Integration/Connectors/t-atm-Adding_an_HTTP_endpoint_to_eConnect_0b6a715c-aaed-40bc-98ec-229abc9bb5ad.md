# Adding an HTTP endpoint to eConnect 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0b6a715c-aaed-40bc-98ec-229abc9bb5ad"/>
</head>


You add an HTTP endpoint to eConnect so the Microsoft Dynamics GP connector can exchange data with the Great Plains database. After completing this task and importing your profile, the changes take effect.

## Before you beginBefore you begin

Before completing this task, complete the prerequisites in the Great Plains connector or Microsoft Dynamics GP connector topic.

## Procedure

1.  Stop the eConnect service if it is currently running.

2.  Edit the `Microsoft.Dynamics.GP.eConnect.Service.exe.config` file.

    The location of this file is in the Service folder of the eConnect installation. For example: `C:\Program Files\Microsoft Dynamics\<eConnect_Version>\Service\Microsoft.Dynamics.GP.eConnect.Service.exe.config`.

3.  Within the `<bindings>` element, add a `<basicHttpBinding>` element:

    ```
    <basicHttpBinding>
    	<binding name="eConnectBasicHttpConfig" closeTimeout="00:10:00"
    		sendTimeout="00:10:00" allowCookies="false" maxBufferSize="2147483647"
    		maxBufferPoolSize="2147483647" maxReceivedMessageSize="2147483647">
    		<security mode="TransportCredentialOnly">
    			<transport clientCredentialType="Basic" />
    		</security>
    	</binding>
    </basicHttpBinding>
    ```

4.  Within the `Microsoft.Dynamics.GP.eConnect.service <service>` element, add a new `<endpoint>` element.

    ```
    <endpoint address="EntityOperations" binding="basicHttpBinding"
    	bindingConfiguration="eConnectBasicHttpConfig" name="eConnectServiceBasicHttpEndpoint"
    	contract="Microsoft.Dynamics.GP.eConnect.IEconnect">
    	<identity>
    		<dns value="localhost" />
    	</identity>
    </endpoint>
    ```

5.  Within the `<baseAddresses>` element, add a new `<add>` element.

    ```
    <add baseAddress="http://localhost/Microsoft/Dynamics/GP/eConnect/" />
    ```

6.  Start the eConnect service.

7.  Import your Profile.

    Changes take effect after you import the profile.