import {ChangeDetectionStrategy, ChangeDetectorRef, Component, input, InputSignal, OnChanges, SimpleChanges} from '@angular/core';
import {
  RobotSettings,
  OperatorScreen,
  OperatorScreenPresenter,
  OperatorScreenPresenterAPI
} from '@universal-robots/contribution-api';


@Component({
  templateUrl: './my-os1.component.html',
  styleUrls: ['./my-os1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class MyOs1Component implements OperatorScreenPresenter {


}
