import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Document, Member, User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }

  updateUser(user: Member, documents: Document[]): Observable<Member> {
    return null;
  }

  createDocuments(documents: Document[]): Observable<Document[]> {
    return null;
  }

  createDocument(document: Document): Observable<Document> {
    return null;
  }

  private userRequest(user: Member) {
    return this.http.put(`/api/members/${user.id}`, user);
  }

  // Simulo un API que devuelve solo el ID creado
  private documentRequest(document: Document) {
    const body = {
      id: null,
      filename: document.filename,
      size: document.size,
      content: document.content
    };

    return this.http.post<Document>('/api/documents', body)
      .pipe(map(response => response.id));
  }


}
