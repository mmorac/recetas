import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SuperComponent } from './componentes/super/super.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({ declarations: [
        AppComponent,
        InicioComponent,
        SuperComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [
        HttpClientModule,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
