import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {AccordionModule} from 'primeng/accordion';     
import {ButtonModule} from 'primeng/button';
import { SecondComponent } from './second/second.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {RadioButtonModule} from 'primeng/radiobutton';
import { HrComponent } from './hr/hr.component';
//import { HrComponent } from './hr/hr.component';
import {TableModule} from 'primeng/table';
import {KeyFilterModule} from 'primeng/keyfilter';
import { UserComponent } from './user/user.component';






@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HrComponent,
    UserComponent,
    //HrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RadioButtonModule,
    TableModule,
    KeyFilterModule
   

  
  ],
  providers: [HttpClientModule,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
