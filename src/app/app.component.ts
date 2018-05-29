import {Component} from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GRPC-Web-Demo';
  itunes: object;
  found: boolean;

  constructor(private searchService: SearchService) {
  }

  doSearch(term: string) {
    this.searchService.search(term)
      .then(res => {
        this.itunes = res;
        this.found = true;
      }, err => {
        console.error(err);
      });
  }
}
