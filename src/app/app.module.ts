import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { CursosComponent } from './cursos/cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { LoginComponent } from './autentificacion/login/login.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ProjectService } from './servicios/project.service';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AddproComponent } from './projects/addpro/addpro.component';
import { EditproComponent } from './projects/editpro/editpro.component';

import { CursosService } from './servicios/cursos.service';
import { AutentificacionService } from './servicios/autentificacion.service';
import { GuardService } from './servicios/guard.service';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [GuardService] },
  { path: 'addpro', component: AddproComponent, canActivate: [GuardService] },
  { path: 'editpro/:id', component: EditproComponent, canActivate: [GuardService] },  
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    CursosComponent,
    NuevoCursoComponent,
    UsuariosComponent,
    RegistroComponent,
    LoginComponent,
    EditarCursoComponent,
    ProjectsComponent,
    AddproComponent,
    EditproComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ CursosService,AutentificacionService,GuardService,ProjectService ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
