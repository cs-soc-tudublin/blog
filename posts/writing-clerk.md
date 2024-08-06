---
title: Writing Clerk
created: 2024-08-06T17:10:13.116Z
tags:
   - admin
   - foss
author: rjm
---
At CS++, we use [Obsidian](https://obsidian.md/), a markdown note application for writing our blog posts, docs, and internal meeting minutes.

For each of these things, they require an element called a [FrontMatter](https://jekyllrb.com/docs/front-matter/). This contains information like the title, creation date, tags, author, etc.

A raw frontmatter for a blog looks like this:
```markdown
---
title: thing
created: yyyy-mm-ddThh:mm:ss.msZ
tags:
	- tag1
	- tag2
author: author
---
```
This is pretty annoying to have to hand-write as an end user, and would discourage writing blog posts, docs, and slow the start of meetings.

# Enter: Clerk
To solve this, I created an Obsidian plugin (my first!) called [Clerk](https://github,.com/cs-soc-tudublin/clerk).
Clerk adds commands in the Command Palette (Opened by pressing `CTRL + P`, or `CMD + P`).
These commands create a modal that allows the end user to more easily create the specified frontmatter for the use-case, i.e. a blog or a docs page.

# But, Why?
Both myself, and CS++ are hyper-focused on minimising frustrations, and most importantly, **Solving problems through code**.

The mantra of writing projects to make your life easier is a great one to live by, especially while you're a student! You're not only learning languages and making your life easier, but you're also creating portfolio projects!

A portfolio is an essential part of your CV, so the more you make, the better your CV gets!
Recruiters love to see practical projects, projects that you create to solve problems. Having projects like that in your portfolio will help you stand out from others who just have assignment projects and projects from tutorials.