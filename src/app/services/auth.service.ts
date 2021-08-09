import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class AuthService {

        private loginUrl = "http://localhost:8080/login"

        constructor(private http: HttpClient) {
            
        }

  }