import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo: ITodo;
  private _subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this._subscription = this.todoService.getSelectedTodo().subscribe(
      (date: ITodo) => {
        this.todo = date;
      }
    )
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  public onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }
  public onArchiveTodo(todo: ITodo): void {
    todo.isArchived = true;
    this.todoService.setSelectedTodo(null);
  }
}
