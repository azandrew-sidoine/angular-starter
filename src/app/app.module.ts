import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCardContainerComponent } from './app-card-container/app-card-container.component';
import { AppCardComponent } from './app-card/app-card.component';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppCardTitleComponent } from './app-card-title/app-card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AppCardComponent,
    AppCardContainerComponent,
    AppCardTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
