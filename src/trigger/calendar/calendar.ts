import { calendarSecret } from '../../secrets';

const calendarId = calendarSecret;
if (!calendarId) {
  throw new Error('CALENDAR_ID is not set in script properties');
}

export const calendar = CalendarApp.getCalendarById(calendarId);
