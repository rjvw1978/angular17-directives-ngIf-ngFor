import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor,NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imagenList: { url: string, name: string , categoria:number}[] = [
    { url: "./assets/child.jpg", name:"Niña jugando", categoria:1 },
    { url: "./assets/ai-generated.jpg", name:"Miradas" , categoria:4},
    { url: "./assets/couple.webp", name:"Pareja de Ancianos", categoria:2},
    { url: "./assets/crayons.jpg", name:"Colores", categoria:3},
  ];

}
