import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServiceService } from '../Services/share-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myForm = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl(),
    age: new FormControl()
  })
  constructor( private route: Router,
    private service: ShareServiceService
    ) { 
      // this.service.print();
      console.log(this.service.data)
    }

  ngOnInit(): void {
  }

  Nom: string|undefined;
  goToDetails(){
    this.route.navigate(['/profil/details'])
  }

  goToView(){
    this.route.navigate([`/profil/view/${this.Nom}`])
  }

  add(f: NgForm){
    let data = f.value;
    console.log(data)
  }

  print(){
    console.log(this.myForm);
  }
 
}
