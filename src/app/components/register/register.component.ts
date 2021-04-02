import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {name: '', email: '', password: ''};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  formatData(date: any) {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  } 

  registerUser() {
    const createdAt = this.formatData(new Date());
    this.auth.registerUser({ ...this.registerUserData, createdAt})
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
