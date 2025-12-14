import { UserMessage } from "../../libs/line/messageTypes";
import { sendReply } from "./post/reply/sendReply";


export const doPost = (e: GoogleAppsScript.Events.DoPost): GoogleAppsScript.Content.TextOutput => {
    console.log('doPost called');
    console.log(e.postData.contents);
    
    const event: UserMessage = JSON.parse(e.postData.contents).events[0];

    // メッセージイベントの場合
    if (event.type === 'message' && event.message.type === 'text')
        sendReply(event, event.message.text);

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
}
