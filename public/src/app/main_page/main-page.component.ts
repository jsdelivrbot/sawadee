import {Component} from "@angular/core";
import {ICarouselConfig, AnimationConfig} from "../angular4-carousel"

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public imageSources: string[] = [
    'https://www.chabadthailand.co.il/wp-content/uploads/2017/04/slider7-high.jpg',
    'https://images.haarets.co.il/image/upload/w_679,h_384,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/v1514363195/1.5264942.4101423884.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 4000,
    stopAutoplayMinWidth: 768
  };

  public screenWidth: number = window.screen.width;

  constructor() {

  }
}
