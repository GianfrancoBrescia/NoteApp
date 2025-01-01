import {Injectable} from '@angular/core';
import {Address} from '../model/Address';
import {User} from '../model/User';
import {Observable, of} from 'rxjs';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[];

  constructor() {
    this.users = [];
    this.users.push(new User('Adriana', 'Caione', 33, null, new Address('Lecce', 'via Bari'), true, new Date('1986/07/28')));
    this.users.push(new User('Alessandro', 'Fiore', 37, null, new Address('Lecce', 'via Imola'), true, null));
    this.users.push(new User('Luigi', 'Manco', 34, null, new Address('Lecce', 'via Lodi'), true, null));
    this.users.push(new User('Roberto', 'Vergallo', 36, null, null, true, null));
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  createUser(user: User) {
    user.visibility = true;
    this.users.unshift(user);
  }

  editUser(oldUser: User, newUser: User) {
    const index = this.users.findIndex(user => _.isEqual(oldUser, user));
    if (index > -1) this.users[index] = newUser;
  }

  getUserByFirstName(firstname: string): User {
    // === confronta l'attributo per stesso tipo e stesso valore
    // == confronta l'attributo per stesso valore
    return this.users.find(user => user.firstname === firstname)!;
  }
}
