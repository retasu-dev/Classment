import { RecipientObjects, DemographicObjects, LimitObjects } from './narrowCastProperties'

export interface UserMessage {
  type: string;
  replyToken: string;
  source: {
    userId: string;
    type: string;
  };
  timestamp: number;
  mode: string;
  message: {
    type: string;
    id: string;
    text: string;
  };
}

export interface MessageBody {
  type: string;
  text: string;
}

export interface Message {
  messages: MessageBody[];
}

export interface ReplyMessage extends Message {
  replyToken: string;
  notificationDisabled?: boolean;
}

export interface PushMessage extends Message {
  to: string;
  notificationDisabled?: boolean;
  customAggregationUnits?: string[];
}

export interface MultiCastMessage extends Message {
  to: string;
  notificationDisabled?: boolean;
  customAggregationUnits?: string[];
}

export interface NarrowCastMessage extends Message {
  recipient: RecipientObjects;
  demographic: DemographicObjects;
  limit: LimitObjects;
  notificationDisabled?: boolean;
}

export interface BroadcastMessage extends Message {
  notificationDisabled?: boolean;
}
