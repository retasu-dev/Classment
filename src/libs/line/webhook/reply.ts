import { messageApi } from '../../../api/line/message';
import { ReplyMessage } from '../messageTypes';
import { ReturnOption } from './option';

export function PostReply(message: ReplyMessage) {
  UrlFetchApp.fetch(messageApi.reply, ReturnOption(message));
}
