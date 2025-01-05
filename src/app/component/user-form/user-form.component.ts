import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {User} from '../../model/User';
import {Address} from '../../model/Address';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {

  @Input() canEditUser!: boolean;
  @Input() currentUser!: User;

  @Output() addNewUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() editExistantUser: EventEmitter<User> = new EventEmitter<User>();

  ngOnInit() {
    this.canEditUser = false;
    this.currentUser = User.empty();
  }

  removeElementToAddressList(index: number): void {
    this.currentUser.address!.splice(index, 1);
  }

  addEmptyElementToAddressList(): void {
    this.currentUser.address = [
      ...(this.currentUser.address ?? []),
      new Address('', '')
    ];
  }

  onSubmitUser(userForm: NgForm): void {
    if (!userForm.valid) {
      alert('Form not valid');
      return;
    }

    const user: User = {
      ...userForm.value,
      address: this.currentUser.address?.map(a => ({street: a.street || null, city: a.city || null})) ?? null,
      visibility: this.currentUser.visibility
    };

    if (this.canEditUser) {
      this.editExistantUser.emit(user);
      return;
    }

    this.addNewUser.emit(user);
  }
}
