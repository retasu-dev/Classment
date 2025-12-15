import { getDocumentData } from '../../libs/drive/file/getDocumentData'
import { getLatestFile } from '../../libs/drive/file/getLatestFile'
import { PostBroadcast } from '../../api/line/webhook/broadcast'
import { isHoliday } from '../../libs/sys/date'
import { disabeleSkipOnHoliday } from '../../options/devOptions'
import { failedToGetAnnounceMessage } from '../../options/messages'
import { driveSecret } from '../../secrets'
import { FormatRawAnnounce } from './formatRawAnnounce'

export function broadcastAnnounce() {
  if (!disabeleSkipOnHoliday && isHoliday()) {
    console.info('Today is holiday. Skip announcement.')
    return
  }

  let response
  try {
    response = FormatRawAnnounce(getDocumentData(getLatestFile(driveSecret)!.getId()))
    if (!response) throw new Error('Formated annoucement is undefined.')
  } catch (error) {
    console.error('Failed to get announcement.')
    console.error(response)
    console.error((error as Error).message)
    PostBroadcast({
      messages: [
        { type: 'text', text: failedToGetAnnounceMessage },
        { type: 'text', text: (error as Error).message },
      ],
      notificationDisabled: false,
    })
    return
  }

  PostBroadcast({
    messages: response,
    notificationDisabled: false,
  })
}
