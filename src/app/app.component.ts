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
  removeName = function(index){
    this.names.splice(index, 1);

  }
}
