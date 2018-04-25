import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
       items.push(i);
    }
    return items;
  }

}
