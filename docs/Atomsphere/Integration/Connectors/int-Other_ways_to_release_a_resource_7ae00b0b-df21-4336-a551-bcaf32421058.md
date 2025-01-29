# Other ways to release a resource 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7ae00b0b-df21-4336-a551-bcaf32421058"/>
</head>


## Best practices

We demonstrated several ways to ensure that resources are properly released. We have looked at declaring resources outside of the `try` block so they can be closed in the `finally` block, allowing resources to be implicitly closed by a wrapped resource, parser, etc., and we used the `try`-with-resources statement to manage the resource.

Remember, these are not really -specific concepts; they are Java best practices. You may be wondering when to use an explicit `finally` versus a `try`-with-resources. Or, you may want to know when to use `IOUtil.closeQuietly` to suppress any exceptions encountered when closing a resource. The general guideline for using `closeQuietly` is that the resource can be closed quietly if failure to release the resource is insignificant to the application. Often, it depends on whether the application is reading or writing data.

When reading from an `InputStream` class, by the time the application is ready to close the resource, it has already received everything it needs from that resource. If the resource has been completely read, then a failure releasing the resource probably shouldn’t cause the application to fail. Alternatively, if an exception occurs while reading/processing the stream and we attempt to close non-quietly in a traditional `finally` block, the original exception will be lost.

When writing data to an `OutputStream` class, closing the stream is often necessary to completely write the data. If the close fails, it can indicate that not all of the data was written to the target. This is significant for the application and should not be done quietly. In a traditional `try`, `catch`, or `finally`, you generally want to close the output stream in the `try` block so that a failure closing the stream is propagated correctly. You also want to close quietly in the `finally` block to ensure that the resource is released if there is an exception prior to the first close attempt. In a `try`-with-resources, exceptions encountered when closing the resource are suppressed if an exception occurs in the `try` block. So, you don’t need multiple close calls.