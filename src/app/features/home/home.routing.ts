import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './page/home.component';
import { HomeModule } from './page/home.module';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HomeModule],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
