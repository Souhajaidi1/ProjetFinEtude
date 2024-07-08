import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { AuthGuard } from 'app/guards';

const routes: Routes = [

  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '/auth/login',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'auth',
  //       loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  //     },
  //     {
  //       path: 'pages',
  //       loadChildren: () => import('./components/extra-pages/pages.module').then(m => m.PagesModule)
  //     },
  //   ]
   //},
  {
    path: '',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    canActivate: [],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'project-management',
        loadChildren: () => import('./components/project-management/project-management.module').then(m => m.ProjectManagementModule)
      },
      {
        path: 'project-recruitement',
        loadChildren: () => import('./components/project-management/project-management.module').then(m => m.ProjectManagementModule)
      },
      {
        path: 'human-resources',
        loadChildren: () => import('./components/human-resources/human-resources.module').then(m => m.HumanResourcesModule)
      },
      {
        path: 'recruitment',
        loadChildren: () => import('./components/recruitment/recruitment.module').then(m => m.recruitementModule)
      },
      {
        path: 'recruit-offers',
        loadChildren: () => import('./components/recruitment/recruit-offers/recruit-offers.module').then(m => m.recruitoffersModule)
      }
    ]
  },
  {
    path: '**', redirectTo: 'pages/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
