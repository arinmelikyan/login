import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {email: '', password: '' } 

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        (res: any) => {
          console.log(res),
          localStorage.setItem('token', res.accessToken);
          this.router.navigate(['/welcome']);
        },
        err => console.log(err),
      );
  }
}
