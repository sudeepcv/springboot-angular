import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  welcomeMessage=''

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
  }

  serviceTest(){
    // console.log("inside serviceTest");
    this.service.testServiceExecution().subscribe(
      response => this.handleSuccessfulResponse(response),
       error => this.handleSuccessfulResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    // console.log("response:",response.message)
    this.welcomeMessage=response.message
  }
  handleErrorResponse(error){
    this.welcomeMessage=error.error.message

  }

}
