import { Component, Input } from '@angular/core';
import { SceneModel } from '../../scenes/scenes-model';
import { ChangeResponseService } from './select-response.service';

@Component({
  selector: 'app-response-buttons',
  templateUrl: './response-buttons.component.html',
  providers: []
})
export class ResponseButtonsComponent {
  @Input() currentScene: SceneModel;

  constructor(public changeResponseService: ChangeResponseService) { }

  changeVideo(src: string): void {
    console.log(src);
    this.changeResponseService.onResponseButtonClick(src);
  }



}
