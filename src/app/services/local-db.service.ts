import { Injectable } from '@angular/core';
import { task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {
  /**
   * Devuelve el array de localStorage o array vacío si no existe
  * @return el array de tareas
   */
  load():task[]{
    let tasks = localStorage.getItem('tasks');
    if(tasks){
      return JSON.parse(tasks);
    }else{
      return [];
    }
  }

  /**
   * Método que guarda el array de treas en localStorage
  * @param tasks el array de tareas
   */
  
  save(tasks:task[]){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
