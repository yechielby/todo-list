import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<ITodo> = [];

  private _todosSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  constructor() { }

  public getTodos$(): Observable<Array<ITodo>> {
    if (!this._todosSubject.value.length) {
      const todosString = localStorage.getItem('todos');
      if (todosString) {
        const todosArray = JSON.parse(todosString);
        this._todosSubject.next(todosArray);
      }
    }
    return this._todosSubject.asObservable();
  }

  private setTodos(todos: Array<ITodo>): void {
    this._todosSubject.next(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  public onTodoAction(todoId: string, action: string): void {
    const exitingTodos: Array<ITodo> = this._todosSubject.value;
    const index = exitingTodos.findIndex(todo => todo.id === todoId);
    exitingTodos[index][action] = !exitingTodos[index][action];
    this.setTodos(exitingTodos);
  }

  public addNewTodo(newTodo: ITodo): void {
    const exitingTodos: Array<ITodo> = this._todosSubject.value;
    exitingTodos.unshift(newTodo);
    this.setTodos(exitingTodos);
    // this._todosSubject$.next([newTodo, ...this._todosSubject$.value]);
  }

}
