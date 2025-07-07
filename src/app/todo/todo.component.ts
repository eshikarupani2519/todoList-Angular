import { Component } from '@angular/core';
import { Task } from './Task.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
ipValue="";
tasks:Task[]=[]
ngOnInit(){
  let storedTasks = localStorage.getItem('tasks');
  if(storedTasks){
    this.tasks = JSON.parse(storedTasks);
  }
}
addtodo(){
  if(this.ipValue){
  console.log('item added');

let newtask:Task={
  title:this.ipValue.trim(),
  isCompleted:false
}
// this. tab lagate hai jab function ke bahar ki cheez access karo
this.tasks.push(newtask);
  this.ipValue="";
  console.log(this.tasks);
  this.saveToLocalStorage();
}}
delete(i:number){
  this.tasks.splice(i,1);
  console.log('item deleted');
    this.saveToLocalStorage();

}
saveToLocalStorage(){
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
  console.log('Tasks saved to local storage');
}
}
