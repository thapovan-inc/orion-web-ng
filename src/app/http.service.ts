import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(apiUrl: string) {

    this.sendRequestGRPC(apiUrl);

    const promise = new Promise((resolve, reject) => {

      this.httpClient.get(apiUrl)
        .toPromise()
        .then(
          res => {
            this.sendResponseGRPC(res);
            resolve(res);
          },
          msg => {
            reject(msg);
          });
    });
    return promise;
  }

  sendRequestGRPC(request: string) {
    // send request information to GRPC
    // TODO - try to collect header information
  }

  sendResponseGRPC(response: any) {
    // send response data to GRPC
    // TODO - try to collect header information
  }
}
