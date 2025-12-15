import { runOpenRouterAPI } from '../../api/openrouter/openrouter';
import { MessageBody } from '../../api/line/messageTypes';
import { llmPrompt } from '../../options/llm';

export function FormatRawAnnounce(documentData: string) {
  const messages: MessageBody[] = [
    {
      type: 'text',
      text: runOpenRouterAPI(documentData + llmPrompt),
    },
  ];
  return messages;
}
