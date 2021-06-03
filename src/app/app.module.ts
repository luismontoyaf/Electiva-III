import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { ClaseComponent } from './clase/clase.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    ClaseComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
