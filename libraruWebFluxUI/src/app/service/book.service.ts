import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {BookSave} from "../model/book-save";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl: string;
  private bookCommentsPath: string;

  constructor(private http: HttpClient) {
    this.bookUrl = 'http://localhost:8080/book';
    this.bookCommentsPath = 'comments';
  }

  public findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  public save(book: BookSave) {
    return this.http.post<BookSave>(this.bookUrl, book);
  }

  public delete(bookId: string) {
    return this.http.delete<number>(`${this.bookUrl}/${bookId}`);
  }

  public getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.bookUrl}/${bookId}/${this.bookCommentsPath}`)
  }

  public update(book: BookSave) {
    return this.http.put<BookSave>(this.bookUrl, book);
  }
}
