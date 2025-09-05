import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})

export class LoginComponent {

  constructor(private http:HttpClient,private router:Router){}

username: string = '';
password: string = '';


  onLogin(form: any) {
    if (form.valid) {
      
      this.http.post('http://localhost:3000/login', {username: this.username, password: this.password })
      .subscribe(
                   (res: any) => {

                        if (res[0].login_status === 'Success'){
                        this.router.navigate(['/climeeting']);
                        console.log('success');
                        } else {
                          console.log('failed');
                          alert('Login failed.. please check User name and Password');
                        }
                  },
     (err) => {
      console.log('failed in calling the user api');
    }
  );

    } else {      
         alert("Username must be at least 3 characters and password 6.");
    }
  }

}
