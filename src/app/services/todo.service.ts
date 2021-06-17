import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _mock: ITodo[] = [
    {
      "id": 100,
      "title": "Konklab",
      "description": "ヽ༼ຈل͜ຈ༽ﾉ ヽ༼ຈل͜ຈ༽ﾉ ",
      "isCompleted": true,
      "isArchived": false,
      "endDate": "5/4/2021",
    },
    {
      "id": 101,
      "title": "Job",
      "description": "../../../../../../../../../../../etc/passwd%00",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "8/8/2020",
    },
    {
      "id": 102,
      "title": "Voltsillam",
      "description": "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "8/6/2020",
    },
    {
      "id": 103,
      "title": "Stim",
      "description": "ثم نفس سقطت وبالتحديد،, جزيرتي باستخدام أن دنو. إذ هنا؟ الستار وتنصيب كان. أهّل ايطاليا، بريطانيا-فرنسا قد أخذ. سليمان، إتفاقية بين ما, يذكر الحدود أي بعد, معاملة بولندا، الإطلاق عل إيو.",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "8/13/2020",
    },
    {
      "id": 104,
      "title": "Zaam-Dox",
      "description": "åß∂ƒ©˙∆˚¬…æ",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "1/7/2021",
    },
    {
      "id": 105,
      "title": "Bytecard",
      "description": "✋🏿 💪🏿 👐🏿 🙌🏿 👏🏿 🙏🏿",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "11/14/2020",
    },
    {
      "id": 106,
      "title": "Asoka",
      "description": "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "8/3/2020",
    },
    {
      "id": 107,
      "title": "Cookley",
      "description": "和製漢語",
      "isCompleted": false,
      "isArchived": true,
      "endDate": "11/25/2020",
    },
    {
      "id": 108,
      "title": "Tempsoft",
      "description": "test⁠test‫",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "12/17/2020",
    },
    {
      "id": 109,
      "title": "Biodex",
      "description": "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "7/14/2020",
    },
    {
      "id": 110,
      "title": "Redhold",
      "description": "パーティーへ行かないか",
      "isCompleted": false,
      "isArchived": false,
      "endDate": "2/15/2021",
    }
  ];

  private _todosBehaviorSubject$: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this._mock);
  private _singleTodoBehaviorSubject$: BehaviorSubject<ITodo> = new BehaviorSubject(this._mock[0]);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todosBehaviorSubject$.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoBehaviorSubject$.asObservable();
  }
  public setSelectedTodo(todo: ITodo) {
    this._singleTodoBehaviorSubject$.next(todo);
  }
}
