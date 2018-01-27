import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard]
    },
    { path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule', 
        canActivate: [AuthGuard]//,
        //canActivateChild: [AlunosGuard]
    },
    //{ path: 'cursos', component: CursosComponent },
    //{ path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}