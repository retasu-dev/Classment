import { ReplyMessage, UserMessage } from '../../../../libs/line/messageTypes';
import { PostReply } from '../../../../libs/line/webhook/reply';
import { FormatEventInfo } from '../../../../trigger/calendar/formatEventInfo';
import { GetWeekEvents } from '../../../../trigger/calendar/getWeekEvents';

export function ReplyCalendar(userMessage: UserMessage) {
  const reply: ReplyMessage = {
    replyToken: userMessage.replyToken,
    messages: FormatEventInfo(GetWeekEvents()),
  };
  PostReply(reply);
}
