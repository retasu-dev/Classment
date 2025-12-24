export function getLatestFile(id: string) {
	const folder = DriveApp.getFolderById(id)
	const files = folder.getFiles()
	Logger.log('files:' + files)
	let latestDate = new Date(0)
	Logger.log('latestDate:' + latestDate)
	let latestFile: GoogleAppsScript.Drive.File | null = null
	while (files.hasNext()) {
		const file = files.next()
		Logger.log('file:' + file)
		const date = new Date(file.getLastUpdated().getTime())
		Logger.log('date:' + date)
		if (date > latestDate) {
			latestFile = file
			Logger.log('latestFile:' + latestFile)
			latestDate = date
			Logger.log('latestDate:' + latestDate)
		}
	}
	return latestFile
}
