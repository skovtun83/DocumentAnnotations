import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { IDocument } from '../models';

const FETCH_LATENCY = 1500;

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  getDocument(): Observable<IDocument> {
    return this.http.get<IDocument>('assets/mock.json').pipe(delay(FETCH_LATENCY)); // simulate server response
  }

  saveDocument(document: IDocument): void {
    console.log('DOCUMENT SAVED INFO: ', document);
  }
}