import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names=[];
  name = '';
  pushName= function(){
    if(this.name != ''){
      this.names.push(this.name);
      this.name='';
    }
  }
  gotoLink=function(){
    window.open('https://angular.io/docs');
  }
}
