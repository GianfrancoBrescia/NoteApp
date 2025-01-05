import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';
import {UserFormComponent} from '../user-form/user-form.component';
import _ from "lodash";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule, RouterLink, UserFormComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent implements OnInit {

  users!: User[];
  enableButton!: boolean;
  currentClass = {};
  canEditUser!: boolean;
  currentUser!: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.canEditUser = false;
    this.currentUser = User.empty();
    this.enableButton = true;
    this.currentClass = {
      'btn-success': this.enableButton,
      'big-text': this.enableButton
    };
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  showHideDetails(u: User): void {
    u.visibility = !u.visibility;
  }

  isHide(u: User): string {
    return u.visibility ? 'Hide Details' : 'Show Details';
  }

  aggiungiUtente(u: User): void {
    this.userService.createUser(u).subscribe(data => this.users.unshift(data));
  }

  edit(u: User): void {
    this.canEditUser = true;
    this.currentUser = u;
  }

  modificaUtente(u: User): void {
    this.userService.editUser(u).subscribe(data => {
      const index = this.users.findIndex(user => _.isEqual(this.currentUser, user));
      if (index > -1) this.users[index] = data;
      this.canEditUser = false;
      this.currentUser = User.empty(true);
    });
  }
}
