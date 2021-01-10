import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";
import { OverlayComponent } from "./overlay/overlay.component";
import { ResponseButtonsComponent } from "./overlay/response-buttons/response-buttons.component";
import { CommonModule } from "@angular/common";
import { ChangeResponseService } from "./overlay/response-buttons/select-response.service";
import { SceneButtonsComponent } from "./overlay/scene-buttons/scene-buttons.component";
import { ChangeSceneService } from "./overlay/scene-buttons/change-scene.service";
import { MainComponent } from './main/main.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EndComponent } from './end/end.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    ResponseButtonsComponent,
    SceneButtonsComponent,
    MainComponent,
    IntroductionComponent,
    EndComponent,
    CreditsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [ChangeResponseService, ChangeSceneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
