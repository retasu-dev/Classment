import { runOpenRouterAPI } from '../../libs/openrouter/openrouter';
import { MessageBody } from '../../libs/line/messageTypes';

export function FormatRawAnnounce(documentData: string) {
  const prompt =
    '\n「1年次、2年次、3年次、全体、（月日と曜日）、カレンダーに戻る」は無視する。' +
    '出力は必ず【終礼連絡】と【時間割変更】の2部構成にする（間に1行改行）。' +
    '【終礼連絡】「【」が出てきたら改行不要な空白を削除' +
    '【時間割変更】クラス表記（例: 1-1）は残す' +
    '1クラスに複数変更がある場合「A / B」の形式（/ の前後に半角スペース）何限目の変更かも明記全体で変更がなければ「なし」とだけ書く' +
    '学年ごとに分けず、全体をまとめる';
  const messages: MessageBody[] = [
    {
      type: 'text',
      text: runOpenRouterAPI(documentData + prompt),
    },
  ];
  return messages;
}
