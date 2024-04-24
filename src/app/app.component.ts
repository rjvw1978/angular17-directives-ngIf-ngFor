import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imagenList: { url: string, name: string }[] = [
    { url: "./assets/child.jpg", name:"Niña jugando" },
    { url: "./assets/ai-generated.jpg", name:"Miradas"},
    { url: "./assets/couple.webp", name:"Pareja de Ancianos"},
    { url: "./assets/crayons.jpg", name:"Colores"},
  ];

}
