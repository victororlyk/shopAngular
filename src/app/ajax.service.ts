import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) {
  }

  getGoods() {
    return this.http.get(`https://demo8421975.mockable.io/products`);
  }
}
