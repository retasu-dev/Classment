import { calendar } from './calendar'

export function GetEvents(startDate: Date, endDate: Date) {
	return calendar?.getEvents(startDate, endDate)
}
