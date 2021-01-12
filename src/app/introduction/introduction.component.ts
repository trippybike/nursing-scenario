import { HostListener } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VgApiService } from "@videogular/ngx-videogular/core";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
})
export class IntroductionComponent implements OnInit {
  videoSource: string;
  beginPlaying: boolean;
  api: VgApiService;
  overlayHidden: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.videoSource = "./../assets/videos/OL.mp4"; //disable for electron build
    this.beginPlaying = false;
    this.overlayHidden = false;
  }

  onPlayerReady(api: VgApiService):void {
    this.api = api;
  }
  playVideo(): void {
    this.overlayHidden = true;
    this.api.getMediaById('introVideo').play();
    const subs = this.api.getMediaById('introVideo').subscriptions.ended.subscribe(() => {
      subs.unsubscribe();
      this.router.navigate(['/main']);
    });
  }
}
