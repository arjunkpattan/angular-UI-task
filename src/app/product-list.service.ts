import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  mobileNo: string;
  otp: object;
  token: object;

  constructor(private http: HttpClient) { }

  getOTP(body) {
    return this.http.post(environment.product_api + '/api/v1/user/get_otp/', body);
  }

  getAccessToken(body) {
    return this.http.post(environment.product_api + '/api/v1/user/get_access_token/', body);
  }

  getProductionList(token) {
    return this.http.get(environment.product_api + '/api/v1/fish/', { headers: new HttpHeaders().set('Authorization', token) });
  }
}
