import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  constructor(private _http: HttpClient) {}

  public getBlobImage(url: string): Observable<Blob> {
    return this._http.get(url, { responseType: 'blob' }).pipe();
  }

  public imageUrlToBase64(blob: Blob): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
      reader.onerror = reject;
    });
  }
}
