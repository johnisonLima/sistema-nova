import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'autenticacao'
    },
    {
        path: 'autenticacao',
        loadChildren: () => import('./autenticacao/autenticacao.routes').then(m => m.autenticacaoRoutes)
    },
    {
        path: 'modulos',
        loadChildren: () => import('./modulos/layout/layout.routes').then(m => m.layoutRoutes)
    }
];
