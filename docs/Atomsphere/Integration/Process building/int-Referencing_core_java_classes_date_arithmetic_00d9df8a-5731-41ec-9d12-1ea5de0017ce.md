# Referencing core Java classes (date arithmetic)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-00d9df8a-5731-41ec-9d12-1ea5de0017ce"/>
</head>


If the scheduled delivery date is blank, this sample Javascript and Groovy custom scripting functions set the scheduled delivery date to 10 days from now. This assumes the source and destination profile elements for the `deliveryDate` input and `result` output are both configured as Date/Time types.

The order number is defined as an Input \(and of course mapped from the source data\) however it is not actually used in the script. Because we want this function to execute even when the scheduled delivery date is blank or omitted from the source altogether, we need to map some value in that is guaranteed to be present in the source data \(e.g., order number\). Map functions whose source elements are omitted are not executed.

## JavaScript example


| | |
| ---- | --- |
|**Inputs**|-   deliveryDate \(Date/Time\)<br />-   orderNum \(Character\)|
|**Outputs**|-   result|


**Script**

```java
load("nashorn:mozilla_compat.js");
importClass(java.util.GregorianCalendar);
importClass(java.util.Calendar);
importClass(java.util.Date);

if (deliveryDate == null) {

var calendar = new GregorianCalendar();
calendar.setTime(new Date());
calendar.add(Calendar.DATE, 10);

result = calendar.getTime();
} else {
result = deliveryDate;
}
```

## Groovy example

| | |
| ---- | --- |
|**Inputs**|-   deliveryDate \(Date/Time\)<br />-   orderNum \(Character\)|
|**Outputs**|-   result|

**Script**

```java
import java.util.GregorianCalendar;
import java.util.Calendar;
import java.util.Date;

if (deliveryDate == null) {

Calendar calendar = new GregorianCalendar();
calendar.setTime(new Date());
calendar.add(Calendar.DATE, 10);

result = calendar.getTime();

} else {

result = deliveryDate;

}
```