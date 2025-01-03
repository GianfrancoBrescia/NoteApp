import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../model/User';
import {environment} from '../../environment/environment';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.msNoteBaseUrl}/users`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.msNoteBaseUrl}/user`, user);
  }

  editUser(newUser: User): Observable<User> {
    return this.http.put<User>(`${environment.msNoteBaseUrl}/user`, newUser);
  }

  getUserByFiscalCode(firstname: string): Observable<User> {
    return this.http.get<User>(`${environment.msNoteBaseUrl}/user/${firstname}`);
  }
}
