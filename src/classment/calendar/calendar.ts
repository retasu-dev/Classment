import { calendarId } from '../../secrets'

const calendarId = calendarId
if (!calendarId) {
  throw new Error('CALENDAR_ID is not set in script properties')
}

export const calendar = CalendarApp.getCalendarById(calendarId)
