import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareServiceService } from '../Services/share-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnDestroy {
  @Input("name") myName:any
  num: any;
  ob: Subscription
  constructor(private service: ShareServiceService) {
    this.ob= this.service.testObservable().subscribe(k => this.num=k)
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   this.ob.unsubscribe()
  }

}
