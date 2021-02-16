import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
