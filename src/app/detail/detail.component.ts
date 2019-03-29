import {Component} from '@angular/core';
import {Store,State} from "@ngrx/store";
import {Observable, from} from "rxjs";
import {User} from "../_models";
import * as userLogins from '../_actions/userActions';
import {UserState, getLogin} from '../_reducers'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector:"box-detail",
    templateUrl:'./detail.component.html',
    styleUrls:['./detail.component.css']
})
export class DetailComponent{
    dataUser:any=[]
    constructor(private _store:Store<UserState>,private router:Router){
        this._store.select(getLogin).subscribe(item=>{
             this.dataUser = item;
             console.log(item)
        });
    }
    logout = ()=>{
        this._store.dispatch(new userLogins.LogoutLoginAction);
        this.router.navigate(['/login']);
    }
}