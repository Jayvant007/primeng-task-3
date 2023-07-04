import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianComponentComponent } from './accordian-component/accordian-component.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { AccordianFormComponent } from './accordian-form/accordian-form.component';
import { AccordianDetaliComponent } from './accordian-component/accordian-detali/accordian-detali.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [  
    AppComponent,
    AccordianComponentComponent,
    AccordianFormComponent,
    AccordianDetaliComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
