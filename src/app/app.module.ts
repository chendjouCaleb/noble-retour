import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {HomePage} from './home/home.page';
import {AboutPage} from './about/about.page';
import {LayoutModule} from './layout/layout.module';
import {MembershipPage} from './membership/membership.page';

@NgModule({
  declarations: [
    AppComponent, HomePage, AboutPage, MembershipPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
