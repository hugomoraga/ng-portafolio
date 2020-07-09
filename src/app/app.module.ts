import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



// Servicios
import { WorksService } from './services/works.service';
// Rutas
import {APP_ROUTING} from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillzComponent } from './components/skillz/skillz.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SkillzComponent,
    CarouselComponent,
    FooterComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    APP_ROUTING
  ],
  providers: [
    WorksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
