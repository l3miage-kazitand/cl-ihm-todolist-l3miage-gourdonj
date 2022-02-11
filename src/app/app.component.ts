import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodolistService, TodoItem, TodoList } from './todolist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'l3m-tpX-todolist-angular-y2022';

  readonly todoListObs: Observable<TodoList>;

  constructor(public todoListService: TodolistService){
    this.todoListObs = todoListService.observable;
  }
  ngOnInit(){
  }

  onSubmit(data: string){
    console.log(data);
    this.todoListService.create(data);
  }

  trackById(i: number, e: TodoItem): number{
    return e.id;
  }
  updateDone(data: boolean,item:TodoItem){
    //console.log(data)
    this.todoListService = this.todoListService.update({isDone:data},item)
    //console.log(this.todoListService)
  }

  updateLabel(data: string,item:TodoItem){
    //console.log(data)
    this.todoListService = this.todoListService.update({label:data},item)
    //console.log(this.todoListService)
  }
  delete(data:TodoItem){
    this.todoListService.delete(data)
  }
}
