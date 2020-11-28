import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { of } from 'rxjs';
import { RtdbService } from './services/rtdb.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userCredential!: firebase.User | null;
  title = "Pencil assignment Eng/Mohamed Zoweil";

  constructor(private afAuth: AngularFireAuth, public auth: AngularFireAuth, public rtdbo: RtdbService) {

  }
//the login method using googleAuthentication
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);

  }
  async getUserID(){

   return this.getUser(await this.afAuth.currentUser);

  }
//the get user method checks for a parameter 'user' if it is a firebase user
// then it sets the uID variable in the rtdb service with the current user's uid
  getUser(user: firebase.User | null ) {
    if(user){
      this.rtdbo.setUserID(user.uid);
    return user.uid;
    }else{
      return of(null);
    }
  }
  //logout method
  logout() {
    this.auth.signOut();
  }
}
