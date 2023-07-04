import { Component, OnInit } from '@angular/core';
import { ShareData } from '../shared/share-data.service';

@Component({
  selector: 'app-accordian-component',
  templateUrl: './accordian-component.component.html',
  styleUrls: ['./accordian-component.component.css']
})
export class AccordianComponentComponent implements OnInit {
  accoArray : [] = []
constructor(private dataServe : ShareData){}
  ngOnInit(): void {
    this.dataServe.dataSub.subscribe((param : any)=>{
      this.accoArray = param;
    })
  }
}
