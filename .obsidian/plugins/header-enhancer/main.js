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

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HeaderEnhancerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");
var import_view = require("@codemirror/view");
var import_state = require("@codemirror/state");

// src/core.ts
function getHeaderLevel(text, startHeaderLevel) {
  const match = text.match(/^#+/);
  if (!match)
    return [0, 0];
  let level = match ? match[0].length : 0;
  return [level - startHeaderLevel + 1, level];
}
function getNextNumber(cntNums, headerLevel) {
  let nextNums = [...cntNums];
  if (nextNums.length >= headerLevel) {
    nextNums = nextNums.slice(0, headerLevel);
    nextNums[nextNums.length - 1]++;
  } else {
    while (nextNums.length < headerLevel) {
      nextNums.push(1);
    }
  }
  return nextNums;
}
function isNeedInsertNumber(text) {
  if (text.contains("	"))
    return false;
  return true;
}
function isNeedUpdateNumber(nextNumsStr, text) {
  let cntNumsStr = text.split("	")[0].split(" ")[0];
  return nextNumsStr !== cntNumsStr;
}
function removeHeaderNumber(text) {
  if (!text.contains("	"))
    return text;
  const sharp = text.split("	")[0].split(" ")[0];
  return sharp + " " + text.split("	")[1];
}
function isHeader(text) {
  return /^#{1,6} .*/.test(text.trim());
}

// src/setting.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  language: "en",
  showOnStatusBar: true,
  startHeaderLevel: 1,
  isAutoNumbering: true,
  autoNumberingStartNumber: "1",
  autoNumberingSeparator: ".",
  isSeparateTitleFont: true,
  titleFontFamily: "inherit",
  titleFontSize: "inherit"
};
var HeaderEnhancerSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "Header Enhancer Settings" });
    containerEl.createEl("h2", { text: "General" });
    new import_obsidian.Setting(containerEl).setName("Language").setDesc("Language for automatic numbering").addDropdown((dropdown) => {
      dropdown.addOption("en", "English");
      dropdown.addOption("zh", "Chinese");
      dropdown.setValue(this.plugin.settings.language);
      dropdown.onChange(async (value) => {
        this.plugin.settings.language = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Show on status bar").setDesc("Show automatic numbering status on status bar").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.showOnStatusBar).onChange(async (value) => {
        this.plugin.settings.showOnStatusBar = value;
        await this.plugin.saveSettings();
        this.plugin.handleShowStateBarChange();
      });
    });
    containerEl.createEl("h2", { text: "Header Auto Numbering" });
    new import_obsidian.Setting(containerEl).setName("Enable").setDesc("Enable auto numbering").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.isAutoNumbering).onChange(async (value) => {
        this.plugin.settings.isAutoNumbering = value;
        await this.plugin.saveSettings();
        this.plugin.handleShowStateBarChange();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Start header level").setDesc("Start numbering at this header level").addDropdown((dropdown) => {
      dropdown.addOption("1", "H1");
      dropdown.addOption("2", "H2");
      dropdown.addOption("3", "H3");
      dropdown.addOption("4", "H4");
      dropdown.addOption("5", "H5");
      dropdown.addOption("6", "H6");
      dropdown.setValue(this.plugin.settings.startHeaderLevel.toString());
      dropdown.onChange(async (value) => {
        this.plugin.settings.startHeaderLevel = parseInt(value, 10);
        console.log(this.plugin.settings.startHeaderLevel);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Start number").setDesc("Start numbering at this number").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.autoNumberingStartNumber).onChange(async (value) => {
      if (this.checkStartNumber(value)) {
        this.plugin.settings.autoNumberingStartNumber = value;
        await this.plugin.saveSettings();
        formatExample.setName("Your auto numbering format is like : 	" + this.plugin.settings.autoNumberingStartNumber + this.plugin.settings.autoNumberingSeparator + "1" + this.plugin.settings.autoNumberingSeparator + "1");
      } else {
        new import_obsidian.Notice("Start number should be a number");
      }
    }));
    new import_obsidian.Setting(containerEl).setName("Separator").setDesc("Separator between numbers. Only support one of '. , / -'").addText((text) => text.setPlaceholder("Enter your separator").setValue(this.plugin.settings.autoNumberingSeparator).onChange(async (value) => {
      if (this.checkSeparator(value)) {
        this.plugin.settings.autoNumberingSeparator = value;
        await this.plugin.saveSettings();
        formatExample.setName("Your auto numbering format is like : 	" + this.plugin.settings.autoNumberingStartNumber + this.plugin.settings.autoNumberingSeparator + "1" + this.plugin.settings.autoNumberingSeparator + "1");
      } else {
        new import_obsidian.Notice("Separator should be one of '. , / -'");
      }
    }));
    const formatExample = new import_obsidian.Setting(containerEl).setName(
      "Your auto numbering format is like : 	" + this.plugin.settings.autoNumberingStartNumber + this.plugin.settings.autoNumberingSeparator + "1" + this.plugin.settings.autoNumberingSeparator + "1"
    );
    containerEl.createEl("h2", { text: "Isolate Title Font [W.I.P]" });
    new import_obsidian.Setting(containerEl).setName("Enable").setDesc("Isolate title font from content").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.isSeparateTitleFont).onChange(async (value) => {
        this.plugin.settings.isSeparateTitleFont = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Font family").setDesc("Title font family, inherit from global font by default").addText((text) => text.setPlaceholder("global font").setValue(this.plugin.settings.titleFontFamily).onChange(async (value) => {
      this.plugin.settings.titleFontFamily = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Font size").setDesc("Title font size, inherit from global font size by default").addText((text) => text.setPlaceholder("global font size").setValue(this.plugin.settings.titleFontSize).onChange(async (value) => {
      this.plugin.settings.titleFontSize = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h2", { text: "More Info" });
    containerEl.createEl("p", { text: "Author: " }).createEl("a", {
      text: "Hobee Liu",
      href: "https://github.com/HoBeedzc"
    });
    containerEl.createEl("p", { text: "License: " }).createEl("a", {
      text: "MIT",
      href: "https://github.com/HoBeedzc/obsidian-header-enhancer-plugin/blob/master/LICENSE"
    });
    containerEl.createEl("p", { text: "Github Repo: " }).createEl("a", {
      text: "obsidian-header-enhancer",
      href: "https://github.com/HoBeedzc/obsidian-header-enhancer-plugin"
    });
    containerEl.createEl("p", { text: "Any question? Send feedback on " }).createEl("a", {
      text: "Github Issues",
      href: "https://github.com/HoBeedzc/obsidian-header-enhancer-plugin/issues"
    });
  }
  checkStartNumber(startNumber) {
    const reg = /^[0-9]*$/;
    return reg.test(startNumber);
  }
  checkSeparator(separator) {
    if (separator.length != 1) {
      return false;
    }
    const separators = [".", ",", "-", "/"];
    return separators.includes(separator);
  }
};

// src/main.ts
var HeaderEnhancerPlugin = class extends import_obsidian2.Plugin {
  async onload() {
    await this.loadSettings();
    const ribbonIconEl = this.addRibbonIcon("document", "Header Enhancer", (evt) => {
      const app2 = this.app;
      const activeView = app2.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
      if (!activeView) {
        new import_obsidian2.Notice("No active MarkdownView, cannot toggle automatic numbering.");
        return;
      }
      if (this.settings.isAutoNumbering) {
        this.settings.isAutoNumbering = false;
        new import_obsidian2.Notice("Automatic numbering is off");
        this.handleRemoveHeaderNumber(activeView);
      } else {
        this.settings.isAutoNumbering = true;
        new import_obsidian2.Notice("Automatic numbering is on");
        this.handleAddHeaderNumber(activeView);
      }
      this.handleShowStateBarChange();
    });
    this.statusBarItemEl = this.addStatusBarItem();
    this.handleShowStateBarChange();
    this.registerEditorExtension(import_state.Prec.highest(import_view.keymap.of([
      {
        key: "Enter",
        run: (view) => {
          const success = this.handlePressEnter(view);
          return success;
        }
      }
    ])));
    this.addCommand({
      id: "toggle-automatic-numbering",
      name: "Toggle automatic numbering",
      callback: () => {
        const activeView = app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
        if (!activeView) {
          new import_obsidian2.Notice("No active MarkdownView, cannot toggle automatic numbering.");
          return;
        }
        if (this.settings.isAutoNumbering) {
          this.settings.isAutoNumbering = false;
          new import_obsidian2.Notice("Automatic numbering is off");
          this.handleRemoveHeaderNumber(activeView);
        } else {
          this.settings.isAutoNumbering = true;
          new import_obsidian2.Notice("Automatic numbering is on");
          this.handleAddHeaderNumber(activeView);
        }
        this.handleShowStateBarChange();
      }
    });
    this.addSettingTab(new HeaderEnhancerSettingTab(this.app, this));
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  handleShowStateBarChange() {
    if (this.settings.showOnStatusBar) {
      const autoNumberingStatus = this.settings.isAutoNumbering ? "On" : "Off";
      this.statusBarItemEl.setText("Automatic Numbering: " + autoNumberingStatus);
    } else {
      this.statusBarItemEl.setText("");
    }
  }
  handleAddHeaderNumber(view) {
    const editor = view.editor;
    const lineCount = editor.lineCount();
    let docCharCount = 0;
    if (this.settings.isAutoNumbering) {
      let insertNumber = [Number(this.settings.autoNumberingStartNumber) - 1];
      for (let i = 0; i <= lineCount; i++) {
        const line = editor.getLine(i);
        docCharCount += line.length;
        if (isHeader(line)) {
          const [headerLevel, realHeaderLevel] = getHeaderLevel(line, this.settings.startHeaderLevel);
          if (headerLevel <= 0) {
            continue;
          }
          insertNumber = getNextNumber(insertNumber, headerLevel);
          const insertNumberStr = insertNumber.join(this.settings.autoNumberingSeparator);
          if (isNeedInsertNumber(line)) {
            editor.setLine(i, "#".repeat(realHeaderLevel) + " " + insertNumberStr + "	" + line.substring(realHeaderLevel + 1));
          } else if (isNeedUpdateNumber(insertNumberStr, line)) {
            const originNumberLength = line.split("	")[0].split(" ")[1].length;
            editor.setLine(i, "#".repeat(realHeaderLevel) + " " + insertNumberStr + line.substring(realHeaderLevel + originNumberLength + 1));
          }
        }
      }
    }
    return true;
  }
  handleRemoveHeaderNumber(view) {
    const editor = view.editor;
    const lineCount = editor.lineCount();
    if (!this.settings.isAutoNumbering) {
      let insertNumber = [Number(this.settings.autoNumberingStartNumber) - 1];
      for (let i = 0; i <= lineCount; i++) {
        const line = editor.getLine(i);
        if (isHeader(line)) {
          editor.setLine(i, removeHeaderNumber(line));
        }
      }
    }
    return true;
  }
  handlePressEnter(view) {
    let state = view.state;
    let doc = state.doc;
    const pos = state.selection.main.to;
    const lineCount = doc.lines;
    const changes = [];
    let docCharCount = 0;
    let insertCharCount = 0;
    let insertCharCountBeforePos = 0;
    changes.push({
      from: pos,
      to: pos,
      insert: "\n"
    });
    if (this.settings.isAutoNumbering) {
      let insertNumber = [Number(this.settings.autoNumberingStartNumber) - 1];
      for (let i = 1; i <= lineCount; i++) {
        const line = doc.line(i);
        const fromPos = line.from;
        docCharCount += line.length;
        if (isHeader(line.text)) {
          const [headerLevel, realHeaderLevel] = getHeaderLevel(line.text, this.settings.startHeaderLevel);
          if (headerLevel <= 0) {
            continue;
          }
          insertNumber = getNextNumber(insertNumber, headerLevel);
          const insertNumberStr = insertNumber.join(this.settings.autoNumberingSeparator);
          if (isNeedInsertNumber(line.text)) {
            if (docCharCount <= pos) {
              insertCharCountBeforePos += insertNumberStr.length + 1;
            }
            insertCharCount += insertNumberStr.length + 1;
            docCharCount += insertNumberStr.length + 1;
            changes.push({
              from: fromPos + realHeaderLevel + 1,
              to: fromPos + realHeaderLevel + 1,
              insert: insertNumberStr + "	"
            });
          } else if (isNeedUpdateNumber(insertNumberStr, line.text)) {
            const fromPos2 = line.from + realHeaderLevel + 1;
            const toPos = fromPos2 + line.text.split("	")[0].split(" ")[1].length;
            if (docCharCount <= pos) {
              insertCharCountBeforePos += insertNumberStr.length - toPos + fromPos2;
            }
            insertCharCount += insertNumberStr.length - toPos + fromPos2;
            docCharCount += insertNumberStr.length - toPos + fromPos2;
            changes.push({
              from: fromPos2,
              to: toPos,
              insert: insertNumberStr
            });
          }
        }
      }
    }
    view.dispatch({
      changes,
      selection: { anchor: pos + 1 + insertCharCountBeforePos },
      userEvent: "HeaderEnhancer.changeAutoNumbering"
    });
    return true;
  }
};