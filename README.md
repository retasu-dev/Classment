# Classment
A TypeScript application for automatically sending end-of-school-day announcements via LINE.

## ✨ Features
- Automatic transmission of end-of-school-day announcements using the LINE Messaging API.
- Automatic transmission of schedule from Google Calendar.
- OCR Integration (Implied by DRIVE_ID property) for processing announcement texts.
- AI/LLM Processing (Implied by OPENROUTER_API property) for content refinement or analysis.

## 💻 Install
To set up the project, run the following command in your terminal
```Bash
npm install
```
## ⚙️ Environment
### Configuration
This application is designed to run on Google Apps Script (GAS).
You must set the following properties in your GAS script environment.
|Property|Value|Description|
|---|---|---|
|CALENDAR_ID|Google Calendar ID|The ID of the Google Calendar used for scheduling the announcements.|
|CHANNEL_ACCESS_TOKEN|LINE Messenger API Token|Your LINE Messaging API Channel Access Token for sending messages.|
|DRIVE_ID|Google Drive Folder ID|The ID of the Google Drive folder where OCR-processed announcement texts are stored (e.g., from an image scan).|
|OPENROUTER_API|OpenRouter API Token|The API token for OpenRouter, likely used to access Large Language Models (LLMs) for processing or generating announcement content.|

## 🚀 Deployment
After logging in to the clasp (Google Apps Script CLI) tool, deploy the application by executing the following command
```Bash
clasp login
clasp create-script --title "Project name"
npm run deploy
```
This command compiles the TypeScript code and uploads it to your Google Apps Script project.

## 📦 Dependencies
All packages required to run the app on Google Apps Script are provided at build time. The project uses the following development tools (install via `npm install`):

- **Node.js**: runtime for build scripts (v16+ recommended)
- **TypeScript**: compile `.ts` to JS
- **webpack**: bundle the project for GAS
- **clasp**: deploy bundled code to Google Apps Script
 - **Node.js**: runtime for build scripts (v16+ recommended)
 - **Development dependencies:**
	 - `@eslint/js` — ^9.30.1
	 - `@types/google-apps-script` — ^1.0.97
	 - `@typescript-eslint/eslint-plugin` — ^8.35.1
	 - `@typescript-eslint/parser` — ^8.35.1
	 - `clasp` — ^1.0.0
	 - `copy-webpack-plugin` — ^13.0.0
	 - `eslint` — ^9.30.1
	 - `fork-ts-checker-webpack-plugin` — ^9.1.0
	 - `gas-webpack-plugin` — ^2.6.0
	 - `globals` — ^16.3.0
	 - `ts-loader` — ^9.5.2
	 - `ts-node` — ^10.9.2
	 - `typescript` — ^5.8.3
	 - `typescript-eslint` — ^8.49.0
	 - `webpack-cli` — ^6.0.1

Note: These packages are used at build/deploy time; the Google Apps Script runtime does not require them.

Packages are installed as dev dependencies; the runtime (GAS) does not require these packages to be present.

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for full details.
