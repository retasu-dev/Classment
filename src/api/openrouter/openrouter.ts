import { openRouterModel } from '../../options/llm'
import { openRouterAPI } from '../../secrets'
import { OpenAIChatCompletionResponse } from './openrouterResponse'

export function runOpenRouterAPI(prompt: string): string {
	const OPENROUTER_API = openRouterAPI
	const url = 'https://openrouter.ai/api/v1/chat/completions'
	const payload = {
			model: openRouterModel,
			messages: [
				{
					role: 'user',
					content: [
						{
							type: 'text',
							text: prompt,
						},
					],
				},
			],
		},
		options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
			method: 'post',
			headers: {
				Authorization: `Bearer ${OPENROUTER_API}`,
				'Content-Type': 'application/json',
			},
			contentType: 'application/json',
			payload: JSON.stringify(payload),
			muteHttpExceptions: true,
		}
	console.log(prompt)
	const res = UrlFetchApp.fetch(url, options),
		resJson: OpenAIChatCompletionResponse = JSON.parse(res.getContentText())
	console.log(resJson)
	if (resJson && resJson.choices && resJson.choices.length > 0)
		if (resJson.choices[0].message.content) return resJson.choices[0].message.content
	throw new Error('No response from OpenRouter API\n' + res.getContentText())
}
