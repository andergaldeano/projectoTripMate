import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanService} from '../services/plan.service';

@Component({
  selector: 'app-unic-plan',
  templateUrl: './unic-plan.component.html',
  styleUrls: ['./unic-plan.component.css']
})
export class UnicPlanComponent implements OnInit {


  unicplan;

  constructor(private router:Router,
  private route:ActivatedRoute,
  private planService: PlanService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlanDetails(params['id'])
    });
  }

  getPlanDetails(id) {
    this.planService.getUnicPlan(id)
    .subscribe((plan) => {
    this.unicplan = plan;
    });
  }

}
