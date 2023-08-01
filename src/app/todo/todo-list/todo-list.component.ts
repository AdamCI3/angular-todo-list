import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private readonly todoService: TodoService) {}

  todos:Todo[] = []

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  async newTodo(title: string) {

  
    await this.todoService.createTodo(title);
    this.todos = (await this.todoService.getAllTodos());
  }

  async ngOnInit() {
     this.todos = (await this.todoService.getAllTodos())
     console.log(this.todos)
  }
}
