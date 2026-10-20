import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      company: 'Centific Global Technologies Pvt. Ltd.',
      location: 'Hyderabad',
      period: 'Oct 2021 – Sep 2026',
      role: 'Senior Frontend Developer',
      description:
        'Built enterprise web interfaces, interactive dashboards and reusable Angular components. Worked on API integration, data visualization and responsive user experiences.'
    },
    {
      company: 'WeSquare India Pvt. Ltd.',
      location: 'Hyderabad',
      period: 'Sep 2018 – Aug 2020',
      role: 'Senior UI Engineer',
      description:
        'Developed web interfaces, converted design concepts into working pages and improved responsive layouts and reusable UI components.'
    },
    {
      company: 'ICONMA Professional Services & Solutions',
      location: 'Hyderabad',
      period: 'Mar 2016 – Aug 2018',
      role: 'UI/UX Designer',
      description:
        'Worked on user-friendly layouts and interface design, translating design requirements into clear and usable web experiences.'
    },
    {
      company: 'MXC Solutions India Pvt. Ltd.',
      location: 'Kakinada',
      period: 'Mar 2015 – Mar 2016',
      role: 'UI Developer',
      description:
        'Developed and maintained website interfaces, styled pages and helped ensure consistent layouts across screen sizes.'
    },
    {
      company: 'Prominere Software Solutions',
      location: 'Kakinada',
      period: 'Jul 2012 – Mar 2015',
      role: 'Web Developer',
      description:
        'Built and maintained web pages, implemented website layouts and developed a strong foundation in web development.'
    }
  ];
}
