import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 

  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe(params=>console.log(params))
   }

  
  ngOnInit(): void {
    console.clear();

  }
   source=new Observable(function(observer){
     setTimeout(function(){
       console.log("Timeout");
       observer.next(100);
       observer.complete();
     },1500
     );
     console.log("started")
   }
   );

  

   }
