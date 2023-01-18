import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @ContentChild('leftTmp')
  leftTemplate: TemplateRef<void>;

  @ContentChild('centralTmp')
  centralTemplate: TemplateRef<void>;

  @ContentChild('rightTmp')
  rightTemplate: TemplateRef<void>;
}
