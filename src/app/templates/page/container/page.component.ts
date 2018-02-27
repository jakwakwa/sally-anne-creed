import { Component, OnInit } from '@angular/core';

import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit {

  blogsData: any = [];

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getApp().content.subscribe('blog', {
      orderByChild: 'featured',
      equalTo: true,
      populate: [
        {
          field: 'category'
        },
        {
          field: 'mainImg'
        }
      ]
     }, (error, content) => {
      if (error) {
        console.error(error);
      }

      console.log('Blog Data', content);
      this.blogsData = Object.keys(content).map(key => content[key]);

    });
  }

}
