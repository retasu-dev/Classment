import { UserMessage, ReplyMessage } from '../../../../api/line/messageTypes'
import { PostReply } from '../../../../api/line/webhook/reply'
import { FormatRawAnnounce } from '../../../../classment/announce/formatRawAnnounce'
import { GetAnnounce } from '../../../../classment/announce/getAnnounce'

export function ReplyAnnounce(userMessage: UserMessage) {
	const reply: ReplyMessage = {
		replyToken: userMessage.replyToken,
		messages: FormatRawAnnounce(GetAnnounce()),
	}
	PostReply(reply)
}
