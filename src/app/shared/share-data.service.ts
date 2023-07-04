import {Injectable} from "@angular/core"
import { DataShare } from "./data.model";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn : 'root'
})
export class ShareData{
   private acoList : any [] = [
        new DataShare('Heading One','Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio aut dolor perspiciatis, reprehenderit repudiandae necessitatibus. Nostrum voluptatem ad modi quae qui, beatae maxime aperiam!'),
        new DataShare('Heading Two','Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio aut dolor perspiciatis, reprehenderit repudiandae necessitatibus. Nostrum voluptatem ad modi quae qui, beatae maxime aperiam!'),
        new DataShare('Heading Three','Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio aut dolor perspiciatis, reprehenderit repudiandae necessitatibus. Nostrum voluptatem ad modi quae qui, beatae maxime aperiam!')
    ];

    dataSub = new BehaviorSubject(this.acoList.slice())
    addNewObj(obj:any){
        this.acoList.push(obj);
        this.dataSub.next(this.acoList.slice())
    }

}