import { Component, HostListener, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit{
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  title = "nursing-sim";

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = Math.round(this.screenWidth*.5625)
  }
  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = Math.round(this.screenWidth*.5625)
  }
}
