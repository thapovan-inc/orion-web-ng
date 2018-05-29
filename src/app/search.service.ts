import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiRoot = 'https://itunes.apple.com/search';

  constructor(private httpService: HttpService) {
  }

  search(term: string) {
    const promise = new Promise(
      (resolve, reject) => {
        const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        this.httpService.get(apiUrl)
          .then(
            res => {
              resolve(res);
            },
            err => {
              reject(err);
            }
          );
      });
    return promise;
  }
}
