import { driveId } from '../../secrets'
import { getLatestFile } from './file/getLatestFile'

const option = {
	ocr: true,
	ocrLanguage: 'ja',
}

export function runOCR(targetFileId: string) {
	const tFile = DriveApp.getFileById(targetFileId)
	if (!tFile) {
		console.log('No files found in the selected folder.')
		throw new Error('No files found in the specified folder.')
	}
	const subject = tFile.getName()
	let resource = {
		title: subject,
		mimeType: 'application/vnd.google-apps.document',
	}
	let orcData = Drive.Files.copy(resource, tFile.getId(),option)
	if (!orcData.id) {
		console.log('Couldnt get ocr file id')
		throw new Error('Couldnt get ocr file id')
	}
	const file = DriveApp.getFileById(orcData.id)
	if (!DriveApp.getFoldersByName('Output').hasNext())
		DriveApp.createFolder('Output')
	const outputFolder = DriveApp.getFoldersByName('Output').next()
	file.moveTo(outputFolder)
	console.log(orcData.id)
	let doc = DocumentApp.openById(orcData.id) // コピー先ファイルのOCRのデータを取得
	var body = doc.getBody()
	var text = body.getText()

	//なんか文字化けするときあるからそれ用の置換マップ
	var replacements = {
		䛻: 'に',
		䛶: 'て',
		䛿: 'は',
		䛺: 'な',
		䛷: 'で',
		䜀: 'ば',
		䛾: 'の',
		䛸: 'と',
	}

	// 置換
	for (const origin of Object.keys(replacements)) {
		const key = origin as keyof typeof replacements
		text = text.replace(new RegExp(key, 'g'), replacements[key])
	}

	// 上書き
	body.setText(text)
}

export function getOutputOCRFolder() {
	if (!DriveApp.getFoldersByName('Output').hasNext())
		DriveApp.createFolder('Output')
	return DriveApp.getFoldersByName('Output').next()
}