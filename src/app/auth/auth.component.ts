import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth'
import auth = firebase.auth;
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.angularFireAuth.signInWithPopup(provider)
      .then(() => {
        this.ngZone.run(() => {
          this.router.navigate(['todo']);
        })
      }).catch((error) => {
        window.alert(error)
      })
  }


}
