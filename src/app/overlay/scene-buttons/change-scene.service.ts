import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeSceneService {
  invokeSceneChange = new EventEmitter<any>();

  onSceneButtonClick(sceneId: number): void {
    this.invokeSceneChange.emit(sceneId);
  }
}
