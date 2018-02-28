import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {
  linksLeft = [
    { path: '/about', label: 'About'},
    { path: '/shop-online', label: 'Shop Online'},
    { path: '/blog', label: 'Blog'}
  ];
  linksRight = [
    { path: 'page/courses', label: 'Courses'},
    { path: 'page/recipes', label: 'Recipes'},
    { path: 'page/contact', label: 'Contact'}
  ];
  logo: string = 'assets/img/sac-logo.png';
}
