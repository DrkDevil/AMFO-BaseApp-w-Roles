import { Injectable } from '@angular/core';
// Router is used to redirect after signing a uset out.
import { Router } from '@angular/router';
// Firebase and Modules --------------------------------------------------------
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
   AngularFirestore,
   AngularFirestoreDocument
 } from '@angular/fire/firestore';
// Rxjs (Control Flow) ---------------------------------------------------------
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// Import User Model for document calidation -----------------------------------
import { User } from './user.model';
// -----------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AuthService {
    // Database Record (user document)
    // NOTE: Defined as a Observable because data is in realtime
    user$: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ){
     // Get the auth state, then fetch the Firestore user document or return null
     this.user$ = this.afAuth.authState.pipe(
       switchMap(user => {
         // If the user is logged In
         if(user) {
           return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          // If the user is logged Out
          return of(null);
        }
      })
    );
  }

  // Create lognin method
  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    // Creates a pop up login
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);

  }

  // Create logout method
  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
  }

  private updateUserData(user) {
    this.router.navigate(['/home']);
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    // Define data payload you want to save.
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    // NOTE: Calling set is a destructive function.
    //       If there is an exisiting document in this place it will replace it.
    //       Avoid this by using Merge command. This will retain the data.
    return userRef.set(data, { merge: true })
  }

}
