import { getDocumentData } from '../../libs/drive/file/getDocumentData'
import { getLatestFile } from '../../libs/drive/file/getLatestFile'
import { getOutputOCRFolder } from '../../libs/drive/ocr'

export function GetAnnounce() {
	return getDocumentData(getLatestFile(getOutputOCRFolder().getId())!.getId())
}