import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {
  linksLeft = [
    { path: 'about', label: 'About'},
    { path: 'shop-online', label: 'Shop Online'},
    { path: 'blog', label: 'Blog'}
  ];
  linksRight = [
    { path: 'courses', label: 'Courses'},
    { path: 'recipes', label: 'Recipes'},
    { path: 'contact', label: 'Contact'}
  ];
  logo: string = 'assets/img/sac-logo.png';
}
