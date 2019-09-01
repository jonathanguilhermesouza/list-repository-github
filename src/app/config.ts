

import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
  })
export class GlobalConfig {
  readonly API_URL:string = 'https://localhost:44396/api';
  readonly API_GITHUB_URL:string = 'https://api.github.com';
  IS_AUTHENTICATED: boolean = false;
}