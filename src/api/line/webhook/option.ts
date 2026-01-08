import { lineBotTokenSecret } from '../../../secrets'
import { Message } from '../messageTypes'

export function ReturnOption(payload: Message) {
	const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${lineBotTokenSecret}`,
		},
		payload: JSON.stringify(payload),
	}
	return options
}
