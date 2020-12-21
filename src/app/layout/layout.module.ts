import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {Layout} from './layout';
import {Toolbar} from './toolbar/toolbar';
import {Footer} from './footer/footer';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule],
  declarations: [Layout, Toolbar, Footer],
  exports: [Layout, Toolbar, Footer],
})
export class LayoutModule {
}
