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
  default: () => BirthdayTrackerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  dateFormatting: "DD/MM/YYYY",
  birthdayNodeLocation: "birthdayNode.md"
};
var BirthdayTrackerSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.dateFormattingSettingsOnChange = async (value) => {
      let noticeMessage = "Wrong date formatting!!";
      if (this.isFormattingValid(value)) {
        this.plugin.settings.dateFormatting = value;
        await this.plugin.saveSettings();
        noticeMessage = "Valid date formatting";
      }
      new import_obsidian.Notice(noticeMessage);
    };
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.dateFormattingSettings();
    this.birthdayNodeLocationSettings();
  }
  dateFormattingSettings() {
    return new import_obsidian.Setting(this.containerEl).setName("Date formatting").setDesc("Format your dates will be displayed and collected").addText((text) => text.setPlaceholder("Enter your format").setValue(this.plugin.settings.dateFormatting).onChange(async (value) => await this.dateFormattingSettingsOnChange(value)));
  }
  isFormattingValid(format) {
    const containsDoubleD = this.formatContains("DD", format);
    const containsDoubleM = this.formatContains("MM", format);
    const containsFourY = this.formatContains("YYYY", format);
    return containsDoubleD && containsDoubleM && containsFourY && !this.containsInvalidChars(format);
  }
  formatContains(subStr, format) {
    return format.contains(subStr) || format.contains(subStr.toLowerCase());
  }
  containsInvalidChars(format) {
    const invalidChars = [
      "A",
      "B",
      "C",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Z"
    ];
    for (const invalidChar in invalidChars) {
      if (this.formatContains(invalidChar, format)) {
        return true;
      }
    }
    return false;
  }
  birthdayNodeLocationSettings() {
    return new import_obsidian.Setting(this.containerEl).setName("Birthday node location").setDesc("Location of your Node containing the birthday data with .md as postfix").addTextArea((text) => text.setPlaceholder("Enter the node location").setValue(this.plugin.settings.birthdayNodeLocation).onChange(async (value) => {
      this.plugin.settings.birthdayNodeLocation = value;
      await this.plugin.saveSettings();
    }));
  }
};

// src/person.ts
var Person = class {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }
  compareTo(other) {
    return this.birthday.compareTo(other.birthday);
  }
  hasBirthdayToday() {
    return this.birthday.hasBirthdayToday();
  }
  toDTO() {
    return new PersonDTO(
      this.name,
      this.birthday.toString(),
      this.birthday.getNextBirthdayInDays(),
      this.birthday.getAge(),
      this.birthday.getMonth()
    );
  }
};
var PersonDTO = class {
  constructor(name, birthday, nextBirthdayInDays, age, month) {
    this.name = name;
    this.birthday = birthday;
    this.nextBirthdayInDays = nextBirthdayInDays;
    this.age = age;
    this.month = month;
  }
};

// src/birthday.ts
var Birthday = class {
  constructor(str, dateFormatting) {
    this.str = str;
    this.convertStringToDate(dateFormatting);
    this.age = this.determineAge();
    this.nextBirthday = this.daysTillBirthday();
  }
  convertStringToDate(dateFormatting) {
    this.date = this.constructDate(
      dateFormatting.search("DD"),
      dateFormatting.search("MM"),
      dateFormatting.search("YYYY")
    );
  }
  constructDate(dayIndex, monthIndex, yearIndex) {
    const date = new Date();
    date.setFullYear(
      this.dateNumber(yearIndex, yearIndex + 4),
      this.dateNumber(monthIndex, monthIndex + 2, 1),
      // month has one offset
      this.dateNumber(dayIndex, dayIndex + 2)
    );
    return date;
  }
  dateNumber(start, end, offset) {
    return parseInt(this.str.substring(start, end)) - (offset != null ? offset : 0);
  }
  determineAge() {
    let age = new Date().getFullYear() - this.date.getFullYear();
    return this.hadBirthdayThisYear() ? age : --age;
  }
  hadBirthdayThisYear() {
    const monthPassed = new Date().getMonth() > this.date.getMonth();
    const daysPassed = new Date().getMonth() === this.date.getMonth() && new Date().getDay() >= this.date.getDay();
    return monthPassed || daysPassed;
  }
  daysTillBirthday() {
    const days = this.calcDays(new Date().getFullYear());
    if (-days === 0) {
      return 0;
    }
    return days > 0 ? days : this.calcDays(new Date().getFullYear() + 1);
  }
  calcDays(newYear) {
    const dateCurrentYear = new Date(this.date);
    dateCurrentYear.setFullYear(newYear);
    const timeDifference = new Date().getTime() - dateCurrentYear.getTime();
    return -Math.ceil(timeDifference / (1e3 * 60 * 60 * 24));
  }
  compareTo(other) {
    return this.nextBirthday - other.nextBirthday;
  }
  hasBirthdayToday() {
    return this.nextBirthday === 0;
  }
  getAge() {
    return this.age;
  }
  getNextBirthdayInDays() {
    return this.nextBirthday;
  }
  getMonth() {
    return this.date.getMonth();
  }
  toString() {
    return this.str;
  }
};

// src/views/birthdayTrackerView.ts
var import_obsidian2 = require("obsidian");
var BIRTHDAY_TRACKER_VIEW_TYPE = "Birthday-Tracker";
var BirthdayTrackerView = class extends import_obsidian2.ItemView {
  constructor() {
    super(...arguments);
    this.icon = "cake";
  }
  getViewType() {
    return BIRTHDAY_TRACKER_VIEW_TYPE;
  }
  getDisplayText() {
    return BIRTHDAY_TRACKER_VIEW_TYPE;
  }
  async onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Birthday Tracker" });
    this.container = contentEl.createDiv({ cls: "personsFlexboxContainer" });
  }
  displayPersons(persons) {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.lastChild);
    }
    persons.forEach((person) => this.displayPerson(person.toDTO()));
  }
  displayPerson(person) {
    const div = this.container.createDiv({ cls: "personContainer" });
    div.createEl("p", { text: "Name: " + person.name + " (" + person.age + ")" });
    div.createEl("p", { text: "Days next birthday: " + person.nextBirthdayInDays });
    div.createEl("p", { text: "Birthday: " + person.birthday });
  }
};

// src/modals/SearchPersonModal.ts
var import_obsidian4 = require("obsidian");

// src/modals/PersonModal.ts
var import_obsidian3 = require("obsidian");
var PersonModal = class extends import_obsidian3.Modal {
  constructor(app, person) {
    super(app);
    this.person = person;
  }
  onOpen() {
    const { contentEl } = this;
    const div = contentEl.createDiv({ cls: "personContainer smallerScale" });
    div.createEl("p", { text: "Name: " + this.person.name + " (" + this.person.age + ")" });
    div.createEl("p", { text: "Days next birthday: " + this.person.nextBirthdayInDays });
    div.createEl("p", { text: "Birthday: " + this.person.birthday });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/modals/SearchPersonModal.ts
var SearchPersonModal = class extends import_obsidian4.FuzzySuggestModal {
  constructor(app, persons) {
    super(app);
    this.persons = persons;
  }
  getItems() {
    return this.persons;
  }
  getItemText(item) {
    return item.name;
  }
  onChooseItem(item, evt) {
    new PersonModal(this.app, item).open();
  }
};

// src/views/yearOverviewView.ts
var import_obsidian5 = require("obsidian");
var BIRTHDAY_TRACKER_YEAR_OVERVIEW_VIEW_TYPE = "Birthday-Tracker-Year-Overview";
var MONTHS = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
var YearOverviewView = class extends import_obsidian5.ItemView {
  constructor() {
    super(...arguments);
    this.icon = "calendar-days";
    this.persons = [];
    this.createPerson = (person, personContainer) => {
      const para = personContainer.createEl("p", { text: person.name });
      para.onclick = () => new PersonModal(this.app, person).open();
    };
  }
  getViewType() {
    return BIRTHDAY_TRACKER_YEAR_OVERVIEW_VIEW_TYPE;
  }
  getDisplayText() {
    return BIRTHDAY_TRACKER_YEAR_OVERVIEW_VIEW_TYPE;
  }
  async onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h1", { text: "Birthday Tracker - Year Overview" });
    const container = contentEl.createDiv({ cls: "yearContainer" });
    for (let i = 0; i < 12; i++) {
      const month = container.createDiv({ cls: "monthContainer" });
      month.createEl("h4", { text: MONTHS[i], cls: "monthName" });
      const personContainer = month.createDiv({ cls: "personsYearViewContainer" });
      if (this.persons.length === 0)
        continue;
      this.persons.filter((p) => p.month == i).forEach((person) => this.createPerson(person, personContainer));
    }
  }
  async updatePersons(persons) {
    this.persons = persons;
    const { contentEl } = this;
    contentEl.empty();
    await this.onOpen();
  }
};

// src/main.ts
var BirthdayTrackerPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.trackBirthdays = async () => {
      const content = await this.fetchContent();
      if (content) {
        this.trackBirthdaysOfContent(content);
        await this.openBirthdayView();
      } else {
        new import_obsidian6.Notice("Nothing inside your node");
      }
    };
    this.trackBirthdaysOfContent = (content) => {
      this.persons = this.collectPersons(content);
      this.persons.sort((p1, p2) => p1.compareTo(p2));
      this.noticeIfBirthdayToday(this.persons);
    };
    this.lineContainsPerson = (line) => {
      return line.contains("name=") && line.contains("birthday=");
    };
    this.openYearView = async () => {
      const leaves = this.app.workspace.getLeavesOfType(BIRTHDAY_TRACKER_YEAR_OVERVIEW_VIEW_TYPE);
      if (leaves.length == 0) {
        leaves[0] = this.app.workspace.getLeaf(false);
        await leaves[0].setViewState({ type: BIRTHDAY_TRACKER_YEAR_OVERVIEW_VIEW_TYPE });
      }
      const persons = await this.getPersons();
      await leaves[0].view.updatePersons(persons.map((p) => p.toDTO()));
      this.app.workspace.revealLeaf(leaves[0]);
    };
    this.searchPerson = async () => {
      await this.fetchContent();
      if (this.persons.length >= 1) {
        new SearchPersonModal(this.app, this.persons.map((person) => person.toDTO())).open();
      } else {
        new import_obsidian6.Notice("No persons were found");
      }
    };
  }
  async onload() {
    await this.loadSettings();
    this.registerView(BIRTHDAY_TRACKER_VIEW_TYPE, (leaf) => new BirthdayTrackerView(leaf));
    this.registerView(BIRTHDAY_TRACKER_YEAR_OVERVIEW_VIEW_TYPE, (leaf) => new YearOverviewView(leaf));
    const ribbonIconEl = this.addRibbonIcon("cake", "Track birthdays", this.trackBirthdays);
    ribbonIconEl.addClass("birthday-tracker-plugin-ribbon-class");
    this.addRibbonIcon("calendar-days", "Open year overview", this.openYearView);
    this.addCommands();
    this.addSettingTab(new BirthdayTrackerSettingTab(this.app, this));
    this.app.workspace.onLayoutReady(() => this.trackBirthdays());
  }
  addCommands() {
    this.addCommand({
      id: "track-birthdays",
      name: "Track Birthdays",
      callback: this.trackBirthdays
    });
    this.addCommand({
      id: "search-person",
      name: "Search Person",
      callback: this.searchPerson
    });
    this.addCommand({
      id: "year-overview",
      name: "Year Overview",
      callback: this.openYearView
    });
  }
  onunload() {
  }
  async fetchContent() {
    const file = this.app.vault.getAbstractFileByPath(this.settings.birthdayNodeLocation);
    if (file && file instanceof import_obsidian6.TFile) {
      return (await this.app.vault.read(file)).trim();
    }
    new import_obsidian6.Notice("Node could not be found at location: " + this.settings.birthdayNodeLocation);
    return void 0;
  }
  collectPersons(content) {
    const persons = [];
    const splitChar = ";";
    content.split(/\r?\n/).forEach((line) => {
      if (this.lineContainsPerson(line)) {
        const name = line.substring(5, line.search(splitChar));
        const birthday = line.substring(line.search(splitChar) + 11);
        persons.push(new Person(name, new Birthday(birthday, this.settings.dateFormatting)));
      }
    });
    return persons;
  }
  noticeIfBirthdayToday(persons) {
    const personsBirthdayToday = persons.filter((person) => person.hasBirthdayToday());
    if (personsBirthdayToday.length !== 0) {
      this.noticeForAllBirthdaysToday(personsBirthdayToday);
    }
  }
  noticeForAllBirthdaysToday(personsBirthdayToday) {
    let message = "Today ";
    personsBirthdayToday.forEach((person) => message = message.concat(person.toDTO().name).concat(", "));
    message = message.substring(0, message.length - 2);
    new import_obsidian6.Notice(message.concat((personsBirthdayToday.length > 1 ? " have" : " has") + " birthday"));
  }
  async openBirthdayView() {
    const leaves = this.app.workspace.getLeavesOfType(BIRTHDAY_TRACKER_VIEW_TYPE);
    if (this.persons) {
      (await this.getBirthdayView(leaves)).displayPersons(this.persons);
    }
    this.app.workspace.revealLeaf(leaves[0]);
  }
  async getBirthdayView(leaves) {
    if (leaves.length == 0) {
      leaves[0] = this.app.workspace.getRightLeaf(false);
      await leaves[0].setViewState({ type: BIRTHDAY_TRACKER_VIEW_TYPE });
    }
    return leaves[0].view;
  }
  async getPersons() {
    const content = await this.fetchContent();
    if (content) {
      this.trackBirthdaysOfContent(content);
    }
    return this.persons;
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
