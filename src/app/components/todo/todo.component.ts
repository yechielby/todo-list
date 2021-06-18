import { Component, Input, OnInit } from '@angular/core';

import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = !todo.isCompleted;
  }
  public onArchiveTodo(todo: ITodo): void {
    todo.isArchived = true;
    this.todoService.setSelectedTodo(null);
  }
}
