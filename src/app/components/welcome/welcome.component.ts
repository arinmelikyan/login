import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  users: any = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(
        (res: any) => {
          this.users = res.users;
        },
        err => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              this.router.navigate(['/login']);
            }
          }
        }
      );
  }
}
