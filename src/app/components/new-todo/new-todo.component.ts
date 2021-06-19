import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') from: NgForm;

  public minDate: Date = new Date();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit(): void {
    const formValue = this.from.value;
    const newTodo: ITodo = {
      "id": uuidv4(),
      "title": formValue.title,
      "description": formValue.description,
      "isCompleted": false,
      "isArchived": false,
      "endDate": formValue.endDate,
    }
    // console.log(newTodo);
    this.todoService.addNewTodo(newTodo);
  }

}
