import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.route.params.subscribe(res => {
      console.log(res.id);
      this.id = res.id;
    });
  }

  ngOnInit() {
    // this._data.goal.subscribe(res => (this.goals = res));
    this.goals = this._data._goals;
  }

  sendMeHome() {
    this.router.navigate(['']);
    // this.router.navigate(['about', '1516']);
    // return false;
  }
}
