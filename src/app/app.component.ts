import { Component } from '@angular/core';
import { ApiService } from 'src/app/apiHelper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-learning-example';
  year = new Date().getFullYear();
  newsArticlesInfo = this.newsArticles.getNewsArticles();

  constructor(private newsArticles: ApiService) {}
}
