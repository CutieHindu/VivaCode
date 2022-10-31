import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data = {
    name: 'hicham',
    last: 'amaarour',
    country: 'morocco'
  }
  constructor() { }

  isAdmin = true;

  print(){
    console.log(this.data.name);
    console.log(this.data.last);
    console.log(this.data.country);
  }

  testObservable(){
    return new Observable((observe)=>
    {
      setTimeout(()=>{
        observe.next('one')
      },2000)
      
      setTimeout(()=>{
        observe.next('two')
      },3000)

      setTimeout(()=>{
        observe.next('three')
      },4000)

      setTimeout(()=>{
        observe.next('four')
      },10000)

      // setTimeout(()=>{
      //   observe.complete()
      // },5000)

    })
  }
}
