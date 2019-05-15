import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {ShoplistComponent} from './shoplist/shoplist.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ShoplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
