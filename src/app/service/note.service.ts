import {Injectable} from '@angular/core';
import {Note} from '../model/Note';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly url = 'https://jsonplaceholder.typicode.com/posts';
  private readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getCommenti(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  getCommentoById(idCommento: number): Observable<Note> {
    return this.http.get<Note>(`${this.url}/${idCommento}`);
  }

  createCommento(commento: Note): Observable<Note> {
    return this.http.post<Note>(this.url, commento, this.httpOptions);
  }

  updateCommento(commento: Note): Observable<Note> {
    return this.http
      .put<Note>(`${this.url}/${commento.id}`, commento, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteCommento(idCommento: number): Observable<any> {
    return this.http
      .delete(`${this.url}/${idCommento}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      errorMessage = error.error.message;
    } else {
      // The backend returned an unsuccessful response code; the response body may contain clues as to what went wrong
      errorMessage = `Error Code ${error.status}: ${error.error}`;
    }

    return throwError(`${errorMessage}. Please try again later.`);
  }
}
