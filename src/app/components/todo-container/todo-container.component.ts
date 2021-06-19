import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {

  public todo: ITodo;
  public todos: Array<ITodo> = [];

  private _subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._subscription.add(
      this.todoService.getTodos$().subscribe(data => {
        this.todos = data;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  public onTodoClick(todo: ITodo): void {
    this.todo = todo;
  }

  public onTodoAction(action: string): void {
    this.todoService.onTodoAction(this.todo.id, action);
    if (action === 'isArchived') {
      this.todo = null;
    }
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed', result);
    });
  }
}
