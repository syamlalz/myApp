import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class   implements OnInit {

  public title: string;
  public message: string;

  constructor() { }

  ngOnInit() {
  }

}