import { NgModule } from "@angular/core";
import { UiowaHeaderMatComponent } from "./uiowa-header-mat/uiowa-header-mat.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material";
import { UiowaBrandingComponent } from "./uiowa-branding/uiowa-branding.component";
import { UiowaAppNavBarComponent } from "./uiowa-app-nav-bar/uiowa-app-nav-bar.component";

@NgModule({
  declarations: [
    UiowaHeaderMatComponent,
    UiowaBrandingComponent,
    UiowaAppNavBarComponent
  ],
  imports: [BrowserAnimationsModule, MatToolbarModule],
  exports: [UiowaHeaderMatComponent, MatToolbarModule]
})
export class UiowaHeaderMatModule {}
