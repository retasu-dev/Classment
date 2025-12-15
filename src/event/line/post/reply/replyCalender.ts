import { ReplyMessage, UserMessage } from '../../../../api/line/messageTypes';
import { PostReply } from '../../../../api/line/webhook/reply';
import { FormatEventInfo } from '../../../../classment/calendar/formatEventInfo';
import { GetWeekEvents } from '../../../../classment/calendar/getWeekEvents';

export function ReplyCalendar(userMessage: UserMessage) {
  const reply: ReplyMessage = {
    replyToken: userMessage.replyToken,
    messages: FormatEventInfo(GetWeekEvents()),
  };
  PostReply(reply);
}
