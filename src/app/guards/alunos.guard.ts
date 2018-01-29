import { CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | boolean {

        // console.log(route);
        // console.log(state);

        // if(state.url.includes('editar')) {
        //     alert("Usuário sem permissão");
        //     return Observable.of(false);
        // }


        return true;
    }


}