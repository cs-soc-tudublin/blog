---
title: CS++ Blog
created: 2024-01-30T02:13:04
modified: 2024-06-30T16:05:10
index: true
---

# CS++ Blog

This repository contains all of the blog posts from CS++. They are served [here](https://cspp.ie/).
The Blog system is based closely off Redbrick's [blog](https://github.com/redbrick/blog).

Blog Posts are usually written in [Obsidian](https://obsidian.md/), which provides an easy experience to write Markdown files!
This repository contains the .obisidan file, which installs the relevant theme and plugins for writing blog posts easily.

# How to Write a Blog Post
1. Clone this repository
```bash
git clone https://github.com/cs-soc-tudublin/blog.git
```
2. Open the newly cloned folder in Obsidian
- Go into settings and enable community plugins
- Make sure that all plugins and enabled
3. Create a new note
4. Open Obsidian's Command Pallette (CTRL + P, or CMD + P if you are on Mac) and type `blog`, and select the `Clerk: Create a new blog post.`
5. Fill in the dialogue that has opened and click Submit when you are done.
6. Begin writing the blog post.
7. Open Obsidian's Command Pallette (CTRL + P, or CMD + P if you are on Mac) and type `Commit all changes`, and select the `Obsidian Git: Commit all changes` option.
8. Then re-open the command pallette and type `Git push` and select the `Obsidian Git: Push` option.
9. Go to the Plume repository and update the `src/_data/site.yml` file's `navigation.global.link` to `/blog/posts/[your-blog-post].html`, replacing `[your-blog-post]` with the filename of your new post WITHOUT the `.md` ending.
