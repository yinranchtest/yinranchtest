import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

interface Data {
    // Define your object properties here, for example:
    id: number;
    url: string;
}
@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatInputModule
    ],
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
    data: Data[] = [];
    data2: Data[] = [
    {id:1, url: 'assets/images/gallery/yinranch_gallery-1.jpg'},
    {id:2, url: 'assets/images/gallery/yinranch_gallery-2.jpg'},
    {id:3, url: 'assets/images/gallery/yinranch_gallery-3.jpg'},
    {id:4, url: 'assets/images/gallery/yinranch_gallery-4.jpg'},
    {id:5, url: 'assets/images/gallery/yinranch_gallery-5.jpg'},
    {id:6, url: 'assets/images/gallery/yinranch_gallery-6.jpg'},
    {id:7, url: 'assets/images/gallery/yinranch_gallery-7.jpg'},
    {id:8, url: 'assets/images/gallery/yinranch_gallery-8.jpg'},
    {id:1, url: 'assets/images/gallery/yinranch_gallery-1.jpg'},
    {id:2, url: 'assets/images/gallery/yinranch_gallery-2.jpg'},
    {id:3, url: 'assets/images/gallery/yinranch_gallery-3.jpg'},
    {id:4, url: 'assets/images/gallery/yinranch_gallery-4.jpg'},
    {id:5, url: 'assets/images/gallery/yinranch_gallery-5.jpg'},
    {id:6, url: 'assets/images/gallery/yinranch_gallery-6.jpg'},
    {id:7, url: 'assets/images/gallery/yinranch_gallery-7.jpg'},
    {id:8, url: 'assets/images/gallery/yinranch_gallery-8.jpg'},
  ];

  page = 0;
  size = 4;

  ngOnInit() {
    this.getData({pageIndex: this.page, pageSize: this.size});
  }

  getData(event: {pageIndex: number, pageSize: number}) {
    let index=0,
    startingIndex=event.pageIndex * event.pageSize,
    endingIndex=startingIndex + event.pageSize;

    this.data = this.data2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }
}