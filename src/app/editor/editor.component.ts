import { Component } from '@angular/core';
import * as MediumEditor from 'medium-editor';
import { AppComponent } from '../app.component';
import { RtdbService } from '../services/rtdb.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'editor-component',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  readPostRef: any;
  values = '';

  constructor(
    private realTimeTyping: RtdbService,
    private appComp: AppComponent,
    private db: AngularFireDatabase
  ) {
    //initializes the userID method in the app.component
    this.appComp.getUserID();
  }
  //creates the mediumEditor's instance and tells it the name of the class to be implemented on
  //also it calls the readPostBody method hoping that it will retrieve the data from the firebase at the beginning
  ngAfterViewInit() {
    var editor = new MediumEditor('.editable', {
      placeholder: false,
    });
    this.readPostBody();
  }
  //listens to the change of the value in the children of users/uID
  readPostBody() {
    this.readPostRef = this.db.database.ref(
      '/users/' + this.realTimeTyping.lastUserID
    );
    this.readPostRef.on('value', (DataSnapshot: any) => {
      const data = DataSnapshot.val();
      this.values = data;
    });
  }

  //implementation of the onKey method triggered by keyUp event to save the data each time the user types
  onKey(event: any) {
    this.realTimeTyping.setPostBody(
      document.getElementById('writingArea')?.innerHTML
    );
  }
}
