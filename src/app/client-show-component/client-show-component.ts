import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { error } from 'console';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-client-show-component',
  standalone: false,
  templateUrl: './client-show-component.html',
  styleUrl: './client-show-component.css'
})
export class ClientShowComponent {

  clients:any[]=[];

  constructor(private http:HttpClient,private router:Router,private cdRef: ChangeDetectorRef){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit():void{
    this.fetchClient();
  }

  fetchClient(){
    this.http.get<any[]>('http://localhost:3000/getClients')
    .subscribe({
       next: (response) => {this.clients = response;
        this.cdRef.detectChanges();

       },
      error: (err) => {
        console.error('Error fetching the client information', err);
        // Optionally show a message to the user
      }
    });
  }
}
