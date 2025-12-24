import { GetEvents } from './getEvents'

export function GetWeekEvents() {
	const tomorrow = new Date()
	tomorrow.setDate(tomorrow.getDate() + 1)
	const end = new Date()
	end.setDate(end.getDate() + 7)
	return GetEvents(new Date(tomorrow.setHours(0, 0, 0)), new Date(end.setHours(23, 59, 59)))
}
