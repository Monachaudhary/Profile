import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  myData: string[][]=[
    ['Name','Manu Chaudhary'],
    ['DOB','12/11/2002'],
    ['Education', 'B.Tech(2024)'],
    ['Interests','Eating'],
  ];
  aboutMe: string[]=[
    ' Hi, I’m Manu Chaudhary—a tech enthusiast with a passion for building solutions that matter. From lines of code to impactful social initiatives, my journey is fueled by curiosity and a drive to create meaningful change.',
    'Collaboration is my superpower, and I thrive in environments where big ideas meet bold execution. From leading projects to mentoring others, I’m all about fostering growth and driving change.',
    'Fueled by purpose and powered by community, I’m here to connect, create, and contribute to a better future—one innovative solution at a time.'
  ];
  constructor(){}

}
