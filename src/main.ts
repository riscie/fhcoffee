import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';


if (environment.production) {
    enableProdMode();
}


bootstrap(AppComponent, [
    FIREBASE_PROVIDERS,
    // Initialize Firebase app
    defaultFirebase({
        apiKey: "AIzaSyByUidqfCSYI2rn_xIvmS7kMR8QqzXsriw",
        authDomain: "fh-coffee.firebaseapp.com",
        databaseURL: "https://fh-coffee.firebaseio.com",
        storageBucket: "fh-coffee.appspot.com",
    }),
    // Authentication Configuration
    firebaseAuthConfig({
        provider: AuthProviders.Password,
        method: AuthMethods.Password
    })
]);