import { Component,OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
  educationList:Education[]=[
   
    {
      institute :'Uttarakhand Technical University',
      course:'B.Tech',
      duration:'2020-2024',
      score:'80%'
      },
      {
        institute :'Central Board of Secondary Education',
        course:'SSC',
        duration:'2019-2020',
        score:'91%'
        },

  ];
  construtor(){}
  ngOnInit(): void {
    
  }

}
