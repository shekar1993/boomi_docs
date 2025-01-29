# How inner classes work with caching-enabled Groovy scripts

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7421eb54-626b-4e85-b00e-02ea86916b72"/>
</head>


Learn about how to use inner classes if your custom scripting behavior has changed since upgrading a legacy custom scripting component to enable caching.

strongly recommends you to enable caching for your script to improve your script execution time. For information about how to enable caching on your custom script, see the topic [Enabling caching on a custom Groovy script](int-Enabling_caching_on_a_custom_groovy_script_9a8c0335-5bb4-4058-8834-5dce1614113c.md). However, by enabling caching, it might change your script behavior if you reuse your inner class declaration within the same process.

Let’s look at the following scenario where you have 4 different scripts in a process executed one after another.

Script 1

``` {#codeblock_mzm_1dz_gqb}
class InnerClass {
public String getText() {
return "Hello";
}
}


//
logger.log(new InnerClass().getText());
```

Script 2

``` {#codeblock_cp4_1dz_gqb}
// InnerClass was declared in Script 1 so we can use it here
logger.log(new InnerClass().getText());
```

Script 3

``` {#codeblock_r3q_1dz_gqb}
// Redeclare InnerClass
class InnerClass {
public String getText() {
return "World";
}
}

logger.log(new InnerClass().getText());
```

Script 4

``` {#codeblock_e4s_1dz_gqb}
// InnerClass was declared before so we can use it here
logger.log(new InnerClass().getText());
```

Groovy engine compiles InnerClass every time it sees a new declaration and stores the latest compiled script in memory. As a result, the following log is printed out:

``` {#codeblock_njf_1dz_gqb}
Script1: Hello
Script2: Hello
Script3: World
Script4: World
```

After upgrading your scripting component to enable caching, the Groovy engine does not recompile InnerClass. The following log will be printed out instead:

First run: \(no cache is available yet\)

``` {#codeblock_ok5_gdz_gqb}
Script1: Hello
Script2: Hello
Script3: World
Script4: World
```

Second run and subsequent runs \(compiled script has been cached\)

``` {#codeblock_nbc_bdz_gqb}
Script1: World
Script2: World
Script3: World
Script4: World
```

This behavior impacts only those scripts with the same inner class declaration but different implementation. In order to prevent this, Boomi's recommendation is to:

-   Avoid reusing inner class names to prevent conflict.
-   In the case that you have to re-use your inner class name, you can leverage differing package names when reusing inner class names in order to make them unique. \(For example, using the 4 scripts above with package\).

Script 1

``` {#codeblock_sdk_bdz_gqb}
package my.package1;

class InnerClass {
public String getText() {
return "Hello";
}
}

logger.log(new InnerClass().getText());
```

Script 2

``` {#codeblock_fd4_bdz_gqb}
import my.package1.InnerClass;

logger.log(new InnerClass().getText());
```

Script 3

``` {#codeblock_lkq_bdz_gqb}
package my.package2;

class InnerClass {
public String getText() {
return "World";
}
}

logger.log(new InnerClass().getText());
```

Script 4

``` {#codeblock_fm5_bdz_gqb}
import my.package2.InnerClass;

logger.log(new InnerClass().getText());
```

By declaring the package name properly, the Groovy engine makes a unique compiled version of each inner class as a result of their differing signatures. The outcome of this change is the same as before:

``` {#codeblock_byy_bdz_gqb}
Script1: Hello
Script2: Hello
Script3: World
Script4: World
```