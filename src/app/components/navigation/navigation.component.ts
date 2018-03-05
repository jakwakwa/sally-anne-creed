import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {
  linksLeft = [
    { path: 'page/about', label: 'About'},
    { path: 'page/shop-online', label: 'Shop Online'},
    { path: 'page/blog', label: 'Blog'}
  ];
  linksRight = [
    { path: 'page/courses', label: 'Courses'},
    { path: 'page/recipes', label: 'Recipes'},
    { path: 'page/contact', label: 'Contact'}
  ];
  logo: string = 'assets/img/sac-logo.png';
}
