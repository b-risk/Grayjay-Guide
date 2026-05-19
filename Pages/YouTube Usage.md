# YouTube Usage

This page is a full tutorial for using YouTube on Grayjay with the best experience possible.

## Installing The YouTube Plugin

The YouTube plugin is installed by default on most versions of Grayjay, but the Google Play version does not include it. To install it, go to https://plugins.grayjay.app/ and click on "Install" for the plugin.

For desktop users, you can install directly in the client in the sources tab.

At this point, you are done, but if you start experiencing blocks then move on to the next section.

## YouTube Blocks Workarounds

The first thing I want to mention before sharing workarounds is that many times blocks can be due to YouTube changing their site and Grayjay needing to workaround these changes, so in that case you should wait to see if there are any [existing issues on the GitHub page](https://github.com/futo-org/grayjay-android/issues) or if there is an update pushed to fix it.
Also, please go ahead and read the [Introduction to Grayjay](../README.md#introduction) if you haven't already.

### Method 1: Logging In

The first workaround you should try is logging into the YouTube plugin, by default the option to fallback to watching videos logged in will be enabled, so Grayjay will use the login only when necessary. 
If you are concerned about signing into your main account or if you don't have one, you can create one using [this guide](https://cascade.weblog.lol/how-to-create-and-use-a-google-account-anonymously-on-grapheneos).

### Method 2: Changing IP Address 
If you decide not to log in or you're still experiencing issues with video playback then the next workaround you can try is changing your IP address, most of the time YouTube blocks are due to YouTube blocking your IP address, so if you change it then YouTube will give you a new identity allowing you to view content.
There is a few different ways to change your IP address, the first is by using a VPN, the second is by using a different network like a mobile cellular data connection.

### Method 3: YouTube Content Mirrors
Assuming both method 1 and 2 failed for you, the next thing you can try is the most unreliable method which is using YouTube content mirrors.

**What is a YouTube content mirror?**
A YouTube content mirror is a service that mirrors YouTube content, allowing you to view content without needing to access the original site, improving privacy and avoiding blocks. Sense Grayjay allows you to install custom plugins, we will use this ability to access these services. These services are always changing and not guarenteed to be around for long, which is why this method is unreliable.

Here is the updated list of current working YouTube content mirrors:

1. Platform mirror channels - many sites like PeerTube and Rumble have channels dedicated to mirroring YouTube content

2. [PreserveTube](https://github.com/b-risk/grayjay-plugin-preservetube/) - made by Freeb and is a fork of Stefan Cruz's plugin

3. [Hobune Archive](https://github.com/b-risk/Grayjay-Hobune) - made by Freeb

4. [Nyane Archive](https://github.com/b-risk/Grayjay-Nyane) - made by Freeb

