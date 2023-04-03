import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './MyComponent/nav-bar/nav-bar.component';
import { TestComponent } from './MyComponent/test/test.component';
import { FormsModule } from '@angular/forms';
import { PlayButtonComponent } from './MyComponent/play-button/play-button.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { ShowResultsComponent } from './MyComponent/show-results/show-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TestComponent,
    PlayButtonComponent,
    FooterComponent,
    ShowResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
