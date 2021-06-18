import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<ITodo> = [];

  private _todosSubject$: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);
  private _singleTodoSubject$: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    if (!this._todosSubject$.value.length) {
      const todosString = localStorage.getItem('todos');
      if (todosString) {
        const todosArray = JSON.parse(todosString);
        this._todosSubject$.next(todosArray);
      }
    }
    return this._todosSubject$.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject$.asObservable();
  }
  public setSelectedTodo(todo: ITodo): void {
    this._singleTodoSubject$.next(todo);
  }

  public addNewTodo(newTodo: ITodo): void {
    this._todosSubject$.next([newTodo, ...this._todosSubject$.value]);
    localStorage.setItem('todos', JSON.stringify(this._todosSubject$.value));
  }

}
