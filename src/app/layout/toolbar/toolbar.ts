import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'app-toolbar',
  host: {
    'class': 'app-toolbar'
  }
})
export class Toolbar {

}
