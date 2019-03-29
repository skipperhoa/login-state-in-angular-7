import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Store,State} from "@ngrx/store";
import {Observable, from} from "rxjs";
import {User} from "../_models";
import * as userLogins from '../_actions/userActions';
import {UserState, getLogin} from '../_reducers'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector:'box-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent{
    title = "Box Login"
    profileForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });
    isCheckLogin:boolean = false;
    dataLogin = [
        {
            "id":1,
            "name":"NGUYEN THANH HOA",
            "email":"nguyenthanhhoa.com@gmail.com",
            "password":"12345678",
            "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
        },
        {
            "id":2,
            "name":"SKIPPERHOA",
            "email":"skipperhoa2013@gmail.com",
            "password":"hoa123",
            "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
        }
    ]  
   
    constructor(private _store:Store<UserState>,private router:Router){}
    onSubmit() {
      //  console.warn(this.profileForm.value['email']);
       this.dataLogin.filter(item=>{
           if(item.email==this.profileForm.value['email'] && item.password==this.profileForm.value['password']){
               this.isCheckLogin=true;
               this._store.dispatch(new userLogins.CheckLoginAction({
                   id:item.id,
                   name:item.name,
                   email:item.email,
                   password:item.password,
                   remember_token:item.remember_token
                }));
           }
       });
       if(this.isCheckLogin){
            console.log("Success login");
            this.router.navigate(['/detail']);
       }
       else{
           console.log("Fail login");
       }
    }

}