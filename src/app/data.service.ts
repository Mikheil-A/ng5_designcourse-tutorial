import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TestService} from './test.service';

@Injectable()
export class DataService {
  // private goals = new BehaviorSubject<any>([
  //   'The initial goal',
  //   'Another silly life goal',
  //   'again, another goal'
  // ]);
  // goal = this.goals.asObservable();

  // constructor(private test: TestService) {
  //   test.testMethod();
  // }

  // changeGoal(goal) {
  //   this.goals.next(goal);
  // }


  _goals: string[] = [
    'The initial goal',
    'Another silly life goal',
    'again, another goal',
    'Another simple goal'
  ];
}
