import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-client-schedule-component',
  standalone: false,
  templateUrl: './client-schedule-component.html',
  styleUrl: './client-schedule-component.css'
})
export class ClientScheduleComponent {
 constructor(private http:HttpClient,private router:Router){}

  topic:string='';
  numberofpeople:number=0;
starttime: Date = new Date('1990-05-15T10:30:00');
message:string='';

 onSubmit(form: any) {
  const schedulemeeting ={
topic:this.topic,
numberofpeople:this.numberofpeople,
starttime:this.starttime
  };


  if (form.valid) {

    
      
      this.http.post('http://localhost:3000/scheduleMeeting', schedulemeeting)
      .subscribe(
                   (res: any) => {this.message=res.message
                    alert(this.message);
                   },                     
                  (err) => {console.log('failed in calling the user api ',err);  }
      );

    
}

}

}
