import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor(private http: HttpClient) { }
  
  private table name: string= "users.json";
  
//Store data to Firebase Realtime Database
  
  createUser (user: any) (
  
  return this.http.post(environment.apiUrl + this.table_name, user);
  
  }
