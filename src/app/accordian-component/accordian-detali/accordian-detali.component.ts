import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian-detali',
  templateUrl: './accordian-detali.component.html',
  styleUrls: ['./accordian-detali.component.css']
})
export class AccordianDetaliComponent {
@Input() acoObj : any
}
