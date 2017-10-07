import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanService} from '../services/plan.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-unic-plan',
  templateUrl: './unic-plan.component.html',
  styleUrls: ['./unic-plan.component.css']
})
export class UnicPlanComponent implements OnInit {

  comment: any;
  user:any;
  unicplan;
  allComments;

  constructor(
    public auth:AuthService,
    private router:Router,
    private route:ActivatedRoute,
    private planService: PlanService
  ) {
    this.user = this.auth.getUser()
      .subscribe(user => {  this.user = user;})
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlanDetails(params['id'])
    });
  }

  getPlanDetails(id) {
    this.planService.getUnicPlan(id)
    .subscribe((plan) => {
    this.unicplan = plan;

    this.allComments = this.planService.findComments(this.unicplan._id)
    });
  }

  newComment(){
    console.log("vamos a hacer un comentario" )
    if(this.comment != ""){

      this.planService.sendMyComment(this.comment, this.unicplan._id, this.user.username)
      .subscribe(()=> {
        (plan) => console.log(plan)
      });
    } else{
      console.log("ponte un comentario locooo");
    }
  }

}
