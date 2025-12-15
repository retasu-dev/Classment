import { MessageBody } from '../../libs/line/messageTypes'

export function FormatEventInfo(
  weekEvents: GoogleAppsScript.Calendar.CalendarEvent[],
): MessageBody[] {
  if (weekEvents.length === 0) {
    console.log('No events for tomorrow')
    return []
  }

  if (!weekEvents) throw new Error('Week event is undefined.')

  const eventsdata:string[] = ['']
  weekEvents.forEach(event => {
    eventsdata.push(`Event: ${event.getTitle()}\nStart: ${event.getStartTime().toDateString()}\nEnd: ${event.getStartTime().toDateString()}\n`)
  })
  return [{
    type: 'text',
    text: eventsdata.join('\n'),
  }]
}
