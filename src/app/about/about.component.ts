import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareServiceService } from '../Services/share-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnDestroy {
  @Input("name") myName:any
  @Input("profile") p:any
  @Output() myEvent = new EventEmitter();
  num: any; 
  ob: Subscription
  constructor(private service: ShareServiceService) {
    this.ob= this.service.testObservable().subscribe(k => this.num=k)
   }

  ngOnInit(): void {
  }
  
  print(){
    this.myEvent.emit("hind");
  }

  ngOnDestroy(): void {
   this.ob.unsubscribe()
  }

}
