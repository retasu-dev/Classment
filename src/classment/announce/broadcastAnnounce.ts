import { getLatestFile } from '../../libs/drive/file/getLatestFile'
import { PostBroadcast } from '../../api/line/webhook/broadcast'
import { isHoliday } from '../../libs/sys/date'
import { disabeleSkipOnHoliday } from '../../options/devOptions'
import { failedToGetAnnounceMessage } from '../../options/messages'
import { driveId } from '../../secrets'
import { FormatRawAnnounce } from './formatRawAnnounce'
import { runOCR } from '../../libs/drive/ocr'
import { GetAnnounce } from './getAnnounce'

export function broadcastAnnounce() {
	if (!disabeleSkipOnHoliday && isHoliday()) {
		console.info('Today is holiday. Skip announcement.')
		return
	}
	
	let response
	try {
		runOCR(getLatestFile(driveId)!.getId())
		response = FormatRawAnnounce(GetAnnounce())
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
