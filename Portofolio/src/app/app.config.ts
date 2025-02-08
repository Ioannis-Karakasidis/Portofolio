import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"portofolio-5f7d1","appId":"1:218608370104:web:561fd062934d5ac9e38f4d","storageBucket":"portofolio-5f7d1.firebasestorage.app","apiKey":"AIzaSyCZdvhiVtJ0FciCSnGXbHaD_D7B52olkJk","authDomain":"portofolio-5f7d1.firebaseapp.com","messagingSenderId":"218608370104"})), provideFirestore(() => getFirestore())]
};
