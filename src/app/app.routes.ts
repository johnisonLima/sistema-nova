import { Routes } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao/autenticacao/autenticacao.component';
import { LayoutComponent } from './modulos/layout/layout/layout.component';

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
