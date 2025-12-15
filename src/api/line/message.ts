/* eslint-disable no-unused-vars */
import { apiCore } from "./core";

export const enum messageApi {
    reply = apiCore + "/v2/bot/message/reply",
    push = apiCore + "/v2/bot/message/push",
    multicast = apiCore + "/v2/bot/message/multicast",
    narrowcast = apiCore + "/v2/bot/message/narrowcast",
    broadcast = apiCore + "/v2/bot/message/broadcast",
}