import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Error } from './components/error/error';

export const routes: Routes = [
    {
        path:'', component: Login,
    },
    {
        path:'dashboard', component: Dashboard
    },
    {
        path:'**', component: Error,
    },
];
