import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './clickme.component';
import { ClickMeComponentV2 } from './clickmev2.component';
import { 
    KeyupComponentV1, 
    KeyupComponentV2, 
    KeyupComponentV3, 
    KeyupComponentV4,
    LoopbackComponent } from './keyup.component';
import { HeroFormTemplateComponent } from './template-hero-form.component';
import { HeroFormReactiveComponent } from './reactive-hero-form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name-directive';
import { SignUpFormComponent } from './signupform/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMeComponentV2,
    KeyupComponentV1,
    KeyupComponentV2,
    KeyupComponentV3,
    KeyupComponentV4,
    LoopbackComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
