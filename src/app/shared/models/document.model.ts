export interface IDocument {
  name: string;
  pages: IDocumentPage[];
  annotations?: string[];
}

export interface IDocumentPage {
  number: number;
  imageUrl: string;
}