import { Component } from '@angular/core';
import { Skills } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:Skills[]=[
    {
      name:'Angular, Angular Material',
      level:'Expert',
      rating:85,
    },
    {
      name:'HTML, CSS, JS',
      level:'Expert',
      rating:95,
    },
    {
      name:'Java',
      level:'Expert',
      rating:90,
    },
    {
      name:'C Programming',
      level:'Intermediate',
      rating:70,
    },
    {
      name:'React',
      level:'Intermediate',
      rating:70,
    },
    {
      name:'Python',
      level:'Expert',
      rating:80,
    },
    {
      name:'MYSQL',
      level:'Expert',
      rating:85,
    },
    {
      name:'TensorFlow, Keras, Matplotlib, Numpy',
      level:'Intermediate',
      rating:85,
    },
    
    {
      name:'Git, Docker, Figma',
      level:'Expert',
      rating:85,
    },
   
  ]

}
