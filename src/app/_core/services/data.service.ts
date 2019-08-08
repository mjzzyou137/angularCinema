import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

let urlApi=""; 
// tokken
const httpOptions={
  headers:new HttpHeaders({
    "Content-Type":"application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataService { 
  constructor(private http:HttpClient) {
    // urlApi:"http://svcy2.myclass.vn/api/"
    urlApi = environment.urlApi
   }
  public get(uri:string):Observable<any>{
    return this.http.get(urlApi + uri,httpOptions).pipe(
      tap( 
        () => { 
        }, 
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  public delete(uri:string):Observable<any>{
    return this.http.delete(urlApi + uri,httpOptions).pipe(
      tap( 
        () => { 
        }, 
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  public post(uri:string,data?:Object):Observable<any>{
    return this.http.post(urlApi + uri,data,httpOptions).pipe(
      tap( 
        () => { 
        }, 
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  
  handleErr(err){ 
    return err;
  }
}
