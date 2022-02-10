import { Component, OnInit } from '@angular/core';

import { List, list } from '../list';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  // test = 'test';
  obj: List;

  constructor() { }

  ngOnInit(): void {
  }
}
