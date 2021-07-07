import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import {catchError, map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // category: Category[];

  private JSONUrl = '../../assets/data/category.json'
  // private baseURL = 'http://localhost:8100'

  constructor(private http: HttpClient) { 
  }

  public getCategoryJSON(): Observable<Category[]> { 

        return this.http.get<GetResponseCategory>(this.JSONUrl).pipe(
          map( res => res.categories))
  }
}

interface GetResponseCategory {
  categories: Category[];
}

 



