import { PostMessage } from '../../../../libs/line/message/reply'
import { UserMessage } from '../../../../libs/line/messageTypes'
import { messages } from './messages'
import { ReplyAnnounce } from './replyAnnounce'
import { ReplyCalendar } from './replyCalender'

export function sendReply(event: UserMessage, message: string) {
  switch (message) {
    case '/help':
      PostMessage(messages.help, event)
      break
    case '/calendar':
      ReplyCalendar(event)
      break
    case '/announce':
      ReplyAnnounce(event)
      break
    default:
      PostMessage(messages.welcome, event)
      break
  }
}
