import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../login/auth.service';
import { Router,CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if(this.authService.usuarioEstaAutenticado()) {
      return true;
    } 

    this.router.navigate(['/login']);

    return false;
  }

  

  canLoad(
    route: Route
  ) : Observable<boolean> | boolean | Promise<boolean> {
    
    console.log('canload: verificando se o usuario pode carregar modulo');

    return this.verificarAcesso();
  }

}
