import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard/dashboard.routing';

export const routes: Routes = [
  dashboardRoute,
  {
    path: 'project',
    loadChildren: './project/project.module#ProjectModule',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
