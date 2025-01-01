import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    const idUtente = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUserByFirstName(idUtente!);
  }
}
