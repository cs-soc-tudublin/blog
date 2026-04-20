---
title: 08-04 Postmortem
created: 2026-04-08T12:04:18
modified: 2026-04-08T12:22:12
tags:
  - admins
  - post-mortem
author: rjm
---

Starting at 03:02:24 (all times are GMT) on the 8th of April 2026 and ending at 11:57 the same day, CS++ experienced full or partial service degradation caused by automatic updates. This resulted in the full cluster going offline for 23 minutes, followed by 4 services remaining offline until manual intervention returned them to service.

We would like to apologise for this incident. As a service provider to Clubs and Societies in TU Dublin, our goal is to maximise uptime and service quality. At the end we will go over how we will work to reduce the chance of incidents occurring to provide a better service to the Clubs and Societies and the 28,000+ students in TU Dublin.

# Updating and Unintended Side-Effects

None of the Virtual Machines or Servers that we use to host services allow automatic updates. Updates are able to introduce breaking changes, and may also result in services being restarted.

The current best practice in industry is to create downtime windows and update during them, as users are aware there will be a service interruption, and this means the Sysadmin team will be on-call and ready to triage issues as they appear.

# How Our Cluster Works

It is important to mention now, that our setup allows us to 'pool' together the hardware of our four servers and make it easy to create and host services. This comes with many benefits, like the ability to recover from hardware failure and automatically restore services.

Each Server (called a 'node') sends network requests to every other node to see if they're online. If a node sees that another is offline, it asks the other nodes if they can see the failed one. This type of 'quorum' or voting on the state of the cluster means that a single-node failure, or one of four nodes not being able to reach another will not cause the entire cluster to fall over.

# Automated Networking Hardware Updates

While our computing hardware and Virtual Machines are not automatically updated. The networking infrastructure we use accidentally had these settings left on.

This had never been an issue before, as the only automatic updates caused zero downtime and did not restart the hardware itself.

Today, however, was different. Both of our network switches, used to connect our nodes to each other and the internet were restarted as new firmware was provided. This caused a temporary network blackout of a few minutes, meaning none of the nodes were able to verify they were online, assumed the worst and the cluster fell over taking the services with it.

# How Will We Prevent This?

The best way to test systems is by putting them under load. Real environments have real challenges, and this is one that would not appear under a simulated environment.

Unique situations and configurations like this will be incorporated into our Systems Administration documentation, and our training for future Sysadmins.

We remain committed to building the best student-led hosting infrastructure in Ireland and will use this mistake to improve our procedures and practices.

Since our last post-mortem, we have implemented logging and alerting which made us aware of the issue that we otherwise would not have noticed until reports came in of broken services.

Every failure is seen instead as a place of growth to build a stronger, more resilient technical stack.

We apologise for this service interruption and will work to reduce further incidents.
