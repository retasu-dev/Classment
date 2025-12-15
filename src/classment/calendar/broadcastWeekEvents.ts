import { PostBroadcast } from '../../api/line/webhook/broadcast';
import { FormatEventInfo } from './formatEventInfo';
import { GetWeekEvents } from './getWeekEvents';

export const broadcastWeekEvents = () => {
  const messages = FormatEventInfo(GetWeekEvents());
  if (!messages) throw new Error('Formated event information is undefined.');

  PostBroadcast({
    messages,
    notificationDisabled: false,
  });
};
