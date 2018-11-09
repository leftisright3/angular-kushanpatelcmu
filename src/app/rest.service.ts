import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {

  private globalHeaders = new Headers({'Content-Type': 'application/json'});
  private url = 'localhost:4200/api';

  constructor(private http: Http) {
  }

  private handleError(error: Response): Promise<any> {
    return Promise.reject(error.text() || error);
  }

  createNewDeckAndDraw(drawCount: number): Promise<any> {
    const newDeck = `${this.url}/new/draw?count=${drawCount}`;
    return this.http.get(newDeck).toPromise().then( resp => {
      return resp.json() as any;
    });
  }


}
