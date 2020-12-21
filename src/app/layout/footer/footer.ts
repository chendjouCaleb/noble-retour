import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'footer.html',
  styleUrls: [ 'footer.scss'],
  encapsulation: ViewEncapsulation.None,
  selector: 'app-footer',
  host: {
    'class': 'app-footer'
  }
})
export class Footer {

}
