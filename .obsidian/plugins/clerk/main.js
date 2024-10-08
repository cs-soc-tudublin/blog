/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Clerk
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/blogModal.ts
var import_obsidian = require("obsidian");
var blogModal = class extends import_obsidian.Modal {
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Create a New Blog Post" });
    new import_obsidian.Setting(contentEl).setName("Post Title").addText((text) => text.onChange((value) => {
      this.title = value;
    }));
    new import_obsidian.Setting(contentEl).setName("Post Tags (Separated by spaces)").addText((text) => text.onChange((value) => {
      this.tags = value;
    }));
    new import_obsidian.Setting(contentEl).setName("Author").addText((text) => text.onChange((value) => {
      this.author = value;
    }));
    new import_obsidian.Setting(contentEl).addButton((btn) => btn.setButtonText("Submit").setCta().onClick(() => {
      this.close();
      this.onSubmit({ title: this.title, tags: this.tags, author: this.author });
    }));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/docsModal.ts
var import_obsidian2 = require("obsidian");
var docsModal = class extends import_obsidian2.Modal {
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Create a New Help Doc" });
    new import_obsidian2.Setting(contentEl).setName("Post Title").addText((text) => text.onChange((value) => {
      this.title = value;
    }));
    new import_obsidian2.Setting(contentEl).setName("Post Tags (Separated by spaces)").addText((text) => text.onChange((value) => {
      this.tags = value;
    }));
    new import_obsidian2.Setting(contentEl).addButton((btn) => btn.setButtonText("Submit").setCta().onClick(() => {
      this.close();
      this.onSubmit({ title: this.title, tags: this.tags });
    }));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/createFrontMatter.ts
function createBlogFrontMatter(title, tags, author) {
  const tagsArray = tags.split(" ");
  const frontmatterDashes = "---";
  const frontMatterTitle = `title: ${title}`;
  const frontmatterAuthor = `author: ${author}`;
  const created = `created: ${new Date().toISOString()}`;
  const tagsIndent = tagsArray.map((tag) => `   - ${tag}`).join("\n");
  const tagsString = `tags:
${tagsIndent}`;
  return `${frontmatterDashes}
${frontMatterTitle}
${created}
${tagsString}
${frontmatterAuthor}
${frontmatterDashes}`;
}
function createDocsFrontMatter(title, tags) {
  const tagsArray = tags.split(" ");
  const frontmatterDashes = "---";
  const frontMatterTitle = `title: ${title}`;
  const created = `created: ${new Date().toISOString()}`;
  const tagsIndent = tagsArray.map((tag) => `   - ${tag}`).join("\n");
  const tagsString = `tags:
${tagsIndent}`;
  return `${frontmatterDashes}
${frontMatterTitle}
${created}
${tagsString}
${frontmatterDashes}`;
}
function createMinutesFrontMatter(title, attending, chair, meetingGroup, meetingAuthor) {
  const attendingArray = attending.split(",");
  const frontmatterDashes = "---";
  const frontMatterTitle = `title: ${title}`;
  const frontMatterChair = `chaired by: ${chair}`;
  const frontMatterMeetingGroup = `meeting group: ${meetingGroup}`;
  const frontMatterMeetingAuthor = `minutes by: ${meetingAuthor}`;
  const created = `timestamp: ${new Date().toISOString()}`;
  const attendingIndent = attendingArray.map((attendant) => `   - ${attendant}`).join("\n");
  const attendingString = `attending:
${attendingIndent}`;
  return `${frontmatterDashes}
${frontMatterTitle}
${created}
start time: 00:00
end time: 00:00
${attendingString}
${frontMatterChair}
${frontMatterMeetingGroup}
${frontMatterMeetingAuthor}
${frontmatterDashes}`;
}

// src/minutesModal.ts
var import_obsidian3 = require("obsidian");
var minutesModal = class extends import_obsidian3.Modal {
  constructor(app, onSubmit) {
    super(app);
    this.onSubmit = onSubmit;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Create New Meeting Minutes" });
    new import_obsidian3.Setting(contentEl).setName("Meeting Title").addText((text) => text.onChange((value) => {
      this.title = value;
    }));
    new import_obsidian3.Setting(contentEl).setName("Who is attending? (Separated by COMMAS!)").addText((text) => text.onChange((value) => {
      this.attending = value;
    }));
    new import_obsidian3.Setting(contentEl).setName("Who is chairing the meeting?").addText((text) => text.onChange((value) => {
      this.chair = value;
    }));
    new import_obsidian3.Setting(contentEl).setName("What group is meeting?").addText((text) => text.onChange((value) => {
      this.meetingGroup = value;
    }));
    new import_obsidian3.Setting(contentEl).setName("Who is taking the meeting minutes?").addText((text) => text.onChange((value) => {
      this.meetingAuthor = value;
    }));
    new import_obsidian3.Setting(contentEl).addButton((btn) => btn.setButtonText("Submit").setCta().onClick(() => {
      this.close();
      this.onSubmit({ title: this.title, attending: this.attending, chair: this.chair, meetingGroup: this.meetingGroup, meetingAuthor: this.meetingAuthor });
    }));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var Clerk = class extends import_obsidian4.Plugin {
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "open-blog-modal",
      name: "Create a new blog post",
      editorCallback: (editor, view) => {
        new blogModal(this.app, (result) => {
          editor.replaceSelection(createBlogFrontMatter(result.title, result.tags, result.author));
        }).open();
      }
    });
    this.addCommand({
      id: "open-docs-modal",
      name: "Create a docs page",
      editorCallback: (editor, view) => {
        new docsModal(this.app, (result) => {
          editor.replaceSelection(createDocsFrontMatter(result.title, result.tags));
        }).open();
      }
    });
    this.addCommand({
      id: "open-meetings-modal",
      name: "Create meeting minutes",
      editorCallback: (editor, view) => {
        new minutesModal(this.app, (result) => {
          editor.replaceSelection(createMinutesFrontMatter(result.title, result.attending, result.chair, result.meetingGroup, result.meetingAuthor));
        }).open();
      }
    });
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
