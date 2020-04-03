import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardGuard } from './guards/usuario-guard.guard';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'mensajes',
        component: MensajesComponent,
        canActivate: [UsuarioGuardGuard],
    },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
