import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { App } from '../interface/app';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userPayload:any;

  public selectedApp: App = {} as App;
  apiBaseAddress = environment.apiBaseAddress;
  constructor(private http: HttpClient, private route:Router) { }

  getApp() {
    return this.http.get<App[]>(this.apiBaseAddress + 'api/App');
  }
  register(model:any){
    return this.http.post<any>(this.apiBaseAddress +'api/Auth/register',model);
}
login(user:any){
  return this.http.post<any>(this.apiBaseAddress +'api/Auth',user).pipe(
    map((response:any)=>{
      const user= response;
      if(user){
        localStorage.setItem('token',JSON.stringify(user));
        
      }
    })
  )
}


 
storeToken(tokenValue:any){
  localStorage.setItem('token',tokenValue)
 }
 getToken(){
  return localStorage.getItem('token')
 }
 isLoggedIn():boolean{
  return !!localStorage.getItem('token')
 }
 signOut()
 {
  localStorage.clear();
  this.route.navigate(['login'])
 }

 
 getFullNameFromToken(){
  if(this.userPayload)
  {
    return this.userPayload.email;

  }

 }
 getRoleFromToken(){
  if(this.userPayload)
  {
    return this.userPayload.role;
  }
 }
}

