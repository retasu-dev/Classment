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

## 🛠️ Dependencies
- Node.js version 16 or higher
- TypeScript version 4 or higher

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for full details.
