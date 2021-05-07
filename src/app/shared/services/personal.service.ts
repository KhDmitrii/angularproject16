import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personal } from '../interfaces/personal.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  constructor(public http: HttpClient) {}

  getPersonals(): Promise<Personal[]> {
    return this.http
      .get<Personal[]>(`${environment.apiUrl}/personal`)
      .toPromise();
  }
  getPersonal(id: number): Promise<Personal> {
    return this.http
      .get<Personal>(`${environment.apiUrl}/personal/${id}`)
      .toPromise();
  }
  postPersonal(data: Personal): Promise<Personal> {
    return this.http
      .post<Personal>(`${environment.apiUrl}/personal`, data)
      .toPromise();
  }
  putPersonal(id: number, data: Personal): Promise<Personal> {
    return this.http
      .put<Personal>(`${environment.apiUrl}/personal/${id}`, data)
      .toPromise();
  }
  deletePersonal(id: number): Promise<Personal> {
    return this.http
      .delete<Personal>(`${environment.apiUrl}/personal/${id}`)
      .toPromise();
  }
}
