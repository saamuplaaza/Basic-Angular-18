import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CronoComponent } from "./components/crono/crono.component";
import { ButtonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CronoComponent, RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numero:number = 0;

  constructor(){
    setInterval(() => {
      this.numero==9?this.numero=0:this.numero++
    }, 1000);
  }

  resetearSegundos():void{
    this.numero = 0
  }

  hazalgo(event:any):void{
    console.log(event)
  }
}
