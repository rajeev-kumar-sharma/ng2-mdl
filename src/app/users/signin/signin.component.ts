import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
declare let componentHandler: any; // need to use external in angular2? Ok no pb, but declare it before like that

@Component({
  selector: `ngconf-login`,
  templateUrl : `app/users/signin/signin.component.html`, 
  styleUrls: ['app/users/signin/signin.component.css'],
  directives: [ROUTER_DIRECTIVES, NgForm],
  providers: []
})
export /**
 * LoginComponent
 */
class SigninComponent {
  constructor() {
    
  }
}