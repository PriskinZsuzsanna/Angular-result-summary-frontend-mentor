import { Component, Input } from '@angular/core';
import {Detail} from '../../Detail'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() detail: Detail;
  @Input() color: Detail
}
