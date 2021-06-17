import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Array<ITodo> = [];
  @Output() onClick = new Subject<ITodo>();

  public selectedId: number = -1;

  constructor() { }

  ngOnInit(): void { }

  public onTodoClick(todo: ITodo): void {
    this.selectedId = todo.id;
    this.onClick.next(todo)
  }
}
