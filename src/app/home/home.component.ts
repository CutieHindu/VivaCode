import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServiceService } from '../Services/share-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // myForm = new FormGroup({
  //   fName: new FormControl(),
  //   lName: new FormControl(),
  //   age: new FormControl()
  // })
  @Input() hind = "hi"
  myForm: any;
  num: any
  constructor( private route: Router,
    private service: ShareServiceService,
    private formbuilder: FormBuilder,
    ) { 
      // this.service.print();
      console.log(this.service.data)

      this.myForm = formbuilder.group({
        fName: ['', [Validators.required, Validators.minLength(3)]],
        lName: ['', Validators.required],
        age: [Validators.required],
        email: ['', [Validators.required, Validators.email]],
        items: this.formbuilder.array([
          this.formbuilder.group({
            id:['1'],
            title: ['title1']
          }),
          this.formbuilder.group({
            id:['2'],
            title: ['title2']
          })
        ]),
      inputs: this.formbuilder.array([
        this.formbuilder.group({
          id:['1'],
        })
      ])
    })

    }

  ngOnInit() {
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
    console.log(this.myForm.value);
  }

  get fname(){
    return this.myForm.fName;
  }

  get lname(){
    return this.myForm.lName;
  }

  get age(){
    return this.myForm.age;
  }

  get email(){
    return this.myForm.email;
  }

  get items(){
    return this.myForm.get('items') 
  }

  get inputs(){
    return this.myForm.get('inputs') as FormArray
  }

  addNewItem(){
    let newInput = this.formbuilder.group({
      id:['']
    })
    this.items.push(newInput);
  }
 
  Delete(i: any,){
    this.items.removeAt(i);
  }

   
  DeleteInput(i: any,){
    this.inputs.removeAt(i);
  }
  
  addNewInput(){
    let newInput = this.formbuilder.group({
      id:['']
    })
    this.inputs.push(newInput);
  }
}
