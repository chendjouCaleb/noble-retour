import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'layout.html',
  encapsulation: ViewEncapsulation.None,
  selector: 'app-layout',
  host: {
    'class': 'app-layout'
  }
})
export class Layout {

}
