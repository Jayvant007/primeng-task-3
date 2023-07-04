import { Component, ViewChild } from '@angular/core';
import { DataShare } from '../shared/data.model';
import { ShareData } from '../shared/share-data.service';

@Component({
  selector: 'app-accordian-form',
  templateUrl: './accordian-form.component.html',
  styleUrls: ['./accordian-form.component.css']
})
export class AccordianFormComponent {
  @ViewChild('accoForm') formObj :any;
  constructor(private dataServ : ShareData){}
onSubmit(){
let newObj = new DataShare(this.formObj.value.accoTitle,this.formObj.value.accoDesc);
    this.dataServ.addNewObj(newObj);
    this.formObj.reset()
}


}
