import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
      <div class="alert alert-success text-center" [hidden]="displayNotification">
         This website uses cookies to provide better user experience. 
        <div class="close" (click)="hideNotification()"><button class="btn">X</button></div>
      </div>  
  `,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; text-align:center; background-color: #FAD7A0}", ".close { float: right;  margin-top: -15px;}", "p{font-size: 14px;}"],
})
export class NotificationComponent {
  displayNotification: boolean = false;
  hideNotification() {
    this.displayNotification = true;
  }
}
