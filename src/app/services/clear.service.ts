import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClearService {
  private _clearSearch = false;
  constructor() {}

  get clearSearch(): boolean {
    return this._clearSearch;
  }

  set clearSearch(value: boolean) {
    this._clearSearch = value;
  }
}
