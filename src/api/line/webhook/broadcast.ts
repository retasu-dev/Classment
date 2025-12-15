import { disableBroadcast } from '../../../options/devOptions';
import { messageApi } from '../message';
import { BroadcastMessage } from '../messageTypes';
import { ReturnOption } from './option';

export function PostBroadcast(message: BroadcastMessage) {
  console.info('Broadcast line message');
  console.info(message.messages[0].text);
  if (disableBroadcast) {
    console.info('Broadcast disabled. Skip sending message.');
    return;
  }
  UrlFetchApp.fetch(messageApi.broadcast, ReturnOption(message));
}
