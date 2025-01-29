# Time zone offsets

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2f548269-e57f-43a3-8daf-9ca289f4f2a8"/>
</head>


When parsing a value configured as date/time, the mapping engine converts the date/time to a special internal date format: `yyyyMMdd HHmmss.SSS`. The internal format does not contain a time zone offset. The implied time zone is that of the server on which the Atom, Molecule, or Cloud is running.

If the source value and date mask does not contain an offset, the value is processed using the Atom server's time zone. However, if the source value and date mask does contain an offset, the engine adjusts the time value \(see table below\) for the Atom's time zone.

When converting from some time zone to UTC time \(0 hour offset\), if the source value contains offset information and the source profile element's input mask is configured with the appropriate date mask, the mapping engine does this transformation automatically.

The following table demonstrates how date values are converted from source to destination given slightly different date masks. In this example the Atom is running on a server configured as Eastern Time.

| Source                                     | Destination                                      | Comments                                                                                   |
|--------------------------------------------|--------------------------------------------------|--------------------------------------------------------------------------------------------|
| `yyyy-MM-dd'T'HH:mm:ss.SSS`<br />`2010-04-27T20:30:14.000` | `yyyy-MM-dd'T'HH:mm:ss.SSS`<br />`2010-04-27T20:30:14.000` | No offset specified, no adjustment                                                         |
| `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`<br />`2010-04-27T20:30:14.000-07:00` | `yyyy-MM-dd'T'HH:mm:ss.SSSZ`<br />`2010-04-27T23:30:14.000-0400` | Pacific to Atom time (Eastern), value adjusted                                             |
| `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`<br />`2010-04-27T20:30:14.000-07:00` | `yyyy-MM-dd'T'HH:mm:ss.000ZZ`<br />`2010-04-27T23:30:14.000-04:00` | Pacific to Atom time (Eastern), valued adjusted, common web services format                |
| `yyyy-MM-dd'T'HH:mm:ss.SSSZZ`<br />`2010-04-27T20:30:14.000-07:00` | `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`<br />`2010-04-28T03:30:14.000Z`    | Pacific to UTC, value adjusted                                                            |