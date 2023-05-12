import { Component } from '@angular/core';
import {Detail} from '../../Detail'
import { DETAILS} from '../../data'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  details:Detail[] = DETAILS
}
