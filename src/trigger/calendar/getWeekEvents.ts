import { GetEvents } from './getEvents';

export function GetWeekEvents() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const week = new Date();
  week.setDate(week.getDate() + 7);
  return GetEvents(new Date(tomorrow.setHours(0, 0, 0)), new Date(week.setHours(23, 59, 59)));
}
