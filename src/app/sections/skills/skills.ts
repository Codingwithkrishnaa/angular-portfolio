import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

skillCategories = [
  {
    title: 'Frontend Engineering',
    description: 'Developing responsive, high-performance web applications using Angular, TypeScript and modern frontend technologies.',
    image: '/images/tools/frontend-engineering.png',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'SCSS']
  },
  {
    title: 'UI Engineering',
    description: 'Creating accessible, responsive interfaces with reusable components and consistent design systems.',
    image: '/images/tools/ui-ux-design.png',
    skills: ['Responsive UI', 'Tailwind CSS', 'Angular Material', 'Bootstrap', 'Accessibility']
  },
  {
    title: 'Architecture & APIs',
    description: 'Integrating REST APIs, managing application state and building reliable data flows across applications.',
    image: '/images/tools/architecture-apis.png',
    skills: ['REST APIs', 'NgRx', 'HTTP Interceptors', 'Authentication', 'State Management']
  },
  {
    title: 'Tools & Delivery',
    description: 'Streamlining development workflows with version control, automated pipelines and unit testing.',
    image: '/images/tools/tools-delivery.png',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'CI/CD', 'Unit Testing']
  }
];

}
