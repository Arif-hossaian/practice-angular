import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostSerive {
  #url = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private httpClient: HttpClient) {}

  createPost(data: any) {
    return this.httpClient.post(this.#url, data);
  }
}
