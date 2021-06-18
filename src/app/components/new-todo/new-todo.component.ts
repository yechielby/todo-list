import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') from: Form;

  constructor() { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit(): void {
    console.log(this.from)
  }

}
