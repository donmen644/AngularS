import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';

const routes: Routes = [
  {
    path: 'lista', component: ListTaskComponent
  },
  {
    path: 'crear', component: CreateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
