import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private userLogin = new BehaviorSubject([] as object);
  shareUserLogin = this.userLogin.asObservable()
  constructor() { }

  sharingUserLogin(userLogin:object){
    this.userLogin.next(userLogin)
  }
}
