---
layout: default
title: "How to Use Grayjay"
permalink: /how-to-use/
---

# How to Use Grayjay

This page will cover the basics of using Grayjay, including navigation, subscribing to creators, and managing your feed.



## Introduction to Sources

By default Grayjay itself has no ability to access anything but it's own infrastructure, sources allow Grayjay to access information across multiple platforms. Sources are sandboxed using Javascript Isolated V8 Engines and permission based packages/network traffic. Grayjay allows sources to have the ability to add login for platform specific features and paid content, also for importing of playlists and subscriptions.

## Installing Sources

FUTO is working on a Polycentric based store for allowing people to share and install plugins all within the same app, but in the meantime there is three main ways of installing plugins:

1. [The unofficial community plugin website](https://plugins.grayjay.app/) made by Bluscream,
2. [The official plugin website](https://plugins.grayjay.app/) for installing FUTO maintained plugins,
3. Installing plugins manually via a QR code or direct plugin config URL.

Once you've installed some plugins, you can move on to configuring them.

## Configuring Sources

To start, first go to the sources tab in the app, you'll see a list of all your currently installed sources (for the Play Store version none by default.) The sources are listed by priority, meaning, the higher the source is the higher in priority Grayjay will treat it, this matters in the cases of page results, URL handling, etc, so it's important to put the sources up higher that you want to use more. It's generally recommended to put sources at the bottom that are known to have a hard stance against third party clients, such as YouTube. You can change a source's priority by dragging it up or down.