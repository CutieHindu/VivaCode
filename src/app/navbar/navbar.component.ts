import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../Services/share-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: ShareServiceService) { }

  ngOnInit(): void {
  }

  isAdmin = this.service.isAdmin;

}
