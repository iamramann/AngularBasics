import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
      <div class="alert alert-success text-center">
        <p>This website uses cookies to provide better user experience.</p>
      </div>  
  `,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; text-align:center; background-color: #FAD7A0}", "p{font-size: 14px;}"],
})
export class NotificationComponent {

}
