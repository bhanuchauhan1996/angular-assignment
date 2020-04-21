import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  myValue:string;
  handleText(data:HTMLInputElement){
    console.log(data.value);
    this.myValue=data.value;
  }
}
