import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from './home/home.page';
import {AboutPage} from './about/about.page';
import {MembershipPage} from './membership/membership.page';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'about', component: AboutPage},
  {path: 'membership', component: MembershipPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
