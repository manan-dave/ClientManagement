import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-register-component',
  standalone: false,
  templateUrl: './client-register-component.html',
  styleUrl: './client-register-component.css'
})
export class ClientRegisterComponent {
 constructor(private http:HttpClient,private router:Router){}

name :string='';
email:string='';
address:string='';
regPassword:string='';
repassword:string='';
message:string='';

 onSubmit(form: any) {

  const client={
    name:this.name,
    email:this.email,
    address:this.address,
    password:this.regPassword
  };

  if (form.valid) {

    if (this.regPassword === this.repassword){
      
      console.log(client);
      this.http.post('http://localhost:3000/registerClient', client)
      .subscribe(
                   (res: any) => {this.message=res.message
                    alert(this.message);
                   },                     
                  (err: any) => {console.log('failed in calling the user api ',err)
                    this.message=err.error;
                    alert(this.message);
                   }
      );

    } else {      
      alert('password and repeat password are not same');
         
    }
  }
  else{
    alert("Error in Registoring the client");
  }
  }
 }
