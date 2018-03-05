import { Component, Input } from '@angular/core';
import { CoursesFeatured } from '../../models/courses-featured.interface';


@Component({
  selector: 'app-courses-featured',
  templateUrl: 'courses-featured.component.html',
  styleUrls: ['courses-featured.component.scss']
})
export class CoursesFeaturedComponent {

  // GET|SET event
  private _courses: Array<CoursesFeatured>;
  get courses(): Array<CoursesFeatured> {
      return this._courses;
  }
  @Input()
  set courses(value: Array<CoursesFeatured>) {
      this._courses = value;
  }
}
