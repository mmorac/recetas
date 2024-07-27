import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SuperComponent } from './componentes/super/super.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { getStorage, provideStorage } from '@angular/fire/storage';



@NgModule({ declarations: [
        AppComponent,
        InicioComponent,
        SuperComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ], 
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        //provideFirebaseApp(() => initializeApp({"projectId":"recetas-64cc6","appId":"1:462659342125:web:0ec89ab7750ab785650da4","storageBucket":"recetas-64cc6.appspot.com","apiKey":"AIzaSyC1AbY-rPeu2EIcJjQZIlAgj3hQ7b8YTWo","authDomain":"recetas-64cc6.firebaseapp.com","messagingSenderId":"462659342125","measurementId":"G-9LH20CQLJK"})),
        provideStorage(() => getStorage())
    ] })
export class AppModule { }
