import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | boolean {

        console.log(component);

        //return component.podeMudarRota();
        return component.podeDesativar();
    }


}