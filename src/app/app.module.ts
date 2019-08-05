// Angular Core Modules --------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Modules -------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase Modules ------------------------------------------------------------
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Inject Firebase Configuration -----------------------------------------------
import { environment } from '../environments/environment';

// Core Components and Modules -------------------------------------------------
import { CoreComponent } from './modules/core/core.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';

// Static Login/Welcome Component  ---------------------------------------------
import { HomeComponent } from './views/home/home.component';

// Secure Components -----------------------------------------------------------
import { UserProfileComponent } from './views/user-profile/user-profile.component';

// Material Components ---------------------------------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CoreComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Initialize Firebase -----------------------------------------------------
    AngularFireModule.initializeApp(environment.firebase),
    // Firebase Modules --------------------------------------------------------
    AngularFirestoreModule,
    AngularFireAuthModule,
    // Material Modules --------------------------------------------------------
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
