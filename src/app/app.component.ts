import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VivaCode';
  
  firstname= 'ahlam'

  

  p= {
    id: "3",
    movie: 'hi'
  }

  printData(event: any){
    console.log(event)
  }
}
