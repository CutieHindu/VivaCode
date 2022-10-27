import { Injectable } from '@angular/core';

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
}
