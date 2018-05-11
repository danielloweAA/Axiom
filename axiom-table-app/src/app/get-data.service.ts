import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private api = 'https://demo7244264.mockable.io/matrix';

  constructor(
    private http: HttpClient
  ) { }

  public getData() {
    return this.http.get(this.api)
      .pipe(
        map((res: Response) => {
        return res;
      })
    );
  }
}
