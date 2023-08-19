import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //When we assign a value to a selector now this selector can be used as a html tag.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //In this class we specify properties and methods which we can use in our html file.
  title = 'AngularApp';
  message = 'This is my first Angular App. I am excited to learn more about it.';
}
 