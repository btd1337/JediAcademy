import { Student } from './../../../student/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  jedisName: string[] = ['Yoda', 'Mace Windu', 'Qui-Gon Jinn', 'Obi-Wan Kenobi', 'Anakin Skywalker', 'Luke Skywalker'];
  jedis: Student[];

  constructor() {
    this.jedis = new Array<Student>();
    this.createJedis();
  }

  ngOnInit() {
  }

  createJedis() {
    for (const name of this.jedisName) {
      const jedi = {name: name, isJedi: true, temple: 'Coruscant'};
      this.jedis.push(jedi);
    }
  }

}
