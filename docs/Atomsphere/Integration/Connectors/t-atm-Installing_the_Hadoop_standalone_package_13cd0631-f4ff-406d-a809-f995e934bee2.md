# Installing and configuring the Hadoop native IO libraries 

When you install and configure the Hadoop native IO libraries, you can connect to remote Hadoop cluster resources using v2.2.0 and higher versions.

## About this task

You might need to manually build Hadoop native libraries for 32- or 64-bit versions of Linux or Windows. The Hadoop distribution includes optional native IO libraries only for Linux.

Boomi recommends that you install the Hadoop versions on a machine running a local Atom and that you use the same user account identity for Hadoop and  Integration.



## Procedure


1.  Follow the third-party installation instructions for [Linux](https://www.ercoppa.org/posts/how-to-install-apache-hadoop-on-ubuntu-linux.html) or [Windows](http://www.srccodes.com/p/article/38/build-install-configure-run-apache-hadoop-2.2.0-microsoft-windows-os).

2.  Download the IO library from the [Apache website](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/NativeLibraries.html).

3.  Complete the installation by following the step-by-step instructions to install and configure the standalone Hadoop package. Also, see the Hadoop command-line examples.

## Next steps

After the installation, configure your Atom to use the Hadoop libraries. If your Hadoop connection uses Windows, your installation \(and the execute action\) will not work without installing a native IO library.