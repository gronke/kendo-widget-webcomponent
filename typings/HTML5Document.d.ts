interface HTMLDocumentCurrentScriptOwnerDocument {
  documentElement: HTMLDocument
}

interface HTMLDocumentCurrentScript {
  ownerDocument: HTMLDocumentCurrentScriptOwnerDocument;
}

interface HTML5Document extends HTMLDocument {
  currentScript: HTMLDocumentCurrentScript;
}
