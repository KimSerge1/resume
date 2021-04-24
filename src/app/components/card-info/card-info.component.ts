import { Component, OnInit } from '@angular/core';
import { faAt, faUserFriends  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  public emailIcon: any = faAt;

  public vkIcon: any = faUserFriends;

  constructor() { }

  ngOnInit(): void {
  }

}
