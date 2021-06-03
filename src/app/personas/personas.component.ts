import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  persona = "persona 1"

  nombre = "El "
  apellido = "Pepe"
  private edad = "22"

  getEdad(){
    return this.edad
  }
}
