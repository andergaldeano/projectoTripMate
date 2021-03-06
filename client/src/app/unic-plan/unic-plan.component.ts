import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanService} from '../services/plan.service';
import {PlaceService} from '../services/place.service';
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
  allUsersGoingToPlan;
  urlTxatxi= "http://localhost:3000";
  isHeGoing;
  urlInfo;


  constructor(
    public auth:AuthService,
    private router:Router,
    private route:ActivatedRoute,
    private planService: PlanService,
    private placeService: PlaceService

  ) {
    this.user = this.auth.getUser()
      .subscribe(user => {  this.user = user;})
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlanDetails(params['id'])
      this.urlInfo = this.placeService.getUrlInfo()
    });
  }

// GET THE PLANS DETAILS, PLAN'S COMMENTS AND ALL THE PEOPLE JOINED

  getPlanDetails(id) {
    this.planService.getUnicPlan(id)
    .subscribe((plan) => {
    this.unicplan = plan;
    this.planService.isHeGoing(this.unicplan._id, this.user._id).subscribe((a)=>{
      this.isHeGoing = a
    })
    this.planService.findComments(this.unicplan._id).subscribe((com)=>{
      this.allComments =  com
    });
    this.planService.findUsers(this.unicplan._id).subscribe((au)=>{
      this.allUsersGoingToPlan = au
    })
    });
  }

// CREATE NEW COMMENT ON THIS SPECIFIC PLAN


  newComment(){
    if(this.comment != ""){
      this.planService.sendMyComment(this.comment, this.unicplan._id, this.user._id)
      .subscribe(()=> {
        this.planService.findComments(this.unicplan._id).subscribe((com)=>{
          this.allComments =  com
        });
         this.comment = "";
    });
    }else{
      console.log("ponte un comentario locooo");
    }
  }

// CREATE NEW CONEXION THIS USER - THIS PLAN

  newConexion(){
    this.planService.sendThisConexion(this.user._id, this.unicplan._id)
      .subscribe(()=> {
        (plan) => console.log(plan)
            this.planService.findUsers(this.unicplan._id).subscribe((au)=>{
            this.allUsersGoingToPlan = au
            })
            this.planService.isHeGoing(this.unicplan._id, this.user._id).subscribe((a)=>{
              this.isHeGoing = a
            })
      });
  }

  goBack(){
    this.router.navigate([`holiday/${this.urlInfo.title}/${this.urlInfo.placeName}/${this.urlInfo.otherLat}/${this.urlInfo.otherLng}`]);
  }

}
