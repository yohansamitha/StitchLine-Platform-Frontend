import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import CustomerDTO from "../dto/CustomerDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public register(dto: CustomerDTO): Observable<any> {
    return this.http.post(this.baseURL + '/user', {
      email: dto.email,
      name: dto.name,
      address: dto.address,
      mobile: dto.mobile,
      username: dto.username,
      password: dto.password,
      nic: dto.nic,
      employeeNumber: dto.employeeNumber,
      post: dto.post,
    });
  }

  login(email: string, password: string) {
    return this.http.get(this.baseURL + '/user', {
      headers: {email, password}
    })

  }
}
