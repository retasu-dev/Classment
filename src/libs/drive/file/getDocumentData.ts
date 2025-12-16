export function getDocumentData(id: string) {
    return DocumentApp.openById(id).getBody().getText()
}