import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;
  @Output() onAction = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onCompleteTodo(): void {
    this.onAction.next('isCompleted');
  }

  public onArchiveTodo(): void {
    this.onAction.next('isArchived');
  }
}
