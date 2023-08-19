import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  siteName: string = 'eShopping';
  navbarItems:Array<string> = ['HOME', 'ABOUT', 'CONTACT', 'CART', 'PRODUCTS']
}
