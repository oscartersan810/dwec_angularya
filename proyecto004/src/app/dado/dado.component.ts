import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {

  @Input() valor: string="";

  constructor() { }

  getImageDado(){
    return `images/dado${this.valor}.png`;
  }


}