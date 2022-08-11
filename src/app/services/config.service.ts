import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  _baseUrl :string | undefined;

  constructor() {
    this._baseUrl="http://www.omdbapi.com";  
  }

  getBaseUrl() { return this._baseUrl; }

}
