import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name = "nobody";
  welcomeMessageFromService:string = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {
    this.name = this.route.snapshot.params['name'];
    // console.log(this.route.snapshot.params['name' ]);
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.executeHelloWorldService());
    this.service.executeServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    // console.log(response.message);
  }

  handleErrorResponse(error: any) {
    // console.log(error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
