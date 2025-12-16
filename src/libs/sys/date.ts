export function isHoliday(){
  const date = new Date()
  if (date.getDay() === 0 || date.getDay() === 6 || isJapaneseHoliday())
    return true
}

export function isJapaneseHoliday() {
  const calendarId = 'ja.japanese#holiday@group.v.calendar.google.com'
  const holidayCalendar = CalendarApp.getCalendarById(calendarId)

  const start = new Date()
  const holidayEvents = holidayCalendar.getEvents(start,start)
  if (holidayEvents.length > 0)
    return true
}