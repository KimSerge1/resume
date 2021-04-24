import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  @Input() public template: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {
  }

}
