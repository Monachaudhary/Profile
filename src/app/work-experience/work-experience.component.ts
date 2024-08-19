import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[]=[
    {
      role:'Web Developer',
      company:'Indian Institute of Technology',
      duration:'june 2023 - August 2023',
      description:[
        `Developed a responsive web application using Angular,
enhancing user experience and functionality.`,
        'Worked on different technologies such as (Javascript, JSPlumb, Plotly, JQuery)'
      ]
    },
    {
      role:'Contributor',
      company:'Hacktoberfest',
      duration:'October 2023- November 2023',
      description:[
        `Received digital badges and a tree planting certificate for 
successfully merging pull requests in open-source projects during Hacktoberfest.`,
      ]
    },
    {
      role:'Academic Research',
      company:'Roorkee Institute of Technology',
      duration:'january 2023 - March 2023',
      description:[
        'Developed a cutting-edge simulation-based electrical circuit using JavaScript',
        'Worked on different technologies such as (Javascript, JSPlumb, Plotly, JQuery)'
      ]
    },
    {
      role:'Web Developement Intern',
      company:'CodeClause',
      duration:'November 2022 - Feburary 2023',
      description:[
        `Developed a responsive web application using Angular,
enhancing user experience and functionality`,
        'Integrated APIs to streamline data processing, resulting in a more efficient workflow.'
      ]
    },
    {
      role:'Contributor',
      company:'GDSC(Google Developer Student Club)',
      duration:'November 2022 - December 2022',
      description:[
        `Recognized as a top 25 contributor in the prestigious 
"Autumn of Code" by GDSC IGDTUW`
      ]
    },
   
    

  ]
  ngOnInit(): void {
    
  }


}
