import { Todo } from './../../assignment.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
@Input() todoList:Todo[];
current:any;
selectTodo(item){
  this.current=item.id;
}
}
