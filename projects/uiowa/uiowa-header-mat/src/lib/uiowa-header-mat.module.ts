import { NgModule } from "@angular/core";
import { UiowaHeaderMatComponent } from "./uiowa-header-mat/uiowa-header-mat.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from "@angular/material";
import { UiowaBrandingComponent } from "./uiowa-branding/uiowa-branding.component";
import { UiowaAppNavBarComponent } from "./uiowa-app-nav-bar/uiowa-app-nav-bar.component";
import { UiowaNavComponent } from './uiowa-nav/uiowa-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    UiowaHeaderMatComponent,
    UiowaBrandingComponent,
    UiowaAppNavBarComponent,
    UiowaNavComponent
  ],
  imports: [BrowserAnimationsModule, MatToolbarModule, LayoutModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [UiowaHeaderMatComponent, MatToolbarModule]
})
export class UiowaHeaderMatModule {}
