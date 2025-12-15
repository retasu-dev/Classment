import { doPost } from './event/line/doPost';
import { PostBroadcast } from './libs/line/webhook/broadcast';
import { broadcastWeekEvents } from './trigger/calendar/broadcastWeekEvents';
import { broadcastAnnounce } from './trigger/announce/broadcastAnnounce';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

global.broadcastTest = () => {
  PostBroadcast({
    messages: [
      {
        type: 'text',
        text: 'Hello World!',
      },
    ],
    notificationDisabled: false,
  });
};

global.doPost = doPost;
global.broadcastWeekEvents = broadcastWeekEvents;
global.broadcastAnnounce = broadcastAnnounce;
