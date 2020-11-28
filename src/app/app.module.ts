import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { RtdbService } from './services/rtdb.service';
//Added Import
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

import { KatexModule } from 'ng-katex';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    FormsModule,
    AngularFirestoreModule,
    KatexModule
     //Added
  ],
  providers: [RtdbService,AngularFirestore,EditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
