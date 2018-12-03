import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutPageService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLayoutData() {
    return this.httpClient.get<Array<any>>('/assets/data/layout.json');
  }
}
