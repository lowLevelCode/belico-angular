import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.services';
import { Usuario } from './types/usuario.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';

  currentUser: Usuario;

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/auth/login']);
    }
}
