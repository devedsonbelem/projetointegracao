import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

const URL = "http://localhost:7000/api"

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {

   }

   public create(user: Users){
    return this.http.post<Users>(`${URL}/users`, user);
   }

   public login(user: Users){
    return this.http.post<Users>(`${URL}/login`, user);
   }
}
