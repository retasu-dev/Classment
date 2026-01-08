import { UserMessage, ReplyMessage } from '../messageTypes'
import { PostReply } from '../webhook/reply'

export function PostMessage(message: string, event: UserMessage) {
	const replyMessage: ReplyMessage = {
		replyToken: event.replyToken,
		messages: [
			{
				type: 'text',
				text: message,
			},
		],
	}

	PostReply(replyMessage)
}
