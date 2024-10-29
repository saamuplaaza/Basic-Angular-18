import { Component, inject} from '@angular/core';
import { task } from '../../model/task';
import { CreateTaskComponent } from "../../components/create-task/create-task.component";
import { LocalDBService } from '../../services/local-db.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreateTaskComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  db = inject(LocalDBService);
  toDo:task[]=[];

  ngOnInit(){
    this.toDo = this.db.load();
  }

  addTask(newTask:task){
    this.toDo.push(newTask);
    this.db.save(this.toDo);
  }

  removeTask(id:number|undefined){
    if(!id) return //Validación opcional;
    if(!confirm("¿Estás seguro?")) return;

    this.toDo=this.toDo.filter(e=>e.id!=id);
    this.db.save(this.toDo);
  }

  editTask(task:task){
    task.update = true;
    task.newTitle = task.title
    this.db.save(this.toDo);
  }

  updateTask(task:task){
    task.title = task.newTitle as any;
    task.update = undefined;
    task.newTitle = undefined;
    this.db.save(this.toDo)
  }

  cancelEdit(task:task){
    task.update = undefined;
    task.newTitle = undefined;
  }
}
