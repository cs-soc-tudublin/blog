---
title: Stealing from Redbrick
created: 2024-03-25T15:00:00
modified: 2024-06-30T16:45:30
tags:
  - admins
author: rjm
---

So, you're probably wondering how we got this swanky new, gorgeous site up and running so quick, huh?

I mean, it's just too good for a CS++ original.

# The Short of It, is That We Didn't Make It From Scratch

Not even close, actually!

# Enter: Redbrick

[Redbrick](https://redbrick.dcu.ie/) is DCU's Networking Society, and if you clicked that link just there, you'll realise their website is a carbon-copy of our. Or rather, we copied them!

Recently, we got approval from Redbrick to use their [Atlas]() site system for ourselves. It is MIT licensed and available on their GitHub, but we're friendly socs, so we decided to ask first!

# But why Atlas?

Atlas is a really smart bit of kit written mostly by one [Jed Hazaymeh](https://github.com/JedHazaymeh), the main site is designed to be mostly static, with stuff that might change (Such as committee, hero-text, and images) being defined in YAML, to make it easy!

We forked it, creating [Plume](https://github.com/cs-soc-tudublin/plume).

For stuff like blogs, you just write them in Markdown, with a little table at the top, and after a quick push, it's up on the main site!

Simply, using Atlas allowed us to get a gorgeous, and easy-to-update site up quickly.

# But Where Next?

Currently, we have no plans to move from Atlas, but will continue to make modifications to the styling, and structure as it becomes necessary.

The beauty of open-source is that as we modify Plume, it'll be available to commit to its upstream, Atlas, if we develop any significant features.

It also means you can grab your own copy of Plume or Atlas and make your own gorgeous website!

# Finally, a Thanks
I'd like to thank everyone over at Redbrick who let us use your amazing work! Notable thanks to Dom for liaising, and especially for Jed who did such an amazing job at this site!