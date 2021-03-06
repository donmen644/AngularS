import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 

const appRoutes: Routes = [

  {path: 'list', component: ListTaskComponent},
  {path: 'create', component: CreateTaskComponent},

]
@NgModule ({

  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent
],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,



  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
