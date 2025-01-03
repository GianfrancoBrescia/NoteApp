import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Note} from '../model/Note';
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) {
  }

  getCommenti(): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.msNoteBaseUrl}/notes`);
  }

  getCommentoById(idCommento: number): Observable<Note> {
    return this.http.get<Note>(`${environment.msNoteBaseUrl}/note/${idCommento}`);
  }

  createCommento(commento: Note): Observable<Note> {
    return this.http.post<Note>(`${environment.msNoteBaseUrl}/note`, commento);
  }

  updateCommento(commento: Note): Observable<Note> {
    return this.http.put<Note>(`${environment.msNoteBaseUrl}/note`, commento).pipe(catchError(this.handleError));
  }

  deleteCommento(idCommento: number): Observable<any> {
    return this.http.delete(`${environment.msNoteBaseUrl}/note/${idCommento}`).pipe(catchError(this.handleError));
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
