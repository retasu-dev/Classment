# Classment
LINEを通じて終業時のお知らせを自動送信するTypeScript製アプリケーションです。

## ✨ Features
- LINE Messaging APIを使用して終業時のお知らせを自動送信します。
- Google カレンダーから予定を自動送信します。
- OCR連携（`DRIVE_ID`プロパティに準拠）を通じてお知らせ文を処理します。
- AI/LLM（`OPENROUTER_API`プロパティに準拠）による文面の整形や解析を行います。

## 💻 Install
このプロジェクトをセットアップするには、ターミナルで次のコマンドを実行してください。

```Bash
npm install
```

## ⚙️ Environment
### Configuration
このアプリケーションはGoogle Apps Script (GAS)上で動作するよう設計されています。
GASのスクリプト環境に以下のプロパティを設定してください。

|Property|Value|Description|
|---|---|---|
|CALENDAR_ID|Google Calendar ID|アナウンスのスケジュールに使用するGoogleカレンダーのID。|
|CHANNEL_ACCESS_TOKEN|LINE Messenger API Token|メッセージ送信に使用するLINE Messaging APIのチャネルアクセストークン。|
|DRIVE_ID|Google Drive Folder ID|OCR処理されたお知らせテキスト（例: 画像スキャン由来）が保存されるGoogleドライブフォルダのID。|
|OPENROUTER_API|OpenRouter API Token|OpenRouterのAPIトークン。LLMを使った文面生成や処理に使用します。|

## 🚀 Deployment
After logging in to the clasp (Google Apps Script CLI) tool, deploy the application by executing the following command

clasp（Google Apps Script CLI）にログインした後、次のコマンドを実行してアプリケーションをデプロイします。

```Bash
clasp login
clasp create-script --title "Project name"
npm run deploy
```

## 📦 Dependencies
アプリをGoogle Apps Script上で動かすために必要なパッケージはビルド時に提供されます。プロジェクトは次の開発用パッケージを使用します（`npm install`でインストールしてください）：

- **Node.js**：ビルドスクリプトを実行するランタイム（v16以上を推奨）
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

備考：これらのパッケージはビルド／デプロイ時に使用されます。Google Apps Scriptの実行環境には不要です。

## 📄 License
本プロジェクトはMIT Licenseの下で提供されています。詳細はLICENSEファイルを参照してください。
