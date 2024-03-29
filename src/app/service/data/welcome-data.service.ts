import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldService() {
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("hello world backend service");
  }

  executeServiceWithPathVariable(name: string) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

}
