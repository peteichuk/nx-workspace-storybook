import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@nx-workspace-name/shared';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
