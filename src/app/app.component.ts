import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carousel1';
  images = [
    {
      imageSrc: 'https://www.the-sun.com/wp-content/uploads/sites/6/2022/09/iphone-15-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1',
      imageAlt: 'img1',
    },
    {
      imageSrc: 'https://macmagazine.com.br/wp-content/uploads/2017/12/22-macbook-touch.jpg',
      imageAlt: 'img2',
    },
    {
      imageSrc: 'https://nl.letsgodigital.org/uploads/2020/01/galaxy-z-flip.jpg',
      imageAlt: 'img3',
    },
    {
      imageSrc: 'https://th.bing.com/th/id/OIP.bOQJgPGUeB2QYwcZz3_3HwHaEK?pid=ImgDet&rs=1',
      imageAlt: 'img4',
    },
  ]
}
