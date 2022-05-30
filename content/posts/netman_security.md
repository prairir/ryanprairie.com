---
title: "Network Manager Security Flags to Type String"
date: "2022/04/15 22:11:36"
draft: false

author: "Ryan Prairie"

toc:

code:
  copy: true
  maxShownLines: 100
---

## The Problem

Imagine you're scanning wifi networks.
One great way to do it is through Network Manager on linux.
How do you interface with Network Manager?
Through D-Bus of course.

### Network Manager?

[Network Manager](https://gitlab.freedesktop.org/NetworkManager/NetworkManager) is a very influential software.
Its used on a bunch of linux distros.
It is a manager for all things networking on your computer.

It can setup TUN devices, connect to Wifi networks, and more importantly, scan them.

### D-Bus?

[D-Bus](https://www.freedesktop.org/wiki/Software/dbus/) is a message passing system. It is great for IPC.

Network Manager has a D-Bus interface so you can interface directly with the system.
This is great cause you can write programs that hook into that.

You go through the D-Bus [API spec of Network Manager.](https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.AccessPoint.html) Its full of a bunch of stuff but no security type? If you know nothing about wifi standards then its confusing.

## Solution

Luckily I found a way to turn WPA flags, RSN flags, and Access Point flags into a the security type.

A coworker found the exact [snippet](https://github.com/NetworkManager/NetworkManager/blob/d90c03b1b8f3e6f5ff8fbc1cbc176f0a0dec6362/src/nmcli/devices.c#L1315)
we needed.

```C open {linenos=table linenostart=1315}
if ((flags & NM_802_11_AP_FLAGS_PRIVACY) && (wpa_flags == NM_802_11_AP_SEC_NONE)
    && (rsn_flags == NM_802_11_AP_SEC_NONE)) {
    g_string_append(security_str, "WEP ");
}
if (wpa_flags != NM_802_11_AP_SEC_NONE) {
    g_string_append(security_str, "WPA1 ");
}
if ((rsn_flags & NM_802_11_AP_SEC_KEY_MGMT_PSK)
    || (rsn_flags & NM_802_11_AP_SEC_KEY_MGMT_802_1X)) {
    g_string_append(security_str, "WPA2 ");
}
if (rsn_flags & NM_802_11_AP_SEC_KEY_MGMT_SAE) {
    g_string_append(security_str, "WPA3 ");
}
if (NM_FLAGS_ANY(rsn_flags, NM_802_11_AP_SEC_KEY_MGMT_OWE | NM_802_11_AP_SEC_KEY_MGMT_OWE_TM)) {
    g_string_append(security_str, "OWE ");
}
if ((wpa_flags & NM_802_11_AP_SEC_KEY_MGMT_802_1X)
    || (rsn_flags & NM_802_11_AP_SEC_KEY_MGMT_802_1X)) {
    g_string_append(security_str, "802.1X ");
}

if (security*str->len > 0)
    g_string_truncate(security_str, security_str->len - 1); /* Chop off last space \_/

```

Well alright that was pretty easy. This code is overall is really easy to translate. Lets do it in a few languages.

### Code

```go

```
