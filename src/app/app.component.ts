import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'flueng';

  word = 'palm';
  choices = [
    'пальма',
    'ладонь',
    'пальто',
    'паркет',
    'парта',
    'квартира',
    'веревка',
    'стол',
    'палм',
  ];

}
