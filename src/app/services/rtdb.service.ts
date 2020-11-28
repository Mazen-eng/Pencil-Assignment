import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RtdbService {
  usersRef: any;
  lastUserID: any;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fStore: AngularFirestore
  ) {
    //indicating the database's path
    this.usersRef = db.database.ref('/users');
  }

  //sets lastUserID variable with the uID of the current user
  setUserID(userIdID: String) {
    this.lastUserID = userIdID;
  }

  //writing to the firebase database using userID is key and postBody is value
  async setPostBody(postBody: any) {
    const user = this.lastUserID;
    console.log(
      'Inside the setbody from service the id is',
      user,
      'Data is',
      postBody
    );
    this.usersRef.child(user).set(postBody);
  }
}
