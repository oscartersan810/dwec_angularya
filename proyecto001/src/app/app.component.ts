import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Oscar';
  edad = 23;
  fumador = false;

  esFumador(){
    return this.fumador ? 'Si' : 'No';
  }
}
