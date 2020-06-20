import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';// 追加
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';// 追加
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ComposerModule } from './composer/composer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// 追加
    AngularFireAuthModule,// 追加
    NgbModule,
    FormsModule,
    SharedModule,
    LoginModule,
    HomeModule,
    ComposerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
