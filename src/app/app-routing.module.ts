import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    loadChildren: () =>
      import("./features/landing/landing.module").then(m => m.LandingModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./features/home/home.module").then(m => m.HomePageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
