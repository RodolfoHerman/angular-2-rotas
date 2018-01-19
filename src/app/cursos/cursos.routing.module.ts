import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const CURSOS_ROUTES: Routes = [

    { path: '', component: CursosComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }

];

@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]

})
export class CursosRoutingModule {

}