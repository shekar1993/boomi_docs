# Groovy Policy Allow List

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-83d88138-4f64-4f6e-888e-41794254c7ab"/>
</head>

The [Groovy policy](api-groovy_policy) comes with a native sandbox feature allowing to safely run Groovy scripts. The sandbox is based on a predefined list of allowed methods, fields, constructors, and annotations.

The complete allow list is the following:

```
# Allows by class (all methods, fields and constructors)
class groovy.json.JsonOutput
class groovy.json.JsonParserType
class groovy.json.JsonSlurper
class groovy.util.slurpersupport.Node
class groovy.util.slurpersupport.NodeChild
class groovy.util.XmlSlurper
class io.gravitee.am.model.safe.ClientProperties
class io.gravitee.am.model.safe.DomainProperties
class io.gravitee.am.model.safe.UserProperties
class io.gravitee.am.model.uma.PermissionRequest
class io.gravitee.common.http.GraviteeHttpHeader
class io.gravitee.common.http.HttpHeader
class io.gravitee.common.http.HttpHeaders
class io.gravitee.common.http.HttpHeadersValues
class io.gravitee.common.http.HttpMethod
class io.gravitee.common.http.HttpStatusCode
class io.gravitee.common.http.HttpVersion
class io.gravitee.common.http.MediaType
class io.gravitee.common.util.BlockingArrayQueue
class io.gravitee.common.util.LinkedCaseInsensitiveMap
class io.gravitee.common.util.LinkedCaseInsensitiveSet
class io.gravitee.common.util.LinkedMultiValueMap
class io.gravitee.common.util.ListReverser
class io.gravitee.common.util.Maps
class io.gravitee.common.util.MultiValueMap
class io.gravitee.common.util.URIUtils
class io.gravitee.gateway.api.ExecutionContext
class io.gravitee.gateway.api.http.HttpHeaders
class io.gravitee.policy.v3.groovy.model.ContentAwareRequest
class io.gravitee.policy.v3.groovy.model.ContentAwareResponse
class io.gravitee.policy.groovy.PolicyResult
class io.gravitee.policy.groovy.PolicyResult$State
class io.gravitee.policy.groovy.utils.AttributesBasedExecutionContext
class io.gravitee.policy.groovy.model.BindableExecutionContext
class io.gravitee.policy.groovy.model.http.BindableHttpRequest
class io.gravitee.policy.groovy.model.http.BindableHttpResponse
class io.gravitee.policy.groovy.model.BindableHttpHeaders
class io.gravitee.policy.groovy.model.message.BindableMessage
class io.gravitee.policy.groovy.model.message.BindableMessageAttributes
class java.lang.Double
class java.lang.Float
class java.lang.Integer
class java.lang.Long
class java.lang.Math
class java.lang.Short
class java.lang.String
class java.math.BigDecimal
class java.math.BigInteger
class java.net.URLDecoder
class java.net.URLEncoder
class java.time.chrono.ChronoLocalDateTime
class java.time.chrono.ChronoZonedDateTime
class java.time.temporal.Temporal
class java.time.temporal.TemporalAdjuster
class java.time.format.DateTimeFormatter
class java.time.Instant
class java.time.LocalDate
class java.time.LocalDateTime
class java.time.ZonedDateTime
class java.time.ZoneId
class java.util.Calendar
class java.util.Collection
class java.util.Collections
class java.util.Date
class java.util.Deque
class java.util.List
class java.util.Map
class java.util.Queue
class java.util.Random
class org.codehaus.groovy.runtime.DateGroovyMethods
class org.apache.groovy.dateutil.extensions.DateUtilExtensions
class org.apache.groovy.dateutil.extensions.DateUtilStaticExtensions
class java.lang.Byte

# Allows method signatures
method groovy.json.JsonSlurper parseText java.lang.String
method groovy.lang.Closure call
method groovy.lang.Closure call java.lang.Object
method groovy.lang.Closure call java.lang.Object[]
method groovy.lang.Closure curry java.lang.Object
method groovy.lang.Closure curry java.lang.Object[]
method groovy.lang.Closure getDelegate
method groovy.lang.Closure getResolveStrategy
method groovy.lang.Closure memoize
method groovy.lang.Closure memoizeAtLeast int
method groovy.lang.Closure memoizeAtMost int
method groovy.lang.Closure memoizeBetween int int
method groovy.lang.Closure ncurry int java.lang.Object
method groovy.lang.Closure ncurry int java.lang.Object[]
method groovy.lang.Closure setDelegate java.lang.Object
method groovy.lang.Closure setResolveStrategy int
method groovy.lang.GString plus java.lang.String
method groovy.lang.Range getFrom
method groovy.lang.Range getTo
method groovy.lang.Range step int
method groovy.lang.Range step int groovy.lang.Closure
method java.lang.Comparable compareTo java.lang.Object
method java.lang.Enum name
method java.lang.Enum ordinal
method java.lang.Object clone
method java.lang.Object equals java.lang.Object
method java.lang.Object hashCode
method java.lang.Object toString
method java.lang.System currentTimeMillis
method java.lang.System nanoTime
method java.lang.Throwable getCause
method java.lang.Throwable getMessage
method java.util.Comparator compare java.lang.Object java.lang.Object
method java.util.Map$Entry getKey
method java.util.Map$Entry getValue
method java.util.TimeZone getTimeZone java.lang.String
method java.util.UUID randomUUID
method org.codehaus.groovy.runtime.DefaultGroovyMethods abs java.lang.Double
method org.codehaus.groovy.runtime.DefaultGroovyMethods abs java.lang.Float
method org.codehaus.groovy.runtime.DefaultGroovyMethods abs java.lang.Long
method org.codehaus.groovy.runtime.DefaultGroovyMethods abs java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods addAll java.util.Collection java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods addAll java.util.Collection java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods addAll java.util.Collection java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods addAll java.util.List int java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods addEntry java.util.Map java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods and java.lang.Boolean java.lang.Boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods and java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods and java.util.BitSet java.util.BitSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods any java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods any java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods any java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods any java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods any java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods any java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods asArrayType java.lang.Object java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Double
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Float
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.util.Enumeration
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asBoolean short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods asCollection java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods asImmutable java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods asImmutable java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods asImmutable java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods asImmutable java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods asImmutable java.util.SortedMap
method org.codehaus.groovy.runtime.DefaultGroovyMethods asImmutable java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods asList java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods asList java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods asString java.lang.Throwable
method org.codehaus.groovy.runtime.DefaultGroovyMethods asSynchronized java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods asSynchronized java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods asSynchronized java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods asSynchronized java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods asSynchronized java.util.SortedMap
method org.codehaus.groovy.runtime.DefaultGroovyMethods asSynchronized java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType groovy.lang.Closure java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType java.lang.Iterable java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType java.lang.Number java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType java.lang.Object java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType java.lang.Object[] java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType java.util.Collection java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asType java.util.Map java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods asUnmodifiable java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods asUnmodifiable java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods asUnmodifiable java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods asUnmodifiable java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods asUnmodifiable java.util.SortedMap
method org.codehaus.groovy.runtime.DefaultGroovyMethods asUnmodifiable java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods bitwiseNegate java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods bitwiseNegate java.util.BitSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods chop java.lang.Iterable int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods chop java.lang.Object[] int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods chop java.util.Iterator int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods coercedEquals java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods coercedEquals java.lang.Object[] java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Iterable int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Iterable int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Iterable int int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Object[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Object[] int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Object[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.lang.Object[] int int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.util.List int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.util.List int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods collate java.util.List int int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Iterable java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Object java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.lang.Object[] java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Collection java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Iterator java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collect java.util.Map java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectAll java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectAll java.util.Collection java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Iterable java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Iterable java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Object[] java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.lang.Object[] java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Collection java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Collection java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Iterator java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Iterator java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectEntries java.util.Map java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.lang.Iterable java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.lang.Object[] java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Collection java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Iterator java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectMany java.util.Map java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectNested java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectNested java.lang.Iterable java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectNested java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods collectNested java.util.Collection java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods combinations java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods combinations java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods combinations java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods compareTo java.lang.Character java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods compareTo java.lang.Character java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods compareTo java.lang.Number java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods compareTo java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains boolean[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains byte[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains char[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains double[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains float[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains int[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains java.lang.Iterable java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains java.lang.Object[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains long[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods contains short[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods containsAll java.lang.Iterable java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods containsAll java.util.Collection java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods count boolean[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count byte[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count char[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count double[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count float[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count int[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.lang.Iterable java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.lang.Object[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.util.Iterator java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods count long[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods count short[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods countAnswer java.util.Map java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods countBy java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods countBy java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods countBy java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods countBy java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods countBy java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods disjoint java.lang.Iterable java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods disjoint java.util.Collection java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods div java.lang.Character java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods div java.lang.Character java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods div java.lang.Number java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto double java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto float java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto java.lang.Double java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto java.lang.Float java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto java.lang.Long java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto java.lang.Number java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto java.math.BigDecimal java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto java.math.BigInteger java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods downto long java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods drop java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods drop java.lang.Object[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods drop java.util.Iterator int
method org.codehaus.groovy.runtime.DefaultGroovyMethods drop java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods drop java.util.Map int
method org.codehaus.groovy.runtime.DefaultGroovyMethods drop java.util.SortedSet int
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropRight java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropRight java.lang.Object[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropRight java.util.Iterator int
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropRight java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropRight java.util.SortedSet int
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropWhile java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropWhile java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropWhile java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropWhile java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropWhile java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods dropWhile java.util.SortedSet groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.util.Set groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods each java.util.SortedSet groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachByte byte[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachByte java.lang.Byte[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachCombination java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachPermutation java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachPermutation java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.util.Set groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods eachWithIndex java.util.SortedSet groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods equals int[] int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods equals java.lang.Object[] java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods equals java.util.List java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods equals java.util.List java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods equals java.util.Map java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods equals java.util.Set java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods every java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods every java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods every java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods every java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods every java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods every java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods find java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods find java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods find java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods find java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods find java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods find java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll groovy.lang.Closure java.util.Collection java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods findAll java.util.Set groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.lang.Iterable int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.lang.Object int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.lang.Object[] int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexOf java.util.Iterator int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.lang.Iterable java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.lang.Object java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.lang.Object[] java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findIndexValues java.util.Iterator java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.lang.Iterable int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.lang.Object int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.lang.Object[] int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findLastIndexOf java.util.Iterator int groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.lang.Iterable java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.lang.Object java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.lang.Object[] java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.util.Collection java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.util.Iterator java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResult java.util.Map java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResults java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResults java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResults java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResults java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods findResults java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods first java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods first java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods first java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.lang.Iterable java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.lang.Iterable java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods flatten short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods get java.util.Map java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt boolean[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt boolean[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt boolean[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt boolean[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt byte[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt byte[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt byte[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt byte[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt char[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt char[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt char[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt char[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt double[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt double[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt double[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt double[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt float[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt float[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt float[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt float[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt groovy.lang.ListWithDefault groovy.lang.EmptyRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt groovy.lang.ListWithDefault groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt groovy.lang.ListWithDefault java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt int[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt int[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt int[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt int[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Object java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Object[] groovy.lang.EmptyRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Object[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Object[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Object[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.lang.Object[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.BitSet groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.BitSet int
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.Collection java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.Iterator int
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.List groovy.lang.EmptyRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.List groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.List java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.List java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt java.util.Map java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt long[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt long[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt long[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt long[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt short[] groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt short[] groovy.lang.ObjectRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt short[] groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAt short[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAtImpl java.lang.Object[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods getAtIterable java.lang.Iterable java.lang.String java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getIndices short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods getLocation java.lang.Class
method org.codehaus.groovy.runtime.DefaultGroovyMethods getSubList java.util.List java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.lang.Object[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.util.List java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.util.Set
method org.codehaus.groovy.runtime.DefaultGroovyMethods grep java.util.Set java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupAnswer java.util.Map java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.lang.Iterable java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.lang.Iterable java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.lang.Object[] java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.lang.Object[] java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.util.Collection java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.util.Collection java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.util.Map java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupBy java.util.Map java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods groupEntriesBy java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods head java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods head java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods head java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods identity java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods implies java.lang.Boolean java.lang.Boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed double[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed int[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed java.util.Iterator int
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods indexed long[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods init java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods init java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods init java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods init java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods init java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods inits java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.lang.Object java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.lang.Object[] java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.util.Collection java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.util.Iterator java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods inject java.util.Map java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods intdiv java.lang.Character java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods intdiv java.lang.Character java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods intdiv java.lang.Number java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods intdiv java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.lang.Iterable java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.lang.Iterable java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.Collection java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.Collection java.util.Collection java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.List java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.List java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.Map java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.Set java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.Set java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.SortedSet java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods intersect java.util.SortedSet java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods is java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods isCase java.lang.Class java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods isCase java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods isCase java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods isCase java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods isCase java.util.Map java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods isDigit java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods isEmpty java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods isLetter java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods isLetterOrDigit java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods isLowerCase java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods isUpperCase java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods isWhitespace java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods iterator java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods iterator java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods iterator java.util.Enumeration
method org.codehaus.groovy.runtime.DefaultGroovyMethods iterator java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods join boolean[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join byte[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join char[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join double[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join float[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join int[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join java.lang.Iterable java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join java.lang.Object[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join java.util.Collection java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join java.util.Iterator java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join long[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods join short[] java.lang.String
method org.codehaus.groovy.runtime.DefaultGroovyMethods last java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods last java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods last java.util.Deque
method org.codehaus.groovy.runtime.DefaultGroovyMethods last java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.concurrent.BlockingQueue java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.List java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.Map java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.Map java.util.Map.Entry
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.Set java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods leftShift java.util.SortedSet java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods max double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods max int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.lang.Object[] java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Collection java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Iterator java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods max java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods max long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods min double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods min int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.lang.Object[] java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Collection java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Iterator java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods min java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods min long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Character java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Character java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Iterable java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Iterable java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Number java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Object[] java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Object[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.lang.Object[] java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.Collection java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.List java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.List java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.List java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.Map java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.Set java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.Set java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.Set java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.SortedSet java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.SortedSet java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods minus java.util.SortedSet java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods mod java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.lang.Character java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.lang.Character java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.lang.Iterable java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.lang.Number java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.math.BigDecimal java.lang.Double
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.math.BigDecimal java.math.BigInteger
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.util.Collection java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods multiply java.util.List java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods next java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods next java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods numberAwareCompareTo java.lang.Comparable java.lang.Comparable
method org.codehaus.groovy.runtime.DefaultGroovyMethods or java.lang.Boolean java.lang.Boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods or java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods or java.util.BitSet java.util.BitSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods permutations java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods permutations java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods permutations java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Character java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Character java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Iterable java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Iterable java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Number java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Object[] java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Object[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Object[] java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.lang.Object[] java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Collection java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Collection java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.List int java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.List int java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.List int java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.List java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.List java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.List java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Map java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Map java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Set java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Set java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.Set java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.SortedSet java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.SortedSet java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods plus java.util.SortedSet java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods pop java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods power java.lang.Integer java.lang.Integer
method org.codehaus.groovy.runtime.DefaultGroovyMethods power java.lang.Long java.lang.Integer
method org.codehaus.groovy.runtime.DefaultGroovyMethods power java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods power java.math.BigDecimal java.lang.Integer
method org.codehaus.groovy.runtime.DefaultGroovyMethods power java.math.BigInteger java.lang.Integer
method org.codehaus.groovy.runtime.DefaultGroovyMethods power java.math.BigInteger java.math.BigInteger
method org.codehaus.groovy.runtime.DefaultGroovyMethods previous java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods previous java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods primitiveArrayGet java.lang.Object groovy.lang.Range
method org.codehaus.groovy.runtime.DefaultGroovyMethods primitiveArrayGet java.lang.Object int
method org.codehaus.groovy.runtime.DefaultGroovyMethods primitiveArrayGet java.lang.Object java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods primitiveArrayPut java.lang.Object int java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods push java.util.List java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAll java.util.Map java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.lang.Object java.lang.String java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.BitSet groovy.lang.IntRange boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.BitSet int boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List groovy.lang.EmptyRange java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List groovy.lang.EmptyRange java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List groovy.lang.IntRange java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List groovy.lang.IntRange java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List int java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List java.lang.Number java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List java.util.List java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.List java.util.List java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.util.Map java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods removeAll java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods removeAll java.util.Collection java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods removeAll java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods removeAt java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods removeElement java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods removeLast java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods resizeListWithRangeAndGetSublist java.util.List groovy.lang.IntRange
method org.codehaus.groovy.runtime.DefaultGroovyMethods retainAll java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods retainAll java.util.Collection java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods retainAll java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverse java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverse java.lang.Object[] boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverse java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverse java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverse java.util.List boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverseEach java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverseEach java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods reverseEach java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods rightShift java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods rightShiftUnsigned java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods round java.lang.Double
method org.codehaus.groovy.runtime.DefaultGroovyMethods round java.lang.Double int
method org.codehaus.groovy.runtime.DefaultGroovyMethods round java.lang.Float
method org.codehaus.groovy.runtime.DefaultGroovyMethods round java.lang.Float int
method org.codehaus.groovy.runtime.DefaultGroovyMethods round java.math.BigDecimal
method org.codehaus.groovy.runtime.DefaultGroovyMethods round java.math.BigDecimal int
method org.codehaus.groovy.runtime.DefaultGroovyMethods size boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods size java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods size long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods size short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Iterable boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Iterable boolean groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Iterable boolean java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Object[] boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Object[] boolean groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Object[] boolean java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.lang.Object[] java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.Iterator java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.Map java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.SortedMap
method org.codehaus.groovy.runtime.DefaultGroovyMethods sort java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods split groovy.lang.Closure java.util.Collection java.util.Collection java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods split java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods split java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods split java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods split java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods split java.util.Set groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods spread java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods step java.lang.Number java.lang.Number java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods subMap java.util.Map java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods subMap java.util.Map java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods subsequences java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum byte[] byte
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum char[] char
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum double[] double
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum float[] float
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum int[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Iterable java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Iterable java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Object[] java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.lang.Object[] java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Collection java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Collection java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Iterator java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Iterator java.lang.Object boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Iterator java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum java.util.Iterator java.lang.Object groovy.lang.Closure boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum long[] long
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods sum short[] short
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap boolean[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap byte[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap char[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap double[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap float[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap int[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap java.lang.Object[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap java.util.List int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap long[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods swap short[] int int
method org.codehaus.groovy.runtime.DefaultGroovyMethods tail java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods tail java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods tail java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods tail java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods tail java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods tails java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods take java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods take java.lang.Object[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods take java.util.Iterator int
method org.codehaus.groovy.runtime.DefaultGroovyMethods take java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods take java.util.Map int
method org.codehaus.groovy.runtime.DefaultGroovyMethods take java.util.SortedSet int
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeRight java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeRight java.lang.Object[] int
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeRight java.util.List int
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeRight java.util.SortedSet int
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeWhile java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeWhile java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeWhile java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeWhile java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeWhile java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods takeWhile java.util.SortedSet groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods tap java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods times java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toArrayString java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toBigDecimal java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods toBigInteger java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods toBoolean java.lang.Boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods toDouble java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods toFloat java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods toInteger java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList java.util.Enumeration
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toList short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toListString java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods toListString java.util.Collection int
method org.codehaus.groovy.runtime.DefaultGroovyMethods toLong java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods toLowerCase java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods toMapString java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods toMapString java.util.Map int
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet java.util.Enumeration
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSet short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.lang.Object[] java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.Iterator java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.Map java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.SortedMap
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSorted java.util.SortedSet
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSpreadMap java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSpreadMap java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSpreadMap java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods toSpreadMap java.util.Map
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString boolean[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString byte[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString char[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString double[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString float[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString int[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString java.lang.Object
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString java.util.AbstractCollection
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString java.util.AbstractMap
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString long[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toString short[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.lang.Iterable groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.lang.Object[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.lang.Object[] groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.lang.Object[] java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.util.Iterator java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUnique java.util.List java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods toUpperCase java.lang.Character
method org.codehaus.groovy.runtime.DefaultGroovyMethods transpose double[][]
method org.codehaus.groovy.runtime.DefaultGroovyMethods transpose int[][]
method org.codehaus.groovy.runtime.DefaultGroovyMethods transpose java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods transpose long[][]
method org.codehaus.groovy.runtime.DefaultGroovyMethods trunc java.lang.Double
method org.codehaus.groovy.runtime.DefaultGroovyMethods trunc java.lang.Double int
method org.codehaus.groovy.runtime.DefaultGroovyMethods trunc java.lang.Float
method org.codehaus.groovy.runtime.DefaultGroovyMethods trunc java.lang.Float int
method org.codehaus.groovy.runtime.DefaultGroovyMethods trunc java.math.BigDecimal
method org.codehaus.groovy.runtime.DefaultGroovyMethods trunc java.math.BigDecimal int
method org.codehaus.groovy.runtime.DefaultGroovyMethods unaryMinus java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods unaryPlus java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Collection
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Collection boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Collection boolean groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Collection boolean java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Collection groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Collection java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Iterator groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.Iterator java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.List
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.List boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.List boolean groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.List boolean java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods unique java.util.List java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods uniqueItems java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods uniqueItems java.lang.Iterable java.util.Comparator
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto double java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto float java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto java.lang.Double java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto java.lang.Float java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto java.lang.Long java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto java.lang.Number java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto java.math.BigDecimal java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto java.math.BigInteger java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods upto long java.lang.Number groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods with java.lang.Object boolean groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods with java.lang.Object groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withDefault java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withDefault java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withDefault java.util.Map groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withEagerDefault java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withEagerDefault java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withIndex java.lang.Iterable
method org.codehaus.groovy.runtime.DefaultGroovyMethods withIndex java.lang.Iterable int
method org.codehaus.groovy.runtime.DefaultGroovyMethods withIndex java.util.Iterator
method org.codehaus.groovy.runtime.DefaultGroovyMethods withIndex java.util.Iterator int
method org.codehaus.groovy.runtime.DefaultGroovyMethods withLazyDefault java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withLazyDefault java.util.List groovy.lang.Closure
method org.codehaus.groovy.runtime.DefaultGroovyMethods withTraits java.lang.Object java.lang.Class[]
method org.codehaus.groovy.runtime.DefaultGroovyMethods xor java.lang.Boolean java.lang.Boolean
method org.codehaus.groovy.runtime.DefaultGroovyMethods xor java.lang.Number java.lang.Number
method org.codehaus.groovy.runtime.DefaultGroovyMethods xor java.util.BitSet java.util.BitSet
method org.codehaus.groovy.runtime.EncodingGroovyMethods decodeBase64 java.lang.String
method org.codehaus.groovy.runtime.EncodingGroovyMethods decodeBase64 java.lang.String boolean
method org.codehaus.groovy.runtime.EncodingGroovyMethods decodeHex java.lang.String
method org.codehaus.groovy.runtime.EncodingGroovyMethods digest byte[] java.lang.String
method org.codehaus.groovy.runtime.EncodingGroovyMethods digest java.lang.CharSequence java.lang.String
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeBase64 byte[]
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeBase64 byte[] boolean
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeBase64 byte[] boolean boolean boolean
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeBase64 java.lang.Byte[]
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeBase64 java.lang.Byte[] boolean
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeHex byte[]
method org.codehaus.groovy.runtime.EncodingGroovyMethods encodeHex java.lang.Byte[]
method org.codehaus.groovy.runtime.EncodingGroovyMethods md5 byte[]
method org.codehaus.groovy.runtime.EncodingGroovyMethods md5 java.lang.CharSequence
method org.codehaus.groovy.runtime.EncodingGroovyMethods sha256 byte[]
method org.codehaus.groovy.runtime.EncodingGroovyMethods sha256 java.lang.CharSequence
method org.codehaus.groovy.runtime.GStringImpl compareTo java.lang.String
method org.codehaus.groovy.runtime.GStringImpl compareToIgnoreCase java.lang.String
method org.codehaus.groovy.runtime.GStringImpl concat java.lang.String
method org.codehaus.groovy.runtime.GStringImpl contains java.lang.CharSequence
method org.codehaus.groovy.runtime.GStringImpl contentEquals java.lang.CharSequence
method org.codehaus.groovy.runtime.GStringImpl contentEquals java.lang.StringBuffer
method org.codehaus.groovy.runtime.GStringImpl endsWith java.lang.String
method org.codehaus.groovy.runtime.GStringImpl equalsIgnoreCase java.lang.String
method org.codehaus.groovy.runtime.GStringImpl getChars int int char[] int
method org.codehaus.groovy.runtime.GStringImpl getStrings
method org.codehaus.groovy.runtime.GStringImpl indexOf int
method org.codehaus.groovy.runtime.GStringImpl indexOf int int
method org.codehaus.groovy.runtime.GStringImpl indexOf java.lang.String
method org.codehaus.groovy.runtime.GStringImpl indexOf java.lang.String int
method org.codehaus.groovy.runtime.GStringImpl isEmpty
method org.codehaus.groovy.runtime.GStringImpl lastIndexOf int
method org.codehaus.groovy.runtime.GStringImpl lastIndexOf int int
method org.codehaus.groovy.runtime.GStringImpl lastIndexOf java.lang.String
method org.codehaus.groovy.runtime.GStringImpl lastIndexOf java.lang.String int
method org.codehaus.groovy.runtime.GStringImpl matches java.lang.String
method org.codehaus.groovy.runtime.GStringImpl replace char char
method org.codehaus.groovy.runtime.GStringImpl replace java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.GStringImpl replaceAll java.lang.String java.lang.String
method org.codehaus.groovy.runtime.GStringImpl replaceFirst java.lang.String java.lang.String
method org.codehaus.groovy.runtime.GStringImpl split java.lang.String
method org.codehaus.groovy.runtime.GStringImpl split java.lang.String int
method org.codehaus.groovy.runtime.GStringImpl startsWith java.lang.String
method org.codehaus.groovy.runtime.GStringImpl startsWith java.lang.String int
method org.codehaus.groovy.runtime.GStringImpl substring int
method org.codehaus.groovy.runtime.GStringImpl substring int int
method org.codehaus.groovy.runtime.GStringImpl toCharArray
method org.codehaus.groovy.runtime.GStringImpl toLowerCase
method org.codehaus.groovy.runtime.GStringImpl toUpperCase
method org.codehaus.groovy.runtime.GStringImpl trim
method org.codehaus.groovy.runtime.InvokerHelper asIterator java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter bitwiseNegate java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareEqual java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareGreaterThan java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareGreaterThanEqual java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareIdentical java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareLessThan java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareLessThanEqual java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareNotEqual java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareNotIdentical java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter compareTo java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter createRange java.lang.Object java.lang.Object boolean
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter findRegex java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter isCase java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.ScriptBytecodeAdapter matchRegex java.lang.Object java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods asType groovy.lang.GString java.lang.Class
method org.codehaus.groovy.runtime.StringGroovyMethods asType java.lang.CharSequence java.lang.Class
method org.codehaus.groovy.runtime.StringGroovyMethods asType java.lang.String java.lang.Class
method org.codehaus.groovy.runtime.StringGroovyMethods capitalize java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods capitalize java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods center java.lang.CharSequence java.lang.Number
method org.codehaus.groovy.runtime.StringGroovyMethods center java.lang.CharSequence java.lang.Number java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods contains java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods count java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods count java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods denormalize java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods drop groovy.lang.GString int
method org.codehaus.groovy.runtime.StringGroovyMethods drop java.lang.CharSequence int
method org.codehaus.groovy.runtime.StringGroovyMethods drop java.lang.String int
method org.codehaus.groovy.runtime.StringGroovyMethods dropWhile groovy.lang.GString groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods dropWhile java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods dropWhile java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods eachMatch java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods eachMatch java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods eachMatch java.lang.String java.lang.String groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods eachMatch java.lang.String java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods expand java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods expand java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods expand java.lang.CharSequence int
method org.codehaus.groovy.runtime.StringGroovyMethods expand java.lang.CharSequence int
method org.codehaus.groovy.runtime.StringGroovyMethods expandLine java.lang.CharSequence int
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.util.regex.Pattern
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.util.regex.Pattern
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods find java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods findAll java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods findAll java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods findAll java.lang.CharSequence java.util.regex.Pattern
method org.codehaus.groovy.runtime.StringGroovyMethods findAll java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods getAt groovy.lang.GString groovy.lang.IntRange
method org.codehaus.groovy.runtime.StringGroovyMethods getAt groovy.lang.GString groovy.lang.Range
method org.codehaus.groovy.runtime.StringGroovyMethods getAt groovy.lang.GString int
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.CharSequence groovy.lang.EmptyRange
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.CharSequence groovy.lang.IntRange
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.CharSequence groovy.lang.Range
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.CharSequence int
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.CharSequence java.util.Collection
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.String groovy.lang.IntRange
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.String groovy.lang.Range
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.lang.String int
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.util.regex.Matcher int
method org.codehaus.groovy.runtime.StringGroovyMethods getAt java.util.regex.Matcher java.util.Collection
method org.codehaus.groovy.runtime.StringGroovyMethods isAllWhitespace java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods isDouble java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods isFloat java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods isInteger java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods isLong java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods leftShift java.lang.CharSequence java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods leftShift java.lang.String java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods leftShift java.lang.StringBuffer java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods leftShift java.lang.StringBuilder java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods matches java.lang.CharSequence java.util.regex.Pattern
method org.codehaus.groovy.runtime.StringGroovyMethods minus java.lang.CharSequence java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods minus java.lang.CharSequence java.util.regex.Pattern
method org.codehaus.groovy.runtime.StringGroovyMethods multiply java.lang.CharSequence java.lang.Number
method org.codehaus.groovy.runtime.StringGroovyMethods multiply java.lang.CharSequence java.lang.Number
method org.codehaus.groovy.runtime.StringGroovyMethods normalize java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods normalize java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods padLeft java.lang.CharSequence java.lang.Number
method org.codehaus.groovy.runtime.StringGroovyMethods padLeft java.lang.CharSequence java.lang.Number java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods padRight java.lang.CharSequence java.lang.Number
method org.codehaus.groovy.runtime.StringGroovyMethods padRight java.lang.CharSequence java.lang.Number java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods plus java.lang.CharSequence java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods plus java.lang.Number java.lang.String
method org.codehaus.groovy.runtime.StringGroovyMethods plus java.lang.String java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods plus java.lang.StringBuffer java.lang.String
method org.codehaus.groovy.runtime.StringGroovyMethods previous java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods putAt java.lang.StringBuffer groovy.lang.EmptyRange java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods putAt java.lang.StringBuffer groovy.lang.IntRange java.lang.Object
method org.codehaus.groovy.runtime.StringGroovyMethods readLines java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.util.regex.Pattern java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceAll java.lang.CharSequence java.util.regex.Pattern java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.util.regex.Pattern groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.util.regex.Pattern java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods replaceFirst java.lang.CharSequence java.util.regex.Pattern java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods reverse java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods reverse java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods size java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods size java.lang.String
method org.codehaus.groovy.runtime.StringGroovyMethods size java.lang.StringBuffer
method org.codehaus.groovy.runtime.StringGroovyMethods size java.util.regex.Matcher
method org.codehaus.groovy.runtime.StringGroovyMethods split java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods takeWhile groovy.lang.GString groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods takeWhile java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods takeWhile java.lang.CharSequence groovy.lang.Closure
method org.codehaus.groovy.runtime.StringGroovyMethods toBoolean java.lang.String
method org.codehaus.groovy.runtime.StringGroovyMethods tr java.lang.CharSequence java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods tr java.lang.CharSequence java.lang.CharSequence java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods unexpand java.lang.CharSequence
method org.codehaus.groovy.runtime.StringGroovyMethods unexpand java.lang.CharSequence int
method org.codehaus.groovy.runtime.StringGroovyMethods unexpandLine java.lang.CharSequence int
method java.lang.String format java.lang.String java.lang.Object[]

# Allows constructor signatures

# Allows annotations

```