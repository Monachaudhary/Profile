import { Component } from '@angular/core';
import { Projects } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects :Projects[]=[
    {
      title : 'Leaf diagnosis application for farmers',
      technologies:'Python, TensorFlow, Keras, MatPlotlib, Numpy',
      description : [
         'Spearheaded the application of cutting-edge deep learning techniques, including Convolutional Neural Networks (CNNs), by harnessing TensorFlow and Keras. This resulted in a robust model for precise and accurate plant disease detection from uploaded leaf images.',
        ' Pioneered a comprehensive analysis of leaf characteristics, leveraging advanced techniques such as feature extraction and dimensionality reduction. This approach, combined with a detailed fitment matrix, offers a deep understanding of diseases and their impact on crops.'
      ]

    },
    {
      title : 'Simulation of Electric circuit',
      technologies:'HTML, CSS, JS, JSPlumb, Plotly, JQuery',
      description : [
       
        'Engineered a robust system using JsPlumb for precise and reliable connections between electrical components. Not just drag-and-drop, but a faulttolerant architecture.',
        'Facilitated seamless wire routing, navigating even complex circuit designs effortlessly. The system ensures optimal wire paths, enhancing overall design efficiency.'
      
      ]

    },
    {
      title : 'House Price prediction',
      technologies:'Python, scikit-learn, Pandas, NumPy, Matplotlib',
      description : [
        'Developed a machine learning model to predict house prices based on features like location, size, and amenities.',
        'Utilized regression algorithms to train the model, achieving a high accuracy rate in predicting market prices.'
      ]

    },
    {
      title : 'Tic-Tac-Toe game',
      technologies:'Java',
      description : [
        'Leveraged strong proficiency in Java programming to create a modular and maintainable codebase, adhering to object-oriented programming principles.',
        'Demonstrated exceptional problem-solving skills through the implementation of efficient algorithms. Specifically, adeptly crafted logic to handle intricategame dynamics, including win conditions and player turns.'
      ]

    },

  ]

}
