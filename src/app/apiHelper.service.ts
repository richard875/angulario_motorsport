import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsArticle } from 'src/models/newsArticles';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiEndPoint = '/assets/news.json';

  getNewsArticles() {
    return this.http.get<NewsArticle[]>(this.apiEndPoint);
  }
}
