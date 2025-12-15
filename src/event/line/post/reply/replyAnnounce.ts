import { getDocumentData } from '../../../../libs/drive/file/getDocumentData'
import { getLatestFile } from '../../../../libs/drive/file/getLatestFile'
import { UserMessage, ReplyMessage } from '../../../../api/line/messageTypes'
import { PostReply } from '../../../../api/line/webhook/reply'
import { driveId } from '../../../../secrets'
import { FormatRawAnnounce } from '../../../../classment/announce/formatRawAnnounce'

export function ReplyAnnounce(userMessage: UserMessage) {
  const reply: ReplyMessage = {
    replyToken: userMessage.replyToken,
    messages: FormatRawAnnounce(getDocumentData(getLatestFile(driveId)!.getId())),
  }
  PostReply(reply)
}
