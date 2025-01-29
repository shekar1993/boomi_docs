# Dynamic document property use cases

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-64f74c98-7490-4b78-b0a4-266db66a5f5d"/>
</head>

The following use cases describe how you might use dynamic document properties. For more information, refer to [Dynamic Document properties](./c-atm-Dynamic_Document_Properties_89d2f7a0-a490-4f35-a8b1-96af364f0211.md).

**Check for record existence**

- You want to check if a given record exists in the destination application to determine whether to perform a Create or Update call. Many applications require you to pass their internal system ID when performing updates. This approach avoids the need to perform a second connector call in the update map to retrieve the internal ID again. If the destination application supports an Upsert, you can avoid the whole lookup and decision step and simply map to the single upsert request with some external identifier. The best approach is:

  - Use a Set Properties step to perform a connector call that attempts to retrieve the internal ID for the given record and then store the result as a dynamic document property.

  - Use a Decision step to check whether that property is populated (for example, Document Property "not equal to" Static value of `<blank>`) and direct to the Create or Update Map and connector steps appropriately.

  - Use a map function in the update map to retrieve the internal ID value and map it accordingly.

**Maintain source record context**

- Capture the record-identifying values of source record such as internal ID and/or name, then reference these values later after an outbound connector call. Usually the response returned from the destination does not contain much or any of the data values you sent in the request. Having values like the original record's ID and name available after the Connector call are necessary to:

  - Generate a meaningful, contextualized error message or notification \(e.g., "Error syncing record 'Order 123'"\).

  - Perform an update to the original system to change a status flag or to write the new ID from the destination application to assist with subsequent syncs.

**Abstract profiles**

- You want to have a common series of steps that handles a special logging or error reporting routine that need to be performed in multiple processes. You could encapsulate those steps in a common child process called from each parent process. However, the data from each process will probably be in a different format and would need to be accessed via a different profile. The "common" steps would actually need to be replicated for each profile. However, by configuring the common steps to reference one or more dynamic document properties instead of profile elements, they could safely be used across the various parent processes. Each parent process would need to set those properties before passing the documents to the child process.

**Set flags for validation or routing**

- To perform very complex validation or routing logic, you can configure a dynamic map function instead of a Decision, Route, Connector, and other steps. The steps in the function can perform connector lookups and scripting to determine the fate of a given document. The end result of the logic can set a value \(e.g., "VALID"/"INVALID" or "CREATE"/"UPDATE"/"SKIP"/"WARN"\) as a dynamic document property that can be evaluated after the Map step by a Decision or Route step to process the document accordingly.
