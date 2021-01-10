import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreditsComponent } from "./credits/credits.component";
import { EndComponent } from "./end/end.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "", component: IntroductionComponent },
  { path: "main", component: MainComponent },
  { path: "end", component: EndComponent },
  { path: "credits", component: CreditsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
