---
title: 19-04 Postmortem
created: 2026-04-20T10:46:13
modified: 2026-04-20T11:17:28
tags:
   - admins
   - postmortem
author: rjm
---

 Starting at 13:58:40 (All times are GMT) on the 19th of April 2026, and ending at 02:47:27 on the 20th of April, an unexpected internet outage resulted in CS++'s longest full outage since we started hosting services at the start of August 2025. Since there was no impact on the computing infrastructure, services were automatically available once the internet was restored.

This outage was a perfect storm of events, occurring while the server room our campus is in was closed for the weekend, meaning we were unable to triage the issue as we had no physical access to the infrastructure.

We would like to apologise for this incident. As a service provider to Clubs and Societies in TU Dublin, our goal is to maximise uptime and service quality. At the end we will go over how we will work to reduce the chance of incidents occurring to provide a better service to the Clubs and Societies and the 28,000+ students in TU Dublin.

# Data and Service Integrity

We take the uptime and integrity of the services that you trust us to host very seriously. While we were unable to guarantee it at the time, this downtime result in no data loss. Unlike a power outage, or internal networking failure, this did not impact the servers we use to run your services. They remained running, but were just unreachable.

As mentioned before, we are continuing to make our infrastructure more resilient to power loss and internal networking faults with the goal of maximising uptime and eliminating data loss.

# Upstream Providers

Like most cloud service providers, we are reliant on other organisations for certain things. Most notably, [CloudFlare](https://cloudflare.com/) and [Asiera](https://www.asiera.ie/) (Formerly HEANet).

You might remember that on the 18th of November 2025, a [global CloudFlare outage](https://blog.cloudflare.com/18-november-2025-outage/) meant that users visiting services that we host were getting errors instead. This had a global impact and affected many more groups than just us.

Asiera is our Internet Service Provider (ISP) and are how we connect to the internet. This outage appeared to be local to just CS++ and our server room.

# Flying Blind

We have been able to confirm that our infrastructure is not at fault. Though, after troubleshooting with the ICT Department in TU Dublin, it seems only we were affected. There is a series of failure points when it comes to internet connections. Everything from the router that breaks us out to the internet, to the TU Dublin infrastructure that we piggy-back off, to the cables connecting to our Server Room.

We will continue to investigate this problem to attempt to mitigate recurrences, and will provide updates as we get them.

# How Will We Prevent This?

This is one of the rare cases that with our current information, mitigation is difficult. Upstream issues tend to be out of our hands and we instead switch to damage control to minimise data loss, and maximise uptime.

In this case, we were unaware of this outage until a user report informed us. This is something we are working to resolve, and will be working with the University of Galway [CompSoc](https://compsoc.ie/) to provide off-site monitoring and alerting if the systems become unavailable. This outage, while out of our hands, made us aware that we were missing alerts if the infrastructure goes offline.

We apologise for this service interruption and will work to reduce further incidents.
