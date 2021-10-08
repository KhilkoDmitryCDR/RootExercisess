import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UsersApp';
  userId=15;
  message:any;
  subscription!:Subscription;
  
 

  source = new Observable(function (observer) {
    setTimeout(function () {
      console.log('Timeout');
      observer.next(100);
      observer.complete();
    }, 1500);
    console.log('started');
  });
  sub=this.source.subscribe(
    function(value){
      console.log("next"+value);
    },
    function(error){
      console.error(error);

    },
    function(){
      console.info("complited");

    }
    );


   


  
}
