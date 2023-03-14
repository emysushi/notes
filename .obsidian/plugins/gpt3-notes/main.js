/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/sse.js
var require_sse = __commonJS({
  "lib/sse.js"(exports) {
    var SSE2 = function(url, options) {
      if (!(this instanceof SSE2)) {
        return new SSE2(url, options);
      }
      this.INITIALIZING = -1;
      this.CONNECTING = 0;
      this.OPEN = 1;
      this.CLOSED = 2;
      this.url = url;
      options = options || {};
      this.headers = options.headers || {};
      this.payload = options.payload !== void 0 ? options.payload : "";
      this.method = options.method || this.payload && "POST" || "GET";
      this.withCredentials = !!options.withCredentials;
      this.FIELD_SEPARATOR = ":";
      this.listeners = {};
      this.xhr = null;
      this.readyState = this.INITIALIZING;
      this.progress = 0;
      this.chunk = "";
      this.addEventListener = function(type, listener) {
        if (this.listeners[type] === void 0) {
          this.listeners[type] = [];
        }
        if (this.listeners[type].indexOf(listener) === -1) {
          this.listeners[type].push(listener);
        }
      };
      this.removeEventListener = function(type, listener) {
        if (this.listeners[type] === void 0) {
          return;
        }
        var filtered = [];
        this.listeners[type].forEach(function(element) {
          if (element !== listener) {
            filtered.push(element);
          }
        });
        if (filtered.length === 0) {
          delete this.listeners[type];
        } else {
          this.listeners[type] = filtered;
        }
      };
      this.dispatchEvent = function(e) {
        if (!e) {
          return true;
        }
        e.source = this;
        var onHandler = "on" + e.type;
        if (this.hasOwnProperty(onHandler)) {
          this[onHandler].call(this, e);
          if (e.defaultPrevented) {
            return false;
          }
        }
        if (this.listeners[e.type]) {
          return this.listeners[e.type].every(function(callback) {
            callback(e);
            return !e.defaultPrevented;
          });
        }
        return true;
      };
      this._setReadyState = function(state) {
        var event = new CustomEvent("readystatechange");
        event.readyState = state;
        this.readyState = state;
        this.dispatchEvent(event);
      };
      this._onStreamFailure = function(e) {
        var event = new CustomEvent("error");
        event.data = e.currentTarget.response;
        this.dispatchEvent(event);
        this.close();
      };
      this._onStreamAbort = function(e) {
        this.dispatchEvent(new CustomEvent("abort"));
        this.close();
      };
      this._onStreamProgress = function(e) {
        if (!this.xhr) {
          return;
        }
        if (this.xhr.status !== 200) {
          this._onStreamFailure(e);
          return;
        }
        if (this.readyState == this.CONNECTING) {
          this.dispatchEvent(new CustomEvent("open"));
          this._setReadyState(this.OPEN);
        }
        var data = this.xhr.responseText.substring(this.progress);
        this.progress += data.length;
        data.split(/(\r\n|\r|\n){2}/g).forEach(function(part) {
          if (part.trim().length === 0) {
            this.dispatchEvent(this._parseEventChunk(this.chunk.trim()));
            this.chunk = "";
          } else {
            this.chunk += part;
          }
        }.bind(this));
      };
      this._onStreamLoaded = function(e) {
        this._onStreamProgress(e);
        this.dispatchEvent(this._parseEventChunk(this.chunk));
        this.chunk = "";
      };
      this._parseEventChunk = function(chunk) {
        if (!chunk || chunk.length === 0) {
          return null;
        }
        var e = { id: null, retry: null, data: "", event: "message" };
        chunk.split(/\n|\r\n|\r/).forEach(function(line) {
          line = line.trimRight();
          var index = line.indexOf(this.FIELD_SEPARATOR);
          if (index <= 0) {
            return;
          }
          var field = line.substring(0, index);
          if (!(field in e)) {
            return;
          }
          var value = line.substring(index + 1).trimLeft();
          if (field === "data") {
            e[field] += value;
          } else {
            e[field] = value;
          }
        }.bind(this));
        var event = new CustomEvent(e.event);
        event.data = e.data;
        event.id = e.id;
        return event;
      };
      this._checkStreamClosed = function() {
        if (!this.xhr) {
          return;
        }
        if (this.xhr.readyState === XMLHttpRequest.DONE) {
          this._setReadyState(this.CLOSED);
        }
      };
      this.stream = function() {
        this._setReadyState(this.CONNECTING);
        this.xhr = new XMLHttpRequest();
        this.xhr.addEventListener("progress", this._onStreamProgress.bind(this));
        this.xhr.addEventListener("load", this._onStreamLoaded.bind(this));
        this.xhr.addEventListener("readystatechange", this._checkStreamClosed.bind(this));
        this.xhr.addEventListener("error", this._onStreamFailure.bind(this));
        this.xhr.addEventListener("abort", this._onStreamAbort.bind(this));
        this.xhr.open(this.method, this.url);
        for (var header in this.headers) {
          this.xhr.setRequestHeader(header, this.headers[header]);
        }
        this.xhr.withCredentials = this.withCredentials;
        this.xhr.send(this.payload);
      };
      this.close = function() {
        if (this.readyState === this.CLOSED) {
          return;
        }
        this.xhr.abort();
        this.xhr = null;
        this._setReadyState(this.CLOSED);
      };
    };
    if (typeof exports !== "undefined") {
      exports.SSE = SSE2;
    }
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  DEFAULT_SETTINGS: () => DEFAULT_SETTINGS,
  default: () => GPT3Notes2
});
module.exports = __toCommonJS(main_exports);

// src/GPT3.ts
var import_obsidian2 = require("obsidian");
var import_sse = __toESM(require_sse());

// src/SettingsView.ts
var import_obsidian = require("obsidian");
var models = {
  "text-davinci-003": "text",
  "text-curie-001": "text",
  "text-babbage-001": "text",
  "text-ada-001": "text",
  "gpt-3.5-turbo": "chat",
  "gpt-3.5-turbo-0301": "chat"
};
var modelsKeys = Object.keys(models);
var SettingsView = class extends import_obsidian.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "GPT-3 Settings" });
    new import_obsidian.Setting(containerEl).setName("OpenAI API Key").setDesc("The token generated in your OpenAI dashboard.").addText((text) => {
      text.setPlaceholder("Token").setValue(this.plugin.settings.token || "").onChange((change) => {
        this.plugin.settings.token = change;
        this.plugin.saveSettings();
      });
    }).addButton((button) => {
      button.setButtonText("Generate token");
      button.onClick((evt) => {
        window.open("https://beta.openai.com/account/api-keys");
      });
    });
    new import_obsidian.Setting(containerEl).setName("OpenAI Model").setDesc("The type of GPT-3 model to use.").addDropdown((dropdown) => {
      for (let model in modelsKeys) {
        dropdown.addOption(modelsKeys[model], modelsKeys[model]);
      }
      dropdown.onChange((change) => {
        this.plugin.settings.model = change;
      });
      dropdown.setValue(this.plugin.settings.model);
    });
    new import_obsidian.Setting(containerEl).setName("Delete history").setDesc("This will purge your prompt history").addButton((button) => {
      button.setButtonText("Delete History");
      button.onClick((evt) => {
        try {
          this.plugin.history_handler.reset();
          new import_obsidian.Notice("History reset");
        } catch (e) {
        }
      });
    });
    new import_obsidian.Setting(containerEl).setName("Custom Prefixes").setDesc("Set your custom prefixes, each on a separate line.").addTextArea((textArea) => {
      textArea.inputEl.className = "gpt_settings-text-area";
      textArea.setPlaceholder("Prefixes");
      let text = "";
      for (let i in this.plugin.settings.tokenParams.prefix) {
        let prefix = this.plugin.settings.tokenParams.prefix[i];
        text += `${prefix}
`;
      }
      textArea.onChange((value) => {
        let prefixes = this.parseParams(value);
        this.plugin.settings.tokenParams.prefix = prefixes;
        this.plugin.saveSettings();
      });
      textArea.setValue(text);
    });
    new import_obsidian.Setting(containerEl).setName("Custom Postfixes").setDesc("Set your custom postfixes, each on a separate line.").addTextArea((textArea) => {
      textArea.inputEl.className = "gpt_settings-text-area";
      textArea.setPlaceholder("Postfixes");
      let text = "";
      for (let i in this.plugin.settings.tokenParams.postfix) {
        let postfix = this.plugin.settings.tokenParams.postfix[i];
        text += `${postfix}
`;
      }
      textArea.onChange((value) => {
        let postfixes = this.parseParams(value);
        this.plugin.settings.tokenParams.postfix = postfixes;
        this.plugin.saveSettings();
      });
      textArea.setValue(text);
    });
    new import_obsidian.Setting(containerEl).setName("Reset Defaults").setDesc("Reset to plugin default settings.").addButton((button) => {
      button.setButtonText("Reset to Defaults");
      button.onClick((evt) => {
        try {
          this.plugin.settings = DEFAULT_SETTINGS;
          this.plugin.saveSettings();
          new import_obsidian.Notice("Default settings restored. You may need to reload the settings page.");
        } catch (e) {
        }
      });
    });
  }
  parseParams(text) {
    let res = text.split("\n");
    res.remove("");
    return res;
  }
};

// src/GPT3.ts
var GPT3Model = class {
  constructor() {
  }
  static generate(token, params, retry) {
    if (!retry) {
      retry = 0;
    }
    const modelType = models[params.model];
    const data = {
      ...this.paramsToModelParams(params, modelType),
      stream: true
    };
    try {
      const stream = new import_sse.SSE(this.endpoints[modelType], {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        payload: JSON.stringify(data)
      });
      return stream;
    } catch (e) {
      if (retry < 5) {
        return this.generate(token, params, retry + 1);
      }
      if (e.status === 429) {
        new import_obsidian2.Notice("GPT-3 Rate limit error: please try again soon.");
      } else if (e.status === 401) {
        new import_obsidian2.Notice("Invalid token. Please change your token in the plugin settings.");
      } else {
        new import_obsidian2.Notice("An error occured.");
      }
      return false;
    }
  }
  static paramsToModelParams(params, modelType) {
    if (modelType === "text") {
      return {
        prompt: params.prompt,
        temperature: params.temperature,
        max_tokens: params.tokens,
        model: params.model
      };
    } else if (modelType === "chat") {
      return {
        messages: [
          {
            role: "user",
            content: params.prompt
          }
        ],
        temperature: params.temperature,
        model: params.model
      };
    }
  }
};
GPT3Model.endpoints = {
  text: "https://api.openai.com/v1/completions",
  chat: "https://api.openai.com/v1/chat/completions"
};

// src/PluginModal.ts
var import_obsidian3 = require("obsidian");
var PluginModal = class extends import_obsidian3.Modal {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
    this.replacementTokens = {
      selection: (match, prompt) => {
        const view = this.plugin.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
        if (view) {
          const selection = view.editor.getSelection();
          prompt = this.replaceToken(match, prompt, selection);
        }
        return prompt;
      }
    };
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Create a GPT-3 Note");
    const container = contentEl.createDiv();
    container.className = "gpt_plugin-container";
    const history_toggle_container = container.createDiv({
      cls: "gpt_history-container",
      text: "Replace tokens in history"
    });
    const history_toggle = new import_obsidian3.ToggleComponent(history_toggle_container);
    const history_dropdown = new import_obsidian3.DropdownComponent(container);
    history_dropdown.selectEl.className = "gpt_history-dropdown";
    let history = this.plugin.settings.promptHistory;
    this.generateHistoryOptions(history_dropdown, history);
    history_toggle.onChange((change) => {
      this.replaceTokensInHistory = change;
      history_dropdown.selectEl.querySelectorAll("option").forEach((option) => {
        history_dropdown.selectEl.removeChild(option);
      });
      this.generateHistoryOptions(history_dropdown, history);
    });
    history_dropdown.onChange((change) => {
      try {
        const index = parseInt(change);
        this.useHistoryItem(history[index]);
        history_dropdown.setValue("History");
      } catch (e) {
      }
    });
    const dropdownsDiv = container.createDiv();
    dropdownsDiv.className = "gpt_dropdowns-div";
    this.tokenSection(dropdownsDiv, "Prefix", this.plugin.settings.tokenParams.prefix);
    this.tokenSection(dropdownsDiv, "Postfix", this.plugin.settings.tokenParams.postfix);
    this.tokenSection(dropdownsDiv, "Tokens", Object.keys(this.replacementTokens).map((key) => `{{${key}}}`));
    this.promptField = new import_obsidian3.TextAreaComponent(container);
    this.promptField.inputEl.className = "gpt_prompt-field";
    this.promptField.setPlaceholder("Enter your prompt...");
    this.promptField.onChange((change) => {
      this.prompt = change;
    });
    const tempSetting = new import_obsidian3.Setting(container).setName("Temperature").setDesc("The amount of variation in the model (randomness).").addDropdown((dropdown) => {
      for (let i = 0; i <= 10; i++) {
        if (i == 5) {
          dropdown.addOption(`${i}`, "5 (default)");
          continue;
        }
        dropdown.addOption(`${i}`, `${i}`);
      }
      dropdown.setValue(`${this.plugin.settings.temperature}`);
      dropdown.onChange((change) => {
        this.plugin.settings.temperature = parseInt(change);
        this.plugin.saveSettings();
      });
    });
    tempSetting.controlEl.className = "gpt_temp-setting";
    const tokenSetting = new import_obsidian3.Setting(container).setName("Tokens").setDesc("The number of tokens GPT-3 should generate.").addText((text) => {
      text.setValue(`${this.plugin.settings.tokens}`);
      text.inputEl.type = "number";
      text.onChange((change) => {
        this.plugin.settings.tokens = parseInt(change);
        this.plugin.saveSettings();
      });
    });
    if (models[this.plugin.settings.model] === "chat") {
      tokenSetting.settingEl.style.display = "none";
    }
    new import_obsidian3.Setting(container).setName("OpenAI Model").setDesc("The type of GPT-3 model to use.").addDropdown((dropdown) => {
      for (let model in modelsKeys) {
        dropdown.addOption(modelsKeys[model], modelsKeys[model]);
      }
      dropdown.onChange((change) => {
        this.plugin.settings.model = change;
        this.plugin.saveSettings();
        tokenSetting.settingEl.style.display = models[this.plugin.settings.model] === "chat" ? "none" : "";
      });
      dropdown.setValue(this.plugin.settings.model);
    });
    const buttonContainer = container.createDiv();
    buttonContainer.className = "gpt_button-container";
    const cancelButton = new import_obsidian3.ButtonComponent(buttonContainer);
    cancelButton.buttonEl.className = "gpt_cancel-button";
    cancelButton.buttonEl.style.backgroundColor = "#b33939";
    cancelButton.setButtonText("Cancel").onClick(() => {
      this.close();
    });
    this.generateButton = new import_obsidian3.ButtonComponent(buttonContainer);
    this.generateButton.buttonEl.className = "gpt_generate-button";
    this.generateButton.buttonEl.style.backgroundColor = "#218c74";
    this.generateButton.setButtonText("Generate Notes").onClick(() => {
      this.generateButton.setButtonText("Loading...");
      this.generateButton.setDisabled(true);
      this.generateButton.buttonEl.style.backgroundColor = "rbga(33, 140, 116, 0.5)";
      this.handleGenerateClick();
    });
  }
  tokenSection(container, label, options) {
    const dropdown = new import_obsidian3.DropdownComponent(container);
    dropdown.addOption(label, label);
    for (let i in options) {
      dropdown.addOption(options[i], options[i]);
    }
    dropdown.onChange((change) => {
      const newValue = this.promptField.getValue() + change + " ";
      this.promptField.setValue(newValue);
      this.promptField.inputEl.focus();
      this.prompt = newValue;
      dropdown.setValue(label);
    });
    return dropdown;
  }
  generateHistoryOptions(history_dropdown, history) {
    history_dropdown.addOption("History", "History");
    for (let i = history.length - 1; i >= 0; i--) {
      const prompt = (this.replaceTokensInHistory ? history[i].processedPrompt : history[i].prompt) || history[i].prompt;
      if (prompt.length > 80) {
        history_dropdown.addOption(`${i}`, prompt.slice(0, 80) + "...");
        continue;
      }
      history_dropdown.addOption(`${i}`, prompt);
    }
  }
  useHistoryItem(item) {
    const prompt = this.replaceTokensInHistory ? item.processedPrompt : item.prompt;
    this.promptField.setValue(prompt);
    this.prompt = prompt;
  }
  replaceToken(match, prompt, replacementText) {
    const matchIndex = match.index || 0;
    return prompt.substring(0, matchIndex) + replacementText + prompt.substring(matchIndex + match[0].length);
  }
  processReplacementTokens(prompt) {
    const tokenRegex = /\{\{(.*?)\}\}/g;
    const matches = [...prompt.matchAll(tokenRegex)];
    matches.forEach((match) => {
      const token = match[1];
      if (this.replacementTokens[token]) {
        prompt = this.replacementTokens[token](match, prompt);
      }
    });
    return prompt;
  }
  async handleGenerateClick() {
    const view = this.plugin.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
    if (!view) {
      new import_obsidian3.Notice("You must have a Markdown file open to complete this action.");
      this.generateButton.setDisabled(false);
      this.generateButton.setButtonText("Generate Notes");
      return;
    }
    this.processedPrompt = this.processReplacementTokens(this.prompt);
    const params = {
      prompt: this.processedPrompt,
      temperature: this.plugin.settings.temperature / 10,
      tokens: this.plugin.settings.tokens,
      model: this.plugin.settings.model
    };
    let token = this.plugin.settings.token;
    if (!token) {
      new import_obsidian3.Notice("Please enter your OpenAI token in the plugin settings");
      this.generateButton.setDisabled(false);
      this.generateButton.setButtonText("Generate Notes");
      return;
    }
    const response = GPT3Model.generate(token, params);
    if (response === false) {
      this.generateButton.setDisabled(false);
      this.generateButton.setButtonText("Generate Notes");
      return;
    }
    this.plugin.history_handler.push({
      prompt: this.prompt,
      processedPrompt: this.processedPrompt,
      temperature: params.temperature,
      tokens: params.tokens
    });
    this.close();
    this.plugin.showPreviewModal(params, response);
  }
};

// src/CommandHandler.ts
var CommandHandler = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  setup() {
    this.plugin.addCommand({
      id: "create-gpt3-note",
      name: "Create GPT-3 Note",
      callback: () => {
        new PluginModal(this.plugin).open();
      }
    });
  }
};

// src/HistoryHandler.ts
var HistoryHandler = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  push(history_item) {
    try {
      let history = this.plugin.settings.promptHistory;
      history.push(history_item);
      if (history.length > 10) {
        history.remove(history[0]);
      }
      this.plugin.settings.promptHistory = history;
      this.plugin.saveSettings();
      return true;
    } catch (exception) {
      return false;
    }
  }
  reset() {
    this.plugin.settings.promptHistory = [];
    this.plugin.saveSettings();
  }
};

// src/main.ts
var import_obsidian5 = require("obsidian");

// src/PreviewModal.ts
var import_obsidian4 = require("obsidian");
var PreviewModal = class extends import_obsidian4.Modal {
  constructor(plugin, modelParams, stream) {
    super(plugin.app);
    this.plugin = plugin;
    this.modelParams = modelParams;
    this.stream = stream;
  }
  syncPreview() {
    this.previewTextArea.setValue(this.previewText.substring(2, this.previewText.length));
  }
  loadStream() {
    this.stream.addEventListener("message", (e) => {
      try {
        const text = this.parseTextResponse(e);
        if (text) {
          this.previewText += text;
        }
        this.syncPreview();
      } catch (e2) {
        return;
      }
    });
    this.stream.addEventListener("error", (e) => {
      new import_obsidian4.Notice("OpenAI returned an error. Try modifying your paramters and try again.");
    });
    this.stream.stream();
  }
  parseTextResponse(e) {
    const modelType = models[this.modelParams.model];
    const data = JSON.parse(e.data);
    const choice = data.choices[0];
    if (modelType === "text") {
      return choice.text;
    } else if (modelType === "chat") {
      return choice.delta.content;
    }
    return "";
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Preview GPT-3 Note");
    const container = contentEl.createDiv();
    container.className = "gpt_preview-container";
    this.previewText = "";
    this.previewTextArea = new import_obsidian4.TextAreaComponent(container);
    this.previewTextArea.inputEl.className = "gpt_preview-textarea";
    this.previewTextArea.setPlaceholder("Loading...");
    this.previewTextArea.onChange((change) => {
      this.previewText = change;
    });
    const buttonContainer = contentEl.createDiv();
    buttonContainer.className = "gpt_preview-button-container";
    const cancelButton = new import_obsidian4.ButtonComponent(buttonContainer);
    cancelButton.buttonEl.style.backgroundColor = "#b33939";
    cancelButton.setButtonText("Cancel").onClick(() => {
      this.close();
    });
    const generateButton = new import_obsidian4.ButtonComponent(buttonContainer);
    generateButton.buttonEl.style.backgroundColor = "#218c74";
    generateButton.setButtonText("Add to document").onClick(() => {
      const view = this.plugin.app.workspace.getActiveViewOfType(import_obsidian4.MarkdownView);
      if (view) {
        this.close();
        let newText = view.editor.getSelection().length > 0 ? view.editor.getSelection() + "\n\n" + this.previewText : this.previewText;
        view.editor.replaceSelection(newText);
      }
    });
    this.loadStream();
  }
  onClose() {
  }
};

// prompts.json
var prompts_default = {
  prefix: [
    "Write an essay",
    "Write dashed notes",
    "Write bullet notes",
    "Write paragraphs",
    "Write an article",
    "Create a manual",
    "Create an outline",
    "Write a summary",
    "Write a program"
  ],
  postfix: [
    "with sources",
    "with footnotes",
    "with comments",
    "with quotes"
  ]
};

// src/main.ts
var DEFAULT_SETTINGS = {
  appName: "GP3_NOTES",
  token: null,
  model: modelsKeys[0],
  tokens: 300,
  temperature: 5,
  promptHistory: [],
  tokenParams: prompts_default
};
var GPT3Notes2 = class extends import_obsidian5.Plugin {
  async onload() {
    await this.loadSettings();
    console.log(this.settings);
    this.settings_view = new SettingsView(this);
    this.command_handler = new CommandHandler(this);
    this.command_handler.setup();
    this.history_handler = new HistoryHandler(this);
    this.addSettingTab(this.settings_view);
    this.registerRibbonButtons();
  }
  onunload() {
  }
  registerRibbonButtons() {
    const ribbonIcon = this.addRibbonIcon("bot", "GPT-3 Notes", (evt) => {
      new PluginModal(this).open();
    });
  }
  showPreviewModal(modelParams, stream) {
    new PreviewModal(this, modelParams, stream).open();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
