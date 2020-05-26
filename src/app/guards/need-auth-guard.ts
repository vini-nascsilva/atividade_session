import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class NeedAuthGuard implements CanActivate {

    constructor(private customerService: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        const redirectUrl = route['_routerState']['url'];
        if (this.customerService.isLogged()) {
            return true;
        }
        else {
            this.router.navigateByUrl(
                this.router.createUrlTree(
                    ['/login'], {
                    queryParams: {
                        redirectUrl
                    }
                }
                )
            );
        }
        return false;
    }
}