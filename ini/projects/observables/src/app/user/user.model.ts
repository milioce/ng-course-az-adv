export interface User {
  id: number;
  name: string;
  category: string;
}

export interface Member {
  id: number;
  name: string;
  lastname: string;
  documents: Document[];
}

export interface Document {
  id: number;
  filename: string;
  size: number;
  content?: string;
}
