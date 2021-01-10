import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { ResponseModel, SceneModel } from "../scenes/scenes-model";

@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
})
export class OverlayComponent implements OnInit {
  needsResponse: boolean;
  correct: boolean;
  needsRetry: boolean;
  sceneOver: boolean;
  overlayTitle = "Situation:";
  overlayText: string;

  initialized = false;

  private _currentResponse: ResponseModel;
  private _currentScene: SceneModel;
  private _hasResponded: boolean;

  @Input()
  set currentScene(scene: SceneModel) {
    console.log("Current scene changed to: ", scene);
    this._currentScene = scene;
    this.overlayTitle = "Situation:";
    this.overlayText = scene.situation;
  }
  get currentScene(): SceneModel {
    return this._currentScene;
  }

  @Input()
  set hasResponded(responded: boolean) {
    if (this.initialized) {
      this._hasResponded = responded;
      if (responded) {
        return;
      } else {
        this.overlayText = this.currentScene.situation;
        this.overlayTitle = "Situation: ";
      }
    }
  }
  get hasResponded(): boolean {
    return this._hasResponded;
  }

  @Input() currentSceneId: number;

  @Input()
  set currentResponse(response: ResponseModel) {
    console.log("Current response changed to: ", response);
    if (this.hasResponded) {
      this.correct = response.correct;
      this.needsRetry = !this.correct;
      if (this.correct) {
        this.overlayTitle = "Well done!";
      } else if (!this.correct) {
        this.overlayTitle = "Incorrect Response!";
      }
      this.overlayText = response.codeMessage;
    }
    this._currentResponse = response;
  }
  get currentResponse(): ResponseModel {
    console.log("Got current response: ", this._currentResponse);
    return this._currentResponse;
  }

  continueButton: any;

  @Output() passNextScene = new EventEmitter<string>();

  scenes: any;

  constructor() {
    this.needsRetry = false;
    this.needsResponse = true;
  }

  ngOnInit(): void {
    console.log(this.scenes);
    this.initialized = true;
  }
}
