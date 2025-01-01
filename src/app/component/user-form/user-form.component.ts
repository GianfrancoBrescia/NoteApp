import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {User} from '../../model/User';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {

  @Output()
  addNewUser: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  editExistantUser: EventEmitter<User> = new EventEmitter<User>();

  @Input() canEditUser!: boolean;
  @Input() currentUser!: User;

  ngOnInit() {
    this.canEditUser = false;
    this.currentUser = User.empty();
  }

  onSubmitUser(userForm: NgForm) {
    if (!userForm.valid) {
      alert('Form not valid');
      return;
    }

    if (this.canEditUser) {
      this.editExistantUser.emit(userForm.value);
      return;
    }

    this.addNewUser.emit(userForm.value);
  }
}
