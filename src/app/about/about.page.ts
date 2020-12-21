import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  templateUrl: 'about.page.html',
  styleUrls: [ 'about.page.scss']
})
export class AboutPage {
  constructor(title: Title) {
    title.setTitle('À propos');
  }
}
